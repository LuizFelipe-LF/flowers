
onload = () =>{
    document.body.classList.remove("container");

    var title = document.getElementById('dynamicTitle');
    var messageElement = document.getElementById('dynamicMessage');
    var date = new Date();
    var hour = date.getHours();
    var greeting = "";
    var message = "";

    if (hour >= 6 && hour < 12) {
        greeting = "Bom diaaaaa";
        message = 'Passando para desejar um <br> bom diaaaaa...';
    } else if (hour >= 12 && hour < 18) {
        greeting = "Boa tardeeeee";
        message = 'Passando para desejar uma <br> boa tardeeeee...';
    } else {
        greeting = "Boa noiteeeee";
        message = 'Passando para desejar uma <br> boa noiteeeee...';
    }

    title.innerText = greeting;
    messageElement.innerHTML = message;

};