import { userActionsTypes } from '../actions/types';
const initalState = {
  user: {},
  posts: [],
  loading: false,
};

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case userActionsTypes.SIGNIN_ACTION:
      return {
        ...state,
        loading: true,
        user: action.payload,
        posts: [],
      };
    default: {
      return state;
    }
  }
}
