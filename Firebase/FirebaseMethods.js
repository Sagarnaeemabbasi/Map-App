import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {onValue} from '@react-native-firebase/database';

const signUpUser = obj => {
  const {email, password} = obj;
  return new Promise((resolve, reject) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        database()
          .ref(`appUsers/${res.user.uid}`)
          .set(obj)
          .then(() => {
            resolve('Signp Successfully');
          })
          .catch(dbError => {
            reject(dbError);
          });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};

const loginUser = obj => {
  const {email, password} = obj;
  return new Promise((resolve, reject) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        onValue(database().ref(`appUsers/${user.uid}`), e => {
          if (e.exists()) {
            resolve(e.val());
          } else {
            reject('No user Found');
          }
        });
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(errorCode);
      });
  });
};

export {signUpUser, loginUser};

// signInWithEmailAndPassword(auth, email, password)
//   .then(userCredential => {
//     const user = userCredential.user;
//     const reference = ref(database, `users/${user.uid}`);
//     onValue(reference, e => {
//       if (e.exists()) {
//         resolve(e.val());
//       } else {
//         reject('No user Found');
//       }
//     });
//   })
//   .catch(error => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     reject(errorCode);
//   });
