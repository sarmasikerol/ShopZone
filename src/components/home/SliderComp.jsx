import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center justify-center bg-gray-100 px-6">
          <div>
            <div className="text-6xl font-bold">Puma rtx-10 modalOfDinozor</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            width={400}
            src="https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/8ce97c97-3cb9-4e7f-86f4-6f39eef4b2b2/W+BLAZER+MID+%2777+NEXT+NATURE.png"
          />
        </div>
        <div className="!flex items-center justify-center bg-gray-[80]">
          <div className="px-8">
            <div className="text-6xl font-bold">Puma rtx-10 modalOfDinozor</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>

          <img
            width={400}
            src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,e_sharpen/global/395016/04/fnd/TUR/w/1000/h/1000/fmt/png"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
