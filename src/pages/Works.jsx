import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
// import { motion, useScroll } from "framer-motion";

import WorkCard from "../components/WorkCard";

const Works = () => {
  // const [imgs, setImgs] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const list = await axios.get(
  //       "https://picsum.photos/v2/list?page=1&limit=4"
  //     );
  //     const data = await list.data;
  //     setImgs(data);
  //   };
  //   fetchData();
  // }, []);

  const imgs = [
    { id: "1", download_url: "/images/work1.png" },
    { id: "2", download_url: "/images/work1.png" },
    { id: "3", download_url: "/images/work1.png" },
    { id: "4", download_url: "/images/work1.png" },
    { id: "5", download_url: "/images/work1.png" },
  ];

  return (
    <div className="works-container">
      {imgs.map((img) => {
        return (
          <WorkCard
            active={true}
            href={img.download_url}
            key={img.id}
          ></WorkCard>
        );
      })}
    </div>
  );
};

export default Works;
