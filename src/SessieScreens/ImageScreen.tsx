import * as React from 'react';
import { Dimensions, Image, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { HeroImageScreenProps, HeroScreenProps } from '../Routes/SessieRoute';

const ImageScreen = ({route, navigation}: HeroImageScreenProps) => {
    const dimensions = Dimensions.get('screen');
    const [imageWidth, setImageWidth] = React.useState(0);
    const [imageHeight, setImageHeight] = React.useState(0);

    React.useEffect(() => {
        Image.getSize(route.params.item.imageUrl, (width, height) => {
            setImageWidth(width);
            setImageHeight(height);
        });
    }, []);

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
            <Text>
                {route.params.item.title}
            </Text>

        </View>
    );
};

export {ImageScreen};