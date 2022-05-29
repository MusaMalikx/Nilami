import { SpinnerDotted } from 'spinners-react';

const Loading = () => {
    return (
        <div className='bg-black bg-opacity-75 absolute top-0 right-0 left-0'>
            <div className='flex justify-center items-center h-screen'>
                <SpinnerDotted size={150} thickness={90} speed={103} color="rgba(255, 255, 255)" />
            </div>
        </div>
    )
}

export default Loading;