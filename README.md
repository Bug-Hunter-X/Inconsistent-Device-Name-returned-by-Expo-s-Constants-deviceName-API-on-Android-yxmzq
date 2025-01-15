# Inconsistent Device Name from Expo's Constants.deviceName API on Android

This repository demonstrates a bug in Expo's `Constants.deviceName` API where it inconsistently returns an empty string on some Android devices. The issue arises even when the device name is properly configured within the Android settings.

## Bug Description
The `Constants.deviceName` API is expected to provide the device's name. However, in certain situations, particularly on Android, it returns an empty string, leading to unreliable device identification.

## Reproduction Steps
1. Clone this repository.
2. Run the app on an Android device.
3. Observe the output in the console.  The device name might be blank or correct, depending on the device and circumstances.

## Proposed Solution
The proposed solution involves implementing a fallback mechanism. If `Constants.deviceName` returns an empty string, the solution attempts to retrieve the device name using a different approach (such as reading from Android's build properties).