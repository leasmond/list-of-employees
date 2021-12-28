import { Employees, Settings, Record } from "../components/index";

export const routes = [
  {
    path: "/",
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
