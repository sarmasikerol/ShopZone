import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProducts } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetail, productDetailStatus } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getDetailProducts(id));
  }, [dispatch, id]);
  return (
    <div>
      <DetailComp productDetail={productDetail} />
    </div>
  );
};

export default Detail;
