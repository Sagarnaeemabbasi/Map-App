import React from 'react';
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Styles from '../../Styling';

export default function EmployeeId() {
  return (
    <>
      <View style={Styles.m4}>
        <Text
          style={[Styles.fs3, Styles.textCenter, Styles.textBold, Styles.my2]}>
          Employee Profile{' '}
        </Text>
        <View style={[Styles.border1,Styles.p2]}>
          <View style={[Styles.flexCenter]}>
            <Image
              source={{
                uri: 'https://img.freepik.com/premium-photo/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg?w=2000',
                width: 100,
                height: 100,
              }}
            />
          </View>

          <Text style={[Styles.fs3,Styles.my1]}>Name : Aamir</Text>
          <Text style={[Styles.fs3,Styles.my1]}>CNIC : 15466</Text>
          <Text style={[Styles.fs3,Styles.my1]}>Contact: 03356236</Text>
          <Text style={[Styles.fs3,Styles.my1]}>Vehicle : Corolla</Text>
          <Text style={[Styles.fs3,Styles.my1]}>Available Timing : 8 am to 6pm</Text>
        </View>
      </View>
    </>
  );
}
