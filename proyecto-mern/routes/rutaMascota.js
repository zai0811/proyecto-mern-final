const PetController = require('../controllers/controladorMascota');

module.exports = function(app){
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
    app.put('/api/pets/:id/like', PetController.likePet);
}

