import React from 'react';
import { types, Instance } from 'mobx-state-tree';

import { routes } from 'application/routing';
import { navigation } from 'application/constants';

import { Containers, ContainerStore } from './types';

export const Store = types
  .model({
    mounted: types.boolean,
    loading: types.boolean,
    redirect: types.maybeNull(
      types.model({
        to: types.string,
        replace: types.maybeNull(types.boolean),
      }),
    ),
  })

  .volatile<{ containers: Containers }>(() => ({
    containers: {},
  }))

  .views(() => ({
    get routes() {
      return routes;
    },

    get navigation() {
      return navigation;
    },
  }))

  .actions((self) => ({
    mount: () => {
      if (self.mounted) return;
      self.mounted = true;
    },

    unmount: () => {
      self.mounted = false;
      self.loading = false;
      self.redirect = null;
    },

    setRedirect: (to: string, replace = false) => {
      self.redirect = { to, replace };
    },

    clearRedirect: () => {
      self.redirect = null;
    },
  }));

export const store = Store.create({
  mounted: false,
  loading: false,
  redirect: null,
});

export const StoreContext = React.createContext(store);

export const useStore = () => React.useContext(StoreContext);

export interface IStore extends Instance<typeof Store> {}

export function injectStore<T extends ContainerStore>(containerId: string, containerStore: T) {
  store.containers[containerId] = containerStore;
  containerStore.root.store = store;
}
