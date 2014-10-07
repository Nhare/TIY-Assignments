#Reading Javascript Assignment#

```
function exist( filename )
	{
		return filename in _memory;
	}

```
function exist
@filename

```
function clean( gl, now )
	{
```
function clean
@gl
@now

```
function touchTranslationX(oldTouches, touches)
	{
```
function touchTranslationX
@oldTouches
@touches

```
function get( key, def, version )
	{
```
function get
@key
@def
@version

```
function reload()
	{
```
function 
anonymous! (learned that today!)

```
function onRestartAnswer( pkt )
	{
		if (!pkt.type) {
			// Have to wait 10sec
			ChatBox.addText( DB.getMessage(502), ChatBox.TYPE.ERROR );
		}
		else {
			StatusIcons.clean();
			ChatBox.clean();
			ShortCut.clean();
			PartyFriends.clean();
			MapRenderer.free();
			Renderer.stop();
			onRestart();
		}
	}
```
function
@pkt
if/else

```
  define(function( require )
{
	'use strict';


	// Load dependencies
	var jQuery      = require('Utils/jquery');
	var Queue       = require('Utils/Queue');
	var Sound       = require('Audio/SoundManager');
	var BGM         = require('Audio/BGM');
	var DB          = require('DB/DBManager');
	var Configs     = require('Core/Configs');
	var Client      = require('Core/Client');
	var Thread      = require('Core/Thread');
	var Context     = require('Core/Context');
	var LoginEngine = require('Engine/LoginEngine');
	var Network     = require('Network/NetworkManager');
	var Renderer    = require('Renderer/Renderer');
	var MapRenderer = require('Renderer/MapRenderer');
	var UIManager   = require('UI/UIManager');
	var Cursor      = require('UI/CursorManager');
	var Scrollbar   = require('UI/Scrollbar');
	var Background  = require('UI/Background');
	var Intro       = require('UI/Components/Intro/Intro');
	var WinList     = require('UI/Components/WinList/WinList');

```
Define function()
@para Require
loads dependencies as indicated

```
if (count === 0) {
				UIManager.showMessageBox( 'Sorry, no server found.', 'ok', init);
			}

			// Just 1 server, skip the WinList
			else if (count === 1 && Configs.get('skipServerList')) {
				LoginEngine.onExitRequest = reload;
				LoginEngine.init( _servers[0] );
			}
			else {
				for (i = 0; i < count; ++i) {
					list[i] = _servers[i].display;
				}

				WinList.append();
				WinList.setList( list );
			}

```

If, Else If, Else

```
for (i = 0, count = files.length; i < count; ++i) {
				list.push({
					file: files[i],
					path: files[i].fullPath || files[i].relativePath || files[i].webkitRelativePath || files[i].name
				});
			}
```
For loop
@files
push's into list array

```
function search(regex, callback)
	{
		Thread.send(
			'SEARCH_FILE',
			regex,
			callback
		);
	}
```
Function search
@regex @callback

```
while (count > 0) {
			if (_events[0].tick > tick) {
				break;
			}

			_events.shift().callback();
			count--;
		}
```
While
@count

```
for (i = 0; i < count; ++i) {
			matches = fileList[i].table.data.match(regex);

			if (matches !== null) {
				// Remove duplicates
				for (j = 0, size = matches.length; j < size; ++j) {
					out[ matches[j] ] = 1;
				}
			}
		}
```
For loop 
If 
Nested for loop 
@count @matches

```
function calculateClientSize()
	{
		var i, count;

		_clientSize = 0;

		for (i = 0, count = _files.length; i < count; ++i) {
			_clientSize += _files[i].size || 0;
		}
	}

```
function
For loop
@_files
var clientSize -> returned

```
function cleanUp()
	{
		var i, count;
		var dirReader = _fs_sync.root.createReader();
		var entries   = dirReader.readEntries();

		for (i = 0, count = entries.length; i < count; ++i) {
			if (entries[i].isDirectory) {
				entries[i].removeRecursively();
			}
			else {
				entries[i].remove();
			}
		}
	}
```
function cleanUp
var i, count, dirReader, entries
@entries
Removes entries, recursively if Directory

```
function saveFile( filePath, buffer )
```
function
@filePath
@buffer

```
function MemoryItem( onload, onerror )
	{
```
function
@onload
@onerror

```
function get( filename, onload, onerror )
```
function
@filename
@onload
@onerror

```
function OnMessage( event ) {

```

* Function

```
chrome.app.window.create('chrome-app/window.html', {
		bounds: {
			width:  width,
			height: height,
			left:   Math.round((screenWidth-width)/2),
			top:    Math.round((screenHeight-height)/2)
		},

```

* Function

```
if (!Context.Is.APP) {
			window.onbeforeunload = function() {
				return 'Are you sure to exit roBrowser ?';
			};

```

* If return Function

```
if (require.defined('UI/Components/Error/Error')) {
		require('UI/Components/Error/Error').addTrace(err);
		return;
	}

```

* If return Function

```
switch (event.data.type) {

```

* Switch

```
else {
			// Waiting for the Thread to be ready
			q.add(function(){
				Thread.hook('THREAD_READY', q.next );
				Thread.init();
			});

```

* Else

```
if (Configs.get('API')) {
		window.addEventListener('message', onAPIMessage, false);
		return;

```

* If return

```
switch (event.data.type) {
			case 'init':
				Thread.delegate( event.source, event.origin );
				Thread.init();
				ModelViewer.append();
				break;

			case 'load':
				ModelViewer.loadModel(event.data.data);
				event.stopPropagation();
				break;

			case 'stop':
				ModelViewer.stop();
				event.stopPropagation();
				break;
		}

```

* Switch

```
		for (i = 0; i < count; ++i) {
			shortcut = Preferences[keys[i]];

			if (shortcut.component === component && shortcut.cmd === cmd) {
				var str = [];
				var tmp = KEYS.toReadableKey(parseInt(keys[i], 10));

				if (shortcut.alt) {
					str.push('ALT');
				}

				if (shortcut.shift) {
					str.push('SHIFT');
				}

				if (shortcut.ctrl) {
					str.push('CTRL');
				}
w
				if (tmp) {
					str.push(tmp);
				}

				return str.join(' + ');
			}
}

```

* For

```
for (i = 0; i < count; ++i) {
				if (this[keys[i]] === keyId) {
					return keys[i];
				}
			}

```

* For

```
function toEnglish(){
  return 'one';
}

```
  A fuction defined as toEnglish.

```
var testCase = [

];

```

A list

```
for (var index = 0; index < testCases.length; index++){
  test etcetc
}

For loop.

```
if (value > 20){
  return 'twenty' + ones[value-20];
}

```

If statement.

```
If (value > 39){
  return 'forty';
}

```

If statement
