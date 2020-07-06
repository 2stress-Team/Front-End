import * as React from 'react';
import { Button,View, Text } from 'react-native';

function Effects({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{textAlignVertical: "center",textAlign: "center",}}>L’anxiété malsaine peut donc avoir un effet considérable sur votre vie. Elle va vous empêcher de faire certaines choses que vous voulez faire, de vous sentir heureux et même de faire des activités de tous les jours. L’anxiété peut avoir un effet considérable même sur les plus petites choses. Les personnes qui par exemple n’osent plus sortir de la maison ont dès lors des difficultés à faire leurs courses, ce qui peut être très ennuyeux si vous voulez cuisiner.

Beaucoup de personnes anxieuses n’ont plus l’impression de pouvoir prendre elles-mêmes des décisions concernant leur vie. C’est comme si l’anxiété avais pris le dessus. Beaucoup de gens anxieux sont en outre conscients que leur anxiété est irréelle et qu’ils ne devraient à vrai dire éprouver aucune anxiété dans telle situation, mais ils ne parviennent cependant pas à arrêter cette anxiété. Elle les submerge et ils ne savent pas quoi faire.</Text>
      <Button
          title="Terminer"
          onPress={() => navigation.navigate("Anxiety")}>
        </Button>
    </View>
  );
}

export default Effects;