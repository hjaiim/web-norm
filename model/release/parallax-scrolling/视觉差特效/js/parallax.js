var parallax = (function checkVisibleSection()
	{
		var scrollTop = $(window).scrollTop(),
				windowHeight = $(window).height();

		$('[data-type="slider-item"]').each(function ()
		{
			var actualBlock = $(this),
					offset = scrollTop - actualBlock.offset().top;
			( offset >= 0 && offset < windowHeight ) ? actualBlock.addClass('is-visible') : actualBlock.removeClass('is-visible');
		});
	})()
