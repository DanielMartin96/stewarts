import React from 'react';
import { Center } from '@chakra-ui/react';
import './DoorStyle.css';

const DoorStyle = ({ options, pickDoor, door }) => {
  const renderOptions = options => {
    for (let i = 0; i < options.length; i++) {
      if (door.colour === options[i].name) {
        return options[i].styles.map(style => {
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
                className="styleCard"
                onClick={e =>
                  pickDoor({
                    ...door,
                    style: style.name,
                    styleImg: style.imageAddress,
                  })
                }
              >
                <p style={{ paddingBottom: '10px' }}>
                  <b>{style.name.toUpperCase()}</b>
                </p>
                <img src={style.imageAddress} alt={style.name} />
              </div>
            </Center>
          );
        });
      }
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {renderOptions(options)}
    </div>
  );
};

export default DoorStyle;
