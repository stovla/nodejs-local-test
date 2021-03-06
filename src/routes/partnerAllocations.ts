import { Router } from 'express';
import { allocationsUAT } from '../mocks/partner-allocations/allocationsUAT';
import { partnershipTotal } from '../mocks/partner-allocations/partnershipTotal';
let jsonData = require('../mocks/partner-allocations/partner-allocation.json');
let jsonData1 = require('../mocks/partner-allocations/partner-allocation1.json');
let jsonDataUAT = require('../mocks/partner-allocations/partner-allocations-UAT.json');

const router = Router();

// router.get('/', (req, res, next) => {
//   res.status(200).json(jsonData);
// });

router.get('/job/:jobid', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(jsonData);
});

router.get('/partnershiptotal/job/:jobId/projectId/:projectId/entityId/:entityId/clientId/:clientId/', (req, res, next) => {
  res.status(200).json(partnershipTotal);
});

export default router;