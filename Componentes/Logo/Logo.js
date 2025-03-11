import React from 'react';
import { Image } from 'react-native-web';
import Styles from './Style';
function Logo(){
    return(
        <Image
            style={Styles.logo}
            source={require('../../images/teste.png')}
        />
    )
}
export default Logo;