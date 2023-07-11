import {actionType} from "../Helper";

const initState = {

}

export const messageBarReducer = (state = initState, action) => dispatch =>{
    switch (action.type){
        // case actionType.FETCH_ALL_SONGS:
        //     return state
        // case actionType.SELECT_SONG:
        //     return state
        default:
            return state
    }
}