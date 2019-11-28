import { createSelector} from 'reselect';

const selectDirectory = state => state.directory;

export const directorySectionSelector = createSelector(
  [selectDirectory],
  directory => directory.sections
)
