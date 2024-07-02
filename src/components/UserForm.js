import { Form, Button, Card, Image } from "react-bootstrap";
import Linkedin from "../images/icons8-linkedin-48.png";
import Facebook from "../images/icons8-facebook-48.png";
import Instagram from "../images/icons8-instagram-48.png";
import Twitter from "../images/icons8-twitter-48.png";
import Mail from "../images/icons8-mail-48.png";
import Tiktok from "../images/icons8-tiktok-50.png";
import { FaPlus } from "react-icons/fa";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function UserForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.user.user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateUser({ ...formData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        dispatch(updateUser({ ...formData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    toast.success("ინფორმაცია წარმატებით დაემატა!");
    dispatch(updateUser(formData));
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Toaster />
        <Card
          className="d-flex justify-content-center"
          style={{ width: "70%", marginTop: "15px" }}
        >
          <Card.Title
            style={{
              borderBottom: "1px solid black",
              backgroundColor: "#e9ecef",
              color: "#343a40",
              padding: "5px",
            }}
          >
            მომხმარებლის ინფორმაცია
          </Card.Title>
          <Card.Body>
            <Form onSubmit={submitHandler}>
              <div className="d-flex justify-content-center mb-4">
                <Form.Group>
                  <div
                    className="border border-secondary rounded d-flex align-items-center justify-content-center"
                    style={{
                      width: "150px",
                      height: "150px",
                      cursor: "pointer",
                      position: "relative",
                    }}
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    {formData.image ? (
                      <img
                        src={formData.image}
                        alt="Preview"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      <FaPlus size={50} color="#ccc" />
                    )}
                  </div>
                  <Form.Control
                    type="file"
                    name="image"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </div>
              <div className="row gx-3 mb-3 align-items-center">
                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputFirstName"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Form.Control
                      type="text"
                      name="firstName"
                      required
                      placeholder="სახელი"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputLastName"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="გვარი"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputLinkedin"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Label style={{ margin: "0" }}>
                      <Image src={Linkedin} />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="linkedin"
                      placeholder="LinkedIn"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputFacebook"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Label style={{ margin: "0" }}>
                      <Image src={Facebook} />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="facebook"
                      placeholder="FaceBook"
                      value={formData.facebook}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputInstagram"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Label style={{ margin: "0" }}>
                      <Image src={Instagram} />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="instagram"
                      placeholder="Instagram"
                      value={formData.instagram}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputTwitter"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Label style={{ margin: "0" }}>
                      <Image src={Twitter} />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="twitter"
                      placeholder="Twitter"
                      value={formData.twitter}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputMail"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Label style={{ margin: "0" }}>
                      <Image src={Mail} />
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="mail"
                      required
                      placeholder="example@mail.com"
                      value={formData.mail}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group
                    controlId="exampleForm.ControlInputTiktok"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Form.Label style={{ margin: "0" }}>
                      <Image src={Tiktok} />
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="tiktok"
                      placeholder="Tiktok"
                      value={formData.tiktok}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-2">
                <Button variant="success" type="submit">
                  შენახვა
                </Button>
                <Link to="/user">
                  <Button>ბარათის ნახვა</Button>
                </Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default UserForm;
