import Layout from '@/components/Layout';
import { mongooseConnect } from '@/lib/database';
import { Jobposts } from '@/modal/job';
import { dateFormat } from '@/utility/functions';
import { useRouter } from 'next/router';

export default function ViewJobs({ posts }) {
  const router = useRouter();
  return (
    <Layout>
      <div className="px-[300px] bg-gray-100 py-10 min-h-[70vh]">
        {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
        <h1 className="text-3xl font-bold py-10">Available Jobs</h1>

        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table>
              <thead>
                <tr>
                  <th>sl.no</th>
                  <th>title</th>
                  <th>Location</th>
                  <th>Posted Date</th>
                  <th>view Applications</th>
                  <th>Schedule</th>
                </tr>
              </thead>
              <tbody>
                {posts &&
                  posts.length > 0 &&
                  posts.map((post, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{post.title}</td>
                        <td>{post.location}</td>
                        <td>{dateFormat(post.createdAt)}</td>
                        <td
                          className="text-blue-500 cursor-pointer"
                          onClick={() =>
                            router.push(
                              '/admin-6429/view-applications/' + post._id
                            )
                          }
                        >
                          View Applications
                        </td>
                        <td>{post.schedule}</td>
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

export async function getServerSideProps() {
  await mongooseConnect();
  const response = await Jobposts.find().sort({ _id: -1 });

  return {
    props: {
      posts: JSON.parse(JSON.stringify(response)),
    },
  };
}
