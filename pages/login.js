import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Login() {
  return (
    <Layout>
      <div
        className="min-h-screen w-full p-5
       flex items-center justify-center"
      >
        <div className="border border-blue-500 p-10 rounded-lg w-1/4">
          <h1 className="text-2xl font-bold mb-5">Login to Your Account</h1>
          <form action="">
            <div className="flex flex-col mb-2 ">
              <label>Username</label>
              <input type="text" placeholder="Enter username" />
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Password</label>
              <input type="password" placeholder="*****" />
            </div>
            <button
              className="bg-blue-500 text-white text-sm flex items-center
             justify-center w-full py-2 rounded-md"
            >
              Login
            </button>
          </form>

          <div className="mt-4">
            <Link href="/signup" className="text-blue-500">
              {"Don't have account? Click here"}
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
