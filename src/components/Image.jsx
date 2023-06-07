import React from "react";

const Image = ({ imageUrl, caption }) => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "500px",
                    height: "300px",
                }}
            ></div>
            <p className="text-center">{caption}</p>
        </div>
    );
};

export default Image;
