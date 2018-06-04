//React-Native Component
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
  Button,
  Dimensions,
  ScrollView
} from 'react-native';
const {height, width} = Dimensions.get('window'); //getting Height and Width of device screen 
console.disableYellowBox = true;                 // Hidding unnecessary warnings

type Props = {};
export default class CircleComponent extends Component<Props> {
 
 
    constructor(props){                        
      super(props);
      this.state={                            //States of the  component
        diameterOfCircle:width/2,
        inputData:'',
        textData:''
      }
  }
  Check()                                      //cheacking Length of String
    {
      var meargeData = this.state.textData+this.state.inputData 
        if(meargeData.length < 140 )
        {
            this.setState({textData: this.state.textData+this.state.inputData });
            this.setState({inputData: '' })
        }
        else
        {
          this.setState({inputData: '' })
          alert("Please put up to 140 characters only.");
        }
    }
  render() {
    return (
      <View style={styles.SUPcontainer}>
        <ScrollView>
          <View style={styles.container}>
       
            <View  style={styles.btnAndInput}>
                <TextInput
                   style={styles.inputStyle}
                   underlineColorAndroid="transparent"
                   onChangeText={(text) =>this.setState({inputData: text })}
                   value={this.state.inputData}
                /> 
                <TouchableOpacity    style={styles.button} onPress={()=>this.Check()} >        
                  <Text style={styles.BTNText}>Submit</Text>                                  
                </TouchableOpacity>
           </View>
           <View style={{margin:'25%',top:'15%',}} >
             <View  style={{                                                // Circle View
                          width: this.state.diameterOfCircle,
                          height: this.state.diameterOfCircle,
                          borderRadius: this.state.diameterOfCircle/2,
                          justifyContent: 'center',
                          alignItems: 'center',
                        
                          borderWidth:4,
                          padding:2,
                          borderColor:'black',
                          
                        }}>
                    <Text style={{padding:5,alignItems:'center',justifyContent: 'center',  textAlign:'center',flexWrap: "wrap",position:'absolute'}}>{this.state.textData}</Text>
             </View>
           </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({                                        //CSS For Views 
  SUPcontainer: {
    flex: 1,
    height:'95%',
  },
      container: {
      flex: 1,
      backgroundColor:'rgba(100,100,100,0.4)',
      height: height,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
  },
  btnAndInput:{
    width: '90%',
    height: '7%',
    marginTop:'5%',
    top:"8%",
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputStyle:{
      height: 40,
      width:'60%',
      marginLeft:'5%',
      marginRight:'5%',
      paddingLeft:5,
      borderColor: 'black',
      borderWidth: 1,
     },
     button: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,255,0.8)',
      borderWidth:2,
      height: 40,
      borderColor:'rgba(0,0,255,0.8)',
      padding: 10
    },
  BTNText: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    fontWeight: '600',
  }

 
});
