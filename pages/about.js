/* eslint-disable react/no-unescaped-entities */
import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function AboutPage() {
  const router = useRouter();
  return (
    <Layout>
      <main>
        <div className="w-full min-h-[30vh] bg-[url('https://job-board.dexignzone.com/xhtml/images/banner/bnr1.jpg')] bg-cover bg-no-repeat">
          <div className="bg-black min-h-[30vh] bg-opacity-60 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className="text-xl text-white mt-5">{'Home > About'}</p>
          </div>
        </div>
        <div className="px-[300px]">
          <div className="mt-10 flex items-center justify-between w-full">
            <div className="w-full">
              <h2 className="text-3xl font-bold">About Us</h2>
              <h4 className="mt-2 text-3xl">We create unique experiences</h4>
              <p className="text-sm text-gray-400 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and. It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less.
              </p>
              <p className="text-sm text-gray-400 mt-5">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less.
              </p>

              <button
                className="text-white mt-10 bg-blue-500 py-2 px-5 w-32 rounded-md shadow-md"
                onClick={() => router.push('/jobs')}
              >
                Find Job
              </button>
            </div>
            <div className="w-full">
              <img
                src="https://job-board.dexignzone.com/xhtml/images/our-work/pic1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
