import express from 'express';
const router = express.Router();
import {getEmployees, getEmployeeById,getEmplyeeBenifits,getEmplyeeBenifitsAll,getEmployeeDependentsAll, getEmployeeDependents} from '../controllers/employeeController.js';

router.get('/dependents', getEmployeeDependentsAll);
router.get('/dependents/:id', getEmployeeDependents);
router.get('/benifits', getEmplyeeBenifitsAll);
router.get('/benifits/:id', getEmplyeeBenifits);

router.get('/', getEmployees);
router.get('/:id', getEmployeeById);





// router.post('/', createEmployee);
// router.put('/:id', updateEmployee);
// router.delete('/:id', deleteEmployee);


export default router;