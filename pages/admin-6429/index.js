import Layout from '@/components/Layout';
import { Context } from '@/components/context/context';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function AdminPage() {
  const { adminLogin, admin, logout } = useContext(Context);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    logout();
  }, [logout]);
  const onSubmit = (data) => {
    adminLogin(data);
  };

  return (
    <Layout>
      <div className="px-[300px] bg-gray-100 py-10 min-h-[70vh]">
        {admin ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <button
                className="bg-blue-500 text-white text-lg rounded-md shadow-sm py-2"
                onClick={() => router.push('/admin-6429/add-new-job')}
              >
                Add New Job
              </button>
              <button
                className="bg-blue-500 text-white text-lg rounded-md shadow-sm py-2"
                onClick={() => router.push('/admin-6429/view-jobs')}
              >
                View Jobs & Applications
              </button>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold py-10">Login to Admin Panel</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                />

                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="mt-10 bg-blue-500 text-sm text-white font-bold px-5 py-2 rounded-md"
              >
                Login
              </button>
            </form>
          </>
        )}
      </div>
    </Layout>
  );
}
