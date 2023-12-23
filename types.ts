import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type  RootStackParamsList={
    Home: undefined;
    EditNote:undefined

}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList>;