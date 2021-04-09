import {InferActionsTypes} from "../store/redux-store";


let User:any;
const UserData = {
    isAuth:false,
    email: '',
    password:'',
    user:User,
}
export const userReducer = (state = UserData, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case 'USER/AUTH': {
            return {

                ...state,
                isAuth: action.payload
            };
        }
        case 'USER/DATA': {
            return {
                ...state, user: action.payload

            };
        }
        default:
            return state;
    }
}


export const actions = {
    setIsAuth: (payload: boolean) => ({type:'USER/AUTH',payload} as const),
    setUser: (payload:any) => ({type:'USER/DATA', payload} as const),
}
export type InitialStateType = typeof UserData
type ActionsType = InferActionsTypes<typeof actions>