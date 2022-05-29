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
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { stringify } from "@firebase/util"
import { auth, db } from "../../lib/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore"
import Loading from "../loading/Loading"

const CardItemDetails = () => {

    const location = useLocation()
    const { card } = location.state
    const [aucRef, setAucRef] = useState(doc(db, "auctions", card.id))
    const [user, loading] = useAuthState(auth)

    const [bid, setBid] = useState(0);
    const [hbid, setHBid] = useState(parseInt(card.baseprice));
    const [counter, setCounter] = useState("00:00:00")
    const navigate = useNavigate()
    // const [data, setData] = useState({})

    // console.log(bid, hbid)

    useEffect(() => {
        const setUser = async () => {
            await getDoc(aucRef)
                .then((res) => {
                    // console.log(res.data())
                    if (res.data) {
                        // setData(res.data())
                        setHBid(parseInt(res.data().bid))
                    }
                }).catch((err) => {
                    console.log(err.message)
                });
        }
        setUser();
    }, [])

    // console.log(card.endtime)

    useEffect(() => {
        const timer = () => {
            // Set the date we're counting down to
            // var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
            var countDownDate = new Date(card.endtime).getTime();
            // Update the count down every 1 second
            var x = setInterval(function () {

                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
                //     + minutes + "m " + seconds + "s ";

                setCounter(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

                // If the count down is finished, write some text
                if (distance < 0) {
                    clearInterval(x);
                    // document.getElementById("demo").innerHTML = "EXPIRED";
                    setCounter("EXPIRED")
                }
            }, 1000);
        }
        if (card.endtime)
            timer();
    }, [])


    const handleBid = (e) => {
        e.preventDefault();
        // console.log(e.target.value)
        if (e.target.value >= hbid + 20000) {
            setBid(e.target.value)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (bid >= hbid + 20000) {
            setHBid(bid)
            // submitBid();
            // console.log(user)

            // await getDoc(aucRef)
            //     .then((res) => {
            //         // console.log(res.data())
            //         if (res.data) {
            //             setData(res.data())
            //             setHBid(res.data().bid)
            //         }
            //     }).catch((err) => {
            //         console.log(err.message)
            //     });

            // let count = 0
            // if (data.count !== null) {
            //     count = data.count + 1
            // }

            // console.log(count, data.count)

            await setDoc(aucRef, {
                uid: user.uid,
                bid: bid,
                timeStamp: serverTimestamp()
            }).then((res) => {
                alert("Bid Submitted!")
                // data-bs-dismiss="modal"
            }).catch((err) => {
                alert(err.message)
            });
            // alert("Bid Submitted!")
        }
        else {
            alert(`Bid value should be greater than ${hbid} by 20000!`)
        }
    }

    if (loading)
        return <Loading />
    else
        if (!user)
            return navigate('/login')
        else
            return (
                <div className="container-xxl my-10">
                    {card &&
                        <>
                            <div className=" space-y-2 mb-3 tracking-wide text-center">
                                <p className="text-2xl md:text-3xl font-bold">
                                    {card.title}
                                </p>
                                <p className="md:text-lg">
                                    {card.description}
                                </p>
                                <p className="md:text-lg">
                                    {card.body}
                                </p>
                            </div>
                            <div className="flex justify-center mb-6">
                                <div className="mr-1">
                                    <img src={card.img1} className="w-[55.2rem] my-1" alt="" />
                                </div>
                                <div className="hidden lg:block mr-1">
                                    <img src={card.img2} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                    <img src={card.img3} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                    <img src={card.img4} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                    <img src={card.img5} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                </div>
                                <div className="hidden xl:block mr-1">
                                    <img src={card.img6} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                    <img src={card.img7} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                    <img src={card.img8} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                    <img src={card.img9} className="my-1 w-[12rem] h-[9rem]" alt="" />
                                </div>
                            </div>
                            <div className="flex m-1 p-2 bg-black text-white">
                                <div className="flex-grow flex items-center justify-around">
                                    <div className="flex space-x-2 items-center">
                                        <BiTimeFive className="text-xl" />
                                        <p className="text-gray-400">Time Left</p>
                                        <p>{counter}</p>
                                    </div>
                                    <div className="sm:flex space-x-2 items-center hidden">
                                        <BsArrowUp className="text-xl" />
                                        <p className="text-gray-400">High Bid</p>
                                        <p>{`USh ${hbid}`}</p>
                                    </div>
                                    {/* <div className="hidden space-x-2 md:flex items-center">
                                <BsHash className="text-xl" />
                                <p className="text-gray-400">Bids</p>
                                <p>8</p>
                            </div> */}
                                    {/* <div className="space-x-2 hidden lg:flex items-center">
                        <FaRegComment className="text-xl" />
                        <p className="text-gray-400">Comments</p>
                        <p>12</p>
                    </div> */}
                                </div>
                                {
                                    card.auction &&
                                    <div>
                                        <button className="btn btn-light uppercase tracking-[.3em] py-2.5 px-3 rounded-none text-[.6875rem]" data-bs-toggle="modal" data-bs-target="#exampleModal">Place Bid</button>
                                    </div>
                                }
                            </div>
                            <div className="flex md:flex-row flex-col mt-4">
                                <div className="flex-grow m-2 border-2 border-gray-400 rounded-md">
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Make</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.make}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Model</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.model}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Mileage</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.milage}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">VIN</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.vin}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Engine</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.engine}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Drivetrain</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.drivetrain}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-gray-400 font-semibold bg-[#f8f8f8]">Transmission</p>
                                        <p className="flex-grow p-2">{card.transmission}</p>
                                    </div>
                                </div>
                                <div className="flex-grow m-2 border-2 border-gray-400 rounded-md">
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Body Style</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.bodystyle}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Exterior Color</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.exteriorcolor}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Interior Color</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.interiorcolor}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Title Status</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.titlestatus}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Location</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.location}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-b border-gray-400 font-semibold bg-[#f8f8f8]">Seller</p>
                                        <p className="flex-grow p-2 py-2 border-b border-gray-400">{card.seller}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="flex-grow p-2 border-r border-gray-400 font-semibold bg-[#f8f8f8]">Seller Type</p>
                                        <p className="flex-grow p-2">{card.sellertype}</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Button trigger modal --> */}
                            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className='flex items-center space-x-3'>
                                                <label htmlFor='oldpassword' className='form-label whitespace-nowrap'>
                                                    Enter Bid for the Car :
                                                </label>
                                                <input type='number' id="bid" onChange={handleBid} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-secondary">Close</button>
                                            <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Submit Bid</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
            )
}

export default CardItemDetails