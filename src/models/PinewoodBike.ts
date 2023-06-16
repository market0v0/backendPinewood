import { required } from 'joi'
import mongoose, { Document, Schema } from 'mongoose'

export interface IPinewoodBike {
  model: string
  price: number
  img: string[]
  specs: string
  category: string
  youtube: string
  facebook: string
}

export interface IPinewoodBikeModel extends IPinewoodBike, Document {}

const PinewoodBikeSchema: Schema = new Schema(
  {
    model: { type: String, required: true },
    price: { type: Number, required: true },
    img: { type: [String], required: true },
    specs: { type: String, required: true },
    category: { type: String, required: true },
    youtube: { type: String, required: true },
    facebook: { type: String, required: true }
  },
  {
    versionKey: false
  }
)

export default mongoose.model<IPinewoodBikeModel>('PinewoodBike', PinewoodBikeSchema)
