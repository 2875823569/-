export function tv(state=[1], action){
    switch(action.type){
        case "INITTV":
            return [...action.preload];
        case "TYPE":
            return state.filter((item) => item.name === action.preload);
        default:
            return state
    }
}