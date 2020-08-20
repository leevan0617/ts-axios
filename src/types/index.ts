//公用类型定义文件

//定义限制method的类型

export type Method = 'get' | 'GET'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'post' | 'POST'
| 'put' | 'PUT'
| 'patch' | 'PATCH'


//定义axios请求配置接口

export interface AxiosRequestConfig {
    //请求地址（必选）
    url: string
    //请求方法（可选）
    method?: Method
    //post、patch等类型请求的数据（可选）
    data?: any
    //get、head等类型请求的数据（可选）
    params?: any
    //请求头配置对象
    headers?:any
}

//定义响应接口类型

export interface AxiosResponse {
    //服务端返回的数据
    data:any
    //HTTP状态码
    status:number
    //状态消息
    statusText:string
    //响应头
    headers:any
    //请求配置对象
    config:AxiosRequestConfig
    //request对象实例
    request:any
}

//定义Promise接口类型

export interface AxiosPromise extends Promise<AxiosResponse> {
    
} 