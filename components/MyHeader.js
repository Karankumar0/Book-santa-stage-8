import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'
export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state={
      value:''
    }
  }
}
getNumberOfUnreadNotifications(){
  db.collection('all_Notications').where('notification_status','==','unread')
  .onSnapshot((Snapshot)=>{
    var unreadNotifications = Snapshot.docs.map((doc)=>{doc.data()} )
    this.setState({
      value:unreadNotifications.length
    })
  })
}



const BellIconWithBadge=(props)=>{
  return(
    <View>
      <Icon name='bell' type='font-awesome' color='#696969' size={25}
        onPress={() =>props.navigation.navigate('Notification')}/>
       <Badge
        value={this.state.value}
       containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
    </View>
  )
}


const MyHeader = props => {
  return (
    <Header
      leftComponent={<Icon name='bars' type='font-awesome' color='#696969'  onPress={() => props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
      
      rightComponent={<BellIconWithBadge}{...props/}
      onPress={()=>props.navigation.navigate('notification')}
      backgroundColor = "#eaf8fe"
    />
  );
};

export default MyHeader;
