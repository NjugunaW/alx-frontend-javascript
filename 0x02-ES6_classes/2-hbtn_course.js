/* eslint-disable */

export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateAndSet('name', name, 'string', 'Name must be a string');
    this.validateAndSet('length', length, 'number', 'Length must be a number');
    this.validateAndSet('students', students, 'array', 'Students must be an array of strings');
  }

  validateAndSet(property, value, expectedType, errorMessage) {
    if (typeof value !== expectedType) {
      throw new TypeError(errorMessage);
    } else {
      this[`_${property}`] = value;
    }
  }

  // getter
  get name() {
    return this._name;
  }

  // gets the length
  get length() {
    return this._length;
  }

  // gets the amount of students
  get students() {
    return this._students;
  }

  // setter 
  set name(Name) {
    this.validateAndSet('name', Name, 'string', 'Name must be a string');
  }

  set length(Length) {
    this.validateAndSet('length', Length, 'number', 'Length must be a number');
  }

  // set the amount of students
  set students(Students) {
    this.validateAndSet('students', Students, 'array', 'Students must be an array of strings');
  }
}

/* eslint-enable */
