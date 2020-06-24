import { request } from '../request.js'


export function getSign(uid) {
    return request({

        url: 'api/kq/dk',
        method: "post",
        data: {
            id:uid
        }
    })
}