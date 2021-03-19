import Action from 'redux-actions';

export type State = {
  a: string;
};
export type Payload = string

export declare function createMapUpdater(state: State, action: Action<Payload>): State;
