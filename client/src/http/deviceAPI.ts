import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type:any) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}


export const createBrand = async (brand:any) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createDevice = async (device:any) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevices = async () => {
    const {data} = await $host.get('api/device', )
    return data.rows;
}

export const fetchOneDevice = async (id: number) => {
    const {data} = await $host.get('api/device/' + id)
    console.log(data);
    return data
}/**/
