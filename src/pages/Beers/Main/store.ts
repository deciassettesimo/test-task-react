import { types, Instance, flow, getSnapshot } from 'mobx-state-tree';

import apiPunk, { Beer } from 'api/punk';

import { captions, breadCrumbs } from './constants';

const List = types.array(Beer);

interface IList extends Instance<typeof List> {}

const Params = types.model({
  page: types.number,
  finished: types.boolean,
});

const Data = types.model({
  list: types.maybeNull(List),
  params: Params,
});

export const Store = types
  .model({
    mounted: types.boolean,
    loading: types.boolean,
    lazyLoading: types.boolean,
    error: types.maybeNull(types.frozen()),
    data: Data,
  })

  .volatile(() => ({
    root: {
      store: null,
    },
  }))

  .views((self) => ({
    get captions() {
      let error = captions.errors.default;
      if (self.error?.response?.status === 404) error = captions.errors[404];

      return { ...captions, error };
    },

    get breadCrumbs() {
      return breadCrumbs;
    },

    get disabled() {
      return !self.mounted || self.loading;
    },

    get list() {
      if (!self.data.list) return [];
      return [...getSnapshot(self.data.list)];
    },

    get items() {
      return this.list.map((item: any) => ({
        id: item.id.toString(),
        data: { ...item, captions: this.captions },
      }));
    },

    get requestParams() {
      return {
        page: self.data.params.page,
        per_page: 40,
      };
    },
  }))

  .actions((self) => ({
    getList: flow(function* f() {
      const response = yield apiPunk.beers.getList(self.requestParams);
      if (!response?.length) self.data.params.finished = true;
      self.data.list = [...self.list, ...response] as IList;
    }),
  }))

  .actions((self) => ({
    getData: flow(function* f() {
      try {
        self.loading = true;
        yield self.getList();
      } catch (e: any) {
        self.error = e;
      } finally {
        self.loading = false;
      }
    }),

    lazyLoad: flow(function* async() {
      if (self.data.params.finished) return;

      try {
        self.data.params.page += 1;
        self.lazyLoading = true;
        yield self.getList();
      } catch (e: any) {
        self.error = e;
      } finally {
        self.lazyLoading = false;
      }
    }),
  }))

  .actions((self) => ({
    mount: () => {
      if (self.mounted) return;
      self.getData();
      self.mounted = true;
    },

    unmount: () => {
      self.mounted = false;
      self.loading = false;
      self.lazyLoading = false;
      self.error = null;
      self.data.list = null;
      self.data.params = { page: 1, finished: false };
    },
  }));

export function create() {
  return Store.create({
    mounted: false,
    loading: false,
    lazyLoading: false,
    error: null,
    data: { params: { page: 1, finished: false } },
  });
}

export interface IStore extends Instance<typeof Store> {}
