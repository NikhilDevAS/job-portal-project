import { useContext } from 'react';
import { Context } from '../context/context';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Modal({ setShowModal, title, jobid }) {
  const { user } = useContext(Context);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      data.jobId = jobid;
      const response = await axios.post('/api/apply-job', data);
      if (response.data.status) {
        setShowModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop:blur-sm flex items-center justify-center duration-300 overflow-y-auto">
      <div className="bg-blue-300 p-5 rounded-md shadow-md">
        <div className="flex w-full items-center justify-between mb-4">
          <h3 className="font-bold text-xl uppercase">
            Application for {`"${title}"`}
          </h3>
          <div className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
              onClick={() => setShowModal(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div>
          {user && (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
              <div className="flex flex-col mb-2">
                <label>Full Name</label>
                <input
                  type="text"
                  defaultValue={user.name}
                  {...register('name', { required: 'Full Name is reqired' })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col mb-2">
                  <label>Date of birth</label>
                  <input
                    type="date"
                    {...register('dob', {
                      required: 'Date of birth is required',
                    })}
                  />
                  {errors.dob && (
                    <p className="text-red-500 text-sm">{errors.dob.message}</p>
                  )}
                </div>
                <div className="flex flex-col mb-2">
                  <label>Gender</label>
                  <select
                    name=""
                    id=""
                    {...register('gender', { required: true })}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </select>
                  {errors.gender && (
                    <p className="text-red-500 text-sm">
                      {errors.gender.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label>Email</label>
                <input
                  type="email"
                  defaultValue={user.email}
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex flex-col mb-2">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    defaultValue={user.phoneNumber}
                    {...register('phone', {
                      required: 'Phone Number is required',
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div className="flex flex-col mb-2">
                  <label>Location</label>
                  <input
                    type="text"
                    defaultValue={user.location && user.location}
                    {...register('location', {
                      required: 'Location is required',
                    })}
                  />
                  {errors.location && (
                    <p className="text-red-500 text-sm">
                      {errors.location.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <label>Resume Link</label>
                <input
                  type="text"
                  {...register('resume', {
                    required: 'Resume link is required!',
                  })}
                />
                {errors.resume && (
                  <p className="text-red-500 text-sm">
                    {errors.resume.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 py-2 mt-5 rounded-md shadow-md"
              >
                Apply
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
