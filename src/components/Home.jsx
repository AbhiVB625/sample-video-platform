import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container>
        <Heading textAlign={'center'} my={'4'}>
          HyueView
        </Heading>
        <Text
          letterSpacing={'widest'}
          lineHeight={'190%'}
          p={['4', '16']}
          textAlign={'center'}
        >
          Your Video Platform!!!
        </Text>
      </Container>
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          m={'auto'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-300deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sint
            voluptatem, explicabo tenetur inventore consequuntur cumque
            laboriosam ad doloremque? Exercitationem magni aspernatur
            voluptatibus consequatur earum inventore cum, itaque repellat
            dolorum at voluptatem expedita molestiae maxime, eligendi adipisci
            rem, eveniet facilis error. Nulla itaque possimus voluptates
            suscipit. Nemo excepturi expedita repellat vitae non libero facere
            tenetur numquam aliquid, cupiditate commodi repudiandae beatae aut
            sed? Facilis iste minima optio commodi perspiciatis, magni dicta
            quam animi hic ab voluptas cum ullam quasi quia, doloremque
            reiciendis quidem recusandae totam! Fugiat vero temporibus hic ex
            harum ad, modi dicta ipsa consectetur, enim eaque odio non.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Box h={'30vh'} overflow={'scroll'}>
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
        swipeable={false}
        dynamicHeight={true}
      >
        <Box w="full" h={'100vh'}>
          <Image src={img1} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch the Future
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src={img2} filter={'hue-rotate(-50deg)'} />
          <Heading
            bgColor={'whiteAlpha.100'}
            color={'white'}
            {...headingOptions}
          >
            Future is Gaming
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src={img3} filter={'hue-rotate(-50deg)'} fill={'Window'} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Latest Console
          </Heading>
        </Box>
        <Box w="full" h={'100vh'}>
          <Image src={img4} />
          <Heading
            bgColor={'whiteAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Synthwave Sunset the new meta
          </Heading>
        </Box>
      </Carousel>
    </Box>
  );
};

export default Home;
