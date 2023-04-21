import React from "react";
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
    {
      id: "1",
      url: "/images/work1.png",
      visit: "https://workconnect.onrender.com/",
    },
    {
      id: "2",
      url: "/images/work2.png",
      visit: "https://github.com/codeAdityagithub/Restaurant-Project",
    },
    {
      id: "3",
      url: "/images/work3.png",
      visit: "https://aditya008.pythonanywhere.com/",
    },
  ];

  return (
    <div className="works-container">
      {imgs.map((img) => {
        return (
          <WorkCard
            active={true}
            src={img.url}
            key={img.id}
            visit={img.visit}
          ></WorkCard>
        );
      })}
    </div>
  );
};

export default Works;
