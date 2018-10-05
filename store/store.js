import { createStore } from 'redux';
import gameReducer from '../reducers/gameReducer';

const gameStore = createStore(gameReducer);

export default gameStore;