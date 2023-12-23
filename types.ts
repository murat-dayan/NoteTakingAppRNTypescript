import type  { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type  RootStackParamsList={
    Home: undefined;
    EditNote: {noteId:string | undefined}

}

export type ScreenNavigationProp = NativeStackNavigationProp<RootStackParamsList>;

export type EditScreenRouteProp = RouteProp<RootStackParamsList, 'EditNote'>