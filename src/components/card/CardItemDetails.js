import img1 from "../../assets/CardItem/1.jpg"
import img2 from "../../assets/CardItem/2.jpg"
import img3 from "../../assets/CardItem/3.jpg"
import img4 from "../../assets/CardItem/4.jpg"
import img5 from "../../assets/CardItem/5.jpg"
import img6 from "../../assets/CardItem/6.jpg"
import img7 from "../../assets/CardItem/7.jpg"
import img8 from "../../assets/CardItem/8.jpg"
import img9 from "../../assets/CardItem/9.jpg"
import { BiTimeFive } from "react-icons/bi"
import { BsArrowUp, BsHash } from "react-icons/bs"
import { FaRegComment } from "react-icons/fa"

const CardItemDetails = () => {
    return (
        <div className="container-xxl my-10">
            <div className=" space-y-2 mb-3 tracking-wide text-center">
                <p className="text-2xl md:text-3xl font-bold">
                    2000 Ferrari 360 Spider
                </p>
                <p className="md:text-lg">
                    Belt Service Performed in 2021, Tubi Style Exhaust, Some Modifications
                </p>
            </div>
            <div className="flex justify-center mb-6">
                <div className="mr-1">
                    <img src={img1} className="w-[55.2rem] my-1" />
                </div>
                <div className="hidden lg:block mr-1">
                    <img src={img2} className="my-1 w-[12rem] h-[9rem]" />
                    <img src={img3} className="my-1 w-[12rem] h-[9rem]" />
                    <img src={img4} className="my-1 w-[12rem] h-[9rem]" />
                    <img src={img5} className="my-1 w-[12rem] h-[9rem]" />
                </div>
                <div className="hidden xl:block mr-1">
                    <img src={img6} className="my-1 w-[12rem] h-[9rem]" />
                    <img src={img7} className="my-1 w-[12rem] h-[9rem]" />
                    <img src={img8} className="my-1 w-[12rem] h-[9rem]" />
                    <img src={img9} className="my-1 w-[12rem] h-[9rem]" />
                </div>
            </div>
            <div className="flex m-1 p-2 bg-black text-white">
                <div className="flex-grow flex items-center justify-around">
                    <div className="flex space-x-2 items-center">
                        <BiTimeFive className="text-xl" />
                        <p className="text-gray-400">Time Left</p>
                        <p>2 Days</p>
                    </div>
                    <div className="sm:flex space-x-2 items-center hidden">
                        <BsArrowUp className="text-xl" />
                        <p className="text-gray-400">High Bid</p>
                        <p>$68,000</p>
                    </div>
                    <div className="hidden space-x-2 md:flex items-center">
                        <BsHash className="text-xl" />
                        <p className="text-gray-400">Bids</p>
                        <p>8</p>
                    </div>
                    <div className="space-x-2 hidden lg:flex items-center">
                        <FaRegComment className="text-xl" />
                        <p className="text-gray-400">Comments</p>
                        <p>12</p>
                    </div>
                </div>
                <div>
                    <button className="btn btn-light uppercase tracking-[.3em] py-2.5 px-3 rounded-none text-[.6875rem]">Place Bid</button>
                </div>
            </div>
            <div className="flex md:flex-row flex-col mt-4">
                <div className="flex-grow m-2 border-2 border-gray-400 rounded-md">
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Make</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Ferrari</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Model</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">360</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Mileage</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">21,800 Miles Shown</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">VIN</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">ZFFYT53B000119521</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Engine</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">3.6L V8</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Drivetrain</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Rear-wheel drive</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-gray-400 font-semibold bg-[#f8f8f8]">Transmission</p>
                        <p className="flex-grow p-2">Automatic (6-Speed)</p>
                    </div>
                </div>
                <div className="flex-grow m-2 border-2 border-gray-400 rounded-md">
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Body Style</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Convertible</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Exterior Color</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Rosso Corsa</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Interior Color</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Black</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Title Status</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Clean (TX)</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Location</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">Colleyville, TX 76034</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Seller</p>
                        <p className="flex-grow p-2 py-2 border-b border-gray-400">DallasE46</p>
                    </div>
                    <div className="flex">
                        <p className="flex-grow p-2 border-r border-gray-400 font-semibold bg-[#f8f8f8]">Seller Type</p>
                        <p className="flex-grow p-2">Private Party</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItemDetails