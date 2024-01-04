class default class HolbertonCourse {
  constructor(name, length, students) {
    // Verify the types of attributes
    if (typeof name !== 'string' || typeof length !== 'number' || !Array.isArray(students)) {
      throw new Error('Invalid attribute types');
    }

    // Store attributes in underscore attribute versions
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // A getter and setter for the 'name' attribute
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  // A getter and setter for the 'length' attribute
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = newLength;
  }

  // A getter and setter for the 'students' attribute
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
