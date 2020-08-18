//入口文件

import { AxiosRequestConfig } from './types'
import { buildURL } from '../helpers/url'

import xhr from './xhr';

//定义axios方法

function axios(config:AxiosRequestConfig): void{
    processConfig(config);
    xhr(config);
}

function processConfig(config:AxiosRequestConfig): void{
    config.url = transformUrl(config);
    console.log(config.url);
}

function transformUrl(config:AxiosRequestConfig): string{
    const {url,params} = config;
    return buildURL(url,params);
}

export default axios;