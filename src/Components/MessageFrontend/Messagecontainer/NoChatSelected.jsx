import {TiMessages} from 'react-icons/ti'
import { useAuthContext } from '../../../Context/AuthContext';
import { useSelector } from 'react-redux';
const NoChatSelected = () => {
	const{authUser} = useAuthContext();
    // const { authUser } = useSelector((state) => state.profile) || {};

    return (
      <div className='flex items-center justify-center w-full h-screen'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-800 font-semibold flex flex-col items-center gap-2'>
          <p>Welcome 👋 {authUser?.firstName}</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className='text-3xl md:text-6xl text-center' />
        </div>
      </div>
    );
}

export default NoChatSelected