/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(loginScreen());
};
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30
},
text_footer: {
    color: '#05375a',
    fontSize: 18
},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'center',
      marginTop: 0,
      backgroundColor: '#009387',
      borderRadius: 50,
      onPress: ()=>{},
      
      
  },
  signIn: {
      alignItems: 'center',
      height: 35,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5
},
});
const Cat = () => {
  return <Text>Hello, I am your cat!</Text>;
};
const splashScreen = () => {
  return(<><><View style={styles.sectionContainer}></View><View style={styles.Header}></View><Image source={{ uri: 'https://github.com/itzpradip/react-navigation-v5-mix/blob/master/assets/logo.png?raw=true' }} style={styles.logo} resizeMode ="stretch" /></><Text>Hello, I am your cat!</Text></>
  );
};
const loginScreen = () => {


  const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if( val.trim().length > 0 ) {
        setData({
            ...data,
            username: val,
            check_textInputChange: true,
            
        });
    } else {
        setData({
            ...data,
            username: val,
            check_textInputChange: false,
            
        });
    }
}
const handlePasswordChange = (val) => {
  if( val.trim().length >= 5 ) {
      setData({
          ...data,
          password: val,
          isValidPassword: true
      });
  } else {
      setData({
          ...data,
          password: val,
          isValidPassword: false
      });
  }
}

  return(<View style={styles.container}>
      <View style = {styles.header}>
        <Text style = {styles.text_header}> Welcome!</Text>
        </View>
        <View style = {styles.footer}>
          <Text style = {styles.text_footer}> Email</Text>
          <View style = {styles.action}>
            <TextInput
            placeholder="your email"
            style = {styles.TextInput} 
            onChangeText = {(val) => textInputChange(val)}/>
            
          </View>
          <Text style = {[styles.text_footer, {marginTop: 35}]}> Password</Text>
          <View style = {styles.action}>
            <TextInput
            secureTextEntry={true}
            placeholder="your password"
            style = {styles.TextInput}
            onChangeText = {(val) => handlePasswordChange(val)} />
            
          </View>
          <TouchableOpacity style= {[styles.signIn, {color: '#009387'}, {backgroundColor: '#009387'},{ alignItems: 'center'}, {marginTop: 30}]}
          onPress= {()=>{}}>
          <Text style = {[styles.signIn, { color: '#fff'}, { fontWeight: 'bold'}, {fontSize: 20}]}> Sign In</Text>
          </TouchableOpacity>
          </View>
          </View>
  );
};

export default App;
