exports.incrementFunction=(state)=> {
    const skip = state.skip
    let maxstart = state.totalPages - state.totalPages%(state.skip)+1
    if (state.totalPages % state.skip === 0){
        maxstart = state.totalPages - state.skip+1
    }
    return (prevstate)=>({
        start: maxstart===prevstate.start ? maxstart : prevstate.start +prevstate.skip,
        end : prevstate.end +skip >= prevstate.totalPages ? prevstate.totalPages : prevstate.end +skip
    })
}



exports.decrementFunction = (state) => {
    const skip = state.skip
    let s = 1
    let firstend = state.totalPages < skip ?  state.totalPages : skip ;
    return (prevstate)=>({
        start : prevstate.start - skip <= s ? s : prevstate.start - skip,
        end : prevstate.end === firstend ? firstend :  prevstate.end%skip >0  ? prevstate.end - prevstate.end%skip : prevstate.end - skip
    })
}


exports.toFirst = (state)=>{
    return ({
        start: 1,
        end:state.totalPages < state.skip ? state.totalPages :state.skip
    })
}


exports.toLast = (state)=>{
    let maxstart = state.totalPages - state.totalPages%(state.skip)+1
    if (state.totalPages % state.skip === 0){
        maxstart = state.totalPages - state.skip+1
    }
    return {
        start:maxstart,
        end:state.totalPages
    }
}