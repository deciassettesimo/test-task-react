import { IStore } from './store';

export type ApplicationProps = Readonly<{
  store: IStore;
}>;

export type ContainerStore = { root: { store: any } };

export type Containers = Record<string, any>;
