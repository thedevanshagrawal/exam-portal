import mongoose, { Schema } from "mongoose";

const subjectTopicSchema = new Schema(
    {
        subject: {
            type: String,
        },
        topic: {
            type: String,
        },
    },
    {
        timestamps: true
    }
)


export const SubjectAndTopic = mongoose.model("SubjectAndTopic", subjectTopicSchema)