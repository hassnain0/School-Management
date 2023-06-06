import { Platform, Alert } from "react-native";
import Toast from 'react-native-toast-message';
class Util {
  getPlatform = () => Platform.OS;

  isPlatformAndroid() {
    return Platform.OS === 'android';
  }

  isJSDebugMode() {
    return typeof atob !== 'undefined';
  }

  isRelease() {
    return !(this.isJSDebugMode() || __DEV__);
  }

  showAlertWithDelay(title, message, delay = 500) {
    if (!this.alertPresent) {
      this.alertPresent = true;

      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [
            {
              text: 'OK',
              onPress: () => {
                this.alertPresent = false;
              },
            },
          ],
          {
            cancelable: false,
          },
        );
      }, delay);
    }
  }

  showYesNoMessage(title, message, onYes, onNo) {
    if (!this.alertPresent) {
      this.alertPresent = true;

      setTimeout(() => {
        Alert.alert(
          title,
          message,
          [
            {
              text: 'Yes',
              onPress: () => {
                if (onYes) {
                  onYes();
                }

                this.alertPresent = false;
              },
            },
            {
              text: 'No',
              onPress: () => {
                if (onNo) {
                  onNo();
                }

                this.alertPresent = false;
              },
              style: 'cancel',
            },
          ],
          {cancelable: false},
        );
      }, 500);
    }
  }
  errorMsg = desc => {
    Toast.show({
        
      type: 'error',
      text1: 'Error',
      text2: desc,
      position: 'bottom',
      visibilityTime: 2000,
      topOffset: 40,
      bottomOffset: 50,
      style: {
        text1FontSize: 30, // Adjust the value as per your preference
        text2FontSize: 20, // Adjust the value as per your preference
      },
    });
  };

  successMsg = desc => {
    Toast.show({
      type: 'success',
      text1: 'Congrats',
      text2: desc,
      position: 'bottom',
      visibilityTime: 4000,
      topOffset: 30,
      bottomOffset: 40,
      style: {
        text1FontSize: 30, // Adjust the value as per your preference
        text2FontSize: 20, // Adjust the value as per your preference
      },
    });
  };
  stringIsEmpty = str => {
    return !str || /^\s*$/.test(str);
  };
}


export default new Util();