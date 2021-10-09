import test from 'ava';
import { addZero, butcherAlgorithm, getFormattedDate, nextDay } from '../dateUtils.js';

test('addZero method', t => {
  t.is(addZero(1), '01');
  t.is(addZero(10), '10');
});

test('butcherAlgorithm  method', t => {
  t.is(butcherAlgorithm(1970), '1970-03-29');
});

test('getFormattedDate method', t => {
  t.is(getFormattedDate(1984, 12, 1), '1984-12-01');
});

test('nextDaym method', t => {
  t.is(nextDay('2021-09', 2), '2021-09-07');
});
