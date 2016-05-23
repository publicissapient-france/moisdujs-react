import { ADD_SLOT } from 'constants/ActionTypes';

export const addSlot = (column, name) => {
    return {
        type: ADD_SLOT,
        slot: {column, name}
    }
};