//geslo
	const gumb = document.getElementById('sh');
	const user = document.getElementById('user');
	const pass = document.getElementById('pass');
	const loginGumb = document.getElementById('loginGumb');
	const fbGumb = document.getElementById('fbGumb');
	const forgotGumb = document.getElementById('forgotGumb');
	const metaGumb = document.getElementById('metaGumb');
	const reportGumb = document.getElementById('reportGumb');
	loginGumb.disabled = true; //login gumb je onemogočen
	loginGumb.style.cursor = 'not-allowed';

	
	function preveriLogin () {
		// Show/hide glede na to, ali je kaj vpisano ali ne
		if (pass.value.trim().length > 0) {
			gumb.style.display = 'block';
		} else {
			gumb.style.display = 'none';
		}
		
		if(pass.value.trim()=="Test1." && (user.value.trim()=="test@gmail.com" || user.value.trim()=="test" || user.value.trim()=="123456789")){
			loginGumb.disabled = false;
			loginGumb.style.cursor = 'pointer';
		} else {
			loginGumb.disabled = true;
		}
		
	}
	
	// menja show/hide
	gumb.addEventListener('click', function () {
	  if (pass.type === 'password') {
		pass.type = 'text';
		gumb.textContent = 'Hide';
	  } else {
		pass.type = 'password';
		gumb.textContent = 'Show';
	  }
	});

	pass.addEventListener('input', preveriLogin);
	user.addEventListener('input', preveriLogin);
	
	loginGumb.addEventListener('click', function (event){
		event.preventDefault(); // brez tega ne pokaže alerta, ker gre kr naprej
		Swal.fire({
			title: 'Logged in!',
			text: 'Welcome to Instagram',
			icon: 'success',
			confirmButtonText: 'OK',
			confirmButtonColor: "#808dfb"
		});
	});
	
	fbGumb.addEventListener('click', function (event){
		event.preventDefault(); // brez tega ne pokaže alerta, ker gre kr naprej
		Swal.fire({
			title: 'Napaka!',
			text: 'Prijava s Facebook računom ni mogoča.',
			icon: 'error',
			confirmButtonText: 'OK',
			confirmButtonColor: "#808dfb"
		});
	});
	
	forgotGumb.addEventListener('click', function (event){
		event.preventDefault(); // brez tega ne pokaže alerta, ker gre kr naprej
		Swal.fire({
			title: 'Pozabljivec!',
			text: 'Zapomni si geslo.',
			imageUrl: "img/forget.jpg",
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: "pozabljivec",
			confirmButtonText: 'OK',
			confirmButtonColor: "#808dfb"
		});
	});
	
	metaGumb.addEventListener('click', function (event){
		event.preventDefault(); // brez tega ne pokaže alerta, ker gre kr naprej
		Swal.fire({
			title: 'Avtor',
			text: 'Žiga Kranjc, 4. Rb',
			icon: 'info',
			confirmButtonText: 'OK',
			confirmButtonColor: "#808dfb"
		});
	});
	
	reportGumb.addEventListener('click', async function(event){
	const { value: text } = await Swal.fire({
		input: "textarea",
		inputLabel: "Report",
		inputPlaceholder: "Prijavi težavo...",
		inputAttributes: {
			"aria-label": "Type your message here"
	},
		
		showCancelButton: true,
		confirmButtonColor: "#808dfb"
	})
	});