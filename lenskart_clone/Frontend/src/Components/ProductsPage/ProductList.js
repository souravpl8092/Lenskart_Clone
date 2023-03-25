// import SingleProduct from "./SingleProduct.js";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import newData from "../../assets/newData";
import { getLenses } from "../../redux/ProductsPage/ProductSlice";
import NewSingleProduct from "./SingleProduct";
const Productlist = () => {
  // const [data, setData] = useState(newData);
  const { products: data, isLoading, isError } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLenses());
  }, []);

  const handleSort = (e) => {
    let query = e.target.value;

    if (query === "asc") query = "?sort='dprice'&order='asc'";
    if (query === "dsc") query = "?sort='dprice'&order='desc'";

    dispatch(getLenses(query));
  };
  return (
    <Wrapper className="wrapper">
      <div className="product_list_header">
        <span className="header_box category">All {"Computer"} Glasses</span>
        <span className="header_box"></span>
        <select
          className="text-red-700 text-2xl header_box sorting_box"
          onChange={handleSort}
        >
          <option value="">sort by price</option>
          <option value="asc">ascending</option>
          <option value="dsc">descending</option>
        </select>
      </div>
      <div className="product_list">
        {!isLoading && data.length > 0 ? (
          data.map((elem, ind) => (
            // <SingleProduct key={elem.id} productInfo={elem} />
            <NewSingleProduct key={ind} newData={elem} />
          ))
        ) : isLoading ? (
          <h1 style={{ fontSize: "25px", fontWeight: "bold" }}>
            Lenses are loading...
          </h1>
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 80%;
  padding: 0rem 5rem;

  //!Product List Header Styles
  .product_list_header {
    background-color: #ededed;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0rem 1rem;
  }

  .category {
    text-transform: uppercase;
    font-size: 2rem;
    color: grey;
  }
  //!Product List Styled
  .product_list {
    width: 100%;
    border: 1px solid #ededed;
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px 2rem;
  }
  //!product sorting box
  .sorting_box {
    font-size: 16px;
    text-transform: capitalize;
  }
  @media (max-width: 1100px) {
    width: 100%;
    .product_list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 720px) {
    width: 100%;
    .product_list {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 480px) {
    padding: 0rem 1rem;
    .category {
      font-size: 1.5rem;
    }
    .product_list {
      grid-template-columns: repeat(1, 1fr);
      padding: 20px 10px;
      width: 100%;
    }
  }
`;
export default Productlist;
