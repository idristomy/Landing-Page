function updateOldPrice(size) {
    const oldPriceElement = document.getElementById('oldPrice');
    const newPriceElement = document.getElementById('newPrice');
    let oldPrice, newPrice;

    if (size === '12') {
        oldPrice = 99;
        newPrice = 79;
    } else if (size === '10') {
        oldPrice = 89;
        newPrice = 69;
    }

    oldPriceElement.innerHTML = `السعر القديم: <del>${oldPrice} دينار</del>`;
    newPriceElement.innerHTML = `السعر الجديد: <strong>${newPrice} دينار</strong>`;
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
        productCost = 79;
    } else if (size === '10') {
        productCost = 69;
    }

    productCost *= quantity;

    productCostElement.textContent = `تكلفة المنتج: ${productCost} دينار`;
    totalCostElement.textContent = `السعر الإجمالي: ${productCost + shippingCost} دينار`;
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
