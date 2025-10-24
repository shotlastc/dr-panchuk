import { Card, VStack, Link, Icon, Text, HStack } from "@chakra-ui/react";
import { FaPhoneAlt, FaViber, FaInstagram } from "react-icons/fa";

export default function PhoneCard(attr){
    return (            
        <Card
            h='150px'
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            borderRadius='50px' 
            bg='rgba(255, 255, 255, 0)'
            bgGradient='linear(to-b,rgba(255, 255, 255, .5),rgba(255, 255, 255, 0))' 
            boxShadow={'0 10px 10px rgba(116, 114, 145, 0.14)'}
            backdropFilter='auto' backdropBlur='10px'
            borderColor={'white'}
            borderTop="2px white white"
            borderBottomColor="transparent"
            borderWidth="2px"
        >
            <VStack gap={{base:5}}>
                <HStack gap={{base:5}}>
                    <Link
                        href="viber://chat?number=%2B380671234567"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        color="purple.400"
                        _hover={{ color: "purple.300" }}
                    >
                        <Icon as={FaViber} boxSize={7} />
                        <Text fontSize={{base:'md', md:'xl'}}>Viber</Text>
                    </Link>
                    <Link
                        href="https://www.instagram.com/dr.panchuk.ua/"
                        display="flex"
                        alignItems="center"
                        gap={2}
                        color="pink.400"
                        _hover={{ color: "pink.300" }}
                        isExternal
                    >
                        <Icon as={FaInstagram} boxSize={7} />
                        <Text fontSize={{ base: "md", md: "xl" }}>Instagram</Text>
                    </Link>
                </HStack>

                <Link
                    href="tel:+380671234567"
                    display="flex"
                    alignItems="center"
                    gap={2}
                    color="teal.400"
                    _hover={{ color: "teal.200" }}
                >
                    <Icon as={FaPhoneAlt} boxSize={5} />
                    <Text fontSize={{base:'md', md:'xl'}}>+38 (067) 123-45-67</Text>
                </Link>
            </VStack>
        </Card>
    );
}