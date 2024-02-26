import { mongooseConnect } from '@/lib/database';
import { User } from '@/modal/user';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      await mongooseConnect();
      const { firstname, lastname, email, phoneNumber, password } = req.body;
      const response = await User.create({
        name: firstname + ' ' + lastname,
        email,
        phoneNumber,
        password,
      });

      if (response) {
        res.status(201).json({ status: true, message: 'Successfully Sign Up' });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Something went wrong!' });
  }
}
