import {
  FETCH_UNIV_REQ,
  DELETE_PROGRAM_ITEM,
  FETCH_UNIV_SUCESS,
  SET_PROGRAM_ITEM,
  SET_SELECTED_ITEM,
  FETCH_BY_ID
} from "../actions";

export const initialstate = {
  loading: false,
  univList: [],
  selectedItems: [],
  studyPrograms: [],
  fetchedID:[],
};
export default function reducer (state = initialstate, action) {
  switch (action.type) {
    case FETCH_UNIV_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_UNIV_SUCESS:
      return {
        ...state,
        loading: false,
        univList: action.payload,
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        loading: true,
        selectedItems: action.payload,
      };
    case SET_PROGRAM_ITEM:
      return {
        ...state,
        loading: true,
        studyPrograms: [...state.studyPrograms, action.payload],
      };
    case DELETE_PROGRAM_ITEM:
      let removeProgram = state.studyPrograms.filter(
        (a) => a.studyPathId !== action.payload
      );
      return {
        ...state,
        studyPrograms: removeProgram,
      };
	  case FETCH_BY_ID:

		return {
		  ...state, 
		  fetchedID: action.payload,
  
		};

    case null:
      return state;

    default:
      return state;
  }
}
