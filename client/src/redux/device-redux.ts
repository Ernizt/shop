import {BaseThunkType, InferActionsTypes} from "../store/redux-store";
import {Brands, Devices, Types, TypesUser} from "../types/types";
import {updateObjectInArray} from "../utils/object-helpers";

const DeviseTypes = {
      types:[] as Array<Types>,
      brands: []as Array<Brands>,
    devices: [] as Array<Devices>,
    DeviceT: '',
    TypeT:''
    }
export const deviceReducer = (state = DeviseTypes, action:ActionsType): InitialStateType => {
    switch (action.type) {
        case "DEVICE/TYPE":
            return {
                ...state, TypeT: action.payload
            }
        case "DEVICE/TYPES":
            return { ...state, types: updateObjectInArray(state.types, action.payload)}
            ;
        case "DEVICE/BRANDS":
            return { ...state, brands: updateObjectInArray(state.brands, action.payload)}
                ;
            case "DEVICE/DEVICES":
            return { ...state, devices: updateObjectInArray(state.devices, action.payload)}
                ;
        default:
            return state;
    }
}


export const actions = {
    Actions: (payload: string) => ({type:'DEVICE/TYPE', payload} as const),
    setTypes: (payload: Types) => ({type:'DEVICE/TYPES', payload} as const),
    setBrands: (payload: Brands) => ({type:'DEVICE/BRANDS', payload} as const),
    setDevices: (payload: Brands) => ({type:'DEVICE/DEVICES', payload} as const),
}
export const  setSelectedType = (types:Types )  =>  (dispatch:any) => {
        dispatch(actions.Actions(types.name));
}
export const  setSelectedBrand = (brands:Brands ) => {
    return brands;
}
export const selectedType = (type:Types ) => {
      setSelectedType(type);
   }
/*
export const selectedBrand = (Brand:Brands) => {
    return Brand;
}*/
export type InitialStateType = typeof DeviseTypes
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>