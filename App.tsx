/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import { getFontFamily } from './utils/helper';

const App = () => {
  const userStories = [
    {
      firstName: 'Joseph',
      id: 1,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Angel',
      id: 2,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'White',
      id: 3,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Olivier',
      id: 4,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nata',
      id: 5,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nicolas',
      id: 6,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nino',
      id: 7,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Nana',
      id: 8,
      profileImage: require('./assets/images/default_profile.png'),
    },
    {
      firstName: 'Adam',
      id: 9,
      profileImage: require('./assets/images/default_profile.png'),
    },
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container}>
        <Title title={'Let\'s explore'} />
        <TouchableOpacity style={globalStyle.messageIcon}>
          <View style={globalStyle.messageNumberContainer}>
            <Text style={globalStyle.messageNumber}>2</Text>
          </View>
        </TouchableOpacity>
        <View>
          <FlatList 
            horizontal={true}
            data={userStories} 
            renderItem={({item}) => <UserStory firstName={item.firstName} profileImage={item.profileImage}/>} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  userStoryContainer: {
    flex: 1,
    flexDirection: 'row'
  }, 
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default App;
