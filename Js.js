const state = [1, 2, 3, 4, 5, 6]


const a = state.slice(0, 3).concat(state.slice(3 + 1, state.length - 1))
 console.log(a)
