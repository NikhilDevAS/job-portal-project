import Layout from '@/components/Layout';
import { Context } from '@/components/context/context';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function AddNewJob() {
  const { admin } = useContext(Context);
  const router = useRouter();
  const [responsibilities, setResponsibilities] = useState([]);
  const [skills, setSkills] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleResoponsibility = (index, data) => {
    setResponsibilities((prev) => {
      const responsses = [...prev];
      responsses[index] = data;
      return responsses;
    });
  };

  const handleAddResponsibility = () => {
    setResponsibilities((prev) => {
      return [...prev, ''];
    });
  };

  const handleRemoveResponsibility = (index) => {
    setResponsibilities((prev) => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== index;
      });
    });
  };

  const handleAddSkills = () => {
    setSkills((prev) => {
      return [...prev, ''];
    });
  };

  const handleSkills = (index, data) => {
    setSkills((prev) => {
      const skill = [...prev];
      skill[index] = data;
      return skill;
    });
  };

  const handleRemoveSkills = (index) => {
    setSkills((prev) => {
      return [...prev].filter((p, pIndex) => {
        return pIndex !== index;
      });
    });
  };
  useEffect(() => {
    if (!admin) {
      router.push('/admin-6429');
    }
  }, [admin, router]);

  const onSubmit = async (data) => {
    data.responsibilities = responsibilities;
    data.skills = skills;
    const response = await axios.post('/api/admin/add-new-job', data);
    if (response.data.status) {
      alert(response.data.message);
      router.push('/admin-6429');
    }
  };
  return (
    <Layout>
      <div className="px-[300px] bg-gray-100 py-10 min-h-[70vh]">
        <h1 className="text-3xl font-bold py-10">Add New Job</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mb-5">
            <label>Job Title </label>
            <input
              type="text"
              placeholder="Title"
              {...register('title', { required: 'Title is required' })}
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <label>Description </label>
            <textarea
              placeholder="Type here..."
              {...register('description', {
                required: 'Description is required',
              })}
            />
            {errors.description && (
              <p className="text-red-500 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col mb-5">
              <label>Location </label>
              <input
                type="text"
                placeholder="Location"
                {...register('location', { required: 'Location is required' })}
              />
              {errors.location && (
                <p className="text-red-500 text-sm">
                  {errors.location.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-5">
              <label>Schedule </label>
              <select
                name=""
                id=""
                {...register('schedule', { required: 'Schedule is required' })}
              >
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
              </select>
              {errors.schedule && (
                <p className="text-red-500 text-sm">
                  {errors.schedule.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col mb-5">
            <label>Key Responsibilities</label>
            <button
              type="button"
              className="text-white bg-blue-500 px-5 py-2 rounded-md w-1/5 mb-2"
              onClick={() => handleAddResponsibility()}
            >
              Add Resposibility
            </button>
            {responsibilities.length > 0 &&
              responsibilities.map((data, index) => {
                return (
                  <div
                    className="flex gap-5 items-center justify-between mb-2"
                    key={index}
                  >
                    <input
                      className="w-full"
                      type="text"
                      value={data}
                      onChange={(e) =>
                        handleResoponsibility(index, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="bg-red-300 text-red-500 font-bold px-5 py-2 rounded-md"
                      onClick={() => handleRemoveResponsibility(index)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>

          <div className="flex flex-col mb-5">
            <label>Skills & Experience</label>
            <button
              type="button"
              className="text-white bg-blue-500 px-5 py-2 rounded-md w-1/5 mb-2"
              onClick={() => handleAddSkills()}
            >
              Add Skills
            </button>
            {skills.length > 0 &&
              skills.map((data, index) => {
                return (
                  <div
                    className="flex gap-5 items-center justify-between mb-2"
                    key={index}
                  >
                    <input
                      className="w-full"
                      type="text"
                      value={data}
                      onChange={(e) => handleSkills(index, e.target.value)}
                    />
                    <button
                      type="button"
                      className="bg-red-300 text-red-500 font-bold px-5 py-2 rounded-md"
                      onClick={() => handleRemoveSkills(index)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-sm text-white py-5 flex items-center justify-center px-10 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
