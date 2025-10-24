import { Card, VStack, Text, Heading } from "@chakra-ui/react"

export default function AddressCard(attr){
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
            { ...attr}
        >
            <VStack gap={{base:2}}>
                <Text color={'gray.500'}>
                    Наша Адреса:
                </Text>
                <Heading size={'sm'} color={'gray.600'}>
                    м. Кам'янське, пр. Відродження 80
                </Heading>

            </VStack>
        </Card>
    )
}