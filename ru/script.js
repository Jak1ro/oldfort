const burger = document.getElementById('burger');
const confirm = document.getElementById('confirm');
const bodyPage = document.querySelector('body');

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
        // success.innerHTML = 'Сообщение отправлено';
        // success.style.display = 'block';
		
    })
    .catch((err) => {
        console.log(err);
    }) 
    .finally(() => {
        console.log('End');
    })
})

//FORM

