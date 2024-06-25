import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { CarouselComponent } from "../../components/CarouselComponent";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { TermsAndConditions } from "../../components/TearmsAndConditions";
import { MainButton } from "./MyStore";
export const HomeDashboard = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  let token = JSON.parse(localStorage.getItem("Token"));
  let item = [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const itemsToShow = showAll ? data.length : 8;
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleCart = (ele, id) => {
    console.log(ele);
    cart.push(ele);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added");
    window.location.reload();
  };

  cart.map((ele, i) => {
    item.push(Number(ele.id));
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

  return (
    <div>
      <div>
        <CarouselComponent/>
      </div>
      <div>
      <TermsAndConditions/>
      </div>
     <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        paddingTop: "30px",
        gap: "30px",
        // rowGap: "100px"
      }}
    >
      {data?.slice(0, itemsToShow).map((item) => (
        <div key={item.id} style={{ width: "260px", height: "260px" }}>
          <Paper sx={{ width: "260px", border: "0.5px solid #d5d4d4" }}>
            <div style={{ position: "absolute", width: "260px" }}>
              {item.image && (
                <img
                  style={{
                    width: "250px",
                    height: "140px",
                    objectFit: "contain",
                  }}
                  src={item.image}
                  alt={item.title}
                />
              )}
            </div>
            <div
              style={{
                width: "260px",
                height: "140px",
                display: "flex",
                justifyContent: "center",
                position: "relative",
                top: "100px",
              }}
            >
              <Paper
                style={{
                  justifyContent: "space-between",
                  border: "1px solid #d5d4d4" ,
                  flexDirection: "column",
                  alignItems: "center",
                  height: "130px",
                  display: "flex",
                  padding: "10px",
                  width: "200px",
                }}
              >
                <div>
                  <Typography
                    sx={{
                      textOverflow: "ellipsis",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      fontSize: "12px",
                      width: "200px",
                    }}
                    gutterBottom
                  >
                    {item.category}
                  </Typography>
                  <Typography
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      fontSize: "12px",
                      width: "200px",
                    }}
                    gutterBottom
                  >
                    {item.description}
                  </Typography>
                  <Typography
                    sx={{
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      fontWeight: "bold",
                      fontSize: "12px",
                      width: "200px",
                      color: "#00aeae"
                    }}
                    gutterBottom
                  >
                   Rs.{item.price}
                  </Typography>
                </div>

                <MainButton sx={{ height: "30px", width: "185px",}} variant="contained">
                  Add to cart
                </MainButton>
              </Paper>
            </div>
          </Paper>
        </div>
      ))}
    </div>
    <div style={{ marginTop: '20px', marginLeft: '80%' }}>
    {!showAll && (
        <MainButton sx={{ marginTop: '20px' }} variant="contained" onClick={toggleShowAll}>Show All Products <KeyboardDoubleArrowRightIcon/></MainButton>
      )}
    </div>
    </div>
   
  );
};
