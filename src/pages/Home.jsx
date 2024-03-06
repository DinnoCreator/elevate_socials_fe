import React from "react";
import { instagramAppId, url } from "../variables";

const Home = () => {
  // Invoke this function on button click or whatever other use case
  const setupInsta = () => {
    console.log(url);
    let uri = `https://api.instagram.com/oauth/authorize?client_id=${instagramAppId}&redirect_uri=${url}&scope=user_profile,user_media&response_type=code`;
    window.open(uri, "_blank").focus();
  };
  return (
    <div className="eddyContainer">
      <div className="mt-4">
        <h1 className="text-[orange] cursor-pointer" onClick={setupInsta}>
          Instagram API
        </h1>
      </div>
    </div>
  );
};

export default Home;
