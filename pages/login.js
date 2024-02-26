import Layout from '@/components/Layout';
import { Context } from '@/components/context/context';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const { authUser, user } = useContext(Context);
  const [error, setError] = useState();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('api/login', data);

      console.log(response);
      if (response.data.status) {
        authUser(response.data.doc);
        router.push('/');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.response.data.message);
      console.log(err);
    }
  };

  return (
    <Layout>
      <pre>{JSON.stringify(error, null, 4)}</pre>
      <div
        className="min-h-screen w-full p-5
       flex items-center justify-center"
      >
        <div className="border border-blue-500 p-10 rounded-lg w-1/4">
          <h1 className="text-2xl font-bold mb-5">Login to Your Account</h1>
          {error && (
            <div className="bg-red-200 text-red-500 rounded-md text-center py-2 px-5 mb-2">
              <p>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-2 ">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                {...register('email', { required: 'Email is required!' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Password</label>
              <input
                type="password"
                placeholder="*****"
                {...register('password', { required: 'password is required!' })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              className="bg-blue-500 text-white text-sm flex items-center
             justify-center w-full py-2 rounded-md"
              type="submit"
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
