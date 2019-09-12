# Cayceo-ui
C'est l'interface utilisateur des bornes Cayceo.

Cette interface ne "fait" réellement aucune action, elle ne fait qu'afficher et contrôler les comportements utilisateur. Aucun fichier n'est téléchargé ici, aucun casque n'est piloté ici, etc...

### Les events/commandes transmis à l'application hôte.
La liste des commandes que cette interface utilisateur peut envoyer à l'application hôte est listée [ici](ui/CMD.js)

#### Exemples de prise en charge de ces events dans Electron

```javascript
//charge la lib (et initalise au passage window.ui et window.CMD)
require("cayceo-ui/dist/cayceoUi");

//importe quelques trucs propres à Electron
const electron = require('electron');
const remote = electron.remote;
const app=remote.app;
const win = remote.getCurrentWindow();
const rimraf = require('rimraf');

//Ecoute les commandes...et exécute en fonction

//ouverture de la console
ui.on(CMD.OPEN_CONSOLE,function(numero){
    win.openDevTools();
});

//quitter le programme
ui.on(CMD.QUIT,function(){
    win.close();
});

//Efface tous les fichiers locaux et redémare l'application
ui.on(CMD.RESET_ALL,function(){
    //vous noterez ici qu'il n'y a pas de condition pour confirmer ou non l'action (genre "êtes vous sur de vouloir...")
    //si une telle fenêtre de confirmation (devait) existe(r), ce serait au niveau de l'interface utilisateur qu'elle se situerait.
    rimraf("C://mon-repertoire/a/effacer",function(){
        app.relaunch(); //redémarrara l'appli
        app.exit(0); //ciao !
    });
});
```
