import { CancelTokenSource } from 'axios';

import { getApiInstance } from '../instance';

import { urls } from './constants';
import { ApiGetListRequestParams } from './types';

function getList(params: ApiGetListRequestParams, cancel: CancelTokenSource) {
  return getApiInstance()({
    cancelToken: cancel.token,
    method: 'get',
    url: urls.getList,
    params,
  });
}

export default {
  getList,
};
