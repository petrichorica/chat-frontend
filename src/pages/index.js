import { useRouter } from 'next/router'
import { Image } from 'next/image'

export default function Home() {
  const router = useRouter();
  return (
    <div className='container mx-auto p-6'>
      <div className="bg-cover h-60 flex flex-wrap flex-row justify-center content-center" style={{backgroundImage: `url(../../img/pattern_waves.png)`}}>
        <h1 className="text-3xl bg-white">Welcome to the Online Chatting Room</h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded-full"
          onClick={() => {
            router.push('/register');
          }}
          >
            Sign Up
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {
            router.push('/login');
          }}
          >
          Log In
        </button>
      </div>
    </div>
  );
}