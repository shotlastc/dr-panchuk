
import { Box, Grid, GridItem} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import VideoBackground from "../components/VideoBackground";
import DoctorCard from "../components/DoctorCard";
import ServicesCard from "../components/ServicesCard";
import Header from "../components/Header";
import MapCard from "../components/MapCard";
import PhoneCard from "../components/PhoneCard"
import ReviewsCard from "../components/ReviewsCard";
import AddressCard from "../components/AddressCard";

import '../styles.css'
import Footer from "../components/Footer";

const MotionBox = motion.create(Box);
const MotionGridItem = motion.create(GridItem);

export default function MainPage() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

    const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <Box position="relative" h="100vh" overflowX="hidden">
      <VideoBackground/>
      <MotionBox
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        position="relative"
        zIndex="1"
        display="flex"
        flexDir="column"
        alignItems="center"
        h="100%"
        color="white"
      >
        <Box>
          <Header/> 
        </Box> 
        
        <Grid 
          mt={{ base: "60px", md: "100px" }}
          gap={{ base: 6, md: 10 }}
          p={{ base: 5}}
          maxW="1080px"
          templateColumns={{
            base: "1fr", // mobile — one column
            md: "repeat(2, 1fr)", // tablet — two columns
          }}
        > 
          <MotionGridItem variants={itemVariants} >
            <DoctorCard p={2} maxW='500px' h={{md:'300px'}}/>
          </MotionGridItem>
          <MotionGridItem rowSpan={3} variants={itemVariants} >
            <ServicesCard maxW='500px' h={{md: '700px'}} w={{base:'95vw', md: '500px'}}/>
          </MotionGridItem >
          <MotionGridItem maxW='500px' variants={itemVariants}>
            <PhoneCard />
          </MotionGridItem>
          <MotionGridItem variants={itemVariants}>
            <AddressCard maxW='500px' />
          </MotionGridItem>
          <MotionGridItem colSpan={{ base: 1, md: 2}} variants={itemVariants} >
            <MapCard h={{ base: "300px", md: "400px" }}/>
          </MotionGridItem>
          <MotionGridItem colSpan={{ base: 1, md: 2}} variants={itemVariants}>
            <ReviewsCard  w={{base:'95vw', md: '100%'}}/>
          </MotionGridItem>
          <MotionGridItem colSpan={{ base: 1, md: 2}} variants={itemVariants}>
            <Footer/>
          </MotionGridItem>
        </Grid>
      </MotionBox>
    </Box>

  );
}
