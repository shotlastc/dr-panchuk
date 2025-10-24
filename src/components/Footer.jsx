import { Text, Flex, HStack, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'


export default function Footer(attr){
    return (
        <Flex justify={'center'}>
            <HStack gap={1}>
                <Text fontSize={'sm'} color={'gray.500'}>
                    Design and prod. by
                </Text>
                <Link 
                    fontSize={'sm'} 
                    color={'gray.500'}
                    href="https://shotlastc.github.io/"
                >
                    shotlastc <ExternalLinkIcon mb={1}/>
                </Link>
            </HStack>

        </Flex>

    )
}