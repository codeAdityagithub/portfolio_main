import React, { useState, useEffect, Suspense, lazy } from "react";
import axios from "axios";
import { motion, useScroll } from "framer-motion";

const WorkCard = lazy(() => import("../components/WorkCard"));

const Works = () => {
  const [imgs, setImgs] = useState([]);
  const { scrolled } = useScroll();
  console.log(scrolled);

  useEffect(() => {
    const fetchData = async () => {
      const list = await axios.get(
        "https://picsum.photos/v2/list?page=1&limit=4"
      );
      const data = await list.data;
      setImgs(data);
    };
    fetchData();
  }, []);

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
