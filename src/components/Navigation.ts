import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigationProps<
    ParamList extends ParamListBase,
    RouteName extends keyof ParamList = string
> {
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
}

export type AppRoutes = {
    Authentication: undefined;
    Home: undefined;
}

export type AuthRoutes = {
    Onboarding: undefined;
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    PasswordChanged: undefined;
}

export type HomeRoutes = {
    OutfitIdeas: undefined;
}