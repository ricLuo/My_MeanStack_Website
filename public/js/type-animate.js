$(function(){
		$(".type").typed({
			strings: ["root@ricace:~$ &nbsp; Hi, my name is <b style='font-size:14px'><i>Mingxiao Luo</i></b>,&nbsp;   and I'm a "],
			typeSpeed: 30
		});
    setTimeout(
        function()
        {
          //do something special
          $('#fadein-header').removeClass('hidden');
          $('#fadein-header').animate({
            opacity: 1
          }, 1100);

        }, 6000);

    setTimeout(
        function()
        {
          //do something special
          $('#fadein-sub-header').removeClass('hidden');
          $('#fadein-sub-header').animate({
            opacity: 1
          }, 1100);

        }, 8000);


	});
