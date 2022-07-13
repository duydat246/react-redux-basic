// export const actionAddTodo = {
//     type: 'todoList/addTodo',
//     payload: { id: 4, name: "learn Angular", completed: true, priority: 'High' }
// }

export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}

export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}
// action creator => function

