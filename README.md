#tuto-pwa-notes.md

Une progressive web app (PWA, applications web progressives en français1) est une application web qui consiste en des pages ou des sites web, et qui peuvent apparaître à l'utilisateur de la même manière que les applications natives ou les applications mobiles. Ce type d'applications tente de combiner les fonctionnalités offertes par la plupart des navigateurs modernes avec les avantages de l'expérience offerte par les appareils mobile.

Une PWA se consulte comme un site web classique, depuis une URL sécurisée mais permet une expérience utilisateur similaire à celle d'une application mobile, sans les contraintes de cette dernière (soumission aux App-Stores, utilisation importante de la mémoire de l'appareil…).

Elles proposent de conjuguer rapidité, fluidité et légèreté tout en permettant de limiter considérablement les coûts de développement4 : plus besoin de faire des développements spécifiques pour les applications en fonction de chacune des plateformes : iOS, Android…

Une pwa doit être mise à disposition du public via un lien sécurise (https) mais en phase de développement un serveur web classique est suffisant (http sur localhost). Google chrome fournit dans le panneau pour les développeurs un outil pour vider les données, déréférencer l'application et voir le statut du service worker. Il y a aussi l'outil lighthouse6 maintenant intégré au navigateur qui permet d'évaluer l'application avec une notation comprise entre 0 et 100.


**Progressive** : Comme leur nom le laisse deviner, les applications web progressives fonctionnent sur n'importe quel périphérique en intégrant les fonctionnalités disponibles du navigateur et de l'appareil utilisé (accès à l'appareil photo, à la position géographique, ...)  

**Sécurisée**  : Afin de répondre aux problématiques de sécurité des échanges entre les utilisateurs et les sites, les PWA doivent impérativement être fiables et sûres par la mise en place d’un protocole HTTPS.

**Engageante** : Elles proposent une expérience utilisateur immersive en plein écran et un réengagement facilité grâce à l'envoi de notifications push web.  

**Installable** : L'utilisation d'un fichier manifest permet aux PWA de proposer, à l'instar d'une application mobile native, l'installation d'un raccourci sur l'écran d'accueil du terminal mobile.  

**Rapidité** : D'après Google, 53% des internautes abandonnent un site si le chargement prend plus de 3 secondes. Une fois le site chargé, la navigation doit se faire de manière rapide et fluide.  

**Optimisation pour le référencement** : Utilisant les technologies du web, les progressive web app peuvent être référencées sur les moteurs de recherche de la même manière que n'importe quel site web classique.  

**Indépendante de la connexion** : Grâce à la gestion du cache via l’utilisation d’un Service Worker, une fois le contenu chargé une première fois, il est possible de le consulter même dans les zones de faible connexion réseau.
 
Les technologies utilisées sont celles employées pour concevoir les sites web (html , CSS , javascript) avec en plus :  

### Un fichier manifest
Le fichier manifest, nécessaire pour permettre à votre site d'être une PWA, est une spécification W3C définissant un fichier écrit au format JSON pour définir les métadonnées d'une application web comprenant:

- Le nom de l'application Web
- Liens vers les icônes d'application Web ou les objets d'image
- L'URL préférée pour lancer ou ouvrir l'application Web
- la background_color (attention pas background-color) et le theme_color de votre app ce qui va permettre de colorer la barre de navigation pour rentrer dans votre thème.
- Déclaration pour l'orientation par défaut de l'application Web
- Permet de définir le mode d'affichage, par ex. plein écran



### Les service workers 

Les service workers fournissent un proxy interne au navigateur Web pour gérer les requêtes Web/HTTP. Les Service workers se situent entre le réseau et la partie visible du navigateur pour fournir le contenu. Ils sont capables d'utiliser les mécanismes de cache efficacement et permettent un comportement sans erreur pendant les périodes hors connexion. Les Service workers sont écrits en langage javascript.

 Une application PWA est un site web référencé sur les moteur de recherche. D'un point de vue référencement c'est un avantage dont ne bénéficie pas spécialement le contenu d'une application native.

### Le popup "ajouter à l'écran d'acceuil"

A2HS (Add to home screen) est une feature des navigateurs web récents qui va inciter l'utilisateur à ajouter l'icône de votre site PWA sur son écran d'acceuil. C'est supporté par les versions mobiles de chrome depuis la version 31. Opera, version 32, Firefox version 58.


### L'exemple Flipkart
Flipkart est une entreprise indienne de commerce en ligne basée à Bangalore. (Wikipédia)[]  
 Ils ont lancé Flipkart Lite, qui consiste en une version app-like mobile de leur site. Celle-ci va vous permettre de d'ajouter un raccourci sur votre écran de démarrage et d'utiliser le site comme une application native, tout en utilisant moins d'espace de stockage.  
 source : 


 #### Sources :

 https://developer.mozilla.org/fr/docs/Web/Manifest
 https://gadgets.ndtv.com/apps/opinion/web-apps-like-flipkart-lite-are-the-only-logical-end-for-apps-783942
 https://fr.wikipedia.org/wiki/Flipkart
 https://developer.mozilla.org/fr/docs/Web/API/Service_Worker_API
 https://developers.google.com/web/progressive-web-apps/
 https://developer.mozilla.org/en-US/docs/Web/Apps/Progressive/Add_to_home_screen
 https://developers.google.com/web/fundamentals/design-and-ux/browser-customization/