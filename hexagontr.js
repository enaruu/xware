<!DOCTYPE html>
<html>
<head>
	<title>Hexagon Networks - Home</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="parallax">
		<div class="background"></div>
		<div class="content">
			<h1>HEXAGON NETWORKS</h1>
			<p>Topluluğumuza katılın ve Half-Life evrenindeki en iyi rol yapma deneyimini yaşayın.</p>
			<a href="#about" class="scroll-link">Daha Fazlası</a>
		</div>
	</div>
	<style>
	.parallax {
	  background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png');
	}
	</style>
		
	
	<div class="language-switcher">
	  <div class="selected-language">
		<img src="flag-en.png" alt="English">
	  </div>
	  <ul class="language-dropdown">
		<li>
		  <a href="#en">
			<img src="flag-en.png" alt="English">
			<span>English</span>
		  </a>
		</li>
		<li>
		  <a href="#tr">
			<img src="flag-tr.png" alt="Turkish">
			<span>Türkçe</span>
		  </a>
		</li>
	  </ul>
	</div>



	<div class="about-parallax" id="about">
	  <div class="about-background"></div>
	  <div class="about-content">
		<h2 style="font-family: 'Arial', 'Sans serif'; font-size: 80px; color: #FF4E45; font-style: italic; letter-spacing: 5px; text-shadow: 0px 0px 0 #333;">Şehir 17'ye Hoşgeldiniz</h2>
		<p>Hexagon Networks, Half-Life evreninde geçen bir rol yapma sunucusudur. Sunucumuzda birçok farklı rol yapma oyun modu ve harita ile en iyi rol yapma deneyimini sunuyoruz. Ayrıca sunucumuza katılanlar arasında gerçek bir topluluk hissi yaratıyoruz.</p>
		<p>Oyun yöneticilerimiz ve moderatörlerimiz her zaman yardıma hazırdır. Sunucumuzda size mükemmel bir oyun deneyimi sunmak için elimizden gelenin en iyisini yapacağız.</p>
		<a href="https://discord.gg/fK7TYqzgZG" target="_blank" class="about-button1">Discord</a>
		<a href="steam://connect/45.154.156.243:27015" target="_blank" class="about-button2">Server</a>
	  </div>
	</div>

	<style>
	.about-parallax {
	  background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png');
	}

	.about-background {
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: rgba(0, 0, 0, 0.6);
	}

	.about-content {
	  z-index: 1;
	  padding: 100px 0;
	  text-align: center;
	}

	.about-content h2 {
	  margin-top: 0;
	}

	.about-content p {
	  font-size: 20px;
	  line-height: 1.5;
	  margin-bottom: 30px;
	}

	.about-buttons {
	  position: absolute;
	  bottom: 20px;
	  right: 20px;
	  text-align: right;
	}

	.about-buttons .button {
	  display: inline-block;
	  font-size: 20px;
	  font-weight: bold;
	  text-transform: uppercase;
	  letter-spacing: 2px;
	  padding: 15px 30px;
	  background-color: #FF4E45;
	  color: #fff;
	  border-radius: 50px;
	  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	  transition: all 0.3s ease;
	}

	.about-buttons .button:hover {
	  background-color: #F23225;
	  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
	}
	</style>
	

	<section class="team-parallax" id="team">
	  <div class="team-background"></div>
	  <div class="team-content">
		<h2>Ekip İle Tanışın</h2>
		<div class="team-members">
		  <div class="team-member">
			<img src="https://cdn.discordapp.com/avatars/1012753721156972655/a_717081e2f0a2a0a794764672b4bbc47b.gif">
			<h3>Sean <-></h3>
			<p>Kurucu</p>
		  </div>
		  <div class="team-member">
			<img src="https://cdn.discordapp.com/avatars/272374301758324737/a_271202a27eca668d27bb83573d5d9edb.gif">
			<h3>Prapor</h3>
			<p>Topluluk Yöneticisi</p>
		  </div>
		  <div class="team-member">
			<img src="https://cdn.discordapp.com/avatars/381740488472133632/a_8dec209670001f10c803f851156bfa77.gif">
			<h3>Keibs</h3>
			<p>Ekip Yöneticisi</p>
		  </div>
		</div>
	  </div>
	</section>


	
	<style>
	.team-parallax {
		background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png');
	}
	</style>
	
	
	<div class="join-parallax" id="join">
	  <div class="join-background"></div>
	  <div class="join-content">
		<h2>Şimdi Katıl!</h2>
		<p>Bugün sunucumuza katılın ve rol yapma maceranıza başlayın, aksiyonu kaçırmayın!</p>
		<a href="https://discord.gg/fK7TYqzgZG" target="_blank" class="join-button1">Discord</a>
		<a href="steam://connect/45.154.156.243:27015" target="_blank" class="join-button2">Sunucu</a>
	  </div>
	</div>

	<style>
	.join-parallax {
		background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/71/Black.png');
	}
	</style>



	<script>
		// select the "scroll-link" element
		const scrollLink = document.querySelector('.scroll-link');

		// add an event listener to the "scroll-link" element
		scrollLink.addEventListener('click', (event) => {
		  event.preventDefault(); // prevent the default behavior of clicking a link

		  const aboutSection = document.querySelector('#about'); // select the "about" section
		  const topOffset = aboutSection.offsetTop; // get the top offset of the "about" section

		  // scroll to the top of the "about" section with a smooth animation
		  window.scrollTo({
			top: topOffset,
			behavior: 'smooth'
		  });
		});
		
		const enLink = document.querySelector('a[href="#en"]');
		const trLink = document.querySelector('a[href="#tr"]');

		enLink.addEventListener('click', () => {
		  window.location.href = 'hexagon.html';
		});

		trLink.addEventListener('click', () => {
		  window.location.href = 'hexagontr.html';
		});

	</script>

</body>
</html>
