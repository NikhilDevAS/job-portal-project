import { mongooseConnect } from '@/lib/database';
import { User } from '@/modal/user';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      await mongooseConnect();
      const { email, password } = req.body;
      const response = await User.findOne({ email });
      if (response) {
        if (response.password == password) {
          res.status(201).json({ status: true, doc: response });
        } else {
          res
            .status(401)
            .json({ status: false, message: 'Invalid Email Or Password!' });
        }
      }
    }
  } catch (err) {
    res.status(401).json(err);
  }
}
