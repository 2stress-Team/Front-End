import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation  } from '@react-navigation/native';

function BreathingScreen({route,navigation}){
  return <BreathingClass navigation={navigation} />;
}
class BreathingClass extends React.Component{
  constructor() {
    super();
    this.state = { breath : true };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let bool = !this.state.breath;
      this.setState({ breath: bool });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render(){
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.breath ? 'Respirez profondément':'Expirez'}</Text>
        <Button
          title="Terminer"
          onPress={() => this.props.navigation.navigate("Accueil")}>
        </Button>
      </View>
    );
  }
}
export default BreathingScreen;
//const navigation = useNavigation();