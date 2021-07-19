import { createSelector } from 'reselect';

export const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
);

export const isLoading = createSelector([selectUser], (user) => user.isLoading);

export const error = createSelector([selectUser], (user) => user.error);

export const success = createSelector([selectUser], (user) => user.success);

export const token = createSelector([selectUser], (user) => user.token);
