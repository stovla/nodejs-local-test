// https://raptorapimq.ey.com/rpam/api/specialallocation/job/618/specialAllocationId/0/projectId/100302/entityId/100041/clientId/100/amount/

// https://raptorapimq.ey.com/rpam/api/SpecialAllocation/allocationTitlesList?specialAllocationTypeId=1&clientId=100


// https://raptorapimd.ey.com/rpam/api/specialallocation/job/619/specialAllocationId/0/projectId/100302/entityId/100042/clientId/100/amount/?clientId=100

// 
import { Router } from 'express';
import { amountUAT } from '../mocks/special-allocation/amountUAT';
import { percentageUAT } from '../mocks/special-allocation/percentageUAT';
import { amountQA } from '../mocks/special-allocation/spec-alloc-amountQA';
import { titlesQA } from '../mocks/special-allocation/spec-alloc-titlesQA';
import { titlesDEV } from '../mocks/special-allocation/titlesDEV';



const addEditAmount = require('../mocks/special-allocation/spec-alloc-amount')

const router = Router();

router.get('/job/:jobid/specialAllocationId/:some/projectId/:projectId/entityId/:entityId/clientId/:clientId/amount/', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(amountUAT);
});

router.get('/job/:jobid/specialAllocationId/:some/projectId/:projectId/entityId/:entityId/clientId/:clientId/percentage/', (req, res, next) => {
  // jsonData.result = [];
  res.status(200).json(percentageUAT);
});

router.get('/allocationTitlesList', (req, res) => {
  res.status(200).json(titlesDEV);
})

export default router;