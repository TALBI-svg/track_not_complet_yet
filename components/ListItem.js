import React from 'react'
import { StyleSheet,Text,TouchableOpacity,View,Image } from 'react-native'
import colors from '../assets/colors/colors'

const ListItem = ({name,symbol,currentPrice,priceChangePercentage7d,logoUrl}) => {
    const  priceChangeColor = priceChangePercentage7d > 0? colors.primary: colors.primaryOne;
  return (
    <View style={styles.WrapperListItem}>
        {/*LeftSide*/}
        <View style={styles.WrapperLeft}>
          <Image source={{uri:logoUrl}} style={styles.LeftIgame} />
          <View style={styles.LeftTitles}>
            <Text style={styles.LeftTitlesTitle}>{ name }</Text>
            <Text style={styles.LeftTitlesSubTitle}>{ symbol.toUpperCase() }</Text>
          </View>
        </View>

        {/*RightSide*/}
        <View style={styles.WrapperRight}>
            <Text style={styles.RighTitle}>${currentPrice.toLocaleString('en-US',{currency:'USD',})}</Text>
            <Text style={[styles.RighSubTitle,{color:priceChangeColor,}]}>{ priceChangePercentage7d.toFixed(2)}%</Text>

        </View>
    </View>
  )
};
const styles = StyleSheet.create({
    WrapperListItem: {
        marginTop:20,
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    }, 
    WrapperLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    LeftIgame: {
        height:40,
        width:40,
    }, 
    LeftTitles: {
        marginLeft:8,
    }, 
    LeftTitlesTitle: {
        fontSize:14,
        color:colors.textDarkOne,
        //fontFamily:'KarlaLight',
    },  
    LeftTitlesSubTitle: {
        fontSize:12,
        color:colors.light,
        marginTop:4,
    },  
    WrapperRight: {
        alignItems:'flex-end',
    },  
    RighTitle: {},  
    RighSubTitle: {}, 

});
export default ListItem;
