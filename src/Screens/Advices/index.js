import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Advice from './Advice'

function AdviceScreen({route,navigation}){
  const advices = [
    new Advice('Respirez Carré','« Quand nous sommes angoissés, notre respiration s’accélère, mais elle prend un rythme inefficace et superficiel, explique le psychiatre Jérôme Palazzolo, auteur de Stop à l’anxiété sans médicaments (Leduc.s éditions). Nous inspirons et expirons beaucoup plus d’air, et de manière beaucoup plus rapide. Ce qui fait que nous accumulons du gaz carbonique et manquons d’oxygène. Les troubles physiologiques de l’anxiété sont liés à ce phénomène. Les mains moites, l’estomac noué viennent des contractures provoquées par cette respiration saccadée. Les muscles se contractent, le cœur bat plus vite parce qu’il appelle plus d’oxygène. Il est possible de casser ce processus d’hyperventilation avec la “respiration carrée” : inspirez par le nez sur quatre temps (en comptant jusqu’à quatre). Bloquez la respiration sur quatre temps. Soufflez par le nez sur quatre temps. Bloquez à nouveau sur quatre temps. Cette technique fait tomber la crise en quelques minutes à peine, en réoxygénant le corps. »'),
    new Advice('Faites pouce !','Selon les principes de réflexologie, l’anxiété résulte d’un déséquilibre corps-esprit qu’il est possible de corriger en stimulant des points de pression, rappelle Jérôme Palazzolo. Sur les ongles des pouces se trouvent des zones réflexes liées à l’hypophyse. Pour faire tomber l’angoisse, appuyez sur l’ongle d’un pouce, maintenez la pression pendant une trentaine de secondes, puis recommencez de l’autre côté. Faire pression au-dessous des pouces, sur le côté charnu de la main, permet aussi de diminuer la tension nerveuse et la sécrétion d’adrénaline. Il suffit de poser le pouce gauche sur la paume de la main droite et d’appuyer doucement quelques minutes, puis de faire le même geste de l’autre côté.'),
    new Advice('Alternez vos respirations','Pour apaiser une crise d’anxiété très rapidement et de façon naturelle en quelques minutes, Céline Touati, naturopathe, recommande cette technique. « Elle vous apprendra à calmer votre esprit, à libérer la tension et à traiter la fatigue :\n– Placez le pouce de votre main droite sur le côté droit de votre nez et votre annulaire sur le côté gauche.\n– Commencez par bloquer le côté gauche de votre nez et inspirez profondément par le côté droit, puis bloquez le côté droit et expirez par le côté gauche.\n– Vous devrez retenir votre respiration pendant quatre secondes entre chaque changement de côté.\n– Alternez les inspirations et les expirations entre les deux côtés pendant quelques minutes et la crise d’anxiété se dissipera très rapidement. »'),
    new Advice('Recadrez vos pensées','Il s’agit de mettre en évidence des pensées automatiques très angoissantes et de les détourner en interprétant différemment des symptômes physiologiques de la panique : accélération cardiaque, nausées, vertiges. Cette technique cognitivo-comportementale est utilisée par Jérôme Palazzolo. Par exemple, si vous pensez à un infarctus quand votre respiration s’accélère, souvenez-vous de la dernière fois où vous avez monté des escaliers quatre à quatre, et rappelez-vous que votre respiration s’est accélérée.'),
    new Advice('Inhalez la sérénité','Les huiles essentielles agissent sur le cerveau limbique, siège des émotions et de la mémoire. Vous pouvez appliquer à l’arrière du cou deux ou trois gouttes d’huile essentielle d’orange : elle calme les tensions. Vous pouvez aussi déposer quelques gouttes d’huile essentielle de lavande sur votre oreiller le soir ou sur un mouchoir. « Inhalée, cette essence déclenche des ondes cérébrales lentes que l’on retrouve dans certains états de grande détente », commente Jérôme Palazzolo. Quand la crise d’angoisse monte, Céline Touati propose de « respirer, à même le flacon, de l’huile essentielle de marjolaine à coquille pour équilibrer le cerveau, ou de l’huile essentielle de verveine citronnée pour un effet apaisant, sédatif et régulateur du système nerveux ».'),
    new Advice('Respirez par le ventre','Il s’agit de lutter contre l’hyperventilation en augmentant la pression au niveau de l’abdomen. Ce qui va comprimer le diaphragme vers le haut. Le pousser écrase légèrement le cœur, qui se trouve juste au-dessus et le ralentit. Cette technique, également recommandée par Jérôme Palazzolo, demande un peu d’entraînement. En position assise, posez une main sur la poitrine et l’autre sur le ventre. Inspirez et expirez par le nez en gonflant le ventre tout en essayant de ne pas faire bouger la partie haute du thorax. Continuez en reposant les mains sur les cuisses jusqu’à ce que vous sentiez le calme revenir.'),
    new Advice('Imitez wonder woman','Debout, bien droit, les pieds écartés un peu plus que la largeur des épaules, les mains sur les hanches avec les coudes écartés vers l’extérieur, ou encore mieux (mais plus risqué si on craint le ridicule) les bras écartés vers le ciel en V de la victoire, fixez le regard légèrement au-dessus de la ligne d’horizon pendant cent vingt secondes. Cette position modifie le taux de sécrétions hormonales, selon Ngub Nding, pharmacien et praticien de TFT. Le cortisol, hormone dont le taux s’élève trop en cas de grand stress, va baisser de manière significative, et celui de testostérone, régulateur de l’humeur, va augmenter. Une posture idéale au réveil pour affronter la journée.'),
    new Advice('Fixez vos pieds','Dans les situations de danger potentiel, la psychologue Amélia Lobbé, auteure de Vaincre l’anxiété et les crises d’angoisse (Leduc.s éditions), conseille de « concentrer son attention sur ses pieds, car ce sont eux qui vous maintiennent au sol. Vous pouvez aussi serrer très fort un objet de votre sac à main, comme un doudou. Votre anxiété est une énergie qui doit vous servir de moteur à ce moment précis. Mobilisez alors votre attention sur l’action : repérez les issues de secours ou les éléments derrière lesquels vous pourriez vous abriter. L’idée est d’aiguiser vos sens et d’être prêt à agir ».'),
    new Advice('Tapotez-vous','Inspirée de l’acupuncture et de la médecine traditionnelle chinoise, la thought field therapy (TFT), ou thérapie du champ mental, a été élaborée par le psychologue américain Roger Callahan. Elle consiste à stimuler certains points du corps correspondant à des zones énergétiques en les tapotant, tout en se focalisant sur ce que l’on éprouve. Le tapping s’effectue au moment où vous ressentez anxiété ou angoisse. Ngub Nding, praticien de TFT, recommande de s’entraîner pour être efficace en cas de besoin. Cette technique ne prend pas plus de deux à trois minutes. En situation de crise, tapotez cinq à dix fois avec deux doigts, dans l’ordre : la racine des sourcils ; sous les yeux ; sous les bras, sous les aisselles, puis sous la tête des clavicules ; puis sur le côté de l’ongle de l’index de la main droite proche du pouce, puis à nouveau sur les têtes de la clavicule.'),
    new Advice('Stimulez le thymus','Organe clé pour le système immunitaire, appelé « le point du bonheur », le thymus se situe sous le cou, un peu en dessous du point situé entre les deux clavicules, près du sternum dans le haut de la poitrine, où il centralise une bonne partie de l’énergie du corps. Le stimuler réduit le stress. Ngub Nding recommande cet exercice en cas de crise d’angoisse : « Souriez largement en tapotant le thymus pendant dix à quinze secondes. »'),
    new Advice('Prenez des fleurs de bach','Dans votre trousse idéale d’urgence, vous pouvez aussi avoir du Rescue (Fleurs de Bach). C’est un grand classique qui fonctionne bien, selon Céline Touati : « Au début du XXe siècle, le Dr Edward Bach, médecin anglais, a travaillé sur la création d’élixirs floraux. À travers trente huit élixirs individuels, il a construit des remèdes floraux correspondant à l’ensemble des émotions humaines. Le Rescue est le trente-neuvième élixir élaboré, lui, avec cinq fleurs. Contre l’anxiété générale, vous pouvez prendre quatre gouttes quatre fois par jour directement dans la bouche. En cas de crise d’angoisse, n’hésitez pas à prendre quatre gouttes de la même façon, toutes les dix minutes, jusqu’à amélioration de l’état général. » En cas de grande panique ou d’anxiété paralysante, la version spray permet de dégainer plus vite : un pschitt sous la langue pour chaque bouffée de stress ou d’anxiété.'),
    new Advice('Massez-vous en douceur','Pour un équilibre complet et pour limiter l’anxiété, Céline Touati suggère de composer le mélange suivant : une goutte d’huile essentielle de basilic tropical, une goutte de marjolaine à coquille et une goutte d’ylang-ylang complet diluées dans quelques gouttes d’huile végétale d’amande douce. Deux à trois fois par jour, massez-vous le plexus solaire (à la base du sternum) avec cette composition maison.')
  ];
  return <AdviceClass advices={advices} navigation={navigation} />;    
}

class AdviceClass extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      index :  Math.floor(Math.random() * this.props.advices.length)
     };
  }

  nextAdvice(){
    let random = Math.floor(Math.random() * this.props.advices.length); 
    while(random == this.state.index){
      random = Math.floor(Math.random() * this.props.advices.length);
    }
    this.setState({
      index : random
    })
  }

  render(){
    let currrentAdvice = this.props.advices[this.state.index];

    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{currrentAdvice.title}</Text>
        <br></br>
        <Text style={{textAlignVertical: "center",textAlign: "center",}}>{currrentAdvice.text}</Text>
        <Button 
          title="Next advice"
          onPress={() => this.nextAdvice()}>
        </Button>
      </View>
    );
  }
}

export default AdviceScreen;