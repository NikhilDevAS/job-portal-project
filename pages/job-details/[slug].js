import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

export default function JobDetailsPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <Layout>
      <div className="w-full min-h-[30vh] bg-[url('https://job-board.dexignzone.com/xhtml/images/banner/bnr1.jpg')] bg-cover bg-no-repeat">
        <div className="bg-black min-h-[30vh] bg-opacity-60 w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{slug}</h1>
          <p className="text-xl text-white mt-5">{`Home > jobs > ${slug}`} </p>
        </div>
      </div>
    </Layout>
  );
}
