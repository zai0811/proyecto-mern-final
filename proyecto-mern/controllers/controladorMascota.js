// server/controllers/pet.controller.js
const Pet = require('../models/modeloMascota');

module.exports = {
  createPet: (req, res) => {
    Pet.create(req.body)
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },
  
  getAllPets: (req, res) => {
    Pet.find({})
      .then(pets => res.json(pets))
      .catch(err => res.status(400).json(err));
  },

  getPet: (req, res) => {
    Pet.findOne({ _id: req.params.id })
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },

  updatePet: (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },

  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  },

  likePet: (req, res) => {
      Pet.findOneAndUpdate({ _id: req.params.id }, { $inc: { likes: 1 } }, { new: true })
          .then(updatedPet => res.json(updatedPet))
          .catch(err => res.status(400).json(err));
  }
};
