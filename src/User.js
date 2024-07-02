import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import defaultImage from "./images/defaultimg.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import imgOne from "./images/imgone.png";
import imgTwo from "./images/imgtwo.png";
import imgThree from "./images/imgthree.png";
import imgFour from "./images/imgfour.png";
import imgFive from "./images/imgfive.png";

import UserSocials from "./components/UserSocials";
import Categories from "./components/Categories";

const User = () => {
  const user = useSelector((state) => state.user.user);
  const {
    image,
    firstName,
    lastName,
    mail,
    linkedin,
    facebook,
    instagram,
    twitter,
    tiktok,
  } = user;

  const mainImg = image || defaultImage;

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-auto">
            <div className="d-flex justify-content-center align-items-center position-relative">
              <div
                className="d-flex  border border-dark rounded-circle bg-white mb-3 mt-3"
                style={{ width: "190px", height: "160px", overflow: "hidden" }}
              >
                <Image
                  src={mainImg}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  fluid
                />
              </div>
            </div>
            <div className="text-center mt-2 text-white fs-4 fw-bold lh-1 mb-3">
              <span>{firstName.toUpperCase() || "First Name"}</span>{" "}
              <span>{lastName.toUpperCase() || "Last Name"}</span>
            </div>
            <div className="text-center mt-2 text-white fs-5 fw-bold lh-1 mb-4">
              {mail || "Example@gmail.com"}
            </div>

            <div className="d-flex justify-content-center gap-3">
              <UserSocials
                href={`https://www.facebook.com/${facebook}`}
                Icon={FaFacebook}
              />
              <UserSocials
                href={`https://www.twitter.com/${twitter}`}
                Icon={FaTwitter}
              />
              <UserSocials
                href={`https://www.instagram.com/${instagram}`}
                Icon={FaInstagram}
              />
              <UserSocials
                href={`https://www.linkedin.com/in/${linkedin}`}
                Icon={FaLinkedin}
              />
              <UserSocials href={tiktok} Icon={FaTiktok} />
            </div>
          </div>
          <Categories img={imgOne} text={"Website"} />
          <Categories img={imgTwo} text={"WDB"} />
          <Categories img={imgThree} text={"Features & Television"} />
          <Categories img={imgFour} text={"Commercials"} />
          <Categories img={imgFive} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default User;
