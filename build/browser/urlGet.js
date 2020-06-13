﻿import type from '../type/type';
/**
 * 获得URL中GET请求的参数值
 * @param key {string} 参数
 * @param href {string} 网址，如果没有则默认选取当前网址
 * @returns {string | null} 如果有值返回字符串，否则返回 null
 */
export default function urlGet(key, href) {
    if (type(key) !== 'string') {
        console.error('@cpage/utils（urlGet方法参数错误）：key必须为字符串');
        return;
    }
    if (href && type(href) !== 'string') {
        console.error('@cpage/utils（urlGet方法参数错误）：href必须为字符串');
        return;
    }
    var querystr = href ? href.split("?") : window.location.href.split("?");
    if (querystr[1]) {
        var GETs = querystr[1].split("&");
        var obj_1 = {};
        GETs.forEach(function (item) {
            var _item = item.split("=");
            obj_1[_item[0]] = _item[1];
        });
        return obj_1[key];
    }
    return null;
}