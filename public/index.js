const myButton = document.querySelector('#first');
const mySecond = document.querySelector('#second');

console.log(myButton)

myButton.addEventListener('click', async () => {
    console.log('clicked')

    const response = await fetch('http://localhost:6969/receiveJSON', { 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true
    });

    const data = await response.json();

    console.log(data)
});

mySecond.addEventListener('click', async () => {
    console.log('click');

    const response = await axios.post('http://localhost:6969/sendJSON', { message: 'myMessage'}, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        withCredentials: true
    })
    console.log(response)
})
