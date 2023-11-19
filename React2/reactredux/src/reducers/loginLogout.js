const auth = (state=0,action) =>{
    switch (action.type){
        case"LOG_IN":
            return state=1
        case"LOG_OUT":
            return state=0
        default:
            return state
    }
}
export default auth;