import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

// /** Commenting OUt for now as it was working and not any more :/
//  * Called to resize a given iframe.
//  *
//  * @param frame The iframe to resize.
//  */
// function resize( frame ) {
//   var b = frame.contentWindow.document.body || frame.contentDocument.body,
//       cHeight = $(b).height();

//   if( frame.oHeight !== cHeight ) {
//     $(frame).height( 0 );
//     frame.style.height = 0;

//     $(frame).height( cHeight );
//     frame.style.height = cHeight + "px";

//     frame.oHeight = cHeight;
//   }

//   // Call again to check whether the content height has changed.
//   setTimeout( function() { resize( frame ); }, 250 );
// }

// /**
//  * Resizes all the iframe objects on the current page. This is called when
//  * the page is loaded. For some reason using jQuery to trigger on loading
//  * the iframe does not work in Firefox 26.
//  */
// window.onload = function() {
//   var frame,
//       frames = document.getElementsByTagName( 'iframe' ),
//       i = frames.length - 1;

//   while( i >= 0 ) {
//     frame = frames[i];
//     frame.onload = resize( frame );

//     i -= 1;
//   }
// };

// Attempt to Remember Left Navigation Accordian State 
$('#menuBar a').each(function(){
  var myHref= $(this).attr('href');
  var pathname = window.location.pathname;
  if(pathname.match(myHref)) {
    $(this).parent().parent().addClass('is-active').css('display','block');
    $(this).parent().parent().prev().attr('aria-expanded','true');
  }
});