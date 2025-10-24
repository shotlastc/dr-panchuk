import { Card, CardBody } from "@chakra-ui/react";

export default function MapCard(attr){
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
            <CardBody
                as='iframe'
                overflow="hidden"
                borderRadius='50px'
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82%20%D0%92%D1%96%D0%B4%D1%80%D0%BE%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%2C%2080%2F1%2C%20Kamianske%2C%20Dnipropetrovsk%20Oblast%2C%20Ukraine&maptype=roadmap&language=uk"
                referrerPolicy="no-referrer-when-downgrade"
            >
            </CardBody>
        </Card>
    );

}