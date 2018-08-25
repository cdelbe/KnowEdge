/*\
title: $:/scrollhack-pagescroller.js
type: application/javascript
module-type: macro
summary: overwrites $tw.pageScroller.scrollIntoView to introduce an offset [[$:/plugins/tongerner/layout_adjustment/offsetY]]

<<scrollhack>>

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

exports.name = "scrollhack";
exports.params = [{}];

/*
Run the macro
*/
exports.run = function() {

	if(!this.hackOnce){
		this.hackOnce = true;

		//SCROLLHACK: get offsetY
		var offsetY = parseInt($tw.wiki.getTiddlerText("$:/plugins/tongerner/layout_adjustment/offsetY"));
		offsetY = isNaN(offsetY) ? 0 : offsetY;

		/*
		Handle a scroll event DIFFERENTLY hitting the page document
		*/
		$tw.pageScroller.scrollIntoView = function(element) {
			var duration = $tw.utils.getAnimationDuration();
			// Now get ready to scroll the body
			this.cancelScroll();
			this.startTime = Date.now();
			var scrollPosition = $tw.utils.getScrollPosition();
			// Get the client bounds of the element and adjust by the scroll position
			var clientBounds = element.getBoundingClientRect(),
				bounds = {
					left: clientBounds.left + scrollPosition.x,
					top: clientBounds.top + scrollPosition.y,
					width: clientBounds.width,
					height: clientBounds.height
				};
			// We'll consider the horizontal and vertical scroll directions separately via this function
			var getEndPos = function(targetPos,targetSize,currentPos,currentSize) {
					// If the target is above/left of the current view, then scroll to it's top/left
					if(targetPos <= currentPos) {
						return targetPos;
					// If the target is smaller than the window and the scroll position is too far up, then scroll till the target is at the bottom of the window
					} else if(targetSize < currentSize && currentPos < (targetPos + targetSize - currentSize)) {
						return targetPos + targetSize - currentSize;
					// If the target is big, then just scroll to the top
					} else if(currentPos < targetPos) {
				return targetPos;
					// Otherwise, stay where we are
					} else {
						return currentPos;
					}
				},
				endX = getEndPos(bounds.left,bounds.width,scrollPosition.x,window.innerWidth),
				endY = getEndPos(bounds.top,bounds.height,scrollPosition.y,window.innerHeight);

			// Only scroll if necessary
			if(endX !== scrollPosition.x || endY !== scrollPosition.y) {

				//HACK-142: fix endY via offsetY
				endY = (endY - offsetY) || 0;

				var self = this,
					drawFrame;
				drawFrame = function () {
					var t;
					if(duration <= 0) {
						t = 1;
					} else {
						t = ((Date.now()) - self.startTime) / duration;	
					}
					if(t >= 1) {

						self.cancelScroll();
						t = 1;
					}
					t = $tw.utils.slowInSlowOut(t);

					window.scrollTo(
						scrollPosition.x + (endX - scrollPosition.x) * t,
						scrollPosition.y + (endY - scrollPosition.y) * t);

					if(t < 1) {
						self.idRequestFrame = self.requestAnimationFrame.call(window,drawFrame);
					}
				};
				drawFrame();
			}
		};


	};
	return "";

}

})();