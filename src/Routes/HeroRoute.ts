import { StackNavigationProp } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { NewsItem } from "../Library/NewsApi";

export type HeroStackParamList = {
    HeroHome: {url: string};
    HeroImage: {item: NewsItem}
};

const HeroStack = createSharedElementStackNavigator<HeroStackParamList>();

export {HeroStack};