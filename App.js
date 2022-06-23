
import React, { useRef, useState } from 'react';
import { StyleSheet,Text,View,FlatList, SafeAreaView,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ListItem from './components/ListItem';
import colors from './assets/colors/colors'
import { SAMPLE_DATA } from './assets/data/sampleData';
import RBSheet from "react-native-raw-bottom-sheet";
import Cart from './components/Cart';





const ListHeader = () =>( 
 <> 
 <View style={styles.WrapperTitle}>
        <Text style={styles.TitleLargeTitle}>Marcket Place</Text>
      </View>
      <View style={styles.devider}/>
 </>
)

export default function App() {
  const refRBSheet = useRef();

  const whenFlatListPressed = (item) => {
    setSelectedCoinData(item);
    refRBSheet.current.open();
  };  

  const [selectedCoinData,setSelectedCoinData] = useState(null);
  return (  
    <View style={styles.containner}>
      <SafeAreaView> 
      <FlatList
        keyExtractor={item => item.id}
        data={SAMPLE_DATA}
        renderItem={({item}) => ( 
        <TouchableOpacity onPress={() => whenFlatListPressed(item)}>
        <ListItem
         name={item.name}
         symbol={item.symbol}
         currentPrice={item.current_price}
         priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
         logoUrl={item.image}/>
        </TouchableOpacity>
        )}
        ListHeaderComponent={<ListHeader/>} 
      /> 
      </SafeAreaView>
      {/*BottomSheetModal*/}
      <RBSheet
         ref={refRBSheet}
         closeOnDragDown={true}
         closeOnPressMask={false}
         height={400}
         customStyles={{

         wrapper: {backgroundColor: "transparent"},
         draggableIcon: {backgroundColor:colors.textDarkOne},
         container: {backgroundColor:colors.backgroundScreen,borderTopLeftRadius:15,borderTopRightRadius:15,
         shadowColor: "#000",
         shadowOffset: { width: 0, height: 2,},
         shadowOpacity: 0.34,
         shadowRadius: 6.27,
         elevation: 15,}

         }}>
         {/*BottomSheetModal--Containner*/}
         <View style={styles.WrapperBottomSheetContainner}>
          { selectedCoinData ? (
          <Cart
           currentPrice={selectedCoinData.current_price}
           logoUrl={selectedCoinData.image}
           name={selectedCoinData.name}
           symbol={selectedCoinData.symbol}
           priceChangePercentage7d={selectedCoinData.price_change_percentage_7d_in_currency}
          
           />
           )
          : null }
         </View>
      </RBSheet>


   </View>
  )
};

const styles = StyleSheet.create({
  containner: {
    flex:1,
    backgroundColor:colors.backgroundScreen,
    height: hp('100%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen
  },
  WrapperTitle: {
    marginTop:20,
    marginHorizontal:15,
  },
  TitleLargeTitle: {
    fontSize:18,
    fontWeight:'bold',
    color:colors.textDarkOne,
  },
  devider: {
     height: StyleSheet.hairlineWidth,
     backgroundColor:colors.light,
     marginHorizontal:15,
     marginTop:10,
  },
  WrapperBottomSheetContainner: {
    marginHorizontal:5,
    paddingHorizontal:5,
    paddingTop:2.5,

   
  },

});
