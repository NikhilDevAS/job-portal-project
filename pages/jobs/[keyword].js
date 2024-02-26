import Layout from '@/components/Layout';
import { IoLocationOutline } from 'react-icons/io5';
import { CiBookmark } from 'react-icons/ci';
import { MdAccessTime } from 'react-icons/md';
import { useRouter } from 'next/router';
import { Jobposts } from '@/modal/job';
import { mongooseConnect } from '@/lib/database';
import { dateFormat } from '@/utility/functions';
import { useForm } from 'react-hook-form';

export default function JobsPage({ posts }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.keyword) {
      router.push(`/jobs/${data.keyword}`);
    } else {
      router.push('/jobs/result');
    }
  };
  return (
    <Layout>
      {/* <pre>{JSON.stringify(posts, null, 4)}</pre> */}
      <main>
        <div className="w-full min-h-[30vh] bg-[url('https://job-board.dexignzone.com/xhtml/images/banner/bnr1.jpg')] bg-cover bg-no-repeat">
          <div className="bg-black min-h-[30vh] bg-opacity-60 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Browse Jobs</h1>
            <p className="text-xl text-white mt-5">{'Home > Browse Jobs'}</p>
          </div>
        </div>

        <div className="px-[300px] bg-gray-100 py-10">
          {/* Search Job field */}

          <div className="w-full flex items-center justify-center transform -translate-y-20">
            <div className="w-1/2 bg-white px-5 py-5">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center justify-between"
              >
                <input
                  type="text"
                  className="w-full border-0 outline-none py-5"
                  placeholder="Search Job Title, Keywords"
                  {...register('keyword')}
                />
                <button
                  type="submit"
                  className="text-white bg-blue-500 py-2 px-5 w-32 rounded-md shadow-md"
                >
                  Search
                </button>
              </form>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-3">{posts.length} Jobs Found</h2>
          <hr />

          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts && posts.length > 0
              ? posts.map((post, index) => {
                  return (
                    <div
                      className="p-5 hover:bg-blue-500 hover:bg-opacity-15 rounded-md shadow-md flex flex-col items-center justify-between"
                      key={index}
                    >
                      <div>
                        <h2 className="text-2xl text-center font-bold uppercase">
                          {post.title}
                        </h2>
                        <div className="flex gap-2 items-center justify-between">
                          <div className="flex gap-2 items-center justify-between text-blue-500 mt-2">
                            <IoLocationOutline size={20} />
                            {post.location}
                          </div>
                          <div className="flex gap-2 items-center justify-between text-blue-500 mt-2">
                            <CiBookmark size={20} />
                            {post.schedule}
                          </div>
                        </div>
                        <div className="flex gap-2 items-center text-blue-500 mt-2">
                          <MdAccessTime size={20} />
                          Published {dateFormat(post.createdAt)}
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          router.push('/job-details/' + post.slug);
                        }}
                        className="text-white mt-5 bg-blue-500 py-2 px-5 w-full rounded-md shadow-md"
                      >
                        More Details
                      </button>
                    </div>
                  );
                })
              : 'Sorry No Jobs Found!'}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { keyword } = context.query;
  await mongooseConnect();
  var response;
  if (keyword === 'result') {
    response = await Jobposts.find().sort({ _id: -1 });
  } else {
    response = await Jobposts.find({
      title: { $regex: new RegExp(keyword, 'i') },
    }).sort({ _id: -1 });
  }
  return {
    props: {
      posts: JSON.parse(JSON.stringify(response)),
    },
  };
}
