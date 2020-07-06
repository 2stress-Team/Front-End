import * as React from 'react';
import { Button,View, Text } from 'react-native';

function Anxiety({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>L’anxiété peut être définie de différentes manières. Il est difficile de décrire dans une définition tous les mécanismes liés à l’anxiété. Pour rester simple et clair, nous avons choisi de donner cette définition connue concernant l’anxiété :</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>L’anxiété est une émotion causée par une menace observée ou vécue, qui mène le plus souvent à un évitement ou une esquive de celle-ci.</Text>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>L’anxiété est donc une réaction que l’on présente dans une situation nous rendant anxieux. Lors de cette confrontation, on éprouvera dès lors des émotions intenses qui peuvent mener à l’évitement de la situation. Par exemple, si l’on est agoraphobe, on évitera après un moment les espaces ouverts et on restera aussi souvent que possible chez soi car on aura peur des espaces ouverts.</Text>
      <Button
          title="Terminer"
          onPress={() => navigation.navigate("Anxiety")}>
        </Button>
    </View>
  );
}

export default Anxiety;