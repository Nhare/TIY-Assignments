// Angular 11/17
/*

browsersync.io
xip.io

*/

/*

angular.module

Interface for configuring angular modules.

var myModule = angular.module('myModule', []);



angular.extend

Extends the destination object dst by copying own enumerable properties
from the src object(s) to dst. You can specify multiple src objects. If you
want to preserve original objects, you can do so by passing an empty object
as the target: var object = angular.extend({}, object1, object2).

Note: Keep in mind that angular.extend does not support recursive
merge (deep copy).

angular.extend(dst, src);   Destination Object, Source Object


angular.copy

Creates a deep copy of source, which should be an object or an array.
* If no destination is supplied, a copy of the object or array is created.
* If a destination is provided, all of its elements (for array) or properties
  (for objects) are deleted and then all elements/properties from the source
  are copied to it.
* If source is not an object or array (inc. null and undefined), source is
  returned.
* If source is identical to 'destination' an exception will be thrown.

angular.copy(source, [destination]);

Returns: The copy or updated destination, if destination was specified.


angular.element

Wraps a raw DOM element or HTML string as a jQuery element.

If jQuery is available, angular.element is an alias for the jQuery function.
If jQuery is not available, angular.element delegates to Angular's built-in
subset of jQuery, called "jQuery lite" or "jqLite."
To use jQuery, simply load it before DOMContentLoaded event fired.

angular.element(element);



*/
