export function user(state={userName:""},action){
    switch(action.type){
        case "GETUSERINFO":
            return {...this.state,...{userName:"jiehong"}};
        default:
            return state

    }
}