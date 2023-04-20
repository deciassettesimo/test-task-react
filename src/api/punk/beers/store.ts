import { CancelTokenSource } from 'axios';
import { types, flow } from 'mobx-state-tree';

import { getCancelToken } from 'api/axios';

import requests from './requests';
import { ApiGetListRequestParams } from './types';

const cancel = {
  getList: null as CancelTokenSource,
};

export const Store = types.model().actions(() => ({
  getList: flow(function* request(params: ApiGetListRequestParams) {
    cancel.getList = getCancelToken(cancel.getList);
    const response = yield requests.getList(params, cancel.getList);
    return response?.data;
  }),
}));

export const store = Store.create();

export default store;
