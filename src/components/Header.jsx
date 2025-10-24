import { Text, Icon, Box, Grid, GridItem } from "@chakra-ui/react";
import LogoIcon  from "/src/assets/logo.svg?react";

export default function Header(attr){
    return (
        <Box 
            border={'1px'}
            w={{base:'300px', sm:'300px'}}  
            h='60px'  
            borderBottomRadius={'30px'}
            boxShadow={'sm'}
            bg='rgba(255,255,255,0.9)'
            {...attr}
        >
            <Grid 
                p='1' 
                templateColumns='repeat(2, 1fr)' 
                gap={5}
                display={'flex'}
                alignItems='center'
                justifyContent='center'
            >
                <GridItem>
                    <Icon as={LogoIcon} boxSize={10} color="gray.500" />
                </GridItem>
                <GridItem>
                    <Text color={'gray.600'}>
                        Dr.Panchuk
                    </Text>
                </GridItem>
            </Grid>
        </Box>
    );
}