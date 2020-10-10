import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Image, ListRenderItemInfo, Text, View } from 'react-native';
import { FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import { NewsApi, NewsItem } from './Library/NewsApi';
import { HeroStack } from './Routes/HeroRoute';
import { HeroScreenProps } from './Routes/SessieRoute';
import { ImageScreen } from './SessieScreens/ImageScreen';

const HeroScreen = ({route, navigation}: HeroScreenProps) => {
    return(
            <HeroStack.Navigator>
                <HeroStack.Screen name='HeroHome' 
                component={TestScreen} 
                initialParams={{url: route.params.url}}
                options={{
                    headerShown: true,
                }}
                />
                <HeroStack.Screen name='HeroImage' component={ImageScreen} options={{
                    headerShown: false
                }}
                sharedElements={(route, otherRoute, showing) => {
                    return [route.params.item.id];
                }}
                />
            </HeroStack.Navigator>
    );
};

const TestScreen = ({route, navigation}: HeroScreenProps) => {
    const [news, setNews] = React.useState<NewsItem[]>();

    React.useEffect(() => {
        const getImgsAsync = async () => {
            const newsApi = new NewsApi();
            setNews(await newsApi.getNews(20));
        };

        getImgsAsync();
    }, []);

    function _onItemPress(newsItem: NewsItem) {
        navigation.navigate('HeroImage', {item: newsItem});
    }

    function renderFlatListItem(listItem: ListRenderItemInfo<NewsItem>) {
        return(
            <TouchableOpacity onPress={() => _onItemPress(listItem.item)}>
                <View style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 15
            }}>
                <SharedElement id={listItem.item.id}>
                    <Image source={{
                        uri: listItem.item.imageUrl
                    }}
                    style={{
                        width: 50,
                        height: 50
                    }}
                    resizeMode='cover'
                    />
                </SharedElement>
                <Text>
                    {listItem.item.title}
                </Text>

            </View>
            </TouchableOpacity>
        );
    }

    return(
            <View>
                {/* <TouchableOpacity onPress={() => _onImgPress()}>
                    <SharedElement id='HeaderImage'>
                        <Image style={{width: 200, height:200}} 
                        resizeMode='cover'
                        source={{
                            uri: 'https://picsum.photos/1000/600'
                        }}/>
                    </SharedElement>
                </TouchableOpacity> */}
                <FlatList
                data={news}
                renderItem={(item) => renderFlatListItem(item)}
                />
            </View>
    );
};

export {HeroScreen};