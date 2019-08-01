import React from 'react';
import {Image, Text , View, StyleSheet, ScrollView,ImageBackground} from "react-native";

import {
    createDrawerNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    DrawerActions
} from 'react-navigation';

export default class Player extends React.Component {

    constructor() {
        super();
        this.state = {
            test: null
        };
    }

    static navigationOptions =
        {
            title: 'Player',
            headerBackground: (
                <Image
                    style={{width:"100%", height: '100%', position: 'absolute', top: 0, left: 0}}
                    source={{ uri: 'http://up419.siz.co.il/up3/t2m2nzy2nikz.png?fbclid=IwAR2t2AA5jpoWIN96b8FJVwsXAI5N90EPrHhWTwgE43N6eWYe-WvDBA7XBfM' }}
                    resizeMode="cover"
                />
            ),
            headerStyle: {height: 50},
            headerTintColor: '#FFFFFF',
        };

    render() {

       console.log(this.props.navigation.state.params.item);
        return(
        <ScrollView style={styles.scrollViewWrap}>
            <View style={styles.container}>
                <ImageBackground source={require('../../img/field_001.png')} resizeMode="cover" style={styles.headerDataContainer}>
                    <View style={styles.personPlayerData}>
                        <Image  source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg/220px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Philippe_Coutinho_850_1692.jpg'}}
                                style={styles.playerImg}/>
                        <Text style={styles.playerName}>{this.props.navigation.state.params.item.name}</Text>
                        <Text style={styles.playerRole}>Forward</Text>
                    </View>
                </ImageBackground>  
                <View style={styles.playerTeamContainer}>
                    <View style={[styles.playerTeamRow,styles.radiusTop]}>
                        <Text style={styles.grayTextTitle}>Teams</Text>
                    </View>
                    <View style={[styles.playerTeamRow,styles.grayBackground]}>
                        <Image source={{uri:'https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c4e7.png'}}
                               style={styles.playerTeamImg}/>
                        <Text>Manchester United</Text>
                    </View>
                    <View style={[styles.playerTeamRow,styles.radiusBottom]}>
                        <Image source={{uri:'https://banner2.kisspng.com/20180716/isp/kisspng-france-national-football-team-2018-world-cup-frenc-5b4d067312f889.0774670415317745790777.jpg'}}
                               style={styles.playerTeamImg}/>
                        <Text>France</Text>
                    </View>
                </View>
                <View style={styles.statsContainer}>
                    <View style={[styles.statRow,styles.radiusTop]}>
                        <Text style={styles.grayTextTitle}>Player Statistics</Text>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Number</Text>
                            <Text style={styles.playerCategoryStat}>7</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Apearances</Text>
                            <Text style={styles.playerCategoryStat}>6</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Minutes</Text>
                            <Text style={styles.playerCategoryStat}>257</Text>
                        </View>
                    </View>
                    <View style={[styles.statRow,styles.grayBackground]}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Goals</Text>
                            <Text style={styles.playerCategoryStat}>7</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Penalty Goals</Text>
                            <Text style={styles.playerCategoryStat}>1</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Assists</Text>
                            <Text style={styles.playerCategoryStat}>23</Text>
                        </View>
                    </View>
                    <View style={styles.statRow}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Shots</Text>
                            <Text style={styles.playerCategoryStat}>7</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Shots On Target</Text>
                            <Text style={styles.playerCategoryStat}>1.4</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Tackles</Text>
                            <Text style={styles.playerCategoryStat}>17</Text>
                        </View>
                    </View>
                    <View style={[styles.statRow,styles.grayBackground,styles.radiusBottom]}>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Passes</Text>
                            <Text style={styles.playerCategoryStat}>3.6</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Goals Per Match</Text>
                            <Text style={styles.playerCategoryStat}>2.4</Text>
                        </View>
                        <View style={styles.eachCategoryBox}>
                            <Text style={styles.categoryTitle}>Clearances</Text>
                            <Text style={styles.playerCategoryStat}>7</Text>
                        </View>
                    </View>
                </View> 
            </View> 
        </ScrollView>        
        );
    }
}
const styles = StyleSheet.create({
    scrollViewWrap:{
      flex:1,
      backgroundColor:'#f3f4f8'
    },  
  container:{
      display:'flex',
      flexDirection:'column',
      paddingBottom:30,
  },
  headerDataContainer:{
      backgroundColor:'black',
      height:200,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      marginBottom:20,
  },
  grayTextTitle:{
      color:'#a1a1a1',
      fontWeight:'400'
  },
  personPlayerData:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
},
  playerImg:{
      borderRadius:100,
      height:100,
      width:100,
      marginBottom:10,
  },
  playerName:{
      color:'#ffffff',
      fontSize:16
  },
  playerRole:{
      color:'black'
  },
  playerTeamContainer:{
      margin:20,
      display:'flex',
      flexDirection:'column',
      borderRadius:10,
      elevation:.7
  },
  playerTeamRow:{
      height:60,
      backgroundColor:'#ffffff',
      paddingLeft:20,
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
  },
  playerTeamImg:{
      height:30,
      width:30,
      borderRadius:100,
      marginRight:10
  },
  statsContainer:{
      margin:20,
      marginTop:5,
      display:'flex',
      flexDirection:'column',
      borderRadius:8,
      elevation:.7
  },
  statRow:{
      height:55,
      backgroundColor:'#ffffff',
      paddingLeft:10,
      paddingRight:10,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
  },
  eachCategoryBox:{
      height:50,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      flexBasis:'33%'
  },
  categoryTitle:{
      color:'#a1a1a1'
  },
  grayBackground:{
      backgroundColor:'#f3f4f8'
  },
  playerCategoryStat:{
      color:'black',
      fontWeight:'700'
  },
  radiusTop:{
      borderTopLeftRadius:8,
      borderTopRightRadius:8
  },
  radiusBottom:{
      borderBottomLeftRadius:8,
      borderBottomRightRadius:8
  }
});