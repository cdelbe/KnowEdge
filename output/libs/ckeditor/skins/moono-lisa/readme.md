created: 20181108074514719
creator: Charles Delbé
modified: 20181108074514719
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\skins\moono-lisa\readme.md
tmap.id: 54b2e55a-76de-4551-9a73-ac6735804229
type: text/x-markdown

created: 20181108074222764
creator: Charles Delbé
modified: 20181108074222764
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\skins\moono-lisa\readme.md
tmap.id: bc79ec1c-7f43-4a75-839d-a83f149b27e6
type: text/x-markdown

created: 20181108073424031
creator: Charles Delbé
modified: 20181108073424031
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\skins\moono-lisa\readme.md
tmap.id: 881d4deb-451a-4498-ace8-0043850b4cab
type: text/x-markdown

created: 20181108070538399
creator: Charles Delbé
modified: 20181108070538399
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\skins\moono-lisa\readme.md
tmap.id: 62e3f79e-1669-4c78-b1dc-33437f386012
type: text/x-markdown

created: 20181108070322268
creator: Charles Delbé
modified: 20181108070322268
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\skins\moono-lisa\readme.md
tmap.id: b24844c8-449a-492e-96c8-4fd108411920
type: text/x-markdown

created: 20181108063937413
creator: Charles Delbé
modified: 20181108063937413
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\libs\ckeditor\skins\moono-lisa\readme.md
tmap.id: 33de2d14-05bf-4d82-9ad4-a4b9f71fb1bb
type: text/x-markdown

created: 20181108063819846
creator: Charles Delbé
modified: 20181108063819846
modifier: Charles Delbé
title: c:\Users\Charles\dev\projects\tiddlywiki\wiki\wiki\tiddlers\ckeditor\skins\moono-lisa\readme.md
tmap.id: ee670c72-d821-4979-8d95-d29b4f85efc8
type: text/x-markdown

"Moono-lisa" Skin
=================

This skin has been made a **default skin** starting from CKEditor 4.6.0 and is maintained by the core developers.

For more information about skins, please check the [CKEditor Skin SDK](https://ckeditor.com/docs/ckeditor4/latest/guide/skin_sdk_intro.html)
documentation.

Features
-------------------
"Moono-lisa" is a monochromatic skin, which offers a modern, flat and minimalistic look which blends very well in modern design.
It comes with the following features:

- Chameleon feature with brightness.
- High-contrast compatibility.
- Graphics source provided in SVG.

Directory Structure
-------------------

CSS parts:
- **editor.css**: the main CSS file. It's simply loading several other files, for easier maintenance,
- **mainui.css**: the file contains styles of entire editor outline structures,
- **toolbar.css**: the file contains styles of the editor toolbar space (top),
- **richcombo.css**: the file contains styles of the rich combo ui elements on toolbar,
- **panel.css**: the file contains styles of the rich combo drop-down, it's not loaded
until the first panel open up,
- **elementspath.css**: the file contains styles of the editor elements path bar (bottom),
- **menu.css**: the file contains styles of all editor menus including context menu and button drop-down,
it's not loaded until the first menu open up,
- **dialog.css**: the CSS files for the dialog UI, it's not loaded until the first dialog open,
- **reset.css**: the file defines the basis of style resets among all editor UI spaces,
- **preset.css**: the file defines the default styles of some UI elements reflecting the skin preference,
- **editor_XYZ.css** and **dialog_XYZ.css**: browser specific CSS hacks.

Other parts:
- **skin.js**: the only JavaScript part of the skin that registers the skin, its browser specific files and its icons and defines the Chameleon feature,
- **images/**: contains a fill general used images,
- **dev/**: contains SVG and PNG source of the skin icons.

License
-------

Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.

For licensing, see LICENSE.md or [https://ckeditor.com/legal/ckeditor-oss-license](https://ckeditor.com/legal/ckeditor-oss-license)
