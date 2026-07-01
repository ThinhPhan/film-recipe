import { ComponentProps } from "react"
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RecipeStackParamList = {
  Home: undefined
  ExploreHome: undefined
  RecipeDetail: { id: string }
}

export type MainTabParamList = {
  HomeTab: NavigatorScreenParams<Pick<RecipeStackParamList, "Home" | "RecipeDetail">>
  ExploreTab: NavigatorScreenParams<Pick<RecipeStackParamList, "ExploreHome" | "RecipeDetail">>
  Favorites: undefined
  Profile: undefined
}

// App Stack Navigator types
export type AppStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>
}

export type AppStackScreenProps<T extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  T
>

export interface NavigationProps extends Partial<
  ComponentProps<typeof NavigationContainer<AppStackParamList>>
> {}
