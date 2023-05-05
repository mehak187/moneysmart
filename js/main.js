$(document).ready(function() {
	$('.more-det-btn').click(function() {
		$('.more-det-content').toggleClass('active-det');
		$('.less-con').toggleClass('active');
		$('.more-con').toggleClass('active');

        
	});
});
// $(document).ready(function() {
//     var clickCount = 0;
//     $('.more-det-btn').click(function() {
//         var $btn = $(this);
//         var $content = $btn.prev('.more-det-content');
//         clickCount++;
        
//         if (clickCount % 2 !== 0) {
//             $content.addClass('active-det');
//             $btn.find('span').text('Less Details');
//         } else {
//             $content.removeClass('active-det');
//             $btn.find('span').text('More Details');
//         }
//     });
// });
