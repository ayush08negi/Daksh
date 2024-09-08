import React, { useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  {
    id: "1",
    title: "Detail",
    description: "Platinum Sponsor",
    imgUrl: "/sponser/skoda.webp"
  },
  {
    id: "6",
    title: "Detail",
    description: "Gold Sponsor",
    imgUrl: "/sponser/img6.webp"
  },
  {
    id: "7",
    title: "Detail",
    description: "Gold Sponsor",
    imgUrl: "/sponser/img7.webp"
  },
  {
    id: "8",
    title: "Detail",
    description: "Silver Sponsor",
    imgUrl: "/sponser/img8.webp"
  },
  {
    id: "9",
    title: "Detail",
    description: "Silver Sponsor",
    imgUrl: "/sponser/img9.webp"
  },
  {
    id: "10",
    title: "Detail",
    description: "Sponsor",
    imgUrl: "/sponser/img10.webp"
  },
  {
    id: "11",
    title: "Detail",
    description: "Sponsor",
    imgUrl: "/sponser/img11.webp"
  }
]

function SponserCard() {

  const settings = useMemo(() => {
    return {
      autoplay: true,
      speed: 2500,
      autoplaySpeed: 1500,
      cssEase: "linear",
      dots: true,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical: false,
      horizontalSwiping: true,
      swipeToSlide: true,
      pauseOnHover: true,
      variableWidth: false,

      responsive:[{
        breakpoint:600,
        settings:{
            slidesToShow:2,
            speed: 3500,
            autoplaySpeed: 2000,
        }
    }]
      
    };
  }, []);
  return (
    <div className=' w-auto'>
      <Slider {...settings}>
        {Data.map((d) => (
          <div key={d.id} className="h-40 w-full rounded  flex flex-col items-center justify-center">
            <img className="w-40 m-auto" src={d.imgUrl} alt="Sunset in the mountains" style={{aspectRatio:'3/2', objectFit:'contain', }}/>
            <div className="px-6 py-4">
              <p className="text-gray-100 text-center text-base  md:text-xl">
                {d.description}
              </p>
            </div>

          </div>
        ))}

      </Slider>

    </div>
  );
}
export default SponserCard

