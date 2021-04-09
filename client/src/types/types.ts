export interface TypeUserOne {
    email:string|undefined,
    password:string|undefined
}
export interface TypesUser {
    isAuth:boolean,
    user:TypeUserOne
    }
export interface Types {
    id:number,
    name:string
}
export interface Brands {
       id:number,
       name:string,
}
export interface Devices {
    id:number,
    name:string,
    price:number,
    rating:number,
    img:string
}

export interface DeviseTypes  {
    types:Types[],
    brands:Brands[],
    devices: Devices[],
    DeviceT: string,
    TypeT:string
}