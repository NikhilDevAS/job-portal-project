import Layout from '@/components/Layout';
import { FaSearch } from 'react-icons/fa';
import { GrDocumentUser } from 'react-icons/gr';
import { FaUserPlus } from 'react-icons/fa';
import { BsCheck2Circle } from 'react-icons/bs';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <Layout>
      {/* Carousel  */}
      <div className="w-full bg-[url('https://job-board.dexignzone.com/xhtml/images/back-lines.png')]">
        <div className="flex items-center justify-between bg-blue-500 bg-opacity-10 pt-20 px-[300px]">
          <div>
            <p className="text-sm text-blue-500 mb-5">
              We Have 208000+ Live Jobs
            </p>
            <h1 className="text-6xl font-bold">
              Your <span className="text-blue-500">Dream</span> Job Is <br />{' '}
              Wating For You
            </h1>
            <p className="text-sm text-blue-500 mt-5">
              Type your keywork, then click search to find your perfect job.
            </p>

            <div className="w-full bg-white px-5 py-5 mt-5 rounded-sm shadow-md">
              <form
                action=""
                className="flex justify-between items-center gap-5"
              >
                <div className="flex items-center w-full text-xl">
                  <FaSearch size={30} className="text-blue-500" />
                  <input
                    type="text"
                    className="w-full py-3 border-0 outline-none"
                    placeholder="Job Title, Keywords"
                  />
                </div>
                <button className="text-white bg-blue-500 py-2 px-5 w-32 rounded-md shadow-md">
                  Find Job
                </button>
              </form>
            </div>
            <p className="mt-5 text-gray-500">
              <strong className="text-black">Popular Searches :</strong>{' '}
              Designer, Senor, Architecture, IOS, Etc.
            </p>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <img
              src="https://job-board.dexignzone.com/xhtml/images/man.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      {/* How to Apply Job */}

      <div className="bg-gray-100 bg-opacity-50 px-[300px] flex items-center justify-center min-h-[70vh]">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-blue-500">How it works?</p>
          <h3 className="text-4xl font-bold mt-5">Follow Easy 4 Steps</h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae{' '}
            <br />
            minus illum voluptatum esse dignissimos neque quo itaque aspernatur,
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <div className="bg-blue-500 text-white py-4 mb-5 px-5 flex items-center justify-center rounded-lg shadow-md">
                <FaSearch size={30} />
              </div>
              <p className="font-bold text-2xl mb-5">Search Jobs</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                maiores aliquid{' '}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <div className="bg-blue-500 text-white py-4 mb-5 px-5 flex items-center justify-center rounded-lg shadow-md">
                <GrDocumentUser size={30} />
              </div>
              <p className="font-bold text-2xl mb-5">Cv/Resume</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                maiores aliquid{' '}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <div className="bg-blue-500 text-white py-4 mb-5 px-5 flex items-center justify-center rounded-lg shadow-md">
                <FaUserPlus size={30} />
              </div>
              <p className="font-bold text-2xl mb-5">Create Account</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                maiores aliquid{' '}
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <div className="bg-blue-500 text-white py-4 mb-5 px-5 flex items-center justify-center rounded-lg shadow-md">
                <BsCheck2Circle size={30} />
              </div>
              <p className="font-bold text-2xl mb-5">Apply Them</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
                maiores aliquid{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex items-center justify-between pt-20 px-[300px]">
          <div>
            <p className="text-sm text-blue-500 mb-5">Recent Jobs</p>
            <h2 className="text-6xl font-bold">
              Over all 10,00+ Talented People Registered in Our Website
            </h2>
            <p className="text-sm mt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              natus, cupiditate ut officiis iste praesentium voluptates alias?
              Ut, natus libero quidem necessitatibus consequatur ab, deleniti
              eos in provident facere voluptas.
            </p>
            <button
              onClick={() => router.push('/signup')}
              className="text-white bg-blue-500 py-2 px-5 w-32 rounded-md shadow-md mt-10"
            >
              Join Now
            </button>
          </div>
          <div className="flex items-center justify-center w-full">
            <img
              src="https://job-board.dexignzone.com/xhtml/images/man1.png"
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 bg-opacity-50 px-[300px] flex items-center justify-center min-h-[70vh]">
        <div className="flex flex-col justify-center items-center text-center">
          <p className="text-blue-500">Job Category</p>
          <h3 className="text-4xl font-bold mt-5">
            Choose Your Desire Category
          </h3>
          <p className="mt-5">
            There are many variations of passages of available, but the <br />{' '}
            majority have suffered some form, by injected humour, <br /> or look
            even slightly believable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 w-full">
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">UI/UX Designer</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Web Designer</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Javascript Developer</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Animation</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Graphic Designer</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Web Developer</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Photoshop</p>
              <p>100+ New Jobs</p>
            </div>
            <div className="bg-white hover:bg-blue-500 hover:text-white duration-300 cursor-pointer rounded-lg p-5 shadow-md flex flex-col items-center justify-center">
              <p className="font-bold text-2xl mb-5">Frontend Developer</p>
              <p>100+ New Jobs</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
