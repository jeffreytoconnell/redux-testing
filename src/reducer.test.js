import reducer from './reducer';
import {
    newGame,
    makeGuess,
    toggleInfoModal
} from './actions';

describe('Reducer', () => {
it('Should set initial state', () => {
    const state = reducer(undefined, {
        type: '__UNKNOWN'
    });
    expect(state.guesses).toEqual([]);
    expect(state.feedback).toEqual('Make your guess!');
    expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(state.correctAnswer).toBeLessThanOrEqual(100);
    expect(state.showInfoModal).toEqual(false);
});
})

it('Should toggle modal off', () => {
    let state = {
        showInfoModal: true
    };
    state=reducer(state, toggleInfoModal());
    expect(state.showInfoModal).toEqual(false);
});


