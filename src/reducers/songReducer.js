import {actionType} from "../Helper";
import actions from "../actions";

// redux shape
const initState = {
    rawSongList:[],
    id: undefined
}

export const songReducer = (state = initState, action)  =>{
    console.log('reducer')
    switch (action.type){
        case actionType.FETCH_ALL_SONGS:
            // Copy state, update state, return new state
            return {...state, rawSongList: action.payload}
        case actionType.SELECT_SONG:
            return {...state, id: action.payload}
        default:
            return state
    }
}