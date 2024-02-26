import Layout from '@/components/Layout';
import { mongooseConnect } from '@/lib/database';
import { Jobposts } from '@/modal/job';
import { JobApplication } from '@/modal/jobapplication';
import { dateFormat } from '@/utility/functions';
import { useRouter } from 'next/router';

export default function ViewApplications({ applications, jobPost }) {
  return (
    <Layout>
      <div className="px-[300px] bg-gray-100 py-10 min-h-[70vh]">
        {/* <pre>{JSON.stringify(applications, null, 4)}</pre> */}
        {jobPost && (
          <h1 className="text-3xl font-bold py-10">
            Applications for {`"${jobPost.title}"`}
          </h1>
        )}

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table>
              <thead>
                <tr>
                  <th>sl.no</th>
                  <th>Applied Date</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Date of Birth</th>
                  <th>Location</th>
                  <th>email</th>
                  <th>phone</th>
                  <th>view Resume</th>
                </tr>
              </thead>
              <tbody>
                {applications &&
                  applications.length > 0 &&
                  applications.map((post, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{dateFormat(post.createdAt)}</td>
                        <td>{post.name}</td>
                        <td>{post.gender}</td>
                        <td>{dateFormat(post.dob)}</td>
                        <td>{post.location}</td>
                        <td>{post.email}</td>
                        <td>{post.phone}</td>
                        <td className="text-blue-500">
                          <a href={post.resume} target="_blank">
                            Click Here
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  await mongooseConnect();
  const response = await JobApplication.find({ jobId: id });
  const jobpost = await Jobposts.findOne({ _id: id });

  return {
    props: {
      applications: JSON.parse(JSON.stringify(response)),
      jobPost: JSON.parse(JSON.stringify(jobpost)),
    },
  };
}
