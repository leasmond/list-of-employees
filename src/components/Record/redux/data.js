import { DataPickerCustom, TextFieldCustom } from "../../../common/components";

export const data = [
  {
    id: 0,
    lastName: "Иванов",
    firstName: "Иван",
    middleName: "Иванович",
    birthday: "23/11/1993",
    personnelNumber: 0,
    position: "Middle Developer",
    subdivision: "Управления",
  },
  {
    id: 1,
    lastName: "Макаров",
    firstName: "Макар",
    middleName: "Макарович",
    birthday: "31/01/2001",
    personnelNumber: 1,
    position: "Junior Developer",
    subdivision: "Службы",
  },
  {
    id: 2,
    lastName: "Соколов",
    firstName: "Евгений",
    middleName: "Александрович",
    birthday: "12/03/1998",
    personnelNumber: 2,
    position: "Junior Developer",
    subdivision: "Отдела",
  },
  {
    id: 17,
    lastName: "Затулов",
    firstName: "Вадим",
    middleName: "Вадимович",
    birthday: "25/11/1985",
    personnelNumber: 3,
    position: "Senior Developer",
    subdivision: "Бюро",
  },
];

const position = [
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

const subdivision = [
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

export const userInfoForm = [
  {
    id: 0,
    checked: true,
    label: "Фамилия",
    name: "lastName",
    component: TextFieldCustom,
  },
  {
    id: 1,
    checked: true,
    label: "Имя",
    name: "firstName",
    component: TextFieldCustom,
  },
  {
    id: 2,
    checked: false,
    label: "Отчество",
    name: "middleName",
    component: TextFieldCustom,
  },
  {
    id: 3,
    checked: false,
    label: "Табельный номер",
    name: "personnelNumber",
    disabled: true,
    component: TextFieldCustom,
  },
  {
    id: 4,
    checked: true,
    label: "Дата рождения",
    name: "birthday",
    component: DataPickerCustom,
  },
  {
    id: 5,
    checked: true,
    label: "Должность",
    name: "position",
    data: position,
    select: true,
    component: TextFieldCustom,
  },
  {
    id: 6,
    checked: true,
    label: "Подразделение",
    name: "subdivision",
    data: subdivision,
    select: true,
    component: TextFieldCustom,
  },
];
