export default ({ dispatch }) => next => (action) => {
  // check to see if the action
  // has promise on its 'payload' property
  // If it does, then wait for it to resolve
  // If it doesn't, then send action on to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // we want to wait for the promise to resolve
  // (get its data!!) and then create a new action
  // with that data and dispatch it
  action.payload.then((response) => {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
