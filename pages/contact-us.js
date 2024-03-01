import Layout from '@/components/Layout';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { IoPhonePortraitOutline } from 'react-icons/io5';

export default function ContactPage() {
  return (
    <Layout>
      <main>
        <div className="w-full min-h-[30vh] bg-[url('https://job-board.dexignzone.com/xhtml/images/banner/bnr1.jpg')] bg-cover bg-no-repeat">
          <div className="bg-black min-h-[30vh] bg-opacity-60 w-full flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
            <p className="text-xl text-white mt-5">{'Home > Contact Us'}</p>
          </div>
        </div>

        <div className="px-[300px]">
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border rounded-md p-10">
              <h2 className="text-2xl font-bold">Qucik Contact</h2>
              <p className="mt-5 text-gray-400">
                If you have any questions simply use the following contact
                details.
              </p>

              <div className="flex items-center gap-5 mt-5">
                <IoLocationOutline size={30} className="text-blue-500" />
                <div>
                  <h4 className="text-xl font-bold uppercase">Address:</h4>
                  <p className="text-gray-500">Kottarakkara, Kollam, Kerala</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <MdOutlineEmail size={30} className="text-blue-500" />
                <div>
                  <h4 className="text-xl font-bold uppercase">Email:</h4>
                  <p className="text-gray-500">sangeeth340@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mt-5">
                <IoPhonePortraitOutline size={30} className="text-blue-500" />
                <div>
                  <h4 className="text-xl font-bold uppercase">Phone:</h4>
                  <p className="text-gray-500">+91 812927331791</p>
                </div>
              </div>
            </div>
            <div className="border rounded-md p-10 bg-gray-100">
              <h2 className="text-2xl font-bold">Send An Message</h2>
              <form action="" className="w-full flex flex-col mt-5">
                <input
                  type="text"
                  className="mb-2 border-0 rounded-none text-xl outline-none "
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  className="mb-2 border-0 rounded-none text-xl outline-none"
                  placeholder="Your Email"
                />
                <textarea
                  className="mb-2 border-0 rounded-none text-xl p-5 outline-none"
                  name=""
                  id=""
                  placeholder="Type Message..."
                ></textarea>
                <button className="text-white w-full mt-5 bg-blue-500 py-2 px-5 rounded-md shadow-md">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
