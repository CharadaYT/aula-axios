function teste(){
    const options = {method: 'GET', url: 'https://api.adviceslip.com/advice'};

    axios.request(options).then(function (api) {
        console.log(api.data);

        document.getElementById('texto').innerHTML = api.data.slip.advice;
        document.getElementById('id').innerHTML = `ID: ${api.data.slip.id}`;


    }).catch(function (error) {
        console.error(error);
    })
}