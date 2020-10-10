import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { SharedElementProps } from "react-native-shared-element";
import { HeroStackParamList } from "./HeroRoute";

type SessieStackParamList = {
    Home: undefined;
    Hero: {url: string};
};
  
const SessieStack = createStackNavigator<SessieStackParamList>();

// type HeroScreenNavProp = StackNavigationProp<SessieStackParamList, 'Hero'>;
type HeroScreenNavProp = CompositeNavigationProp<
    StackNavigationProp<SessieStackParamList, 'Hero'>,
    StackNavigationProp<HeroStackParamList>
>;
type HeroScreenRouteProp = RouteProp<SessieStackParamList, 'Hero'>;
type HeroImageScreenRouteProp = RouteProp<HeroStackParamList, 'HeroImage'>;
export type HeroScreenProps = {
    navigation: HeroScreenNavProp;
    route: HeroScreenRouteProp;
};

export type HeroImageScreenProps = {
    navigation: HeroScreenNavProp;
    route: HeroImageScreenRouteProp;
}

type HomeScreenNavProp = StackNavigationProp<SessieStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<SessieStackParamList, 'Home'>;
export type HomeScreenProps = {
    navigation: HomeScreenNavProp;
    route: HomeScreenRouteProp;
};

export {SessieStack};