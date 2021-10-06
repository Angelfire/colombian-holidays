import { expectType } from 'tsd';
import colombianHolidaysByYear from './index';

expectType<Array<Object>>(colombianHolidaysByYear(1984));
// expectType<Array<{ holiday: string; celebrationDay: string; celebration: string }>>(colombianHolidaysByYear(1984));