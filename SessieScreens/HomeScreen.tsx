import * as React from 'react';
import { Button, NativeModules } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {HomeScreenProps} from '../Routes/SessieRoute';

const HomeScreen = ({route, navigation}: HomeScreenProps) => {
    const url = "https://www.manhattanmobile.com/wp-content/uploads/2018/08/react-native-workshop.jpg";

    function goToHeroScreen() {
        navigation.navigate('Hero', {url});
    }

    function showImage() {
        NativeModules.PhotoViewer.Show(url);
    }

    return(
        <SafeAreaView>
            <Button title='Show image' onPress={() => showImage()}/>
            <Button onPress={() => goToHeroScreen()} title="Hero"/>
        </SafeAreaView>
    );
};

export {HomeScreen};