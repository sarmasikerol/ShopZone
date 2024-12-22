import React from "react";

const DetailComp = ({ productDetail }) => {
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-[700px] h-[500px] object-cover"
        src={productDetail?.image}
        alt=""
      />
      <div className="">
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2 text-2xl">{productDetail?.description}</div>
        <div className="my-2 text-xl text-red-500">
          Rating: {productDetail?.rating?.rate}
        </div>
        <div className="my-2 text-xl text-red-500">
          Count: {productDetail?.rating?.count}
        </div>
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-sm">TL</span>
        </div>

        <div>
          <div>-</div>
          <input type="text" value="0" />
          <div>+</div>
        </div>

        <div className="border w-[200] text-2xl rounded-md bg-gray-200 cursor-pointer h-16 flex items-center justify-center">
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
