/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import { getFontFamily } from './utils/helper';

const App = () => {
  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
    { firstName: string; id: number; profileImage: any }[]
  >([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database: { firstName: string; id: number; profileImage: any }[], currentPage: number, pageSize: number) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

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

  useEffect(() => {
    console.log('Fetching user stories data...');
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    console.log('Initial user stories data: ', getInitialData);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);

  
  
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.container}>
        <Title title={'Let\'s explore'} />
        <View>
          <FlatList
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isLoadingUserStories) {
              return;
            }
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(
              userStories,
              userStoriesCurrentPage + 1,
              userStoriesPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              console.log('Fetching new user stories data: ', contentToAppend);
              setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserStories(false);
          }}
            showsHorizontalScrollIndicator={false} 
            horizontal={true}
            data={userStoriesRenderedData}
            renderItem={({item}) => <UserStory 
                  key={'userStory' + item.id}
                  firstName={item.firstName} profileImage={item.profileImage}
                  />} />
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
    marginTop: 20,
    marginHorizontal: 28,
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
