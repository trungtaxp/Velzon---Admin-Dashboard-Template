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

export const changeLayout = layout => ({
  type: CHANGE_LAYOUT,
  payload: layout,
});

export const changeLayoutMode = mode => ({
  type: CHANGE_LAYOUT_MODE,
  payload: mode,
});

export const changeSidebarTheme = theme => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: theme,
});

export const changeLayoutWidth = layoutWidth => ({
  type: CHANGE_LAYOUT_WIDTH,
  payload: layoutWidth,
});

export const changeLayoutPosition = layoutposition => ({
  type: CHANGE_LAYOUT_POSITION,
  payload: layoutposition,
});

export const changeTopbarTheme = topbarTheme => ({
  type: CHANGE_TOPBAR_THEME,
  payload: topbarTheme,
});

export const changeLeftsidebarSizeType = leftsidebarSizetype => ({
  type: CHANGE_SIDEBAR_SIZE_TYPE,
  payload: leftsidebarSizetype,
});

export const changeLeftsidebarViewType = leftsidebarViewtype => ({
  type: CHANGE_SIDEBAR_VIEW,
  payload: leftsidebarViewtype,
});

export const resetValue = value => ({
  type: RESET_VALUE,
  payload: value,
});

export const changePreLoader = (preloader) => {
  return {
    type: CHANGE_PRELOADER,
    payload: preloader,
  }
}

export const changeBackgroundImageType = backgroundImagetype => ({
  type: CHANGE_BACKGROUND_IMAGE_TYPE,
  payload: backgroundImagetype,
});
