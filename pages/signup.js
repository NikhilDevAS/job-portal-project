import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Signup() {
  return (
    <Layout>
      <div
        className="min-h-screen w-full p-5
       flex items-center justify-center"
      >
        <div className="border border-blue-500 p-10 rounded-lg">
          <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
          <form action="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col mb-2 ">
                <label>First Name</label>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="flex flex-col mb-2 ">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>

            <div className="flex flex-col mb-2 ">
              <label>Email</label>
              <input type="email" placeholder="Enter username" />
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Phone Number</label>
              <input type="number" placeholder="Enter username" />
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Password</label>
              <input type="password" placeholder="*****" />
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Confirm Password</label>
              <input type="password" placeholder="*****" />
            </div>
            <button
              className="bg-blue-500 text-white text-sm flex items-center
             justify-center w-full py-2 rounded-md"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-4">
            <Link href="/login" className="text-blue-500">
              {'You have account? Click here'}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
