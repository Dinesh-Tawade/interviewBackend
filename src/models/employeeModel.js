import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    "Employee Number": {
        type: Number,
        required: true,
        unique: true,
    },
    "Employee Name": {
        type: String,
        required: true,
    },
    Group: {
        type: String,
        required: true,
    },
    Designation: {
        type: String,
        required: true,
    },
    Grd: {
        type: String,
        required: true,
    },
    "Unit / Mine": {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
    },
    "Date of Birth": {
        type: Date,
        required: true,
    },
    "Basic Pay": {
        type: Number,
        required: true,
    },
    "Date of Appointment": {
        type: Date,
        required: true,
    },
    "Date Of Separation": {
        type: Date,
        required: true,
    },
    "Reason Of Separation": {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    "Mobile Number": {
        type: Number,
        required: true,
    },
    "Email ID": {
        type: String,
        required: true,
    },
    UAN: {
        type: Number,
        required: true,
    },
    "Pan number": {
        type: String,
        required: true,
    },
    "Aadhar number": {
        type: Number,
        required: true,
    },
    "Employee PF Number": {
        type: String,
        required: true, 
    },
    "Employee Pension Number": {
        type: String,
        required: true,
    },
    "LIC Annuity No": {
        type: Number,
        required: true,
    },
    PRAAN: {
        type: Number,
        required: true,
    },
    "Blood Grp": {
        type: String,
        required: true
    }
});


const employeeBenefitsSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    "Unit/ Mine": {
        type: String,
        required: true,
    },
    "Employee Number": {
        type: Number,
        required: true
    },
    "Employee Name": {
        type: String,
        required: true,
    },
    "Dues after seperation": {
        type: String,
        required: true,
    },
    "Amount": {
        type: String,
        required: true,
    },
    "Settlement Date": {
        type: String,
        required: true,
    },
    "Mode of transaction": {
        type: String,
        required: true,
    },
    "Cheque/Transaction number": {
        type: Number,
        required: true,
    },
    "Status": {
        type: String,
        required: true,
    },
})


const emplyeeDependentSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: true,
    },
    "Employee Number": {
        type: Number,
        required: true,
    },
    "Employee Name": {
        type: String,
        required: true,
    },
    Spouse: {
        type: String,
        required: true,
    },
    "Spouse Date of Birth": {
        type: Date,
        required: true,
    },
    Father: {
        type: String,
        required: true,
    },
    "Father Date of Birth": {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});





// {
//   "_id": {
//     "$oid": "683f034d90835290c4cc2963"
//   },
//   "Employee Number": 5171,
//   "Employee Name": "Tanmaya Kumar Pattnaik",
//   "Spouse": "Smt.Puspita Pattnaik",
//   "Spouse Date of Birth": "20-01-1968",
//   "Father": "Khirnod Chandra Pattnaik",
//   "Father Date of Birth": "14-10-1934"
// }


const Employee = mongoose.model('Employee', employeeSchema);
const employeeBenefits = mongoose.model('EmployeeBenefits', employeeBenefitsSchema);
const emplyeeDependent = mongoose.model('EmplyeeDependent', emplyeeDependentSchema);
export { Employee, employeeBenefits, emplyeeDependent };



