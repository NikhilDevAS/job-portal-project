import Layout from '@/components/Layout';
import { Jobposts } from '@/modal/job';
import { dateFormat } from '@/utility/functions';
import { useRouter } from 'next/router';
import { CiBookmark, CiCalendarDate } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegUser } from 'react-icons/fa';
import Modal from '@/components/modal/Modal';
import { useContext, useState } from 'react';
import { Context } from '@/components/context/context';

export default function JobDetailsPage({ post }) {
  const { user } = useContext(Context);
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      {/* <pre>{JSON.stringify(post, null, 4)}</pre> */}
      <div className="w-full min-h-[30vh] bg-[url('https://job-board.dexignzone.com/xhtml/images/banner/bnr1.jpg')] bg-cover bg-no-repeat">
        <div className="bg-black min-h-[30vh] bg-opacity-60 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white uppercase">
            {post.title}
          </h1>
          <p className="text-xl text-white mt-5">
            {`Home > jobs > ${post.title}`}{' '}
          </p>
        </div>
      </div>

      <div className="px-[300px] bg-gray-100 py-10">
        <div className="flex w-full items-center justify-between">
          <div className="w-[70%]">
            <h2 className="text-xl font-bold mb-2">Job Description</h2>
            <p>{post.description}</p>

            {post.responsibilities && post.responsibilities.length > 0 && (
              <h2 className="text-xl font-bold mt-5">Key Responsibilities</h2>
            )}
            <ul className="list-disc pl-5 mt-2">
              {post.responsibilities.length > 0 &&
                post.responsibilities.map((data, index) => {
                  return <li key={index}>{data}</li>;
                })}
            </ul>
            {post.skills && post.skills.length > 0 && (
              <h2 className="text-xl font-bold mt-5">Skills and Experiences</h2>
            )}
            <ul className="list-disc pl-5 mt-2">
              {post.skills.length > 0 &&
                post.skills.map((skill, index) => {
                  return <li key={index}>{skill}</li>;
                })}
            </ul>
          </div>

          <div className="w-[30%]">
            <button
              className="mb-5 w-full px-5 py-2 bg-blue-500 text-lg text-white rounded-md shadow-md"
              onClick={() => {
                user ? setShowModal(true) : router.push('/login');
              }}
            >
              Apply Now
            </button>
            <div className="p-5 rounded-md bg-blue-200 w-full">
              <div className="mb-2 flex gap-5 items-center">
                <div>
                  <CiCalendarDate size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Posted on : </h4>
                  <p className="text-sm">{dateFormat(post.createdAt)}</p>
                </div>
              </div>
              <div className="mb-2 flex gap-5 items-center">
                <div>
                  <IoLocationOutline size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Location : </h4>
                  <p className="text-sm">{post.location}</p>
                </div>
              </div>
              <div className="mb-2 flex gap-5 items-center">
                <div>
                  <FaRegUser size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Job Title : </h4>
                  <p className="text-sm">{post.title}</p>
                </div>
              </div>
              <div className="mb-2 flex gap-5 items-center">
                <div>
                  <CiBookmark size={30} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Schedule : </h4>
                  <p className="text-sm">{post.schedule}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          title={post.title}
          jobid={post._id}
        />
      )}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const response = await Jobposts.findOne({ slug });

  return {
    props: {
      post: JSON.parse(JSON.stringify(response)),
    },
  };
}
