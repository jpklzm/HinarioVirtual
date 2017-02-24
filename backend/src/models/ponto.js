import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pontoSchema = new Schema({
    category: { type: Number },
  	lyrics: { type: String },
  	audio: { type: String }
});

export const Ponto = mongoose.model('Ponto', pontoSchema);
export default Ponto;
