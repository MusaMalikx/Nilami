import React from "react";
// import Image from "next/image";
import img from "../../assets/user.jpeg";
import { BsLock } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiRoadMapLine } from "react-icons/ri";
import { IoLogOutOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
// import { useRouter } from "next/router";

function UserProfile(props) {
  // const router = useRouter();

  return (
    <div className="flex pt-10 lg:pt-0">
      <div className="card bg-[#f8f9fa] mt-7 lg:w-[350px] flex-grow">
        <div className="flex justify-center items-center p-10">
          <img
            src={img}
            height={150}
            width={150}
            className="rounded-full"
            alt="userimage"
          />
        </div>
        <div className="mb-10">
          <div className="card-title  text-center h5">{props.name}</div>
          <div className="card-subtitle mb-2 text-muted  text-center">
            {props.address}
          </div>
        </div>
        <div className="flex items-center flex-col">
          <label htmlFor="avatar" className="text-sm tracking-widest btn">Update Profile Pic</label>
          <input id="avatar" className="form-control p-2 rounded-none" name="avatar"
            accept="image/png, image/jpeg" type="file" />
        </div>
        {/* className="card-img-top rounded-circle" */}
      </div>
    </div>
  );
}

export default UserProfile;