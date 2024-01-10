interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,

  [propName: string]: any
  }

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string ): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string ): string => `${firstName.charAt(0)}. ${lastName}`;
interface classInterface {
  workOnHomework(): string;
  displayName(): string;
}
class StudentClass implements classInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayName(): string {
    return this.firstName;
  }

  workOnHomework(): string {
    return "Currently working";
  }
  
}

interface DirectorInterface {
  workFromHome(): string

  getCoffeeBreak(): string
  
  workDirectorTasks(): string

}

interface TeacherInterface {
  workFromHome(): string

  getCoffeeBreak(): string

  workTeacherTasks(): string
}

export class Director implements DirectorInterface {
  workFromHome = (): string => "Working from home";

  getCoffeeBreak = (): string => "Getting a coffee break";

  workDirectorTasks = (): string => "Getting to director tasks";
}

export class Teacher implements TeacherInterface {
  workFromHome = (): string => "Cannot work from home";

  getCoffeeBreak = (): string => "Cannot have a break";

  workTeacherTasks = (): string => "Getting to work";
}

export const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

export function isDirector(employee: DirectorInterface | TeacherInterface): employee is Director {
  return (employee as Director).workDirectorTasks() !== undefined;
}

export function executeWork(employee: DirectorInterface | TeacherInterface): string {
  let res = undefined;
  (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
  return res;
}

type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string | boolean {
  return (todayClass === "Math") ? "Teaching Math" : (todayClass === "History") ? "Teaching History" : `${undefined}`
}
