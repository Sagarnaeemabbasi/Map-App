import React from 'react';
import { ActivityIndicator, ActivityIndicatorComponent } from 'react-native';

export default function Loader(lih) {
    const {size,color}=lih
  return (
    <>
      <ActivityIndicator size={size} color={color} />
    </>
  );
}
