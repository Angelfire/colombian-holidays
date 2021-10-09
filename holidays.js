const NEXT_DAY = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  NONE: 7
};

export const EASTER_WEEK_HOLIDAYS = [
  { offset: -3, daysToSum: NEXT_DAY.NONE, holidayName: "Jueves Santo" },
  { offset: -2, daysToSum: NEXT_DAY.NONE, holidayName: "Viernes Santo" },
  { offset: 39, daysToSum: NEXT_DAY.MONDAY, holidayName: "Ascensión del Señor" },
  { offset: 60, daysToSum: NEXT_DAY.MONDAY, holidayName: "Corphus Christi" },
  { offset: 68, daysToSum: NEXT_DAY.MONDAY, holidayName: "Sagrado Corazón de Jesús" }
];

export const HOLIDAYS = [
  { shortDate: "01/01", daysToSum: NEXT_DAY.NONE, holidayName: "Año Nuevo" },
  { shortDate: "01/06", daysToSum: NEXT_DAY.MONDAY, holidayName: "Día de los Reyes Magos" },
  { shortDate: "03/19", daysToSum: NEXT_DAY.MONDAY, holidayName: "Día de San José" },
  { shortDate: "05/01", daysToSum: NEXT_DAY.NONE, holidayName: "Día del Trabajo" },
  { shortDate: "06/29", daysToSum: NEXT_DAY.MONDAY, holidayName: "San Pedro y San Pablo" },
  { shortDate: "07/20", daysToSum: NEXT_DAY.NONE, holidayName: "Día de la Independencia" },
  { shortDate: "08/07", daysToSum: NEXT_DAY.NONE, holidayName: "Batalla de Boyacá" },
  { shortDate: "08/15", daysToSum: NEXT_DAY.MONDAY, holidayName: "La Asunción de la Virgen" },
  { shortDate: "10/12", daysToSum: NEXT_DAY.MONDAY, holidayName: "Día de la Raza" },
  { shortDate: "11/01", daysToSum: NEXT_DAY.MONDAY, holidayName: "Todos los Santos" },
  { shortDate: "11/11", daysToSum: NEXT_DAY.MONDAY, holidayName: "Independencia de Cartagena" },
  { shortDate: "12/08", daysToSum: NEXT_DAY.NONE, holidayName: "Día de la Inmaculada Concepción" },
  { shortDate: "12/25", daysToSum: NEXT_DAY.NONE, holidayName: "Día de Navidad" }
];
