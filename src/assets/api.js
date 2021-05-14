import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://localhost:3000/'
    baseURL: 'http://localhost:5000/'
})

export default api;

/** 
 * iOS com Emulador: localhost
 * iOS com físico: IP da máquina
 * Android com Emulador:
 *  localhost (adb reverse)
 *  10.0.2.2 (Android Studio)
 *  10.0.3.2 (Genymotion)
 * Android com físico: IP da máquina
*/

