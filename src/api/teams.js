import express from 'express';
import Team from './models/Team';
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  const team = new Team(data);
  team.save(error => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(201).send(data);
    }
  })
});

export default router;
