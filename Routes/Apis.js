const router = require('express').Router();
const apiIncumbentRoute = require('../Controller/Controller_incumbent');
const apiPackageRoute = require('../Controller/Controller_package');
const apiBeneficiaryRoute = require('../Controller/Controller_beneficiary');
const apiConditionRoute = require('../Controller/Controller_condition');
const apiReceiptsRoute = require('../Controller/Controller_receipts');

router.use('/incumbent', apiIncumbentRoute);
router.use('/package', apiPackageRoute);
router.use('/beneficiary', apiBeneficiaryRoute);
router.use('/condition', apiConditionRoute);
router.use('/receipts', apiReceiptsRoute);

module.exports = router;