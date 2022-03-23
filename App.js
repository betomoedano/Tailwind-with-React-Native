import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

import { useDeviceContext, useAppColorScheme } from 'twrnc';

export default function App() {
  // 1️⃣  opt OUT of listening to DEVICE color scheme events
  useDeviceContext(tw, { withDeviceColorScheme: false });

  // 2️⃣  use the `useAppColorScheme` hook to get a reference to the current color
  // scheme, with some functions to modify it (triggering re-renders) when you need to
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
  // React.useEffect(() => {
  //   console.log('colorScheme', colorScheme);
  // }, [colorScheme]);

  return (
    <View style={tw`flex h-full items-center justify-center bg-white dark:bg-gray-900 android:bg-gray-800`}>
      <View style={tw`w-3/4 h-70 rounded-xl bg-white dark:bg-gray-800 shadow-xl p-3 flex`}>
        <View style={tw`flex flex-row items-center`}>
          <Image source={{uri: 'https://randomuser.me/api/portraits/men/74.jpg'}} style={tw`w-20 h-20 rounded-full`} />
          <View style={tw`pl-5`}>
            <Text style={tw`text-gray-800  dark:text-white font-bold`}>Ricardo Cooper</Text>
            <Text style={tw`text-gray-500 font-bold`}>CTO at Workcation</Text>
          </View>
        </View>
        <View style={tw`border-b border-gray-400 pt-2`} />
        <View style={tw`flex flex-row items-center mt-3`}>
          <Image source={{uri: 'https://randomuser.me/api/portraits/men/75.jpg'}} style={tw`w-20 h-20 rounded-full`} />
          <View style={tw`pl-5`}>
            <Text style={tw`text-gray-800 dark:text-white font-bold`}>Ricardo Cooper</Text>
            <Text style={tw`text-gray-500 font-bold`}>CTO at Workcation</Text>
          </View>
        </View>
        <View style={tw`border-b border-gray-400 pt-2`} />
      </View>
      <Text style={tw`text-lg font-bold dark:text-white`}>New App</Text>
      <Text style={tw`text-6xl p-3`}>
        {
          colorScheme === 'dark' ? '🌝' : '🌞'
        }
      </Text>
      <TouchableOpacity 
        onPress={toggleColorScheme}
        style={tw`bg-cyan-600 py-3 px-6 rounded mt-10`}>
        <Text style={tw`text-white font-bold`}>My Button</Text>
      </TouchableOpacity>
    </View>
  );
}
