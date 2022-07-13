const initialState = {
    filters: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: "learn react", completed: false, priority: 'Medium' },
        { id: 2, name: "learn redux", completed: true, priority: 'High' },
        { id: 3, name: "learn code", completed: false, priority: 'Low' },
    ]
}

const rootReducer = (state = initialState, action) => {
    console.log({state, action});
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        case 'filters/searchFilterChange':
            return{
                ...state,
                filters:{
                    ...state.filters,
                    search: action.payload
                }
            }

        default:
            return state;
    }
}

export default rootReducer