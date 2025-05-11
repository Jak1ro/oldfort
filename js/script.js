const burger = document.getElementById('burger');
const confirm = document.getElementById('confirm');
const bodyPage = document.querySelector('body');
// Google Tag Manager

// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-5NN2P6RW');

// HAMBURG START

function brgrSwitch() {
    burger.checked = false;
}

//SCROLLMENU START


document.addEventListener('DOMContentLoaded' , () => {
	const onScroll = () => {

		const header = document.querySelector('.header');

		let prevScroll = window.pageYOffset;
		let currentScroll;

		window.addEventListener('scroll' , () => {

			currentScroll = window.pageYOffset;
			
			const headerHidden = () => header.classList.contains('header_hidden')
				
				if (currentScroll > prevScroll && !headerHidden()) {
					header.classList.add('header_hidden');
				}
				if (currentScroll < prevScroll && headerHidden()) {
					header.classList.remove('header_hidden')
				}
				prevScroll = currentScroll;
		})
	}
	onScroll();
})

//CONFIRM

function confirmSend() {
    bodyPage.classList.add('no_scroll')
    confirm.style.display = 'block';
}

function unConfirmSend() {
    bodyPage.classList.remove('no_scroll')
    confirm.style.display = 'none';
}



//FORM

const TOKEN = '6928321854:AAEg424YNG1sOJwcwyCVnEaWQjMXyAKePOY';
const CHAT_ID = '-1002088725739';
const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');

document.getElementById('tg').addEventListener('submit', function (e) {
    e.preventDefault();

    let message = `<b>Заявка с сайта</b>\n`;
    message += `Отправитель: <b>${this.name.value}</b>\n`;
    message += `Номер телефона: ${this.tel.value}\n`;
    message += `<b>Вопрос:</b> ${this.message.value}\n`;

    axios.post(URL_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message
    })
    .then((res) => {
        this.name.value = '';
        this.tel.value = '';
        this.message.value = '';
        confirmSend();
		
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {
        console.log('End');
    })
})

//TRANSLATE

const lang = document.querySelector('.lang_select');

function translateMenu() {
    lang.classList.toggle('active');
}

// TRANSLATEMOBILE

const langMob = document.querySelector('.langmob_select');

function translateMenuMob() {
    langMob.classList.toggle('active');
}

// ОБРАТНЫЙ ЗВОНОК 

(function(d, w, s) {
    var widgetHash = '9lr4771fzwhor866hdv9', gcw = d.createElement(s);
    gcw.type = 'text/javascript';
    gcw.async = true;
    gcw.src = '//widgets.binotel.com/getcall/widgets/'+ widgetHash +'.js';
    var sn = d.getElementsByTagName(s)[0]; sn.parentNode.insertBefore(gcw, sn);
    })(document, window, 'script');