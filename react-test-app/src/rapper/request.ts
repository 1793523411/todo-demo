/* md5: 4f3ee366f56e2b410bd9e250e038dcc6 */
/* Rap仓库id: 275734 */
/* Rapper版本: 1.1.6-beta.0 */
/* eslint-disable */
/* tslint:disable */
// @ts-nocheck

/**
 * 本文件由 Rapper 同步 Rap 平台接口，自动生成，请勿修改
 * Rap仓库 地址: http://rap2.taobao.org/repository/editor?id=275734
 */

import * as commonLib from 'rap/runtime/commonLib'
import * as reduxLib from 'rap/runtime/reduxLib'
import {RequestTypes} from './redux'

export interface IModels {
  /**
   * 接口名：示例接口
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856705
   */
  'GET/example/1610954169180': {
    Req: {
      /**
       * 请求属性示例
       */
      foo?: string
    }
    Res: {
      /**
       * 字符串属性示例
       */
      string: string
      /**
       * 数字属性示例
       */
      number: number
      /**
       * 布尔属性示例
       */
      boolean: boolean
      /**
       * 正则属性示例
       */
      regexp: string
      /**
       * 函数属性示例
       */
      function: string
      /**
       * 数组属性示例
       */
      array: {
        /**
         * 数组元素示例
         */
        foo: number
        /**
         * 数组元素示例
         */
        bar: string
      }[]
      /**
       * 自定义数组元素示例
       */
      items: any[]
      /**
       * 对象属性示例
       */
      object: {
        /**
         * 对象属性示例
         */
        foo: number
        /**
         * 对象属性示例
         */
        bar: string
      }
      /**
       * 占位符示例
       */
      placeholder: string
    }
  }

  /**
   * 接口名：获取todo列表
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856717
   */
  'GET/todo/list': {
    Req: {}
    Res: {
      isOk: number
      errMsg: string
      data: {
        /**
         * 属性Id
         */
        id: number
        /**
         * 属性名称
         */
        name: string
      }[]
    }
  }

  /**
   * 接口名：删除todo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856723
   */
  'DELETE/todo': {
    Req: {
      id?: number
    }
    Res: {
      isOk: number
      errMsg: string
    }
  }

  /**
   * 接口名：添加todo
   * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856732
   */
  'PUT/todo': {
    Req: {
      name: string
    }
    Res: {
      isOk: number
      errMsg: string
    }
  }
}

type ResSelector<T> = T

export interface IResponseTypes {
  'GET/example/1610954169180': ResSelector<IModels['GET/example/1610954169180']['Res']>
  'GET/todo/list': ResSelector<IModels['GET/todo/list']['Res']>
  'DELETE/todo': ResSelector<IModels['DELETE/todo']['Res']>
  'PUT/todo': ResSelector<IModels['PUT/todo']['Res']>
}

export function createFetch(fetchConfig: commonLib.RequesterOption, extraConfig?: {fetchType?: commonLib.FetchType}) {
  if (!extraConfig || !extraConfig.fetchType) {
    console.warn(
      'Rapper Warning: createFetch API will be deprecated, if you want to customize fetch, please use overrideFetch instead, since new API guarantees better type consistency during frontend lifespan. See detail https://www.yuque.com/rap/rapper/overridefetch'
    )
  }
  const rapperFetch = commonLib.getRapperRequest(fetchConfig)
  const sendRapperFetch = (modelName: keyof typeof RequestTypes, requestParams: commonLib.IUserFetchParams) => {
    const {extra} = requestParams
    if (extra && extra.type === 'normal') {
      return rapperFetch(requestParams)
    } else {
      const action = {
        type: '$$RAPPER_REQUEST',
        payload: {...requestParams, modelName, types: RequestTypes[modelName]},
      }
      return reduxLib.dispatchAction(action, rapperFetch)
    }
  }

  return {
    /**
     * 接口名：示例接口
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856705
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/example/1610954169180': (req?: IModels['GET/example/1610954169180']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/example/1610954169180', {
        url: '/example/1610954169180',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/example/1610954169180']>
    },

    /**
     * 接口名：获取todo列表
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856717
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'GET/todo/list': (req?: IModels['GET/todo/list']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('GET/todo/list', {
        url: '/todo/list',
        method: 'GET',
        params: req,
        extra,
      }) as Promise<IResponseTypes['GET/todo/list']>
    },

    /**
     * 接口名：删除todo
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856723
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'DELETE/todo': (req?: IModels['DELETE/todo']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('DELETE/todo', {
        url: '/todo',
        method: 'DELETE',
        params: req,
        extra,
      }) as Promise<IResponseTypes['DELETE/todo']>
    },

    /**
     * 接口名：添加todo
     * Rap 地址: http://rap2.taobao.org/repository/editor?id=275734&mod=436018&itf=1856732
     * @param req 请求参数
     * @param extra 请求配置项
     */
    'PUT/todo': (req?: IModels['PUT/todo']['Req'], extra?: commonLib.IExtra) => {
      return sendRapperFetch('PUT/todo', {
        url: '/todo',
        method: 'PUT',
        params: req,
        extra,
      }) as Promise<IResponseTypes['PUT/todo']>
    },
  }
}
