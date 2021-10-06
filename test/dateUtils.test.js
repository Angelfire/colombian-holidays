import test from 'ava';
import { addZero, butcherAlgorithm, getFormattedDate, nextDay } from '../dateUtils.js';

test('addZero method', t => {
  t.is(addZero(1), '01');
  t.is(addZero(10), '10');
  t.throws(() => addZero('hello'), {
    message: 'Invalid type'
  });
  t.throws(() => addZero(-1), {
    message: 'Invalid value: -1'
  });
  t.throws(() => addZero(0.1), {
    message: 'Invalid value: 0.1'
  });
  t.throws(() => addZero(-0.1), {
    message: 'Invalid value: -0.1'
  });
});

test('butcherAlgorithm  method', t => {
  t.is(butcherAlgorithm(1970), '1970-03-29');
  t.throws(() => butcherAlgorithm('hello'), {
    message: 'Invalid type'
  });
});

test('getFormattedDate method', t => {
  t.is(getFormattedDate(1984, 12, 1), '1984-12-01');
  t.throws(() => getFormattedDate('hi', 11, 12), {
    message: 'Invalid type'
  });
  t.throws(() => getFormattedDate(1984, 'hi', 12), {
    message: 'Invalid type'
  });
  t.throws(() => getFormattedDate(1984, 11, 'hi'), {
    message: 'Invalid type'
  });
});

test('nextDaym method', t => {
  t.is(nextDay('2021-09', 2), '2021-09-07');
});
