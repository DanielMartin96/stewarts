import React from 'react';
import { Heading, Center, Divider } from '@chakra-ui/react';
import './DoorColour.css';

const DoorColour = ({ options, pickDoor, door }) => {
  const renderOptions = options => {
    return options.map(option => {
      return (
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
            onClick={e =>
              pickDoor({
                ...door,
                colour: option.name,
                colourImg: option.imageAddress,
              })
            }
            className="colourCard"
          >
            <p style={{ paddingBottom: '10px' }}>
              <b>{option.name.toUpperCase()}</b>
            </p>
            <img src={option.imageAddress} alt={option.name} />
          </div>
        </Center>
      );
    });
  };

  return (
    <div>
      <Heading>Please specify your door colour below</Heading>
      <Divider style={{ margin: '10px 0 20px 0' }} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
        }}
      >
        {renderOptions(options)}
      </div>
    </div>
  );
};

export default DoorColour;
