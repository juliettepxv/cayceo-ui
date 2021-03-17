/**
 * Contient les commandes possibles que l'UI peut envoyer à l'application hôte
 * @type {{}}
 */
window.CMD={};
/**
 * Ouvrir la console
 * @type {string}
 */
window.CMD.OPEN_CONSOLE="OPEN_CONSOLE";
/**
 * Il faut reveiller les casques (tous les casque)
 * @type {string}
 */
window.CMD.WAKE_UP_CASQUES="WAKE_UP_CASQUES";
/**
 * Arrêter la lecture sur le casque spécifié. Le premier argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_STOP="CASQUE_STOP";
/**
 * Demande à supprimer (dés-indexer) un casque
 * @type {string}
 */
window.CMD.CASQUE_REMOVE="CASQUE_REMOVE";
/**
 * Lancer la lecture sur le casque spécifié. Le premier argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_PLAY="CASQUE_PLAY";
/**
 * Demande un input tap (un click) sur le casque
 * Le 1er argument est la position x
 * Le 2e argument est la position y
 * Le 3e argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_INPUT_TAP="CASQUE_INPUT_TAP";
/**
 * Demande un input de touche sur le casque
 * 3 --> KEYCODE_HOME,
 * 24 -->  "KEYCODE_VOLUME_UP"
 * 25 -->  "KEYCODE_VOLUME_DOWN"
 * 26 -->  "KEYCODE_POWER"
 * 66 -->  "KEYCODE_ENTER"
 * 81 -->  "KEYCODE_PLUS"
 * 82 -->  "KEYCODE_MENU"
 * Le 1er argument est le code de la touche
 * Le 2e argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_INPUT_TOUCH="CASQUE_INPUT_TOUCH";
/**
 * Demande scroll sur le casque
 * Le 1er argument est le facteur de scroll positif ou négatif selon si on veut monter ou descendre
 * Le 2e argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_INPUT_SCROLL_Y="CASQUE_INPUT_SCROLL_Y";
/**
 * Effectue un swipe sur le casque
 * Le 1e argument est start_x
 * Le 2e argument est start_y
 * Le 3e argument est end_x
 * Le 4e argument est end_y
 * Le 5e argument est millisecondes
 * Le 6e argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_INPUT_SWIPE="CASQUE_INPUT_SWIPE";

/**
 * Installer ou réinstaller l'aAPK sur le casque donné sur le casque spécifié. Le premier argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_INSTALL_APK="CASQUE_INSTALL_APK";
/**
 * démarrer le service
 * @type {string}
 */
window.CMD.CASQUE_START_SERVICE="CASQUE_START_SERVICE";

/**
 * Demande l'affichage du stream screen de casque ADB
 * @type {string}
 */
window.CMD.CASQUE_SHOW_STREAM_SCREEN_ADB="CASQUE_SHOW_STREAM_SCREEN_ADB";

/**
 * Demande la fermeture du stream screen de casque ADB
 * @type {string}
 */
window.CMD.CASQUE_CLOSE_STREAM_SCREEN_ADB="CASQUE_CLOSE_STREAM_SCREEN_ADB";

/**
 * Demande l'affichage du stream screen de casque SOCKET
 * @type {string}
 */
window.CMD.CASQUE_START_SCREEN_STREAM_SOCKET="CASQUE_START_SCREEN_STREAM_SOCKET";
/**
 * Demande l'affichage du stream screen de casque SOCKET en mode REAL TIME
 * @type {string}
 */
window.CMD.CASQUE_START_SCREEN_STREAM_REAL_TIME_SOCKET="CASQUE_START_SCREEN_STREAM_REAL_TIME_SOCKET";

/**
 * Demande la fermeture du stream screen de casque SOCKET
 * @type {string}
 */
window.CMD.CASQUE_STOP_SCREEN_STREAM_SOCKET="CASQUE_STOP_SCREEN_STREAM_SOCKET";
/**
 * Effacer tous les fichiers sur le casque spécifié. Le premier argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_DELETE_ALL_FILES="CASQUE_DELETE_ALL_FILES";

/**
 * Donne les autorisations aux APKs, lance le service etc etc
 * @type {string}
 */
window.CMD.CASQUE_CONFIGURE_ALL="CASQUE_CONFIGURE_ALL";

/**
 * Reboter le casque spécifié. Le premier argument est l'ip du casque
 * @type {string}
 */
window.CMD.CASQUE_REBOOT="CASQUE_REBOOT";
/**
 * Réveiller le casque spécifié. Le premier argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_WAKE_UP="CASQUE_WAKE_UP";
/**
 * Envoyer une commande via msg au casque
 * @type {string}
 */
window.CMD.CASQUE_SEND_MSG="CASQUE_SEND_MSG";
/**
 * Dire d'ouvrir la config de la télécommande du casque. Le premier argument est l'ip' du casque
 * @type {string}
 */
window.CMD.CASQUE_REMOTE_CONTROL_CONFIG="CASQUE_REMOTE_CONTROL_CONFIG";
/**
 * Demande l'installation d'une nouvelle séance. Le premier argument est un objet qui contient les casques, le film et la durée
 * @type {string}
 */
window.CMD.NEW_SEANCE="NEW_SEANCE";
/**
 * Eteindre tous les casques et ensuite l'ordinateur
 * @type {string}
 */
window.CMD.SHUT_DOWN_ALL="SHUT_DOWN_ALL";
/**
 * Reboote le pc mais n'eteint pas les casques
 * @type {string}
 */
window.CMD.REBOOT_PC_ONLY="REBOOT_PC_ONLY";




/**
 * Quitter l'application
 * @type {string}
 */
window.CMD.QUIT="QUIT";
/**
 * Redémarrer l'application
 * @type {string}
 */
window.CMD.REBOOT="REBOOT";
/**
 * Demande d'installer la mise à jour et redemarrer
 * @type {string}
 */
window.CMD.INSTALL_AND_REBOOT="INSTALL_AND_REBOOT";
/**
 * Entrer/sortir du full screen
 * @type {string}
 */
window.CMD.FULLSCREEN_TOGGLE="FULLSCREEN_TOGGLE";
/**
 * Mettre à jour les contenus
 * @type {string}
 */
window.CMD.UPDATE_CONTENT="UPDATE_CONTENT";
/**
 * Réinitialiser l'installation
 * @type {string}
 */
window.CMD.RESET_ALL="RESET_ALL";
/**
 * Demande l'ouverture de la documentation (PDF)
 * @type {string}
 */
window.CMD.OPEN_DOC="OPEN_DOC";
/**
 * zzz
 * @type {string}
 */
window.CMD.ZZZ="ZZZ";
/**
 * zzz
 * @type {string}
 */
window.CMD.ZZZ="ZZZ";
/**
 * zzz
 * @type {string}
 */
window.CMD.ZZZ="ZZZ";
/**
 * zzz
 * @type {string}
 */
window.CMD.ZZZ="ZZZ";
/**
 * zzz
 * @type {string}
 */
window.CMD.ZZZ="ZZZ";
/**
 * zzz
 * @type {string}
 */
window.CMD.ZZZ="ZZZ";