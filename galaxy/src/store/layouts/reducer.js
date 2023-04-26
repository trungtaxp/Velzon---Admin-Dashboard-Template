import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_LAYOUT_MODE,
  CHANGE_LAYOUT_WIDTH,
  CHANGE_LAYOUT_POSITION,
  CHANGE_TOPBAR_THEME,
  CHANGE_SIDEBAR_SIZE_TYPE,
  CHANGE_SIDEBAR_VIEW,
  RESET_VALUE,
  CHANGE_PRELOADER,
  CHANGE_BACKGROUND_IMAGE_TYPE
} from './actionType';

//constants
import {
  layoutTypes,
  leftSidebarTypes,
  layoutModeTypes,
  layoutWidthTypes,
  layoutPositionTypes,
  topbarThemeTypes,
  leftsidbarSizeTypes,
  leftSidebarViewTypes,
  leftSidebarImageTypes,
  preloaderTypes,
  backgroundImageTypes
} from "../../Components/constants/layout";

const INIT_STATE = {
  layoutType: layoutTypes.VERTICAL,
  leftSidebarType: leftSidebarTypes.DARK,
  layoutModeType: layoutModeTypes.DARKMODE,
  layoutWidthType: layoutWidthTypes.FLUID,
  layoutPositionType: layoutPositionTypes.FIXED,
  topbarThemeType: topbarThemeTypes.LIGHT,
  leftsidbarSizeType: leftsidbarSizeTypes.DEFAULT,
  leftSidebarViewType: leftSidebarViewTypes.DEFAULT,
  leftSidebarImageType: leftSidebarImageTypes.NONE,
  preloader: preloaderTypes.DISABLE,
  backgroundImageType: backgroundImageTypes.IMG3
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };

    case CHANGE_LAYOUT_MODE:
      return {
        ...state,
        layoutModeType: action.payload,
      };

    case CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSidebarType: action.payload,
      };

    case CHANGE_LAYOUT_WIDTH:
      return {
        ...state,
        layoutWidthType: action.payload,
      };

    case CHANGE_LAYOUT_POSITION:
      return {
        ...state,
        layoutPositionType: action.payload,
      };

    case CHANGE_TOPBAR_THEME:
      return {
        ...state,
        topbarThemeType: action.payload,
      };

    case CHANGE_SIDEBAR_SIZE_TYPE:
      return {
        ...state,
        leftsidbarSizeType: action.payload,
      };

    case CHANGE_SIDEBAR_VIEW:
      return {
        ...state,
        leftSidebarViewType: action.payload,
      };

    case RESET_VALUE:
      return {
        ...state,
        resetValue: INIT_STATE,
      };

    case CHANGE_PRELOADER:
      return {
        ...state,
        preloader: action.payload,
      };

    case CHANGE_BACKGROUND_IMAGE_TYPE:
      return {
        ...state,
        backgroundImageType: action.payload,
      };

    default:
      return state;
  }
};

export default Layout;
