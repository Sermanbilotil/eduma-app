import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";


const {width, height} = Dimensions.get('window');

export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = ()=>{
    navigation.navigate('HomeTabScreen');
    setOnboarding()
  }

  const setOnboarding = async () => {
    const value = await AsyncStorage.getItem('onboarding');
    if (value !== null) {
      // We have data!!
      console.log('onbard', value);
    } else {
      try {
        await AsyncStorage.setItem(
          'onboarding',
          '1',
        );
      } catch (error) {
        // Error saving data
      }
    }
  };
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('onboarding');
      if (value !== null) {
        // We have data!!
        console.log('onbard', value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const doneButton = ({...props})=>{
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={{}}>Готово</Text>
      </TouchableOpacity>
    )

  }

  const renderDesc = () => {
    return <Text style={{fontFamily: 'GolosText-Regular'}}>
      • всі буклети посортовані за предметами та темами, де кожен тест для його вирішення
      містить підказки та пояснення! {'\n'}
      • окремо додані буклети не містять повторень питань, що економить твій час {'\n'}
      • тести перекладені з української на англійську {'\n'}
      • нові тести з центру тестування вже включені {'\n'}
    </Text>
  }



  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        skipLabel={'Пропустити'}
        nextLabel={'Далі'}
        // bottomBarHighlight={false}
        DoneButtonComponent={doneButton}
        containerStyles={{paddingHorizontal: 15,}}
        bottomBarColor={'#fff'}
        controlStatusBar={false}
        bottomBarHighlight={false}
        bottomBarStyles={{backgroundColor: 'red'}}
        pages={[

          {

            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <Lottie   style={{flex:1}} source={require('../../assets/onboard/1.json')} autoPlay loop />
              </View>
            ),
            titleStyles: {fontFamily: 'GolosText-Regular'},
            subTitleStyles: {fontFamily: 'GolosText-Regular'},
            title: 'Sapiens MED - медична школа у твоїй кишені',
            subtitle: 'Авторські медичні відеокурси та система тестування тепер в застосунку!\n' +
              'Проходь будь-де і з будь-якого девайсу, адже весь контент синхронізований з нашим сайтом.',
          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <Lottie style={{flex:1}} source={require('../../assets/onboard/2.json')} autoPlay loop />
              </View>
            ),
            titleStyles: {fontFamily: 'GolosText-Regular'},
            subTitleStyles: {fontFamily: 'GolosText-Regular'},
            title: 'Нова система тестування КРОК',
            subtitle: renderDesc() ,

          },
          {
            backgroundColor: '#fff',
            image: (
              <View style={styles.lottie}>
                <Lottie style={{flex:1}} source={require('../../assets/onboard/3.json')} autoPlay  />
              </View>
            ),
            titleStyles: {fontFamily: 'GolosText-Regular'},
            subTitleStyles: {fontFamily: 'GolosText-Regular'},
            title:  'Авторські відеокурси',
            subtitle: 'Оновлений відеокурс КРОК-1, фармакологія та біохімія вже чекають вас у застосунку. Настав час зрозуміти найважчі дисципліни та полюбити медицину!',
          },
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  lottie:{
    width: width*9,
    height: width
  },
  title: {
     fontSize: 16,
  },
  doneButton: {

    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  }
})
