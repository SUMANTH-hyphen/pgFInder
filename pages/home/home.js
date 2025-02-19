import { useTheme } from "@mui/material/styles";
import React from "react";
import NavBar from "@/Components/NavBar/NavBar";
import { Divider, Grid, Typography, Box } from "@mui/material";
import Primary_Button from "@/Components/Ui/Primary_Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Review_card from "@/Components/Ui/Review_card";
import Image from "next/image";
import sofa from "../../public/assets/Images/sofa.png";
import man from "../../public/assets/Images/man.png";
import home from "../../public/assets/Images/home.png";
import logo from "../../public/assets/Images/logo.png";
import DualColorText from "@/Components/Ui/DualColorText";
import Card from "@/Components/Ui/Card";

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <NavBar />

      <div className="home-header-bg">
        <div className="home-header-title">
          <h1>Simple way to find </h1>
          <h1>the your perfect PG/Hostel</h1>
        </div>
        {/* search bar */}
        <div className="home-search-container">
          <div className="home-select-city">
            <span>{"Select City"}</span>
            <KeyboardArrowDownIcon />
          </div>
          <Divider
            style={{ backgroundColor: "#EBECF0" }}
            orientation="vertical"
            flexItem
          />
          <div className="home-search-city">
            <input placeholder="Search location or PG / Hoster name" />
          </div>

          <div className="home-search-button">
            <Primary_Button
              label={"Search"}
              color={"primary"}
              starticon={false}
            />
          </div>
        </div>
      </div>

      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "45px",
        }}
      >
        <div className="home-body-image-container">
          <div className="home-body-image-subcon">
            <Typography variant="h4" color={"secondary"}>
              {"Register to Post your "}
              <Typography color={"primary"}>{"property for free"}</Typography>
            </Typography>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
              <br /> has been the industry's standard dummy text ever since the
              1500s"
            </p>
            <Primary_Button color={"secondary"} label={"Post Now "} />
          </div>
        </div>
      </Grid>

      <div className="home-review-contianer">
        <div className="home-review-header">
          <DualColorText label1={"What our"} label2={"Customer say"} />

          <Typography style={{ width: "60%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been the industry's standard dummy text ever since the
            1500s,
          </Typography>
        </div>
        <div className="review-page-con">
          <Review_card />
          <Review_card />
          <Review_card />
          <Review_card />
        </div>
      </div>
      <div className="home-pg-count">
        <div
          style={{ flex: 1, display: "flex", justifyContent: "space-around" }}
        >
          <div className="home-pg">
            <Image src={home} width={100} height={100} alt="home" />
            <div className="home-count">
              <p className="home-count p">{"36+"}</p>
              <p className="home-count p">{"Popular Cities"}</p>
            </div>
          </div>
          <div className="home-pg">
            <Image src={sofa} width={100} height={100} alt="sofa" />
            <div className="home-count">
              <p className="home-count p">{"45+"}</p>
              <p className="home-count p">{"Verified PG & Hostels"}</p>
            </div>
          </div>
          <div className="home-pg">
            <Image src={man} width={100} height={100} alt="man" />
            <div className="home-count">
              <p className="home-count p">{"1000+"}</p>
              <p className="home-count p">{"Happy Customers"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-review-header">
          <DualColorText label1={"What our"} label2={"Customer say"} />

          <Typography style={{ width: "60%" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. has been the industry's standard dummy text ever since the
            1500s,
          </Typography>
        </div>

        <div className="home-details-card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
     
    </div>
  );
}
