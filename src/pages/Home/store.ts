import { types, Instance } from 'mobx-state-tree';

import { captions, menu } from './constants';

export const Store = types
  .model({
    mounted: types.boolean,
  })

  .volatile(() => ({
    root: {
      store: null,
    },
  }))

  .views(() => ({
    get captions() {
      return captions;
    },

    get menu() {
      return menu;
    },
  }))

  .actions((self) => ({
    mount: () => {
      if (self.mounted) return;
      self.mounted = true;
    },

    unmount: () => {
      self.mounted = false;
    },
  }));

export function create() {
  return Store.create({
    mounted: false,
  });
}

export interface IStore extends Instance<typeof Store> {}
