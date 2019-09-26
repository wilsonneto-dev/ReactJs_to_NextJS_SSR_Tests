import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';
import { Types as FavoritesTypes } from '../ducks/favorites';

/*
  takeLatest -> pega apenas a ultima requisição, o ultimo click
  takeEvery -> pega todos os cliques
*/

export default function* rootSaga() {
  yield all([takeLatest(FavoritesTypes.ADD_REQUEST, addFavorite)]);
}