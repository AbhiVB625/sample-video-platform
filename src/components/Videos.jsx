import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videoArr = [
    {
      title: 'Orange Cityscape',
      desc: 'A Beautiful City Timelapse. I wonder why the orange filter though. Is it Mexico or something? Haha...',
      src: 'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    },
    {
      title: 'A Frog',
      desc: "We all love frogs, don't we? (No, we don't)",
      src: 'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    },
    {
      title: 'Clear as day',
      desc: 'Ah, yes. The beautiful sky. When you are jobless, all you can do it stare at the beauty of the sky',
      src: 'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    },
    {
      title: 'Paragliding',
      desc: 'Imagine being so broke that all you manage to do is watch other people do paragliding. Oh, Poor you...',
      src: 'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    },
    {
      title: 'Lonely Forest',
      desc: 'Ah, Perfect place for a loner like you. You really thought you have escaped the society, did you not? You are not able to make an axe, let alone chop woods. You cannot ignite fire. You cannot hunt. You truly belong to your room.',
      src: 'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    },
    {
      title: 'Surfing',
      desc: "Surfing looks quite cool, right? Well, I've read recently a lot of people went missing in the ocean while surfing. But hey, who am I to stop you. Make sure you know how to swim and also check if the ocean is clear. You might not wanna end up in the mouth of the Meg...",
      src: 'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    },
    {
      title: 'Silent Waves',
      desc: 'What else in the world calms you like looking at the waves does. As unemployed as you are, you might find anything and everything calm. Well, make sure to not sleep too close to them. Ocean is already so polluted, right?',
      src: 'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    },
  ];

  const [videoSrc, setVideoSrc] = useState(videoArr[0].src);
  const [videoTitle, setVideoTitle] = useState(videoArr[0].title);
  const [videoDesc, setVideoDesc] = useState(videoArr[0].desc);

  return (
    <Stack direction={['column', 'row']} h={'110vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>{videoTitle}</Heading>
          <Text>{videoDesc}</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videoArr.map((item, index) => {
          return (
            <Button
              variant={'ghost'}
              colorScheme="green"
              alignSelf={['start', 'center']}
              onClick={() => {
                setVideoSrc(item.src);
                setVideoTitle(item.title);
                setVideoDesc(item.desc);
              }}
            >
              Video {index + 1}: {item.title}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default Videos;
