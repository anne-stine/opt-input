const inputs = document.querySelectorAll('.opt-field input');	

inputs.forEach(input =>
{
	input.addEventListener('keydown', (e) =>
	{	
		switch (true)
		{
			case /[0-9]/.test(e.key):
				e.preventDefault();
				input.value = e.key;
				input.nextElementSibling.focus();
				break;
				
			case e.key === 'Backspace':
				input.value = ''
				input.previousElementSibling.focus();
				break;
			
			case e.key === 'ArrowLeft':
				input.previousElementSibling.focus();
				break;
				
			case e.key === 'ArrowRight':
				input.nextElementSibling.focus();
				break;
				
			default:
				e.preventDefault();
		}
	});
});
