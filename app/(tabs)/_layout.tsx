import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabIcon = ({ focused, name, icon }: any) => {
    if(focused){
  return (
    <ImageBackground
      source={images.highlight}
      className="flex flex-row w-full flex-1 min-w-[112px] min-h-20 justify-center items-center overflow-hidden rounded-full"
    >
      <Image tintColor={"#151312"} source={icon} className="size-5" />
      <Text className="text-secondary text-base font-semibold">{name}</Text>
    </ImageBackground>
  );}

  return(
    <View className="size-ful justify-center items-center  rounded-full">
        <Image source={icon} tintColor={"#A8B5DB"}  />
    </View>
  )
};

const _layout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel:false,
        tabBarIconStyle:{
            height:"100%" ,
            width:"100%",
            alignItems:"center",
            justifyContent:"center"
        },
        tabBarStyle:{
            backgroundColor:'#0f0D23',
            marginHorizontal:10,
            borderRadius:50,
            marginBottom:10,
            height:52,
            position:'absolute',
            overflow:"hidden",
            borderWidth:1,
            borderColor:"#0f0D23"
        }
        
        }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} name={"Home"} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.person} name={"Profile"} />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.save} name={"Saved"} />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} name={"Search"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
