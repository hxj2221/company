import { request } from '../request.js'


export function getleave(uid) {
    return request({
        url: 'api/qj/qj',
        method: "get",
        params: {
            uid:uid
        }
    })
}

export function addleave(j_add) {
    return request({
        url: 'api/qj/add',
        method: "post",
        data:j_add
    })
}