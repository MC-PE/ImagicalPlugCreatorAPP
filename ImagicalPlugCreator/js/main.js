// Pour obtenir une présentation du modèle Vide, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkId=232509

(function () {

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

        var submit = document.getElementById("submit");
        submit.addEventListener("click", generatePlugin, false);
        var ChooseFolder = document.getElementById("chooseFolder");
        ChooseFolder.addEventListener("click", chooseFolder, false);
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
    function define() {
        mainphp = ['<?php', "\n",
            "namespace {author}\\{plugin};", "\n",
            'use pocketmine\\command\\CommandSender;', "\n",
            'use pocketmine\\command\\Command;', "\n",
            'use pocketmine\\event\\Listener;', "\n",
            'use pocketmine\\plugin\\PluginBase;', "\n",
            'use pocketmine\\Server;', "\n",
            'use pocketmine\\Player;', "\n",
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

        taskphp = ['<?php', "\n",
            "namespace {author}\\{plugin}\\tasks;", "\n\n",
            'use pocketmine\\Server;', "\n",
            'use pocketmine\\scheduler\PluginTask;', "\n",
            'use pocketmine\\Player;', "\n\n",
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

        pluginyml = ["---",
            "name: {plugin}",
            "author:  {author}",
            "version: 1.0",
            "api: [2.0.0]",
            "main: {author}\\{plugin}\Main",
            "commands: []",
            "permissions: []",
        "..."];
        dummyphp = ['<?php',  "\n",
		"namespace {author}\\{name};", "\n\n",
        'use pocketmine\\Server;', "\n",
        'use pocketmine\\Player;', "\n\n",
        "use {author}\\{name}\\Main;", "\n\n",
	   "\n", "\n",
        'class Dummy {', "\n\n\n",
        '   public function __construct(Main $main) {', "\n",
	    '        $this->main = $main;', "\n",
        '        $this->server = $main->getServer()', "\n",
        '    }', "\n\n\n",
	    '}'];
    }

    define();

    function generatorPlugin(event) {
        WinJS.log && WinJS.log("Hey", "sample", "status");
    }

    function chooseFolder(event) {/*
        chooser = new JFileChooser();
        chooser.setCurrentDirectory(new java.io.File("."));
        chooser.setDialogTitle("select folder");
        chooser.setFileSelectionMode(JFileChooser.DIRECTORIES_ONLY);
        chooser.setAcceptAllFileFilterUsed(false);*/
        // Verify that we are currently not snapped, or that we can unsnap to open the picker
        var currentState = Windows.UI.ViewManagement.ApplicationView.value;
        if (currentState === Windows.UI.ViewManagement.ApplicationViewState.snapped &&
            !Windows.UI.ViewManagement.ApplicationView.tryUnsnap()) {
            // Fail silently if we can't unsnap
            return;
        }

        // Create the picker object and set options
        var folderPicker = new Windows.Storage.Pickers.FolderPicker();
        folderPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.desktop;
        // Users expect to have a filtered view of their folders depending on the scenario.
        // For example, when choosing a documents folder, restrict the filetypes to documents for your application.
        folderPicker.fileTypeFilter.replaceAll([".docx", ".xlsx", ".pptx"]);

        folderPicker.pickSingleFolderAsync().then(function (folder) {
            if (folder) {
                // Application now has read/write access to all contents in the picked folder (including sub-folder contents)
                // Cache folder so the contents can be accessed at a later time
                Windows.Storage.AccessCache.StorageApplicationPermissions.futureAccessList.addOrReplace("PickedFolderToken", folder);
                document.getElementById("choosed").innerHTML = folder.path;
                document.getElementById("choosedP").innerHTML = "Picked folder: " + folder.name;
            }
        });
    }

    function generatePlugin(event) {
        var name = document.getElementById("name").value;
        var author = document.getElementById("author").value;
        var config = document.getElementById("config").checked;
        var tasks = document.getElementById("tasks").value;
        var dummies = document.getElementById("dummies").value;
        var events = document.getElementById("events").checked;
        var path = document.getElementById("choosed").innerHTML;
        var f = false;
        doneDummies = false;
        doneTasks = false;
        if (name !== "" && author !== "" && tasks !== "" && dummies !== "" && path !== "" && document.getElementById("name").checkValidity() && document.getElementById("author").checkValidity() && document.getElementById("tasks").checkValidity() && document.getElementById("dummies").checkValidity()) {
            document.getElementById("loading").style.opacity = 1;
            Windows.Storage.StorageFolder.getFolderFromPathAsync(path).done(function (f) {
                if (f) {
                    f.tryGetItemAsync(name).done(
                    function (found) {
                        if (found == null) {
                            f.createFolderAsync(name).done(function (f) {
                                if (f) {
                                    if (config || config == "true") {
                                        f.createFolderAsync("resources").done(function (folder) {
                                            if (folder) {
                                                filePutContents(folder, "config.yml", "---\n# This is the default config generated with ImagicalPlugCreator. (C) ImagicalPlugCreator - Ad5001 2016\n...");
                                            } else {
                                                document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Failed to create plugin resources folder !<br />";
                                            }
                                        });
                                    } else {
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
                                        mainphp[18] = "class Main extends PluginBase implements Listener {";
                                    }



                                    document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Generating folders...<br />";
                                    f.createFolderAsync("src").done(function (src) { // src folder
                                        if (src) {
                                            src.createFolderAsync(author).done(function (src) { // src/author folder
                                                if (src) {
                                                    src.createFolderAsync(name).done(function (src) {
                                                        if (src) {
                                                            filePutContents(src, "Main.php", mainphp.join("\n").replace("{author}", author).replace("{plugin}", name));

                                                            if (tasks > 0) {
                                                                document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Creating folder src\\" + author + "\\" + name + "\\tasks...<br />";
                                                                src.createFolderAsync("tasks").done(function (folder) {
                                                                    if (folder) {
                                                                        for (i = 1; i <= tasks; i++) {
                                                                            filePutContents(folder, "Task" + i + ".php", taskphp.join("\n").replace("{author}", author).replace("{plugin}", name).replace("{id}", i));
                                                                        }
                                                                    } else {
                                                                        document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Failed to create plugin src/" + author + "/" + name + "/tasks folder !<br />";
                                                                    }
                                                                });
                                                                for (i = 1; i <= dummies; i++) {
                                                                    filePutContents(src, "Dummy" + i + ".php", dummyphp.join("\n").replace("{author}", author).replace("{plugin}", name).replace("{id}", i));
                                                                }

                                                                filePutContents(f, "plugin.yml", pluginyml.join("\n").replace("{author}", author).replace("{plugin}", name));
                                                                document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Succefully created plugin base " + name + " !<br />";
                                                                define();
                                                            } else {
                                                                document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Failed to create plugin src/" + author + "/" + name + " folder !<br />";
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Failed to create plugin src/" + author + " folder !<br />";
                                                }
                                            });

                                        } else {
                                            document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Failed to create plugin src folder !<br />";
                                        }
                                    });
                                } else {
                                    document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Failed to create plugin folder !<br />";
                                }
                            });
                        } else {
                            document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Plugin with name " + name + " already exists !<br />";
                        }
                    });
                } else {
                    document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "There were an error about the saving folder !<br />";
                }
            }
                );
            document.getElementById("loading").style.opacity = 0;
        } else {
            document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Please fill all the forms correctly !<br />";
        }

    }

    function filePutContents(folder, filename, contents) {
        document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Generating file " + filename + "...<br />";
        folder.createFileAsync(filename).done(function (file) {
            if (file) {
                file.openTransactedWriteAsync().then(
                function (transaction) {
                    var dataWriter = new Windows.Storage.Streams.DataWriter(transaction.stream);
                    dataWriter.writeString(contents);
                    dataWriter.storeAsync().then(function (size) {
                        transaction.stream.size = size; // reset stream size to override the file
                        transaction.commitAsync().done(function () {
                            // Text written to file
                            document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Succefully created file " + filename + " !<br />";
                            if (filename == "Dummy" + document.getElementById("dummies").value) {
                                if (doneTasks) {
                                    finish();
                                } else {
                                    doneDummies = true;
                                }
                            }
                            if (filename == "Task" + document.getElementById("tasks").value) {
                                if (doneDummies) {
                                    finish();
                                } else {
                                    doneTasks = true;
                                }
                            }
                            // Close stream
                            transaction.close();
                        });
                    });
                },
                // Handle errors with an error function
                function (error) {
                    document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Error ! " + name + "<br />";
                });
            } else {
                document.getElementById("status").innerHTML = document.getElementById("status").innerHTML + "Error ! Could not create file " + filename + ".<br />";
            }
        });
    }
    app.start();
}());