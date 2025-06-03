import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
import employeeRoutes from './src/routes/employeeRoutes.js';
import mongoose from 'mongoose';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/employee').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.use('/api/employees', employeeRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


export default app;