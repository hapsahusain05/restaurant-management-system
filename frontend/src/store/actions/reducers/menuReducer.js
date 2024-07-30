// action types
const SET_MENU_ITEMS = 'SET_MENU_ITEMS';
const SELECT_MENU_ITEM = 'SELECT_MENU_ITEM';
const TOGGLE_MENU = 'TOGGLE_MENU';

// Initial state
const initialState = {
  menuItems: [],
  selectedMenuItem: null,
  isMenuOpen: false,
};

// Reducer function
const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_ITEMS:
      return {
        ...state,
        menuItems: action.payload,
      };
      
    case SELECT_MENU_ITEM:
      return {
        ...state,
        selectedMenuItem: action.payload,
      };
      
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
      
    default:
      return state;
  }
};

export default menuReducer;

// Action creators
export const setMenuItems = (items) => ({
  type: SET_MENU_ITEMS,
  payload: items,
});

export const selectMenuItem = (item) => ({
  type: SELECT_MENU_ITEM,
  payload: item,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

