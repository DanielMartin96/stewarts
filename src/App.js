import React, { useState } from 'react';
import {
  ChakraProvider,
  theme,
  Container,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Center,
} from '@chakra-ui/react';
import DoorColour from './components/DoorColour/DoorColour.js';
import DoorStyle from './components/DoorStyle/DoorStyle.js';
import PriceCalc from './components/PriceCalc/PriceCalc';

const options = [
  {
    name: 'Odessa Oak',
    imageAddress:
      'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/swatches/thumb/trends-odessa-oak.jpg',
    styles: [
      {
        name: 'Lewes',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-odessa-oak.jpg',
      },
      {
        name: 'Petworth',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-odessa-oak.jpg',
      },
      {
        name: 'Chichester',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-odessa-oak.jpg',
      },
      {
        name: 'Storrington',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/storrington-odessa-oak.jpg',
      },
      {
        name: 'Westfield',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-odessa-oak.jpg',
      },
      {
        name: 'Fairlight',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fairlight-odessa-oak.jpg',
      },
    ],
  },
  {
    name: 'Montana Oak',
    imageAddress:
      'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/swatches/thumb/trends-montana-oak.jpg',
    styles: [
      {
        name: 'Lewes',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-montana-oak.jpg',
      },
      {
        name: 'Petworth',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-montana-oak.jpg',
      },
      {
        name: 'Chichester',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-montana-oak.jpg',
      },
      {
        name: 'Storrington',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/storrington-montana-oak.jpg',
      },
      {
        name: 'Westfield',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-montana-oak.jpg',
      },
      {
        name: 'Fairlight',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fairlight-montana-oak.jpg',
      },
    ],
  },
  {
    name: 'Pippy Oak',
    imageAddress:
      'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/swatches/thumb/trends-pippy-oak.jpg',
    styles: [
      {
        name: 'Lewes',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-pippy-oak.jpg',
      },
      {
        name: 'Petworth',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-pippy-oak.jpg',
      },
      {
        name: 'Chichester',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-pippy-oak.jpg',
      },
      {
        name: 'Storrington',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/storrington-pippy-oak.jpg',
      },
      {
        name: 'Westfield',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-pippy-oak.jpg',
      },
      {
        name: 'Fairlight',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fairlight-pippy-oak.jpg',
      },
    ],
  },
  {
    name: 'Medium Walnut',
    imageAddress:
      'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/swatches/thumb/trends-medium-walnut.jpg',
    styles: [
      {
        name: 'Lewes',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-medium-walnut.jpg',
      },
      {
        name: 'Petworth',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-medium-walnut.jpg',
      },
      {
        name: 'Chichester',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-medium-walnut.jpg',
      },
      {
        name: 'Storrington',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/storrington-medium-walnut.jpg',
      },
      {
        name: 'Westfield',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-medium-walnut.jpg',
      },
      {
        name: 'Fairlight',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fairlight-medium-walnut.jpg',
      },
    ],
  },
  {
    name: 'Dark Walnut',
    imageAddress:
      'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/swatches/thumb/trends-dark-walnut.jpg',
    styles: [
      {
        name: 'Lewes',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/lewes-dark-walnut.jpg',
      },
      {
        name: 'Petworth',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/petworth-dark-walnut.jpg',
      },
      {
        name: 'Chichester',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/chichester-dark-walnut.jpg',
      },
      {
        name: 'Storrington',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/storrington-dark-walnut.jpg',
      },
      {
        name: 'Westfield',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/westfield-dark-walnut.jpg',
      },
      {
        name: 'Fairlight',
        imageAddress:
          'https://www.kitchendoorworkshop.co.uk/public/images/doors/trends/kitchen/door/listing/fairlight-dark-walnut.jpg',
      },
    ],
  },
];

function App() {
  const [door, pickDoor] = useState({
    colour: '',
    colourImg: '',
    style: '',
    styleImg: '',
    height: null,
    width: null,
  });

  return (
    <ChakraProvider theme={theme}>
      <Container
        style={{
          minWidth: '80vw',
          backgroundColor: 'white',
          marginTop: '20px',
          borderRadius: '10px',
        }}
      >
        <Heading as="h1" size="2xl" style={{ padding: '20px' }}>
          Stewarts Kitchens and Bathrooms
        </Heading>
        <Tabs isFitted variant="enclosed">
          <TabList mb="1em">
            <Tab>Door Colour</Tab>
            <Tab isDisabled={door.colour.length === 0 ? true : false}>
              Door Style
            </Tab>
            <Tab isDisabled={door.style.length === 0 ? true : false}>
              Door Size
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <DoorColour options={options} pickDoor={pickDoor} door={door} />
            </TabPanel>
            <TabPanel>
              <DoorStyle options={options} pickDoor={pickDoor} door={door} />
            </TabPanel>
            <TabPanel>
              <PriceCalc pickDoor={pickDoor} door={door} />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Heading as="h2" size="2xl" style={{ padding: '20px' }}>
          Shopping Cart
        </Heading>
        <Divider style={{ margin: '10px 0 20px 0' }} />
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Colour</Th>
              <Th>Style</Th>
              <Th>Doors</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Center>
                  <div
                    style={{
                      textAlign: 'center',
                      border: '1px #f0f0f0 solid',
                      borderRadius: '5px',
                      padding: '20px',
                      backgroundColor: '#f0f0f0',
                      margin: '10px',
                    }}
                  >
                    <p style={{ paddingBottom: '10px' }}>
                      <b>{door.colour.toUpperCase()}</b>
                    </p>
                    <img src={door.colourImg} alt={door.colour} />
                  </div>
                </Center>
              </Td>
              <Td>
                <Center>
                  <div
                    style={{
                      textAlign: 'center',
                      border: '1px #f0f0f0 solid',
                      borderRadius: '5px',
                      padding: '20px',
                      backgroundColor: '#f0f0f0',
                      margin: '10px',
                    }}
                  >
                    <p style={{ paddingBottom: '10px' }}>
                      <b>{door.style.toUpperCase()}</b>
                    </p>
                    <img src={door.styleImg} alt={door.style} />
                  </div>
                </Center>
              </Td>
              <Td>{door.height}</Td>
              <Td>{door.width}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    </ChakraProvider>
  );
}

export default App;
