import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
import Loading from "../loading/Loading";
import PersonalDetails from "./PersonalDetails";
import UserProfile from "./UserProfile";

const Profile = () => {

  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

  if (loading)
    return <Loading />
  else
    if (!user)
      return navigate('/login')
    else
      return (
        <div className='container-xxl text-sm py-20'>
          <div className='text-center pb-20'>
            <h1 className="uppercase tracking-[0.8rem] py-10 text-center text-4xl lg:text-6xl whitespace-nowrap">Profile</h1>
            {/* <div className={`${styles.heroheading} h1`}>Your Profile</div> */}
            <div className="text-sm text-center text-muted">
              {" "}
              Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt ante
              vitae massa. Cras pede libero, dapibus nec, retium sit amet, tempor
              quis. Fusce dui leo, imperdiet in.
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-center'>
            <div >
              {/* <ChangePassword /> */}
              <PersonalDetails />
            </div>
            <div >
              <UserProfile
                name={user.displayName}
                address={user.email}
              />
            </div>
          </div>

        </div>
      );
}

export default Profile;
