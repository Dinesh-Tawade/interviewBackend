
import {Employee, employeeBenefits, emplyeeDependent} from '../models/employeeModel.js';



const getEmployees = async(req, res) => {
    const employees =await Employee.find();
    if (!employees) {
        return res.status(404).json({message: 'No employees found'});
    }
    res.status(200).json(employees);
}

const getEmployeeById = async (req, res) => {
    const {id} = req.params;
    try {
        const employee = await Employee.findOne({"Employee Number": id});
        if (!employee) {
            return res.status(404).json({message: 'Employee not found'});
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}


const getEmplyeeBenifitsAll = async (req, res) => {
    try {
        const employee = await employeeBenefits.find();
        if (!employee) {
            return res.status(404).json({message: 'Employee not found'});
        }
        console.log(employee,"employee");
        
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}

const getEmplyeeBenifits = async (req, res) => {
    const {id} = req.params;
    try {
        const employee = await employeeBenefits.find({"Employee Number": id});
        if (!employee) {
            return res.status(404).json({message: 'Employee not found'});
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}


const getEmployeeDependentsAll = async (req, res) => {
    try {
        const employee = await emplyeeDependent.find();
        if (!employee) {
            return res.status(404).json({message: 'Employee not found'});
        }
        console.log(employee,"employee");
        
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }
}

const getEmployeeDependents = async (req, res) => {
    const {id} = req.params;
    try {
        const employee = await emplyeeDependent.find({"Employee Number": id});
        if (!employee) {
            return res.status(404).json({message: 'Employee not found'});
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({message: 'Server error', error: error.message});
    }   
}




export {getEmployees, getEmployeeById,getEmplyeeBenifits,getEmplyeeBenifitsAll,getEmployeeDependentsAll, getEmployeeDependents};