const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);

      if (person) {
        resolve(person);
      }

      reject(new Error("Mi dispiace, id inesistente")); 
    }, 1000);
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((item) => item.id === id);

      if (job) {
        resolve(job);
      }
      reject(new Error("Mi dispiace, id inesistente")); 
    }, 1000);
  });
}

const promisePerson = fetchPersonById(3); //dichiaro la promise
const promiseJob = fetchJobById(3); // dichiaro la promise

Promise.all([promisePerson, promiseJob])
  .then(console.log)
  .catch((e) => console.log(e));
