import { RouteProp, CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export interface AuthNavigationProps<
    RouteName extends keyof AuthRoutes
> {
    navigation: CompositeNavigationProp<
        StackNavigationProp<AuthRoutes, RouteName>,
        DrawerNavigationProp<AppRoutes, "Home">
    >;
    route: RouteProp<AuthRoutes, RouteName>;
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