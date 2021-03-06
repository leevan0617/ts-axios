const toString = Object.prototype.toString

//判断是否时间对象
export function isDate(val:any):val is Date{
    return toString.call(val) === '[object Date]'
}

// //判断是否对象
// export function isObject(val:any):val is Object {
//     return val != null && typeof val === 'object'
// }

//判断是否是普通JSON对象

export function isPlainObject (val: any): val is Object {
    return toString.call(val) === '[object Object]'
}