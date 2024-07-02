import React from "react";

function Categories({ img, text }) {
  return (
    <div className="container-fluid mt-2">
      <div className="row justify-content-center">
        <div className="col-12">
          <div
            className="centered-container"
            style={{
              maxWidth: "900px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                backgroundImage: `url(${img})`,
                height: "130px",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                textAlign: "center",
                color: "#fff",
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}
              className="text-white"
            >
              {text.toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
