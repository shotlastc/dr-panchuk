import { Box, Card, CardBody, Flex, IconButton, Heading, Text, SimpleGrid } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useBreakpointValue } from "@chakra-ui/react";

import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";

const cards = [
  { title: "Лікування карієсу", text: "Професійне та безболісне видалення карієсу з використанням сучасних матеріалів." },
  { title: "Професійна гігієна", text: "Комплексне чищення зубів від нальоту й каменю ультразвуком та Air Flow." },
  { title: "Дитяча стоматологія", text: "Без болю та страху — лікування молочних зубів і адаптація дитини до візиту." },
  { title: "Пломбування", text: "Сучасні композити, природний колір і комфортне лікування." },
  { title: "Естетична стоматологія", text: "Вініри, відбілювання, ідеальна усмішка." },
  { title: "Імплантація", text: "Надійні імпланти для відновлення зубного ряду." },
  { title: "Ортодонтія", text: "Виправлення прикусу брекетами чи елайнерами." },
  { title: "Хірургія", text: "Видалення зубів, імплантація та інші операції." },
];


export default function ServicesCard(attr){

    const numOfCards = useBreakpointValue({ base: 2, md: 6 });

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
            p={12}
            {...attr} 
        >
            <Flex justify="center" align='center'>
                
                <Swiper
                    className="services-swiper"
                    modules={[Navigation, Pagination]}
                    pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                    }}
                    navigation={{
                    prevEl: ".custom-prev",
                    nextEl: ".custom-next",
                    }}
                    spaceBetween={40}
                    
                >
                    {Array.from({ length: Math.ceil(cards.length / numOfCards) }).map((_, i) => (
                    <SwiperSlide key={i}>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                            {cards.slice(i * numOfCards, i * numOfCards + numOfCards).map((card, index) => (
                                <Card key={index} borderRadius='30px' h='175px' bg="rgba(255, 255, 255, .5)" boxShadow='none'>
                                    <CardBody>
                                        <Heading size='sm' color='gray.600'> {card.title}</Heading>
                                        <Text mt='15px' fontSize={'sm'} color='gray.500'>{card.text}</Text>
                                    </CardBody>
                                </Card>
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
                    className="custom-pagination"
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