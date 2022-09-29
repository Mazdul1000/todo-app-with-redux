import { COLORCHANGED, STATUSCHANGED } from "./actionTypes"

export const colorChanged = (color, changeType) => {
  
    return{
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}

export const statusChanged = (todoType) => {
    return {
        type: STATUSCHANGED,
        payload: todoType
    }
} 