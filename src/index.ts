//入口文件

import { AxiosRequestConfig } from './types'
import { buildURL } from '../helpers/url'
import {transformRequest} from '../helpers/data'
import {processHeaders} from '../helpers/headers'

import xhr from './xhr';

//定义axios方法

function axios(config:AxiosRequestConfig): void{
    processConfig(config);
    xhr(config);
}

function processConfig(config:AxiosRequestConfig): void{
    config.url = transformUrl(config);
    config.headers = transformHeaders(config);
    config.data = transformRequestData(config);
}

function transformUrl(config:AxiosRequestConfig): string{
    const {url,params} = config;
    return buildURL(url,params);
}

function transformRequestData(config:AxiosRequestConfig):any{
    return transformRequest(config.data);
}

function transformHeaders(config:AxiosRequestConfig): any{
    const { headers = {} , data } = config;
    return processHeaders( headers , data );
}

export default axios;