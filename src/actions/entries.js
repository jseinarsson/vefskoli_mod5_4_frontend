import * as api from '../api';

// Action Creators

// Get posts
export const getEntries = () => async (dispatch) => {
    try {
        const { data } = await api.fetchEntries();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

// Create post
export const createEntry = (entry) => async (dispatch) => {
    try {
        const { data } = await api.createEntry(entry);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}
