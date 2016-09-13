// Pour obtenir une présentation du modèle Vide, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;
	var isFirstActivation = true;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.voiceCommand) {
			// TODO: gérer le ActivationKinds approprié. Par exemple, si votre application peut démarrer à l'aide de commandes vocales,
			// ceci est un bon emplacement pour déterminer s'il est nécessaire de remplir un champ d'entrée ou de choisir un affichage initial distinct.
		}
		else if (args.detail.kind === activation.ActivationKind.launch) {
			// L'activation du lancement se produit quand l'utilisateur lance votre application via la vignette
			// ou appelle une notification toast par un clic ou un appui dans le corps.
			if (args.detail.arguments) {
				// TODO: si l'application prend en charge les toasts, cette valeur est utilisée à partir de la charge utile du toast pour déterminer l'emplacement dans l'application où
				// où l'utilisateur doit être amené, une fois qu'il a appelé une notification toast.
			}
			else if (args.detail.previousExecutionState === activation.ApplicationExecutionState.terminated) {
				// TODO: cette application a été interrompue, puis terminée pour récupérer de la mémoire.
				// Pour créer une expérience utilisateur fluide, restaurez l'état de l'application ici afin de donner l'impression que l'application n'a jamais cessé de fonctionner.
				// Remarque : vous pouvez enregistrer l'heure où l'application a été interrompue pour la dernière fois, et restaurer uniquement l'état si l'application est de nouveau accessible après une courte période.
			}
		}

		if (!args.detail.prelaunchActivated) {
			// TODO: si prelaunchActivated a la valeur true, cela signifie que le prélancement de l'application a été effectué en arrière-plan en tant qu'optimisation.
			// Dans ce cas, il est interrompu peu de temps après.
			// Les opérations longues (comme les E/S de disque ou réseau intensives) ou les changements d'état utilisateur qui ont lieu au lancement
			// doivent être effectuées ici (pour éviter de les effectuer dans le cas du prélancement).
			// Ce travail peut également être effectué dans un gestionnaire de reprise ou de changement de visibilité.
		}

		if (isFirstActivation) {
			// TODO: l'application a été activée et n'était pas en cours d'exécution. Initialisation générale du démarrage à effectuer ici.
			document.addEventListener("visibilitychange", onVisibilityChanged);
			args.setPromise(WinJS.UI.processAll());
		}

		isFirstActivation = false;
	};

	function onVisibilityChanged(args) {
		if (!document.hidden) {
			// TODO: l'application est maintenant visible. Le moment est peut-être bien choisi pour actualiser l'affichage.
		}
	}

	app.oncheckpoint = function (args) {
		// TODO: cette application va être suspendue. Enregistrez ici tous les états qui doivent être conservés entre les suspensions.
		// Vous utilisez l'objet WinJS.Application.sessionState, qui est automatiquement enregistré et restauré entre les suspensions.
		// Si vous devez effectuer une opération asynchrone avant la suspension de votre application, appelez args.setPromise().
	};

	app.start();

<<<<<<< HEAD
	var mainphp = ['<?php',  "\n",
        "namespace {author}\\{plugin};", "\n",
        'use pocketmine\command\CommandSender;', "\n",
        'use pocketmine\command\Command;', "\n",
        'use pocketmine\event\Listener;', "\n",
        'use pocketmine\plugin\PluginBase;', "\n",
        'use pocketmine\Server;', "\n",
        'use pocketmine\Player;', "\n",
       "\n", "\n",
        'class Main extends PluginBase{', "\n\n\n",
        "   public function onEnable(){", "\n",
        '        $this->reloadConfig();', "\n",
        '        $this->getServer()->getPluginManager()->registerEvents($this, $this);', "\n",
        '    }', "\n\n\n",
        '    public function onLoad(){', "\n",
        '        $this->saveDefaultConfig();', "\n",
        '    }', "\n\n\n",
        '    public function onCommand(CommandSender $sender, Command $cmd, $label, array $args){', "\n",
        '        switch($cmd->getName()){', "\n",
        '            case "default":', "\n",
        '            break;', "\n",
        '        }', "\n",
        '     return false;', "\n",
        '    }', "\n",
        '}'];

	var taskphp = ['<?php',  "\n",
        "namespace {author}\\{plugin}\\tasks;", "\n\n",
        'use pocketmine\Server;', "\n",
        'use pocketmine\scheduler\PluginTask;', "\n",
        'use pocketmine\Player;', "\n\n",
        "use {author}\\{plugin}\\Main;", "\n\n",
       "\n", "\n",
        'class Task{id} extends PluginTask {', "\n\n\n",
        '   public function __construct(Main $main) {', "\n",
        '        parent::__construct($main);', "\n",
        '        $this->main = $main;', "\n",
        '        $this->server = $main->getServer();', "\n",
        '    }', "\n\n\n",
        '   public function onRun($tick) {', "\n",
        '        $this->main->getLogger()->debug("Task " . get_class($this) . " is running on $tick"); ', "\n",
        '    }', "\n\n\n",
        '}'];

	var pluginyml = ["---",
        "name: {plugin}",
        "author:  {author}",
        "version: 1.0",
        "api: [2.0.0]",
        "main: {author}\\{plugin}\Main",
        "commands: []",
        "permissions: []",
    "..."];

	var saveData = (function (blob) {
	    var a = document.getElementById("dl");
        url = window.URL.createObjectURL(blob);
	    a.href = url;
	    a.download = fileName;
	    a.click();
	    window.URL.revokeObjectURL(url);
	    });

	function generatePlugin(name, author, config, tasks, dummies, events) {
	    zip.createWriter(new zip.BlobWriter(), function (writer) {

	        if (!config || config == "false") {
	            delete mainphp[20];
	            delete mainphp[21];
	            delete mainphp[26];
	            delete mainphp[27];
	            delete mainphp[28];
	            delete mainphp[29];
	            delete mainphp[30];
	            delete mainphp[31];
	        }

	        if (!events || events == "false") {
	            delete mainphp[22];
	            delete mainphp[23];
	        } else {
	            mainphp[16] = "class Main extends PluginBase implements Listener {";
	        }

	        writer.add("plugin.yml", new zip.TextReader(pluginyml.replace("{author}", author).replace("{plugin}", name)));
	        writer.add("src\\" + author + "\\" + name + "\\Main.php", new zip.TextReader(mainphp.replace("{author}", author).replace("{plugin}", name)));

	        for(i = 0; < i <= tasks; i++) {

	        }

	        // use a TextReader to read the String to add
	        writer.add("filename.txt", new zip.TextReader("test!"), function () {
	            // onsuccess callback

	            // close the zip writer
	            writer.close(function (blob) {
	                // blob contains the zip file as a Blob object

	            });
	        }, function (currentIndex, totalIndex) {
	            // onprogress callback
	        });
	    }, function (error) {
	        // onerror callback
	    });
	}

}());
=======
})();
>>>>>>> 4233015e949d0e34230c7d0408331758226db35c
