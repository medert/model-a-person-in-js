// your code, here

let person =  {
  firstName: 'Bob',
  lastName: 'Faith',
  hometown: 'Moon',
  occupation: 'Skywalker',
  catchPhrase: 'It is all good!',

  name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(person)
