import React, {useState} from 'react';
import {
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {signUpUser} from '../Firebase/FirebaseMethods';
import MyCheckbox from '../Components/MyCheckbox';
import Styles from '../Styling';
import MyModal from '../Components/MyModal';
import Loader from '../Components/Loader';
export default function SignUp({navigation}) {
  const [details, setDetails] = useState({});
  const [isSelected, setSelection] = useState(false);
  const [modalText, setModalText] = useState('');
  const [buttonBg, setButtonBg] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const signUp = () => {
    setLoading(true);
    if (
      !details.email ||
      details.email.length <= 0 ||
      !details.password ||
      details.password.length <= 0
    ) {
      setModalVisible(true);
      setModalText('Please write the accurate Email and Password');
      setLoading(false);
    } else {
      signUpUser(details)
        .then(succ => {
          setLoading(false);
          ToastAndroid.show(succ, 3000);
        })
        .catch(err => {
          setLoading(false);
          setModalVisible(true);
          setModalText(err);
        });
      setButtonBg(true);
    }
  };
  return (
    <>
      <MyModal
        mainText={modalText}
        buttonText="cancel"
        visible={modalVisible}
        onPress={() => {
          // setHideModal(!modalVisible);
          setModalVisible(!modalVisible);
          setSelection(false);
          setButtonBg(false);
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      />
      <View style={{backgroundColor: '#eeeeee', flex: 1}}>
        <Text
          style={[
            Styles.textCenter,
            {padding: 15, fontSize: 40, color: 'blue', marginTop: 10},
          ]}>
          Sign Up
        </Text>
        <TextInput
          keyboardType="email-address"
          onChangeText={e => {
            setDetails({...details, email: e});
            e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
          }}
          style={[Styles.myInput, Styles.textCenter]}
          placeholder="e-mail"
        />
        <TextInput
          onChangeText={e => {
            setDetails({...details, password: e});
            e.length <= 0 ? setButtonBg(false) : setButtonBg(true);
          }}
          style={[Styles.myInput, Styles.textCenter]}
          placeholder="password"
          secureTextEntry={true}
        />
        <MyCheckbox
          text="Accept the term and policies"
          value={isSelected}
          onValueChange={() => {
            setSelection(!isSelected);
          }}
        />
        <View style={[Styles.px2, Styles.w100]}>
          <TouchableOpacity
            style={[
              Styles.btn,
              {
                backgroundColor:
                  !isSelected || !buttonBg ? 'black' : 'darkblue',
              },
            ]}
            disabled={!isSelected || !buttonBg}
            onPress={signUp}>
            {loading ? (
              <Loader color="fuchsia" size="large" />
            ) : (
              <Text style={[Styles.textWhite, Styles.textCenter, Styles.fs4]}>
                SignUp
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
