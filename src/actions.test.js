import {
    NEW_GAME,
    newGame,
    MAKE_GUESS,
    makeGuess,
    TOGGLE_INFO_MODAL,
    toggleInfoModal
} from './actions';

describe('newGame', () => {
    it('Should return action', () => {
        const action = newGame();
        expect(action.type).toEqual(NEW_GAME);
    })
})