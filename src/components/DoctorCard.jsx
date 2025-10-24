import { Box, Card, CardHeader, Flex, Avatar, Heading, Text, CardBody } from "@chakra-ui/react";
//import DoctorImg from '/src/assets/face.jpg'

export default function DoctorCard(attr){
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
            
            {...attr}
        >
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar 
                            name='Олена Панчук' 
                            //src={DoctorImg}
                        />
                        <Box>
                        <Heading size='sm' color='gray.600'>Олена Панчук</Heading>
                        <Text color='gray.500'>Професійний дантист</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex spacing='4'>
                    <Text noOfLines={{ base: 6, md: 4 }} color='gray.500'>
                        🌿 Ваш сімейний стоматолог з 18-річним досвідом.
                        Дбаю про усмішки дорослих i дітей, роблю лікування комфортним та безболісним.
                        Стоматологія, якій можна довіряти.
                    </Text>
                </Flex>
            </CardBody>
        </Card>
    );

}