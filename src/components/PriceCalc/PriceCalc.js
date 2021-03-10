import React, { useState } from 'react';
import {
  Heading,
  Select,
  Checkbox,
  FormLabel,
  Stack,
  InputGroup,
  Input,
  InputRightAddon,
  Button,
} from '@chakra-ui/react';

const heights = [
  115,
  140,
  175,
  215,
  283,
  355,
  415,
  450,
  490,
  535,
  570,
  650,
  715,
  895,
  900,
  1055,
  1060,
  1245,
  1375,
  1435,
  1450,
  1495,
  1735,
  2155,
  2250,
  2400,
  2540,
];

const widths = [146, 296, 396, 446, 496, 596, 796, 896, 996, 1200];

const prices = [
  // height 115
  { height: 115, width: 396, price: 7.73 },
  { height: 115, width: 496, price: 8.16 },
  { height: 115, width: 596, price: 8.69 },
  // height 140
  { height: 140, width: 296, price: 7.43 },
  { height: 140, width: 396, price: 8.1 },
  { height: 140, width: 446, price: 8.42 },
  { height: 140, width: 496, price: 8.73 },
  { height: 140, width: 596, price: 9.41 },
  { height: 140, width: 796, price: 11.76 },
  { height: 140, width: 896, price: 12.77 },
  { height: 140, width: 996, price: 13.9 },
  // height 175
  { height: 175, width: 396, price: 8.73 },
  { height: 175, width: 496, price: 9.57 },
  { height: 175, width: 596, price: 10.36 },
  { height: 175, width: 796, price: 13.74 },
  { height: 175, width: 996, price: 15.38 },
  // height 215
  { height: 215, width: 396, price: 9.49 },
  { height: 215, width: 496, price: 10.49 },
  { height: 215, width: 596, price: 11.5 },
  { height: 215, width: 796, price: 15.26 },
  { height: 215, width: 996, price: 17.26 },
  // height 283
  { height: 283, width: 496, price: 17.48 },
  { height: 283, width: 596, price: 18.76 },
  { height: 283, width: 796, price: 20.25 },
  { height: 283, width: 896, price: 20.66 },
  { height: 283, width: 996, price: 21.57 },
  // height 335
  { height: 335, width: 496, price: 19.17 },
  { height: 335, width: 596, price: 20.82 },
  { height: 335, width: 796, price: 23.04 },
  { height: 335, width: 896, price: 24.78 },
  { height: 335, width: 996, price: 26.75 },
  // height 415
  { height: 415, width: 396, price: 18.69 },
  { height: 415, width: 446, price: 19.68 },
  { height: 415, width: 496, price: 20.62 },
  { height: 415, width: 596, price: 22.59 },
  // height 450
  { height: 450, width: 596, price: 23.65 },
  // height 490
  { height: 490, width: 596, price: 24.0 },
  // height 535
  { height: 535, width: 396, price: 20.25 },
  { height: 535, width: 496, price: 22.66 },
  // height 570
  { height: 570, width: 296, price: 18.33 },
  { height: 570, width: 396, price: 20.91 },
  { height: 570, width: 446, price: 22.19 },
  { height: 570, width: 496, price: 23.55 },
  { height: 570, width: 596, price: 26.05 },
  // height 650
  { height: 650, width: 296, price: 18.71 },
  { height: 650, width: 396, price: 21.53 },
  { height: 650, width: 446, price: 22.91 },
  { height: 650, width: 496, price: 24.33 },
  { height: 650, width: 596, price: 27.16 },
  // height 715
  { height: 715, width: 146, price: 13.5 },
  { height: 715, width: 296, price: 20.36 },
  { height: 715, width: 396, price: 21.7 },
  { height: 715, width: 446, price: 23.18 },
  { height: 715, width: 496, price: 24.67 },
  { height: 715, width: 596, price: 27.63 },
  { height: 715, width: 796, price: 37.21 },
  { height: 715, width: 996, price: 46.59 },
  { height: 715, width: 1200, price: 56.13 },
  // height 895
  { height: 895, width: 296, price: 27.42 },
  { height: 895, width: 396, price: 29.91 },
  { height: 895, width: 446, price: 32.53 },
  { height: 895, width: 496, price: 34.13 },
  { height: 895, width: 596, price: 38.3 },
  // height 900
  { height: 900, width: 296, price: 27.42 },
  { height: 900, width: 396, price: 29.91 },
  { height: 900, width: 446, price: 32.53 },
  { height: 900, width: 496, price: 34.13 },
  { height: 900, width: 596, price: 38.3 },
  { height: 900, width: 796, price: 46.86 },
  { height: 900, width: 996, price: 58.64 },
  { height: 900, width: 1200, price: 70.66 },
  // height 1055
  { height: 1055, width: 396, price: 34.41 },
  { height: 1055, width: 446, price: 36.89 },
  { height: 1055, width: 496, price: 39.37 },
  { height: 1055, width: 596, price: 44.29 },
  // height 1060
  { height: 1060, width: 396, price: 34.41 },
  { height: 1060, width: 446, price: 36.89 },
  { height: 1060, width: 496, price: 39.37 },
  { height: 1060, width: 596, price: 44.29 },
  // height 1245
  { height: 1245, width: 296, price: 37.72 },
  { height: 1245, width: 396, price: 41.86 },
  { height: 1245, width: 496, price: 45.85 },
  { height: 1245, width: 596, price: 51.49 },
  { height: 1245, width: 796, price: 64.83 },
  { height: 1245, width: 996, price: 81.11 },
  { height: 1245, width: 1200, price: 97.75 },
  // height 1375
  { height: 1375, width: 396, price: 45.82 },
  { height: 1375, width: 496, price: 50.87 },
  // height 1435
  { height: 1435, width: 396, price: 47.01 },
  { height: 1435, width: 496, price: 52.33 },
  { height: 1435, width: 796, price: 74.73 },
  { height: 1435, width: 996, price: 93.49 },
  { height: 1435, width: 1200, price: 112.66 },
  // height 1450
  { height: 1450, width: 396, price: 47.3 },
  { height: 1450, width: 496, price: 52.67 },
  // height 1495
  { height: 1495, width: 396, price: 48.22 },
  { height: 1495, width: 496, price: 53.52 },
  { height: 1495, width: 596, price: 58.28 },
  { height: 1495, width: 796, price: 77.85 },
  { height: 1495, width: 996, price: 97.41 },
  { height: 1495, width: 1200, price: 117.37 },
  // height 1735
  { height: 1735, width: 296, price: 45.0 },
  { height: 1735, width: 396, price: 53.17 },
  { height: 1735, width: 446, price: 57.23 },
  { height: 1735, width: 496, price: 61.28 },
  { height: 1735, width: 596, price: 64.09 },
  { height: 1735, width: 796, price: 90.35 },
  { height: 1735, width: 996, price: 113.04 },
  { height: 1735, width: 1200, price: 136.21 },
  // height 2155
  { height: 2155, width: 296, price: 50.54 },
  { height: 2155, width: 396, price: 59.86 },
  { height: 2155, width: 446, price: 64.54 },
  { height: 2155, width: 496, price: 69.21 },
  { height: 2155, width: 596, price: 73.42 },
  { height: 2155, width: 796, price: 112.21 },
  { height: 2155, width: 996, price: 140.42 },
  { height: 2155, width: 1200, price: 169.17 },
  // height 2250
  { height: 2250, width: 296, price: 51.76 },
  { height: 2250, width: 396, price: 61.51 },
  { height: 2250, width: 446, price: 66.38 },
  { height: 2250, width: 496, price: 71.24 },
  { height: 2250, width: 596, price: 81.0 },
  // height 2400
  { height: 2400, width: 296, price: 58.18 },
  { height: 2400, width: 396, price: 69.41 },
  { height: 2400, width: 446, price: 75.05 },
  { height: 2400, width: 496, price: 80.68 },
  { height: 2400, width: 596, price: 91.94 },
  // height 2540
  { height: 2540, width: 296, price: 61.56 },
  { height: 2540, width: 396, price: 73.47 },
  { height: 2540, width: 446, price: 79.47 },
  { height: 2540, width: 496, price: 85.4 },
  { height: 2540, width: 596, price: 97.3 },
  { height: 2540, width: 796, price: 129.95 },
  { height: 2540, width: 996, price: 162.62 },
  { height: 2540, width: 1200, price: 199.95 },
];

const PriceCalc = ({ pickDoor, door }) => {
  const [customSizeNeeded, setCustomSizeNeeded] = useState(false);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [doorPrice, setDoorPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [total, setTotal] = useState(null);

  const renderOptions = array => {
    return array.map(option => {
      return <option value={option}>{option}mm</option>;
    });
  };

  const renderForm = () => {
    return (
      <Stack>
        <InputGroup style={{ padding: '20px 0 20px 0' }}>
          <Input
            placeholder="Height"
            onChange={e => {
              setHeight(e.target.value);
            }}
          />
          <InputRightAddon children="mm" />
          <Input
            placeholder="Width"
            onChange={e => {
              setWidth(e.target.value);
            }}
          />
          <InputRightAddon children="mm" />
        </InputGroup>
      </Stack>
    );
  };

  const findPrices = (height, width, prices) => {
    console.log(height);
    console.log(width);
    for (let i = 0; i < prices.length; i++) {
      if (height === prices[i].height && width === prices[i].width) {
        return setDoorPrice(prices[i].price * 1.1);
      }
    }
  };

  const findWidth = async (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > value) {
        await setWidth(array[i + 1]);
        return console.log(`Width: ${width}`);
      }
    }
  };

  const findHeight = (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > value) {
        setHeight(array[i + 1]);
        return console.log(`Height: ${height}`);
      }
    }
  };

  const onSubmit = async e => {
    e.preventDefault();
    await findHeight(height, heights);
    await findWidth(width, widths);
    await findPrices(height, width, prices);
  };

  const findPrice = e => {
    e.preventDefault();
    setTotal(quantity * doorPrice);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Heading>Please complete the forms below</Heading>
        <div style={{ margin: '10px 0 0 0' }}>
          <div>
            <h2>Please select the height of the door</h2>
            <Select isDisabled={customSizeNeeded ? true : false}>
              {renderOptions(heights)}
            </Select>
          </div>
          <div>
            <h2>Please select the height of the door</h2>
            <Select isDisabled={customSizeNeeded ? true : false}>
              {renderOptions(widths)}
            </Select>
          </div>
        </div>
        <FormLabel>Do you need made to measure sizes?</FormLabel>
        <Checkbox onChange={e => setCustomSizeNeeded(!customSizeNeeded)}>
          Yes
        </Checkbox>
        {customSizeNeeded ? renderForm() : ''}
        <p>Price for the custom door: {Math.round(doorPrice * 100) / 100}</p>
        <Button type="submit">Calculate Door Price</Button>
      </form>
      <FormLabel>Quantity</FormLabel>
      <Input onChange={e => setQuantity(e.target.value)}></Input>
      <Button onClick={findPrice}>Find Total Price</Button>
      {Math.round(total * 100) / 100}
    </>
  );
};

export default PriceCalc;
