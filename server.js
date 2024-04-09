
const express = require('express');
const app = express();

const pets = [
  { name: 'Mr.Pickles', id: 1, owner: 'Tommy Goodman'},
  { name: 'Brian Griffin', id: 2, owner: 'Peter Griffin'},
  { name: `Santa's Little Helper`, id: 4, owner: 'Homer Simpson'},
  { name: 'Scooby Doo', id: 5, owner: 'Shaggy Rogers'}
]

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
});

app.get('/api/v1/pets/owner', (req, res) => {
  const { owner } = req.query
  // console.log(`Owner : `, owner);
  
  let foundOwner = owner;

  // if(req.query.owner) {
  //   foundOwner = owner.filter((person) => {
  //     return person.owner === req.query.owner;
  //   })
  // }

  res.send(foundOwner);
});

app.get('/api/v1/pets', (req, res) => {
  res.send(pets);
});

app.get('/api/v1/pets/:dogName', (req, res) => {
  // console.log(`Req Params: `, req.params);

  const { dogName } = req.params;
  // console.log(dogName);

  const foundDog = pets.find((pet) => {
    return pet.name === dogName
  })

  res.send(foundDog);
});

app.listen(8080);