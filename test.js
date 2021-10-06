import test from 'ava';
import colombianHolidaysByYear from './index.js';

test('main', t => {
  t.throws(() => colombianHolidaysByYear(1969), {
    message: 'Invalid year: 1969'
  });
  t.throws(() => colombianHolidaysByYear(10000), {
    message: 'Invalid year: 10000'
  });
  t.throws(() => colombianHolidaysByYear('hello'), {
    message: 'Invalid year: hello'
  });
  t.deepEqual(colombianHolidaysByYear(2021), [
    {
      holiday: '2021-01-01',
      celebrationDay: '2021-01-01',
      celebration: 'Año Nuevo'
    },
    {
      holiday: '2021-01-11',
      celebrationDay: '2021-01-06',
      celebration: 'Día de los Reyes Magos'
    },
    {
      holiday: '2021-03-22',
      celebrationDay: '2021-03-19',
      celebration: 'Día de San José'
    },
    {
      holiday: '2021-04-01',
      celebrationDay: '2021-04-01',
      celebration: 'Jueves Santo'
    },
    {
      holiday: '2021-04-02',
      celebrationDay: '2021-04-02',
      celebration: 'Viernes Santo'
    },
    {
      holiday: '2021-05-01',
      celebrationDay: '2021-05-01',
      celebration: 'Día del Trabajo'
    },
    {
      holiday: '2021-05-17',
      celebrationDay: '2021-05-13',
      celebration: 'Ascensión del Señor'
    },
    {
      holiday: '2021-06-07',
      celebrationDay: '2021-06-03',
      celebration: 'Corphus Christi'
    },
    {
      holiday: '2021-06-14',
      celebrationDay: '2021-06-11',
      celebration: 'Sagrado Corazón de Jesús'
    },
    {
      holiday: '2021-07-05',
      celebrationDay: '2021-06-29',
      celebration: 'San Pedro y San Pablo'
    },
    {
      holiday: '2021-07-20',
      celebrationDay: '2021-07-20',
      celebration: 'Día de la Independencia'
    },
    {
      holiday: '2021-08-07',
      celebrationDay: '2021-08-07',
      celebration: 'Batalla de Boyacá'
    },
    {
      holiday: '2021-08-16',
      celebrationDay: '2021-08-15',
      celebration: 'La Asunción de la Virgen'
    },
    {
      holiday: '2021-10-18',
      celebrationDay: '2021-10-12',
      celebration: 'Día de la Raza'
    },
    {
      holiday: '2021-11-01',
      celebrationDay: '2021-11-01',
      celebration: 'Todos los Santos'
    },
    {
      holiday: '2021-11-15',
      celebrationDay: '2021-11-11',
      celebration: 'Independencia de Cartagena'
    },
    {
      holiday: '2021-12-08',
      celebrationDay: '2021-12-08',
      celebration: 'Día de la Inmaculada Concepción'
    },
    {
      holiday: '2021-12-25',
      celebrationDay: '2021-12-25',
      celebration: 'Día de Navidad'
    }
  ]);
});