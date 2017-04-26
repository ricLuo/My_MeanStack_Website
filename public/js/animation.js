// $(function() {
//   //get the welcome msg element
//
//   $('#fade-in').removeClass('hidden');
//
//   var $all_msg = $('#fade-in');
//   //get a list of letters from the welcome text
//   var $wordList = $('#fade-in').text().split("");
//   //clear the welcome text msg
//   $('#fade-in').text("");
//   //loop through the letters in the $wordList array
//
//
//
//
//   $.each($wordList, function(idx, elem) {
//     //create a span for the letter and set opacity to 0
//     var newEL = $("<span/>").text(elem).css({
//       opacity: 0
//     });
//     //append it to the welcome message
//     newEL.appendTo($all_msg);
//     //set the delay on the animation for this element
//     newEL.delay(idx * 100);
//     //animate the opacity back to full 1
//     newEL.animate({
//       opacity: 1
//     }, 1100);
//
//     newEL.delay(idx * 100);
//   });
//
//   $('#fadein-header').removeClass('hidden');
//
//   $('#fadein-header').delay(2000);
//   $('#fadein-header').animate({
//     opacity: 1
//   }, 1100);
//
//   $('#sourceCode').removeClass('hidden');
//   $('#sourceCode').delay(4000);
//   $('#sourceCode').animate({
//     opacity: 1
//   }, 1100);
//
// });
