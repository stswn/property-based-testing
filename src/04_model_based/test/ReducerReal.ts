export class ReducerReal<State, Action> {
  private _currentState: State;

  constructor (
    state: State,
    private reducer: (state: State, action: Action) => State) {
    this._currentState = state;
  }

  get currentState(): State {
    return this._currentState;
  }

  public applyAction(action: Action): void {
    this._currentState = this.reducer(this._currentState, action);
  }
}
