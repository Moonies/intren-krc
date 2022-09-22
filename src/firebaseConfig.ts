import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCcheiSn9cW8p0ZP1Py7_J_7DHWGi7NKAo',
  authDomain: 'sarun-mock.firebaseapp.com',
  projectId: 'sarun-mock',
  storageBucket: 'sarun-mock.appspot.com',
  messagingSenderId: '283908128231',
  appId: '1:283908128231:web:fc879104871c4743999142',
  measurementId: 'G-N93P7SSKB3',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
