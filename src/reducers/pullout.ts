// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_PULLOUT, CLOSE_PULLOUT } from '../actions/actionNames';

export interface IState {
    title: string;
    isVisible: boolean;
}

// export const reducer = combineReducers<IState>({
//     isExpanded: (state = false, action) => {
//         const {
//             type,
//             title,
//         } = action;
//         console.log('action');
//         switch (type) {
//             case TOGGLE_PULLOUT:
//                 return {
//                     title,
//                 };
//             default: return state;
//         }
//     },
// });

export const reducer = combineReducers<IState>({
    title: (state = 'Default title', action) => {
        const {
            type,
            title,
        } = action;
        console.log('action');
        switch (type) {
            case TOGGLE_PULLOUT:
                return title;
            default: return state;
        }
    },
    isVisible: (state = false, action) => {
        const {
            type,
        } = action;
        switch (type) {
            case TOGGLE_PULLOUT:
                return !state;
            case CLOSE_PULLOUT:
                return false;
            default: return state;
        }
    },
});