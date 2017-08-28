import { Soins } from '../soins';

export const SOINSVISAGE: Soins[] = [
  {
    id: 1,
    image: 'assets/soins-visage/sv1.JPG',
    title: 'Soin lumineux express',
    texte: 'Le soin coup d\'éclat est parfait pour les plus pressées. Il est composé d\'un démaquillage, nettoyage, gommage, vapeur, extraction des comédons (points noirs), masque et application d\'une crème de jour.',
    link: 'sv1',
    price: 30,
    time: '35 minutes'
  }, {
    id: 2,
    image: 'assets/soins-visage/sv2.JPG',
    title: 'Soin complet spécifique',
    texte: 'Il s\'agit d\'un soin visage sur mesure. Après le démaquillage, un examen de votre peau me permettra d\'adapter le soin en fonction de votre type de peau. Il est composè d\'un dèmaquillage, netoyage, gommage, vapeur, extraction des comèdons (points noirs), massage, masque et application d\'un sérum puis d\'une crème de jour.',
    link: 'sv2',
    price: 45,
    time: '1 heure'
  }, {
    id: 3,
    image: 'assets/soins-visage/sv3.JPG',
    title: 'Soin complet anti-âge',
    texte: 'Parfait pour les peaux matures, à partir de 45 ans. Il est composé d\'un démaquillage, nettoyage, gommage, vapeur, extraction des comédons (points noirs), massage, masque et applicatoin d\'un sérum puis d\'une crème de jour.',
    link: 'sv3',
    price: 50,
    time: '1 heure'
  }
];
