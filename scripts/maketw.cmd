:: This script allows you to init a new TiddlyWiki tw5.com-server edition.
:: maketw TW_NAME
@echo off
echo.

::main
set TW_SERVE_EDITION_PATH=tw5.com-server
set TW-NAME=tw5.com
call :main %1 %2 %3 %4

exit 0
goto:eof

:: The editions path must exist!
if not exist %TW_SERVE_EDITION_PATH%\nul (
	echo The Path: "%TW_SERVE_EDITION_PATH%" does not exist
	exit 1
)
echo Using edition: %TW_SERVE_EDITION_PATH%
echo.

:: run
:main
tiddlywiki %TW-NAME% ^
	--verbose ^
	--init %TW_SERVE_EDITION_PATH% ^
	|| exit 1
goto:eof
