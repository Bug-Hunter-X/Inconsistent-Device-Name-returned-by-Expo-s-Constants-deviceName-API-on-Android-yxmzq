// bug.js
import * as Constants from 'expo-constants';

console.log('Device Name:', Constants.deviceName);

// bugSolution.js
import * as Constants from 'expo-constants';
import { Platform } from 'react-native';

function getDeviceName() {
  const deviceName = Constants.deviceName;
  if (Platform.OS === 'android' && deviceName === '') {
    // Add your Android-specific code here to retrieve the device name from the Build properties or any other relevant method.
    // This part needs platform-specific handling based on your implementation
    return 'Fallback Android Name'; // Replace with your alternative method
  } else {
    return deviceName;
  }
}

const deviceName = getDeviceName();
console.log('Device Name (with fallback):', deviceName); 