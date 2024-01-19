import {Image, StatusBar, View} from 'react-native';
import React from 'react';
import images from '@src/assets/images';

const WelcomeScreen = () => {
  return (
    <View className="flex flex-1 justify-center items-center">
      <StatusBar barStyle={'light-content'} />
      <Image source={images.welcome} className="w-full h-full absolute" />
    </View>
  );
};

export default WelcomeScreen;
