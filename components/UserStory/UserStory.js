import React from 'react';
import { View, Text, Image } from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const UserStory = (props) => {
    return (
        <View style={style.storyContainer}>
            <Image style={style.image} source={props.profileImage}/>
            <Text style={style.firstName}>{props.firstName}</Text>
        </View>
    );
}

UserStory.propTypes = {
    firstName: PropTypes.string.isRequired,
    profileImage: PropTypes.object.isRequired
}

export default UserStory;