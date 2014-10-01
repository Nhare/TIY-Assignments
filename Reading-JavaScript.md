#Reading Javascript Assignment#

```
  @var {boolean} auto extract mode
 
```

* Variable / Boolean

```
 @var {string} data.ini file

```

* Variable / String

```
 @var {Array} grf list
	
	static private $grfs = array();
	
```

* Variable / Array

```
  @param {string} regex

```

* Parameter / String

```
  @return {Array} file list

```

* Returns Array

```
  $out  = array_unique( array_merge($out, $list) );

```

* Output is the Merged Value.

```
  return $out;

```

* Returns the Output.

```
  @return {boolean}

```

* Returns Boolean

```
$img = imagecreatetruecolor($width, $height);
	imagealphablending($img, false);
	imagesavealpha($img, true);

```

* Boolean

```
	{
		ini_set('display_errors', 0);
		error_reporting(-1);

		self::$actived = false;
	}

```

* Boolean equation to determine if errors occured.

```
/**
	 * Is in debug mode ?
	 *
	 * @return {boolean}
	 */

```

* Boolean value returned to check if in debug mode.

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
