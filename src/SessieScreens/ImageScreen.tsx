import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { HeroImageScreenProps, HeroScreenProps } from '../Routes/SessieRoute';

const ImageScreen = ({route, navigation}: HeroImageScreenProps) => {
    const dimensions = Dimensions.get('screen');

    return( 
        <View style={{
            padding: 0,
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }}>
            <SharedElement id={route.params.item.id}>
                <Image style={{width: dimensions.width, height:250}} 
                resizeMode='cover'
                source={{
                    uri: route.params.item.imageUrl
                }}/>
            </SharedElement>
            <View style={{
                padding: 15
            }}>
                <Text>
                    {route.params.item.title}
                </Text>
                <Text>
                    {route.params.item.content}
                </Text>
            </View>

        </View>
    );
};

export {ImageScreen};