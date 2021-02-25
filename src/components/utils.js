import Employees from "./Employees";
import Settings from "./Settings";
import Record from "./Record";

export const routes = [
  {
    path: "/employee",
    component: Employees,
    label: "Список сотрудников",
  },
  {
    path: "/record",
    component: Record,
    label: "Добавить запись",
  },
  {
    path: "/settings",
    component: Settings,
    label: "Настройки",
  },
];

export const position = [
  {
    value: "junior",
    label: "Junior Developer",
  },
  {
    value: "middle",
    label: "Middle Developer",
  },
  {
    value: "senior",
    label: "Senior developer",
  },
];

export const subdivision = [
  {
    value: "management",
    label: "Управления",
  },
  {
    value: "department",
    label: "Отдела",
  },
  {
    value: "service",
    label: "Службы",
  },
  {
    value: "bureau",
    label: "Бюро",
  },
];

export const data = [
  {
    id: 1,
    lastName: "Иванов",
    firstName: "Иван",
    middleName: "Иванович",
    birthDate: "23.11.1993",
    personnelNumber: "1",
    position: "Middle Developer",
    subdivision: "Управления",
  },
  {
    id: 2,
    lastName: "Макаров",
    firstName: "Макар",
    middleName: "Макарович",
    birthDate: "31.01.2001",
    personnelNumber: "2",
    position: "Junior Developer",
    subdivision: "Службы",
  },
  {
    id: 3,
    lastName: "Соколов",
    firstName: "Евгеений",
    middleName: "Александрович",
    birthDate: "12.03.1998",
    personnelNumber: "3",
    position: "Juniot Developer",
    subdivision: "Отдела",
  },
  {
    id: 4,
    lastName: "Затулов",
    firstName: "Вадим",
    middleName: "Вадимович",
    birthDate: "25.11.1985",
    personnelNumber: "4",
    position: "Senior Developer",
    subdivision: "Бюро",
  },
];
