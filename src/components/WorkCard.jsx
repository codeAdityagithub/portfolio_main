import { motion } from "framer-motion";

// const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
// const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
const cardVariants = {
  offscreen: {
    y: window.innerHeight > 600 ? 200 : 50,
    opacity: 0,
  },
  onscreen: {
    y: window.innerWidth > 600 ? 50 : 0,
    opacity: 1,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Image({ src, visit }) {
  const redir = () => {
    window.open(visit, "_blank");
  };

  return (
    <motion.div
      className="workimgdiv"
      variants={cardVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      onClick={() => redir()}
    >
      <img src={src} alt="" className="workimg" />
    </motion.div>
  );
}

const WorkCard = (props) => {
  // const [hasVisited, setVisited] = useState(false);
  // const loc = useLocation();
  // useEffect(() => {
  //   if (loc.pathname === "/works") {
  //     setVisited(true);
  //   }
  // }, [loc.pathname]);

  return (
    <motion.div className="work-card">
      <motion.div
        className="splash"
        variants={cardVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ delay: 0.5 }}
      ></motion.div>
      <Image src={props.src} visit={props.visit}></Image>
    </motion.div>
  );
};

export default WorkCard;
