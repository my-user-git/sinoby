let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

// new JustValidate ('.modal__form', {
//     rules: {
//         name: {
//             required: true,
//             minLength: 4,
//             maxLength: 20
//         },
//         tel: {
//             required: true,
//             // function: (name, value) => {
//             //     const phone = selector.inputmask.unmaskedvalue()
//             //     console.log(phone)
//             //     return Number(phone) && phone.length === 10
//             // }
//         },
//     },
//     messages: {
//         name: {
//             minLength: '<span class="modal__error">Недопустимый формат</span>',
//             required: '<span class="modal__error">Недопустимый формат</span>'
//         },

//         tel: {
//             required: '<span class="modal__error">Недопустимый формат</span>',
//             error: '<span class="modal__error">Недопустимый формат</span>'
//         },
//     },
// })

const validator = new JustValidate('.modal__form');

validator
    .addField('#modal-name', [
        {
            rule: 'required',
            errorMessage: '<span class="modal__error">Нам нужно знать как к Вам обращаться</span>',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: '<span class="modal__error">Введите > 3 символов</span>',
        },
        {
            rule: 'maxLength',
            value: 15,
            errorMessage: '<span class="modal__error">Не больше 20 символов</span>',
        },
    ])
    .addField('#modal-tel', [
        {
            rule: 'required',
            errorMessage: '<span class="modal__error">Без номера телефона мы не сможем сообщить Вам интересующие Вас сведения</span>',
        },
        {
            // validator: (value) => {
            //     console.log(value.length);
            //     return value.length !== 18;
            //   },
            rule: 'customRegexp',
            value: /^((8|\+[0-9])[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,15}$/,
            errorMessage: '<span class="modal__error">Введите номер телефона полностью</span>',
        },
        // {
        //     rule: 'maxLength',
        //     value: 15,
        // },
    ])
    .onSuccess((event) => {
        console.log('hjkhkjhk');
        const $form = document.querySelector('.modal__form');

        $form.reset();
        alert('Спасибо за обращение! Мы обязательно Вам перезвоним');
        $.fancybox.close();
    })