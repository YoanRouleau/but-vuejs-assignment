# but-vuejs-assignment
Repository utilisé pour les rendus des étudiants

## Séance 1 - 4h - light

### Objectif de la séance :
* Mettre en pratique les concepts de base Vue en CM avec M. Damas, c'est-à-dire :
  * Découverte des différentes options de base disponibles sur Vue : data(), mounted(), computed, methods, ...
  * Exploitation et manipulation d'un jeu de données

### Milestones
 1. **Setup du projet**
  - 1.1.  A partir d'un dossier vide, créer un fichier HTML et javascript (e.g. index.html + main.js)
  - 1.2. Ajoutez votre fichier JS à votre HTML
  - 1.3. Ajoutez vuejs à votre mini-projet (CDN, static, npm, ...) 

2. **Initialisation de Vue**
 - 2.1. Créer un composant Vue avec ses options de base
 - 2.2. Dans l'option ```data()```, définissez une property contenant une phrase de bienvenue une property de type ```Array``` vide (pour le moment). Celui-ci sera utilisé pour le stockage des données relatives aux memes.
 - 2.3. Afficher la phrase de bienvenue dans votre HTML

3. **Affichage d'une liste d'objet simple**
  - 3.1. Chargez les données du fichier ```data.json``` (à partir du repository, dossier resources > light > ```data.json```) dans votre property ```Array```. 
  - 3.2. Affichez le contenu de votre property dans votre HTML
  - 3.3. Mettez en forme les données (liste, tableau, flexbox, grid, ...) avec une balise ```<img>``` pour l'image du meme, et une balise textuelle pour le nom du meme

4. **Manipulation des données**
  - 4.1. Une fois vos données affichées dans votre DOM, créer un ```<input>``` de type "text" et créer une logique de filtration 
  (tips: ```v-model```, ```methods```, ```filter()``` => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 😉)

5. **Connexion à l'API imgflip (meme editor)**
  - 5.1. Remplacer votre contenu static (votre property ```Array```) par les données provenant de l'endpoint suivant : https://api.imgflip.com/get_memes
  (tips: https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch)
  - 5.2. Une fois les données récupérees, que constatez-vous ? Comment y remédier ?

