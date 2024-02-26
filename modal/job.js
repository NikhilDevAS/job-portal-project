const { Schema, models, model, default: mongoose } = require('mongoose');

const JobPostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    schedule: { type: String, required: true },
    responsibilities: { type: Array },
    skills: { type: Array },
    slug: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Jobposts = models.Jobposts || model('Jobposts', JobPostSchema);
