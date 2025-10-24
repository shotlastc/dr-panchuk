import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function VideoBackground() {
  return (
    <Box
      as="video"
      autoPlay
      loop
      muted
      playsInline
      objectFit='cover'
      w="100%"
      h="100%"
      position="fixed"
      zIndex="-1"
      src="background.mp4"
    >
      <source  type="video/mp4" />
      Your browser does not support the video tag.
    </Box>
  );
}
