import React from 'react'
import { StyleSheet,Text,View,Image,FlatList, SafeAreaView,TouchableOpacity} from 'react-native'
import colors from '../assets/colors/colors';


const Cart = ({currentPrice,logoUrl,name,symbol,priceChangePercentage7d}) => {
    
  return (
    <View style={styles.WrapperCart}>
        <View style={styles.CartLeft}>
            <Image source={{uri:logoUrl,}} style={styles.CartLeftImage}/>
            <View style={styles.CartLeftWrapperRight}>
                <Text style={styles.CartLeftWrapperRightText}>{name}</Text>

            </View>
        </View>
       

    </View>
  )
}
const styles = StyleSheet.create({
    WrapperCart: {
     //marginHorizontal
    },
    CartLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    CartLeftImage: {
        width:24,
        height:24,
        borderRadius:30,
        borderColor:colors.textDarkOne,
        borderWidth:1,
    },
    CartLeftWrapperRight: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    }, 
    CartLeftWrapperRightText: {
        fontFamily:'karla-Bold',
        color:colors.textDarkOne,
        fontSize:15,
    },
    

});
export default Cart;