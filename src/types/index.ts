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
}