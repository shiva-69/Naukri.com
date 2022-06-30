import Carousel from "react-elastic-carousel";
// import Item from "./Item2";
// import "./styles2.css";
import { Box } from "@chakra-ui/react";
// import { StarIcon } from "@chakra-ui/icons";
// import {BsFillGeoAltFill} from "react-icons/bs"

import styled from "styled-components";

const Item= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 80%;
 border-radius:22px;
  // border:0.1px solid gray;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
 /* :hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
 } */
 :hover{
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
 }
  color:black;
  margin: 0 15px;
  font-size: 1em;
`;


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1000, itemsToShow: 5 }
];

export const Slider2=()=> {
  return (
    <div style={{  fontFamily: "sanSerif",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "200px",
      marginTop: "0px",}}>
      <Carousel  breakPoints={breakPoints} width={"20%"}>
        {arr.map((item)=>(

       <Item>
      {/* // <div style={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", width:"90%"}} > */}
          <Box className="perdiv" textAlign={"center"} display={"flex"} flexDirection={"column"} gap={"10px"} alignItems={"center"}>
             <img style={{height:"70px", width:"70px"}} src={item.image} alt=""/>
            <Box  display={"flex"}> <h4 style={{color: "#1b2437", fontSize:"17px",fontWeight:"bolder"}}>{item.title}</h4><span style={{color:"grey",margin:"3px 0px 0px 4px"}}>></span></Box>
           
               <Box display={'flex'}>
               <p style={{marginRight:"10px"}}>{item.subtitle}</p>
                </Box>
         </Box>
      {/* </div> */}
         </Item>
        ))}
        
      </Carousel>
    </div>
  );
}



const arr=[
  {
    image:"https://static.naukimg.com/s/0/0/i/trending-naukri/remote.svg",
    title:"Remote",
    subtitle:"743+ Jobs",
   
  },
  {
    image:"https://static.naukimg.com/s/0/0/i/trending-naukri/mnc.svg",
    title:"MNC",
    subtitle:"2.9K+ Jobs",
   
  },
  {
    image:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
    title:"Fresher",
    subtitle:"55.1K+ Jobs",
   
  },
  {
    image:"https://img.naukri.com/logo_images/v3/54602.gif",
    title:"Startup",
    subtitle:"433+ Jobs",
   
  },
  {
    image:"https://static.naukimg.com/s/0/0/i/trending-naukri/software.svg",
    title:"Sofware &IT",
    subtitle:"7.9k+ Jobs",
  
  },
  {
    image:"https://static.naukimg.com/s/0/0/i/trending-naukri/sales.svg",
    title:"Sales",
    subtitle:"9.3K+ Jobs",
   
  },
  {
    image:"https://static.naukimg.com/s/0/0/i/trending-naukri/engineering.svg",
    title:"Engineering",
    subtitle:"1.5K+ Jobs",
  
  }

]