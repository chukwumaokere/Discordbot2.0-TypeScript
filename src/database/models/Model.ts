import { Document, model, Schema } from "mongoose";

export interface ICamper {
    discordId: string;
  }
  

export const Camper = new Schema({
    discordId: String,
})

export default model<ICamper>("camper", Camper);