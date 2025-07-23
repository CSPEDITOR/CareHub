import React, { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Chandra Shekhara prasad",
    image: assets.profile_pic,
    email: "chandrashekharaprasad@gmail.com",
    phone: "6352233322",
    address: {
      line1: "Routrarapur, chhanagiri",
      line2: "jankia, ranpur Road ",
    },
    gender: "male",
    dob: "2002-10-22",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div>
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>Contact INformations</p>
        <div>
          <p>Email id :</p>
          <p>{userData.email} :</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address : </p>
          {
            isEdit
            ?<p><input onChange={(e)=>setUserData(prev => ({...prev,address: {...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text" /> <br /><input onChange={(e)=>setUserData(prev => ({...prev,address: {...prev.address,line2:e.target.value}}))} value={userData.address.line1}  type="text" /></p>
            :<p>{userData.address.line1} <br /> {userData.address.line2}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
