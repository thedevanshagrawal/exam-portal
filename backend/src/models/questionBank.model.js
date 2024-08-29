import mongoose, { Schema } from "mongoose";

const questionBankSchema = new Schema(
  {
    questionsData: {
      type: Array,
    },
    subject: {
      type: String,
    },
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    option1: {
      type: String,
    },
    option2: {
      type: String,
    },
    option3: {
      type: String,
    },
    option4: {
      type: String,
    },
    topic: {
      type: String,
    },
    difficulty_level: {
      type: String,
      lowercase: true,
      enum: ['easy', 'medium', 'hard']
    }
  },
  {
    timestamps: true
  }
)


export const questionBank = mongoose.model("questionBank", questionBankSchema)