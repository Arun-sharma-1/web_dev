const valueCount = document.getElementById('counter');

const decrement = () => {
    let value = parseInt(valueCount?.textContent || '0', 10);
    value--;
    valueCount.textContent = value;
}

function increment() {
    let value = parseInt(valueCount?.textContent ?? '0', 10);
    value++;
    valueCount.textContent = value;
}