import * as SectionAPIUtil from '../util/section_api_util'

export const RECEIVE_SECTIONS = "RECEIVE_SECTIONS";
export const RECEIVE_SECTION = "RECEIVE_SECTION";
export const REMOVE_SECTION = "REMOVE_SECTION";
export const RECEIVE_SECTION_ERRORS = "RECEIVE_SECTION_ERRORS";

const receiveSections = sections => ({
  type: RECEIVE_SECTIONS,
  sections: sections
});

const receiveSection = section => ({
  type: RECEIVE_SECTION,
  section: section
});

const removeSection = sectionId => ({
  type: REMOVE_SECTION,
  sectionId: sectionId
});

const receiveErrors = errs => ({
  type: RECEIVE_SECTION_ERRORS,
  errors: {errs}
});


export const fetchSections = () => dispatch => (
  SectionAPIUtil.fetchSections().then(sections => (
    dispatch(receiveSections(sections))
  ))
);

export const createSection = section => dispatch => (
  SectionAPIUtil.createSection(section).then(section => (
    dispatch(receiveSection(section))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updateSection = section => dispatch => (
  SectionAPIUtil.updateSection(section).then(section => (
    dispatch(receiveSection(section))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteSection = sectionId => dispatch => (
  SectionAPIUtil.deleteSection(sectionId).then(() => (
    dispatch(removeSection(sectionId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);