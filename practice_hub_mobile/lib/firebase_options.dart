// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyAaKyYBRmvkGU1dTOBjBrIwpBBQRH5ddS4',
    appId: '1:555314075531:web:6ee1d444acb67220c0418e',
    messagingSenderId: '555314075531',
    projectId: 'practice-hub-df52a',
    authDomain: 'practice-hub-df52a.firebaseapp.com',
    storageBucket: 'practice-hub-df52a.appspot.com',
    measurementId: 'G-JL2R8SM417',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyB24QHu79G_wseGc3V9cUolcrPtdMtI9-M',
    appId: '1:555314075531:android:8de728611cd1f7bdc0418e',
    messagingSenderId: '555314075531',
    projectId: 'practice-hub-df52a',
    storageBucket: 'practice-hub-df52a.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyD2ALYIGidtgq0lReiheVk2FERcRhdkoWY',
    appId: '1:555314075531:ios:9056de451ec3a3b0c0418e',
    messagingSenderId: '555314075531',
    projectId: 'practice-hub-df52a',
    storageBucket: 'practice-hub-df52a.appspot.com',
    iosClientId: '555314075531-jf5nd29fnj19ket7evjd64d4t29ip091.apps.googleusercontent.com',
    iosBundleId: 'com.example.practiceHub',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyD2ALYIGidtgq0lReiheVk2FERcRhdkoWY',
    appId: '1:555314075531:ios:d9169955029b2daec0418e',
    messagingSenderId: '555314075531',
    projectId: 'practice-hub-df52a',
    storageBucket: 'practice-hub-df52a.appspot.com',
    iosClientId: '555314075531-tmdrq74ppv213uu9jjjj6jh9iq5ukgs3.apps.googleusercontent.com',
    iosBundleId: 'com.example.practiceHub.RunnerTests',
  );
}