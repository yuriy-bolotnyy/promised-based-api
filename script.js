log = console.log;

log('Promise-based API')




window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const output = document.querySelector('#output');
    const button = document.querySelector('#set-alarm');
    const name = document.querySelector('#name');
    const delay = document.querySelector('#delay');

    // log(button)
    // log(document.querySelector('#set-alarm'))
    
    // Traditional way
    document.querySelector('#set-alarm').addEventListener('click', setAlarm);
    
    // Promise way
    button.addEventListener('click', () => {
        alarmPromise(name.value, delay.value)
            .then((message) => output.textContent = message)
            .catch((error) => output.textContent = `Couldn't set alarm ${error}`)
    });

    // Same Promise, but with cleaner Async Await syntax
    button.addEventListener('click', async () => {
        try {
            const message = await alarmPromise(name.value, delay.value)
            output.textContent = message
        }
        catch (error) {
            output.textContent = `Couldn't set alarm ${error}`;
        }
    })
});   


// Traditional way
const setAlarm = () => {
    setTimeout(() => {
      document.querySelector('#output').textContent = 'Wake up!';
    }, 1000);
  }

// 

// Promise way
const alarmPromise = (person, delay) => {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw Error('Alarm delay must be > zero')
        } 
        setTimeout(() => {
            resolve(`Wake up, ${person}`)
        }, delay);
    });
}
