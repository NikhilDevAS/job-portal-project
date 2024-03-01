import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { PiUserFocusFill } from 'react-icons/pi';
import { Context } from './context/context';

export default function Layout({ children, ...props }) {
  const { user, logout, admin } = useContext(Context);
  const router = useRouter();
  return (
    <>
      <nav>
        <div>
          <Link
            href="/"
            className="flex items-center justify-between gap-2 text-3xl"
          >
            <PiUserFocusFill size={40} />
            <p>
              <span className="text-black">Job</span> <span>Portal</span>
            </p>
          </Link>
        </div>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/jobs/result">Browse JObs</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          {user ? (
            <>
              <li>
                <button className="uppercase" onClick={() => router.push('/')}>
                  {user.name}
                </button>
              </li>
              <li>
                <button className="uppercase" onClick={() => logout()}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  className="uppercase"
                  onClick={() => router.push('/login')}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  className="uppercase"
                  onClick={() => router.push('/signup')}
                >
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div>{children}</div>
      <footer>
        <div className="footer-container">
          <div className="w-1/4">
            <div className="flex items-center gap-2 mb-5">
              <PiUserFocusFill size={40} />
              <span className="text-3xl font-bold">JOB PORTAL</span>
            </div>
            <p className="text-sm mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              veritatis natus,{' '}
            </p>

            <p className="text-blue-500 cursor-pointer">jobportal.com</p>
          </div>

          <div className="short-links">
            <div>
              <p>Quick Links</p>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Browse Jobs</li>
                <li>Categories</li>
                <li>Register</li>
              </ul>
            </div>
            <div>
              <p>Categories</p>
              <ul>
                <li>Web Developer</li>
                <li>Graphic Designer</li>
                <li>UI/Ux Designer</li>
                <li>Animation</li>
                <li>Software Tester</li>
              </ul>
            </div>
            <div>
              <p>Follow Us</p>
              <ul>
                <li>Facebook</li>
                <li>Instgram</li>
                <li>Google+</li>
                <li>Youtube</li>
              </ul>
            </div>
            <div>
              <p>Newsletters</p>
              <div>
                <span>
                  Lorem, ipsum dolor sit amet <br />
                  consectetur adipisicing elit. <br /> Magnam veritatis ad aut
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[300px]">
          <hr className="w-full my-5 border-2 border-gray-300" />
          <div className="text-center mb-10">
            <p>
              Copyright @ 2024 | Web Design by{' '}
              <Link href="/admin-6429">
                <span className="text-cyan-400 font-bold">Sangeeth & Team</span>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
