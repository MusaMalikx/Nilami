const SearchFilter = () => {
    return (
        <div>
            <div className="me-4 bg-white p-4 hidden lg:flex flex-col shadow-[0px_1px_5px_2px_rgba(0,0,0,0.2)] sticky inset-x-2 top-0">
                <div className="flex space-x-2 mb-3 items-center">
                    <p className=" whitespace-nowrap">Vehicle Type : </p>
                    <select className="form-select">
                        <option value="0">Any</option>
                        <option selected value="1">Cars</option>
                        <option value="2">Trucks</option>
                        <option value="3">Motorcycles</option>
                        <option value="4">Trailors / RV's</option>
                        <option value="5">ATV's</option>
                        <option value="6">Boats</option>
                        <option value="7">Other</option>
                    </select>
                </div>
                <div>
                    <div className="flex flex-col space-x-2 mb-3 items-center">
                        <strong className=" whitespace-nowrap mb-2">Auto Make / Model </strong>
                        <select className="form-select">
                            <option selected value="0">Any</option>
                            <option value="1">Cars</option>
                            <option value="2">Trucks</option>
                            <option value="3">Motorcycles</option>
                            <option value="4">Trailors / RV's</option>
                            <option value="5">ATV's</option>
                            <option value="6">Boats</option>
                            <option value="7">Other</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="py-2 text-center hover:underline hover:underline-offset-1 cursor-pointer">
                    <p>Add Another Make</p>
                </div>
                <hr />
                <div className="flex flex-col space-x-2 my-3 items-center">
                    <div className="text-center flex justify-between">
                        <div className="mr-3">
                            <strong>Year</strong>
                            <select className="form-select">
                                <option selected value="0">1992</option>
                                <option value="1">Cars</option>
                                <option value="2">Trucks</option>
                                <option value="3">Motorcycles</option>
                                <option value="4">Trailors / RV's</option>
                                <option value="5">ATV's</option>
                                <option value="6">Boats</option>
                                <option value="7">Other</option>
                            </select>
                            <strong>To</strong>
                            <select className="form-select">
                                <option selected value="0">2004</option>
                                <option value="1">Cars</option>
                                <option value="2">Trucks</option>
                                <option value="3">Motorcycles</option>
                                <option value="4">Trailors / RV's</option>
                                <option value="5">ATV's</option>
                                <option value="6">Boats</option>
                                <option value="7">Other</option>
                            </select>
                        </div>
                        <div>
                            <strong>Mileage</strong>
                            <select className="form-select">
                                <option selected value="0">0</option>
                                <option value="1">Cars</option>
                                <option value="2">Trucks</option>
                                <option value="3">Motorcycles</option>
                                <option value="4">Trailors / RV's</option>
                                <option value="5">ATV's</option>
                                <option value="6">Boats</option>
                                <option value="7">Other</option>
                            </select>
                            <strong>To</strong>
                            <select className="form-select">
                                <option selected value="0">250000</option>
                                <option value="1">Cars</option>
                                <option value="2">Trucks</option>
                                <option value="3">Motorcycles</option>
                                <option value="4">Trailors / RV's</option>
                                <option value="5">ATV's</option>
                                <option value="6">Boats</option>
                                <option value="7">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col space-x-2 mb-3 items-center">
                        <select className="form-select">
                            <option selected value="0">Any Location</option>
                            <option value="1">Cars</option>
                            <option value="2">Trucks</option>
                            <option value="3">Motorcycles</option>
                            <option value="4">Trailors / RV's</option>
                            <option value="5">ATV's</option>
                            <option value="6">Boats</option>
                            <option value="7">Other</option>
                        </select>
                    </div>
                </div>
                <div className="flex space-x-2 mb-3 items-center">
                    <p className=" whitespace-nowrap">Condition : </p>
                    <select className="form-select">
                        <option selected value="0">Any</option>
                        <option value="1">Run & Drive</option>
                        <option value="2">Engine Starts</option>
                    </select>
                </div>
                <div className="flex space-x-2 mb-3 justify-between">
                    <p className=" whitespace-nowrap">Condition : </p>
                    <input type="color" className="form-control w-28" />
                </div>
                <button className="btn btn-dark uppercase tracking-[.3em] rounded-none text-[.6875rem]" data-bs-dismiss="modal" aria-label="Close">Search</button>
            </div>
        </div>
    )
}

export default SearchFilter