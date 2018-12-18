# Source Code Control
* GIT : [Git For Windows](https://git-scm.com/download/win)
* GitHub Desktop

# IDE
* [Visual Studio Code](https://code.visualstudio.com/)

# Environnement de développement HTML/JavaScript
## Node.js
Installation de [[Node.js]]

# Environnement de développement [[Python]]
## Anaconda
Installer la distribution [[Anaconda]]

@@background-color:Yellow;NOTE@@
* Generer un fichier de configuration de Jupyter (dans C:\Users\Charles\.jupyter) https://jupyter-notebook.readthedocs.io/en/stable/public_server.html
* Modifier la config du fichier jupyter_notebook_config.py pour permettre l'affichage d'un notebook dans une iframe de TW
```
## Supply overrides for the tornado.web.Application that the Jupyter notebook
#  uses.
c.NotebookApp.tornado_settings = {
    'headers': {
        'Content-Security-Policy': 'frame-ancestors self *;',
    }
}
```

Installing Jupyter Notebook Extensions : https://towardsdatascience.com/jupyter-notebook-extensions-517fa69d2231


## IDE
0. https://realpython.com/python-ides-code-editors-guide/
1. Spyder: distribué avec Anaconda
2. **VSCode:** Installer *Python extension for Visual Studio Code*

*Jupyter Notebook