import { mongooseConnect } from '@/lib/database';
import { JobApplication } from '@/modal/jobapplication';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await mongooseConnect();
    const { name, dob, gender, email, phone, location, resume, jobId } =
      req.body;
    const data = await JobApplication.create({
      name,
      dob,
      gender,
      email,
      phone,
      location,
      resume,
      jobId,
    });

    if (data) {
      res.status(201).json({ status: true, message: 'Successfully Applied' });
    }
  }
}
