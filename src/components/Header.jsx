import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={'green'}
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        zIndex={'overlay'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>HyueView</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} colorScheme={'green'} variant={'ghost'}>
                <Link to={'/'}>Home</Link>
              </Button>{' '}
              <Button onClick={onClose} colorScheme={'green'} variant={'ghost'}>
                <Link to={'/videos'}>Videos</Link>
              </Button>{' '}
              <Button onClick={onClose} colorScheme={'green'} variant={'ghost'}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>{' '}
              <Button onClick={onClose} colorScheme={'green'} variant={'ghost'}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="green">
                <Link to="login">Log In</Link>
              </Button>
              <Button onClick={onClose} colorScheme="green" variant={'outline'}>
                <Link to="signup">Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
