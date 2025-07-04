// models/ExcelRow.js
import mongoose from 'mongoose';

const ExcelRowSchema = new mongoose.Schema({}, { strict: false });

const ExcelRow = mongoose.model('ExcelRow', ExcelRowSchema);

export default ExcelRow;
