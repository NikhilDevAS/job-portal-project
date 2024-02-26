import Layout from '@/components/Layout';
import { Context } from '@/components/context/context';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export default function Signup() {
  const { user } = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  const password = useRef({});
  password.current = watch('password', '');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('api/register', data);
      if (response.data.status) {
        router.push('/login');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout>
      <div
        className="min-h-screen w-full p-5
       flex items-center justify-center"
      >
        <div className="border border-blue-500 p-10 rounded-lg">
          <h1 className="text-2xl font-bold mb-5">Create Your Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col mb-2 ">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  {...register('firstname', {
                    required: 'First Name is required!',
                  })}
                />
                {errors.firstname && (
                  <p className="text-red-500 text-sm">
                    {errors.firstname.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col mb-2 ">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  {...register('lastname', {
                    required: 'lastname is required!',
                  })}
                />{' '}
                {errors.lastname && (
                  <p className="text-red-500 text-sm">
                    {errors.lastname.message}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col mb-2 ">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter username"
                {...register('phoneNumber', {
                  required: 'Phone Number is required!',
                })}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Password</label>
              <input
                type="password"
                placeholder="*****"
                {...register('password', { required: 'Password is required!' })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-2 ">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="*****"
                {...register('confirmPassword', {
                  validate: (value) =>
                    value === password.current || 'The passwords do not match!',
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <button
              className="bg-blue-500 text-white text-sm flex items-center
             justify-center w-full py-2 rounded-md"
              type="submit"
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
