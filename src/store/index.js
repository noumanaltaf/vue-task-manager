
import { createStore } from 'vuex'

const state = {
    tasks: [
        {
            "id": 8528,
            "title": "Task 8528",
            "description": "This is a description for task 8528."
        },
        {
            "id": 5973,
            "title": "Task 5973",
            "description": "This is a description for task 5973."
        },
        {
            "id": 7142,
            "title": "Task 7142",
            "description": "This is a description for task 7142."
        },
        {
            "id": 2319,
            "title": "Task 2319",
            "description": "This is a description for task 2319."
        },
        {
            "id": 9605,
            "title": "Task 9605",
            "description": "This is a description for task 9605."
        },
        {
            "id": 1407,
            "title": "Task 1407",
            "description": "This is a description for task 1407."
        },
        {
            "id": 3851,
            "title": "Task 3851",
            "description": "This is a description for task 3851."
        },
        {
            "id": 6294,
            "title": "Task 6294",
            "description": "This is a description for task 6294."
        },
        {
            "id": 9170,
            "title": "Task 9170",
            "description": "This is a description for task 9170."
        },
        {
            "id": 4726,
            "title": "Task 4726",
            "description": "This is a description for task 4726."
        }
    ]
};

const mutations = {
    ADD_TASK(state, task) {
        state.tasks.push(task);
    },
    REMOVE_TASK(state, id) {
        const index = state.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            state.tasks.splice(index, 1);
        }
    },
    TOGGLE_TASK(state, id) {
        const task = state.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }
};

const actions = {
    addTask({ commit }, task) {
        commit('ADD_TASK', { id: Math.random() * Date.now(), completed: false, ...task });
    },
    removeTask({ commit }, id) {
        commit('REMOVE_TASK', id);
    },
    toggleTask({ commit }, id) {
        commit('TOGGLE_TASK', id);
    }
};

export default createStore({
    state,
    mutations,
    actions
});