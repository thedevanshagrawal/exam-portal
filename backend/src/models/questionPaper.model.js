import mongoose, { Schema } from "mongoose";

const questionPaperSchema = new Schema(
  {
    questionsData: {
      type: Array,
    },
    test_name: {
      type: String,
    },
    examTime: {
      type: String,
    },
    examDate: {
      type: String,
    },
    total_marks: {
      type: String,
    },
    School_class: {
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


export const questionPaper = mongoose.model("questionPaper", questionPaperSchema)