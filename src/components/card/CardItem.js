import { useState } from "react"
import cardImage from "../../assets/card.jpg"

const CardItem = () => {

    const [hover, setHover] = useState(false);

    return (
        <div className="relative"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div className="flex flex-col items-center max-w-xs mx-2 py-2 my-1">
                <div>
                    <img src={cardImage} className="" />
                </div>
                <div className=" space-y-4 tracking-wide">
                    <p className="text-2xl font-bold">
                        2018 Mercedes-AMG GT S Coupe
                    </p>
                    <p className="text-sm">
                        ~11,400 Miles, 515-hp Twin-Turbo V8, No Major Modifications
                    </p>
                    <p className="text-xs text-gray-400">
                        Hudson, NH 03051
                    </p>
                </div>

            </div>
            {
                hover &&
                <div className="absolute z-10 top-0 h-full w-full bg-black bg-opacity-25 flex justify-center items-center">
                    <div className="bg-black bg-opacity-50">
                    <button className="btn btn-outline-light py-2 font-bold uppercase tracking-[.3em] rounded-none text-[.6875rem]" data-bs-dismiss="modal" aria-label="Close">View Details</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default CardItem