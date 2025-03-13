function updateOldPrice(size) {
    const oldPriceElement = document.getElementById('oldPrice');
    const newPriceElement = document.getElementById('newPrice');
    let oldPrice, newPrice;

    if (size === '12') {
        oldPrice = 1200;
        newPrice = 900;
    } else if (size === '10') {
        oldPrice = 1000;
        newPrice = 750;
    }

    oldPriceElement.innerHTML = `السعر القديم: <del>${oldPrice} د.ج</del>`;
    newPriceElement.innerHTML = `السعر الجديد: <strong>${newPrice} د.ج</strong>`;
}

function updateShippingCost() {
    const state = document.getElementById('state').value;
    const shippingCostElement = document.getElementById('shippingCost');
    const totalCostElement = document.getElementById('totalCost');
    const productCostElement = document.getElementById('productCost');
    let productCost = parseInt(productCostElement.textContent.split(' ')[2]);
    let shippingCost = 0;

    const shippingRates = {
        'Adrar': 1250,
        'Chlef': 800,
        'Laghouat': 950,
        'Oum El Bouaghi': 850,
        'Batna': 850,
        'Bejaia': 800,
        'Biskra': 950,
        'Bechar': 1000,
        'Blida': 600,
        'Bouira': 750,
        'Tamanrasset': 1500,
        'Tebessa': 850,
        'Tlemcen': 900,
        'Tiaret': 880,
        'Tizi Ouzou': 750,
        'Algiers': 450,
        'Djelfa': 950,
        'Jijel': 800,
        'Setif': 800,
        'Saida': 850,
        'Skikda': 850,
        'Sidi Bel Abbes': 850,
        'Annaba': 800,
        'Guelma': 850,
        'Constantine': 800,
        'Medea': 750,
        'Mostaganem': 800,
        'M\'Sila': 880,
        'Mascara': 850,
        'Ouargla': 950,
        'Oran': 750,
        'El Bayadh': 980,
        'Illizi': 0,
        'Bordj Bou Arreridj': 800,
        'Boumerdes': 650,
        'El Tarf': 850,
        'Tindouf': 0,
        'Tissemsilt': 880,
        'El Oued': 930,
        'Khenchela': 880,
        'Souk Ahras': 880,
        'Tipaza': 700,
        'Mila': 850,
        'Ain Defla': 800,
        'Naama': 1000,
        'Ain Temouchent': 850,
        'Ghardaia': 1000,
        'Relizane': 880,
        'Timimoun': 1300,
        'Bordj Badji Mokhtar': 0,
        'Ouled Djellal': 950,
        'Beni Abbes': 1000,
        'In Salah': 1500,
        'In Guezzam': 1500,
        'Touggourt': 950,
        'Djanet': 0,
        'El M\'Ghair': 980,
        'El Menia': 980
    };

    const nonDeliverableStates = ['Illizi', 'Bordj Badji Mokhtar', 'Djanet', 'Tindouf'];

    if (nonDeliverableStates.includes(state)) {
        shippingCostElement.textContent = 'غير قابلة للتوصيل';
        totalCostElement.textContent = 'غير قابلة للتوصيل';
    } else {
        shippingCost = shippingRates[state] || 0;
        shippingCostElement.textContent = `تكلفة الشحن: ${shippingCost} د.ج`;
        totalCostElement.textContent = `السعر الإجمالي: ${productCost + shippingCost} د.ج`;
    }
}

function updatePrice(size) {
    const productCostElement = document.getElementById('productCost');
    const totalCostElement = document.getElementById('totalCost');
    const shippingCostElement = document.getElementById('shippingCost');
    const quantityElement = document.getElementById('quantity');
    let productCost = 0;
    let shippingCost = parseInt(shippingCostElement.textContent.split(' ')[2]);
    let quantity = parseInt(quantityElement.value);

    if (size === '12') {
        productCost = 900;
    } else if (size === '10') {
        productCost = 750;
    }

    productCost *= quantity;

    productCostElement.textContent = `تكلفة المنتج: ${productCost} د.ج`;
    totalCostElement.textContent = `السعر الإجمالي: ${productCost + shippingCost} د.ج`;
}

document.getElementById('quantity').addEventListener('input', () => {
    const size = document.querySelector('input[name="size"]:checked').value;
    updatePrice(size);
});

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const offset = 60; // Adjust this value to set the offset
    const section = document.querySelector(sectionId);
    const sectionPosition = section.offsetTop - offset;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbzpdjhdhCc8rzlHXZPFs8bDo4zDYDJSa669GOD26fyfo7TE9zAXPCtKUdM0FueqPf8oOg/exec';
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('شكرا لك! تم ارسال طلبك بنجاح سوف نتصل بك في أقرب وقت لتأكيد طلبيبتك', response);
        window.alert('شكرا لك! تم ارسال طلبك بنجاح سوف نتصل بك في أقرب وقت لتأكيد طلبيبتك');
    })
      .catch(error => console.error('Error!', error.message))

  })


const ScriptURL = 'https://script.google.com/macros/s/AKfycbxqP2Jrn8efGuX9Q4fV_6Bqi4TnKdpccdgXDDru5XDvIHuBGP1TQLiXhv09GIrhCX4xjw/exec';
const Form = document.forms['Get-in-touch'];

Form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(ScriptURL, { method: 'POST', body: new FormData(Form) })
        .then(response => {
            console.log('شكرا لك! تم ارسال رسالتك بنجاح', response);
            const thankYouMessage = document.getElementById('thankYouMessage');
            thankYouMessage.innerHTML = 'شكرا لك! تم ارسال رسالتك بنجاح سوف نتصل بك في أقرب وقت';
            thankYouMessage.style.display = 'block';

            setTimeout(() => {
                thankYouMessage.style.display = 'none';
            }, 5000);

            setTimeout(() => {
                Form.reset();
            }, 10000);
        })
        .catch(error => console.error('Error!', error.message));
});
