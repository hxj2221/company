import axios from 'axios'
export function request(config) {

    const myrequest = axios.create({
        baseURL: "http://lmq.switchyl.online/",
        timeout: 3000

    })
    return myrequest(config)
}
