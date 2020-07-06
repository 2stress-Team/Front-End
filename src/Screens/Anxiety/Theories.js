import * as React from 'react';
import { Button,View, Text } from 'react-native';

function Theories({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{textAlignVertical: "center",textAlign: "center"}}>Les troubles anxieux sont comme l’hyperphagie (le fait de manger de trop). L’être humain est préprogrammé pour survivre en mangeant. Depuis la nuit des temps, l’homme mange. Si nous ne mangeons pas, nous mourons. Aux origines, il n’y avait pas de restes et on mangeait ce dont on avait besoin. Si l’on avait capturé un gros animal, cette nourriture pouvait servir ensuite pour plusieurs jours. Il s’agissait d’une technique de survie. À mesure que la société a évolué, de plus en plus de nourriture a été disponible. Du fait de cette surabondance, certains souffrent de surpoids, ce qui peut mener dans des cas extrêmes à la mort. Bien que nous voulions originellement ce dont nous avions besoin et dans la mesure où nous en avions besoin, nous mangeons des choses qui ne sont pas saines et nous mangeons trop. L’anxiété est tout à fait semblable à la nourriture et à l’alimentation préprogrammée pour nous aider à survivre. Si nous rencontrons un danger, notre corps nous prépare à réagir à ce danger en provoquant une réaction d’anxiété.</Text>
      <Button
          title="Terminer"
          onPress={() => navigation.navigate("Anxiety")}>
        </Button>
    </View>
  );
}

export default Theories;