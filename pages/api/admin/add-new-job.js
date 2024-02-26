import { mongooseConnect } from '@/lib/database';
import { Jobposts } from '@/modal/job';

export default async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      await mongooseConnect();
      const slugify = (str) =>
        str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');

      const data = await Jobposts.create({
        ...req.body,
        slug: slugify(req.body.title),
      });
      if (data) {
        res
          .status(201)
          .json({ status: true, message: 'Successfully Add New Job' });
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
}
