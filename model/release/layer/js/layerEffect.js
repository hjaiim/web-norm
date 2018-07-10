var aniTime = 2000;
	var layerEffect = (function ()
	{
		function init()
		{
			[].slice.call(document.querySelectorAll('.layer-trigger')).forEach(function (el, i)
					{
						var modal = document.querySelector('#' + el.getAttribute('data-modal'));
						el.addEventListener('click', function (ev)
						{
							classie.remove(modal, 'hide');
							console.log(modal.classList);
							setTimeout(function ()
							{
								classie.add(modal, 'hide');
							}, aniTime)
						})
					}
			)
		}

		init();
	})();