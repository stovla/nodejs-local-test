import express from 'express';
import bodyParser from 'body-parser';
import config from './config/init';

// routes
import partnerAllocationRoutes from './routes/partnerAllocations';
import partnerRoutes from './routes/partner';
import partnerCapRoutes from './routes/partnerCapital';
import specialAllocationRoutes from './routes/specialAllocations';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(config.cors);
app.use('/rpam/api/PartnerAllocation', partnerAllocationRoutes);
app.use('/rpam/api/Partner', partnerRoutes);
app.use('/rpam/api/PartnerCapital', partnerCapRoutes);
app.use('/rpam/api/specialallocation', specialAllocationRoutes);
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));