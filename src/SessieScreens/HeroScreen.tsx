import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ActivityIndicator, Image, ListRenderItemInfo, FlatList, Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import { NewsApi, NewsItem } from '../Library/NewsApi';
import { HeroStack } from '../Routes/HeroRoute';
import { HeroScreenProps } from '../Routes/SessieRoute';
import { ImageScreen } from './ImageScreen';

const HeroScreen = ({route, navigation}: HeroScreenProps) => {
    return(
            <HeroStack.Navigator>
                <HeroStack.Screen name='HeroHome' 
                component={ListScreen} 
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

const ListScreen = ({route, navigation}: HeroScreenProps) => {
    const [news, setNews] = React.useState<NewsItem[]>();
    const [refreshing, setRefreshing] = React.useState(false);

    React.useEffect(() => {
        const getImgsAsync = async () => {
            await getData();
        };

        getImgsAsync();
    }, []);

    async function getData() {
        const newsApi = new NewsApi();
        setNews(await newsApi.getNews(20));
    }

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
                <View style={{
                    flex: 2,
                    marginLeft: 10
                }}>
                    <Text >
                        {listItem.item.title}
                    </Text>
                    <Text style={{
                        fontSize: 10
                    }}>
                        {listItem.item.subTitle}
                    </Text>
                </View>

            </View>
            </TouchableOpacity>
        );
    }

    async function _onPullToRefresh() {
        setRefreshing(true);
        await getData();
        setRefreshing(false);
    }

    function separator() {
        return (
            <View 
                style={{
                    height: 0.5,
                    backgroundColor: 'grey',
                    marginLeft: 15,
                    marginRight: 15
                }}
            />
        );
    }

    if (!news || news.length < 1) {
        return(
            <View>
                <ActivityIndicator size='large' color="#000"/>
            </View>
        );
    }

    return(
            <View>
                <FlatList
                onRefresh={_onPullToRefresh}
                refreshing={refreshing}
                data={news}
                ItemSeparatorComponent={() => separator()}
                renderItem={(item) => renderFlatListItem(item)}
                />
            </View>
    );
};

export {HeroScreen};