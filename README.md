# DrawCanvas.js
Drawing canvas functions with javascript.  
  
Sample HTML can be seen [here](https://tsuday.github.io/DrawCanvas.js/), and Jsdoc is [here](https://tsuday.github.io/DrawCanvas.js/JsDoc/DrawCanvas.html).

## How to Use

### Import
You can import _DrawCanvas.js_ by the ways below:
* Import by _<script>_ tag in your HTML.
* Import into your app scripts by build tools(e.g. _webpack_).

### Implementation
1.Locate _canvas_ element in your HTML

2.Relate _canvas_ to DrawCanvas.js object by calling its constructor

3.Configurations like pen size or pen color can be changed by calling APIs.

4.Users can draw images by mouse dragging on _canvas_.

5.Users can undo/redo each stroke on _canvas_ with APIs.

6.Convert drawn canvas to image by calling DrawCanvas#toDataURL

7.Clear canvas by calling DrawCanvas#clear
