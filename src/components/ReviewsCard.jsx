import { Card, CardBody, Text, Box, Flex, Avatar, Icon, SimpleGrid, IconButton } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useBreakpointValue } from "@chakra-ui/react";

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";


function ReviewItem({ stars = 5, name, text, avatar, attr }) {

  return (
    <Card
      bg="rgba(255, 255, 255, .5)"
      borderRadius='30px'
      p={2}
      color="gray.800"
      h='200px'

      boxShadow='none'
      {...attr}
    >
      <CardBody>
        <Flex align="center" mb={3}>
          <Avatar name={name} src={avatar} size="md" mr={3} />
          <Box>
            <Text fontWeight="bold">{name}</Text>
            <Flex>
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  as={FaStar}
                  color={i < stars ? "yellow.400" : "gray.300"}
                  boxSize={5}
                />
              ))}
            </Flex>
          </Box>
        </Flex>

        <Text fontSize="md" color="gray.700">
          {text}
        </Text>
      </CardBody>
    </Card>
  );
}

const cards = [
  { 
    name: "Олексій Марков", 
    stars: 5, 
    text: "Звернулися з терміновим питанням. Допомогли бездоганно, швидко та якісно. Велике спасибі!" 
  },
  { 
    name: "Світлана Скляр", 
    stars: 5, 
    text: "Дуже хороше лікування, лікарі привітні, ціни супер!!!" 
  },
  { 
    name: "Анна Маркова", 
    stars: 5, 
    text: "Дякуємо лікарю за тепле ставлення та вирішення нестандартної проблеми! Щиро вдячні!" 
  },
  { 
    name: "Олег Коваль", 
    stars: 5, 
    text: "Дуже приємний персонал. Все пояснили, підхід сучасний і турботливий."
  },
];

export default function ReviewsCard(attr){

  const numOfCards = useBreakpointValue({ base: 2, md: 4 });

  return (
    <Card
      borderRadius='50px' 
      bg='rgba(255, 255, 255, 0)'
      bgGradient='linear(to-b,rgba(255, 255, 255, .5),rgba(255, 255, 255, 0))' 
      boxShadow={'0 10px 10px rgba(116, 114, 145, 0.14)'}
      backdropFilter='auto' backdropBlur='10px'
      borderColor={'white'}
      borderTop="2px white white"
      borderBottomColor="transparent"
      borderWidth="2px"
      p={5}
      {...attr} 
    >
      <Flex justify="center" align='center'>
        <Swiper
          className="reviews-swiper"
          modules={[Navigation, Pagination]}
          pagination={{
              clickable: true,
              el: ".review-pagination",
          }}
          navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
          }}
          spaceBetween={40}
        >
          {Array.from({ length: Math.ceil(cards.length / numOfCards) }).map((_, i) => (
          <SwiperSlide key={i}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} p={5} >
              {cards.slice(i * numOfCards, i * numOfCards + numOfCards).map((card, index) => (
                  <ReviewItem key={index} stars={card.stars} name={card.name} text={card.text}/>
              ))}
            </SimpleGrid>
          </SwiperSlide>
          ))}
        </Swiper>
        
        <IconButton
          display={'flex'}
          className="custom-prev"
          variant='unstyled'
          icon={<ChevronLeftIcon boxSize={6} />}
          position="absolute"
          left="5px"
          zIndex={10}
          borderRadius="full"
          _hover={{ bg: "rgba(255,255,255,0.4)" }}
          color={'gray.400'}
        />

        <IconButton
          display={'flex'}
          className="custom-next"
          variant='unstyled'
          icon={<ChevronRightIcon boxSize={6} />}
          position="absolute"
          right="5px"
          zIndex={10}
          borderRadius="full"
          _hover={{ bg: "rgba(255,255,255,0.4)" }}
          color={'gray.400'}
        />
        <Box
          className="review-pagination"
          position="absolute"
          left="0px"
          display="flex"
          justifyContent="center"
          zIndex={10}
        />
      </Flex>
    </Card>
    )
}