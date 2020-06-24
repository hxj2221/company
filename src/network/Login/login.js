import { request } from '../request.js'


export function getLogin(userNmae,password) {
    return request({

        url: 'api/login/login',
        method: "post",
        data: {
            g_sjh:userNmae,
            g_mm:password,
        }
    })
}