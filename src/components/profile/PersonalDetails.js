import React, { useEffect, useState } from "react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import styles from "./profile.module.css";

const PersonalDetails = () => {

  const [user] = useAuthState(auth);
  const [data, setData] = useState({})

  const userRef = doc(db, "users", user.uid);

  useEffect(() => {
    const getUser = async () => {
      await getDoc(userRef)
        .then((res) => {
          // console.log(res.data())
          if (res.data){
            setData(res.data())
          }
        }).catch((err) => {
          console.log(err.message)
        });
    }
    getUser();
  }, [])

  const handleChange = (e) => {
    const id = e.target.id
    const value = e.target.value
    // e.target.value = data[id]
    setData({ ...data, [id]: value })
  }

  // console.log(data)


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    await setDoc(userRef, {
      ...data,
      timeStamp: serverTimestamp()
    }).then((res) => {
      alert("Changes are Saved!")
    }).catch((err) => {
      alert(err.message)
    });
  }

  // const handleValue = (e) => {
  //   e.target.value = data[e.target.id]
  //   // e.preventDefault();
  //   // const value = e.target.value
  //   // const id = e.target.id
  //   // console.log(data[id])
  //   // setData(...data, [id]:[data.value])
  // }

  return (
    <div className="mx-5">
      <strong className={`bg-[#f8f9fa] w-full block p-3 mt-4`}>
        PersonalDetails{" "}
      </strong>
      <form onSubmit={handleSubmit}>
        <div className='row mt-4'>
          {/* <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              FIRST NAME
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              LAST NAME
            </label>
            <input type='text' className='form-control' id='pw1' />
          </div> */}
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              City
            </label>
            <input type='text' id="city" onChange={handleChange} value={data && data.city} className='form-control' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              STREET
            </label>
            <input type='text' id="street" onChange={handleChange} value={data && data.street} className='form-control' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COMPANY
            </label>
            <input type='text' id="company" onChange={handleChange} value={data && data.company} className='form-control' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              ZIP
            </label>
            <input type='text' id="zip" onChange={handleChange} value={data && data.zip} className='form-control' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              STATE
            </label>
            <input type='text' id="state" onChange={handleChange} value={data && data.state} className='form-control' />
          </div>
          <div className='col-12 col-md-6 col-lg-3 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              COUNTRY
            </label>
            <input type='text' id="country" onChange={handleChange} value={data && data.country} className='form-control' />
          </div>
          <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='oldpassword' className='form-label'>
              TELEPHONE
            </label>
            <input type='text' id="telephone" onChange={handleChange} value={data && data.telephone} className='form-control' />
          </div>
          {/* <div className='col-12 col-md-6 mb-3'>
            <label htmlFor='text' className='form-label'>
              EMAIL
            </label>
            <input type='email' className='form-control' id='pw1' />
          </div> */}
        </div>
        <div className='d-flex justify-content-center mt-4 mb-5'>
          <button className='btn btn-dark rounded-none p-2 pl-3'>SAVE CHANGES</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalDetails;
