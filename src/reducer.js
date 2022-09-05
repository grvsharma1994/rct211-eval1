//import the action types here from the actionTypes.js to be used in the reducer function

//Complete the reducer function here
import {EMAIL,PASSWORD} from "./actionTypes";
const reducer = (oldState,action) => {
    const {type,payload} = action;
    switch(type){
        case EMAIL:
            let tempEmail = oldState.email + payload
            return  {...oldState,email : tempEmail};
            case PASSWORD:
             return  {...oldState,email : tempPassword}; 
             default:
                 return oldState;
    }
};

export { reducer };
