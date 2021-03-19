import Action from 'redux-actions';
export type State = {
  a: string
};
export type Payload = string;

export const createMapUpdater = (state: State, action: Action<Payload>): State => {
  return state;
};
