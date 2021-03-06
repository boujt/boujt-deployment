import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";

type Props = {
  latitude?: number,
  longitude?: number
}

const AddressMap: React.FC<Props> = ({latitude = 100, longitude = 100}) => {
  const [zoom, setZoom] = useState(11);
  return (
    <Flex width={"100%"} borderRadius={30}>
      <Map
        height={300}
        defaultCenter={[latitude, longitude]}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setZoom(zoom);
        }}
      >
        <Overlay offset={[380, -40]}>
          <Flex
            backgroundColor={"rgba(255, 255, 255, 0.8)"}
            flexDirection="column"
            borderRadius={8}
            padding="1rem"
          >
            <Text fontWeight={800}>Rissneleden 138</Text>
            <Text>Rissneleden 138, 174 57 Sundbyberg</Text>
            <Text>Sverige</Text>
          </Flex>
        </Overlay>
        <Marker anchor={[latitude, longitude]} />
      </Map>
    </Flex>
  );
};

export default AddressMap;
