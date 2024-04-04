import {ADD_TO_CART} from '../constants'


const initialState = {
    CardData : []
}

// We dont need to import anything here actions are passed internally.

export function CardItems(state = initialState, action){
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cardData:action.data
            }
            break;
            default:
                return state
    }
} 