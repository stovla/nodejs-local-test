import { Router } from 'express';

let jsonDataUAT = require('../mocks/partner-capital/partner-cap-UAT.json');
let contributionsJson = require('../mocks/partner-capital/partner-cap-contri-UAT.json');
let editJson = require('../mocks/partner-capital/partner-cap-edit-UAT.json');
let eventTypesJson = require('../mocks/partner-capital/partner-cap-evTypes-UAT.json');


const router = Router();

// router.get('/', (req, res, next) => {
//   res.status(200).json(jsonData);
// });

router.get('/job/:jobid/', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(jsonDataUAT);
});

// partner capital contributions
router.get('/contributions/job/:jobid/', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(contributionsJson);
});

// partner capital contribution edit
router.get('/event/:jobid/', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(editJson);
});

// partner capital event types
router.get('/eventTypes/:id/', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(eventTypesJson);
});

export default router;