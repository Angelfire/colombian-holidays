import test from 'ava';
import colombianHolidaysByYear from '../index.js';

test('main', t => {
  t.throws(() => colombianHolidaysByYear(1969), {
    message: 'A year was not provided or is invalid'
  });
  t.throws(() => colombianHolidaysByYear(10000), {
    message: 'A year was not provided or is invalid'
  });
  t.throws(() => colombianHolidaysByYear('hello'), {
    message: 'A year was not provided or is invalid'
  });
  t.deepEqual(colombianHolidaysByYear(2021), [
    {
      holiday: '2021/01/01',
      celebrationDay: '2021/01/01',
      holidayName: 'Año Nuevo'
    },
    {
      holiday: '2021/01/11',
      celebrationDay: '2021/01/06',
      holidayName: 'Día de los Reyes Magos'
    },
    {
      holiday: '2021/03/22',
      celebrationDay: '2021/03/19',
      holidayName: 'Día de San José'
    },
    {
      holiday: '2021/04/01',
      celebrationDay: '2021/04/01',
      holidayName: 'Jueves Santo'
    },
    {
      holiday: '2021/04/02',
      celebrationDay: '2021/04/02',
      holidayName: 'Viernes Santo'
    },
    {
      holiday: '2021/05/01',
      celebrationDay: '2021/05/01',
      holidayName: 'Día del Trabajo'
    },
    {
      holiday: '2021/05/17',
      celebrationDay: '2021/05/13',
      holidayName: 'Ascensión del Señor'
    },
    {
      holiday: '2021/06/07',
      celebrationDay: '2021/06/03',
      holidayName: 'Corphus Christi'
    },
    {
      holiday: '2021/06/14',
      celebrationDay: '2021/06/11',
      holidayName: 'Sagrado Corazón de Jesús'
    },
    {
      holiday: '2021/07/05',
      celebrationDay: '2021/06/29',
      holidayName: 'San Pedro y San Pablo'
    },
    {
      holiday: '2021/07/20',
      celebrationDay: '2021/07/20',
      holidayName: 'Día de la Independencia'
    },
    {
      holiday: '2021/08/07',
      celebrationDay: '2021/08/07',
      holidayName: 'Batalla de Boyacá'
    },
    {
      holiday: '2021/08/16',
      celebrationDay: '2021/08/15',
      holidayName: 'La Asunción de la Virgen'
    },
    {
      holiday: '2021/10/18',
      celebrationDay: '2021/10/12',
      holidayName: 'Día de la Raza'
    },
    {
      holiday: '2021/11/01',
      celebrationDay: '2021/11/01',
      holidayName: 'Todos los Santos'
    },
    {
      holiday: '2021/11/15',
      celebrationDay: '2021/11/11',
      holidayName: 'Independencia de Cartagena'
    },
    {
      holiday: '2021/12/08',
      celebrationDay: '2021/12/08',
      holidayName: 'Día de la Inmaculada Concepción'
    },
    {
      holiday: '2021/12/25',
      celebrationDay: '2021/12/25',
      holidayName: 'Día de Navidad'
    }
  ]);
});
