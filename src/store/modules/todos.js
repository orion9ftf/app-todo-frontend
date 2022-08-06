import axios from 'axios';

const apiUrl = "http://localhost:3000/api/v1/todos";

const state = {
    todos: []
};

const getters = {
    allTodos: (state) => state.todos
};

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(apiUrl);
        commit('setTodos', response.data);
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(apiUrl + `/${id}`);
        commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
        const response = await axios.put(apiUrl + `/${updatedTodo.id}`, updatedTodo);
        commit('setUpdatedTodo', response.data);
    }
};

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),

    removeTodo: (state, id) => (state.todos = state.todos.filter(todo => todo.id !== id)),

    setUpdatedTodo: (state, updatedTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
        if (index !== -1) {
            state.todos.splice(index, 1, updatedTodo);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}

