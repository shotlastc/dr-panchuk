import {
  Box,
  Card,
  CardBody,
  Flex,
  IconButton,
  Heading,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useBreakpointValue } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cards = [
  { src: "/certificates/certificate1.jpg", alt: "Certificate 1" },
  { src: "/certificates/certificate2.jpg", alt: "Certificate 2" },
  { src: "/certificates/certificate3.jpg", alt: "Certificate 3" },
  { src: "/certificates/certificate4.jpg", alt: "Certificate 4" },
  { src: "/certificates/certificate1.jpg", alt: "Certificate 5" },
  { src: "/certificates/certificate2.jpg", alt: "Certificate 6" },
  { src: "/certificates/certificate3.jpg", alt: "Certificate 7" },
  { src: "/certificates/certificate4.jpg", alt: "Certificate 8" },
];

export default function CertificatesCard(attr) {
  const numOfCards = useBreakpointValue({ base: 1, md: 2 });

  return (
    <Card
      borderRadius="50px"
      bg="rgba(255, 255, 255, 0)"
      bgGradient="linear(to-b,rgba(255, 255, 255, .5),rgba(255, 255, 255, 0))"
      boxShadow={"0 10px 10px rgba(116, 114, 145, 0.14)"}
      backdropFilter="auto"
      backdropBlur="10px"
      borderColor={"white"}
      borderTop="2px white white"
      borderBottomColor="transparent"
      borderWidth="2px"
      p={12}
      {...attr}
    >
      <Flex justify="center" align="center">
        <Swiper
          className="cert-swiper"
          modules={[Navigation, Pagination]}
          pagination={{
            clickable: true,
            el: ".cert-pagination",
          }}
          navigation={{
            prevEl: ".cert-prev",
            nextEl: ".cert-next",
          }}
          spaceBetween={40}
        >
          {Array.from({ length: Math.ceil(cards.length / numOfCards) }).map(
            (_, i) => (
              <SwiperSlide key={"cert_" + i}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                  {cards
                    .slice(i * numOfCards, i * numOfCards + numOfCards)
                    .map((card, index) => (
                      <Card
                        key={index}
                        borderRadius="30px"
                        //h="175px"
                        bg="rgba(255, 255, 255, .5)"
                        boxShadow="none"
                      >
                        <CardBody>
                          <Image
                            justifySelf={"center"}
                            boxSize="sm"
                            src={card.src}
                            alt={card.alt}
                            objectFit="contain"
                            // h="100%"
                            // w="100%"
                          />
                        </CardBody>
                      </Card>
                    ))}
                </SimpleGrid>
              </SwiperSlide>
            )
          )}
        </Swiper>
        <IconButton
          display={"flex"}
          className="cert-prev"
          variant="unstyled"
          icon={<ChevronLeftIcon boxSize={6} />}
          position="absolute"
          left="5px"
          zIndex={10}
          borderRadius="full"
          _hover={{ bg: "rgba(255,255,255,0.4)" }}
          color={"gray.400"}
        />

        <IconButton
          display={"flex"}
          className="cert-next"
          variant="unstyled"
          icon={<ChevronRightIcon boxSize={6} />}
          position="absolute"
          right="5px"
          zIndex={10}
          borderRadius="full"
          _hover={{ bg: "rgba(255,255,255,0.4)" }}
          color={"gray.400"}
        />
        <Box
          className="cert-pagination"
          position="absolute"
          left="0px"
          display="flex"
          justifyContent="center"
          zIndex={10}
        />
      </Flex>
    </Card>
  );
}
