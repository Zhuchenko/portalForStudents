export const isAuthorized = (state => state.application.authorized);
export const email = (state => state.authorization.email);
export const password = (state => state.authorization.password);
export const isShown = (state => state.authorization.isShown);