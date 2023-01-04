import MapView, {
  Callout,
  Geojson,
  Marker,
  Polygon,
  PROVIDER_GOOGLE,
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {StyleSheet, View, Text, Image} from 'react-native';
import styles from '../../Styling';
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
// import locationImg from './Images';

export default function Map({navigation, route}) {
  const [myLocation, setMyLocation] = useState({});
  const data = route.params;
  const {name, latlng} = data;
  // useEffect(() => {
  //   Geolocation.getCurrentPosition(data => setMyLocation(data.coords));
  //   console.log(myLocation);
  // }, []);
  // Geolocation.setRNConfiguration({
  //   config: {
  //     skipPermissionRequests: true,
  //   },
  // });

  return (
    <>
      <View style={[styles.paper, styles.bgPrimary]}>
        <Text style={[styles.textWhite, styles.textCenter, styles.p3]}>
          {name}
        </Text>
      </View>
      <View style={[styles.my2, styles.border2]}>
        <MapView
          mapType="standard"
          userInterfaceStyle="light"
          showsUserLocation={true}
          // mapType="hybrid"
          // mapType="terrain"
          // mapType="mutedStandard"
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: latlng[0],
            longitude: latlng[1],
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
            // latitude: myLocation.latitude,
            // longitude: myLocation.longitude,
            // latitudeDelta: 0.0922,
            // longitudeDelta: 0.0421,
          }}>
          {/* <Polygon coordinate={[37.78825, - 122.4324,0.015,0.015,]}></Polygon> */}
          {/* <Geojson
          geojson={myPlace}
          strokeColor="red"
          fillColor="green"
          strokeWidth={2}
          title="mytilt"
        /> */}
          <Marker
            // draggable={true}
            coordinate={{
              latitude: latlng[0],
              longitude: latlng[1],
              // latitude: myLocation.latitude,
              // longitude: myLocation.longitude,
            }}
            // image={{uri: locationImg}}
            title="MyTitle"
            description="myDescription">
            <Callout tooltip>
              <View
                style={[
                  styles.bgWhite,
                  styles.p2,
                  styles.rounded,
                  styles.border1,
                ]}>
                <Text style={styles.fs3}>name</Text>
                <Text style={[styles.fs4, styles.textSuccess]}>capital</Text>
                <Text style={[styles.fs5, styles.textDanger]}>
                  country_code
                </Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
      </View>
    </>
  );
}
