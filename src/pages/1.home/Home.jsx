import React from "react";
import Image from "../../components/Image";
import pwc1 from "../../assets/pwc1.png";
import pwc2 from "../../assets/pwc2.png";
import pwc3 from "../../assets/pwc3.png";
import pwc4 from "../../assets/pwc4.png";
import pwc5 from "../../assets/pwc5.png";

const Home = () => {
    const images = [
        {
            imageUrl: pwc1,
            caption:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla est et sollicitudin laoreet. Aenean vitae est ac metus porttitor congue efficitur quis lacus.",
        },
        {
            imageUrl: pwc2,
            caption:
                "Quisque vestibulum eget velit at finibus. Vivamus gravida tellus convallis",
        },
        {
            imageUrl: pwc3,
            caption:
                "libero facilisis lobortis. Aliquam erat volutpat. Duis in lectus nec ligula ornare fermentum at vel risus. Curabitur velit nisi, faucibus a lobortis vitae, facilisis quis ex.",
        },
        {
            imageUrl: pwc4,
            caption:
                "Cras libero justo, consequat ac tortor a, malesuada mollis justo. Curabitur congue dictum ante eu eleifend. Pellentesque sit amet ex quis nibh hendrerit laoreet ut a leo.",
        },
        {
            imageUrl: pwc5,
            caption:
                "Mauris nulla orci, convallis at nibh in, aliquam pharetra quam. Donec aliquam urna a nulla molestie placerat. Aliquam imperdiet consectetur velit.",
        },
    ];

    return (
        <div className="pt-6 mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-12">
                {images.map((image, index) => (
                    <div
                        className="flex flex-col items-center justify-center"
                        key={index}
                    >
                        <Image imageUrl={image.imageUrl} />
                        <p className="text-center">{image.caption}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
