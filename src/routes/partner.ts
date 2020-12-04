import { Router } from 'express';
let partnersShort = require('../mocks/partner/partners.json');
let partner = require('../mocks/partner/partner.json');

const router = Router();

router.get('/', (req, res, next) => {
  if (!req.query.ProjectId) {
    next(res.status(401).json({ message: 'Missing paramater ProjectId' }));
  } else if (!req.query.EntityId) {
    next(res.status(401).json({ message: 'Missing paramater EntityId' }));
  }
  next(res.status(200).json(partner));
});

router.get('/job/:jobid', (req, res, next) => {
  // if (!req.params.jobId) {
  //   next(res.status(401).json({ message: 'Missing jobid' }));
  // }
  next(res.status(200).json(partnersShort));
});

router.post('/importExcel/:projectId', (req, res, next) => {
  if (!req.params.projectId) {
    next(res.status(401).json({ message: 'Missing projectId' }));
  }
  res.header('Content-Type', 'multipart/form-data');
  next(res.status(200).json({ message: 'upload successfull' }));
});

export default router;