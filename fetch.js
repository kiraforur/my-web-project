function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


document.getElementById('show').addEventListener('click', function (event) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            let response = '';
            let count = 9;
            let id_start = getRandomInt(250)
            for (let i = 0; i < count; i++) {
                response += `<div>
                                    <p> <b>Name</b>: ${data[id_start].name}</p>
                                    <p> <b>Email</b>: ${data[id_start].email} </p>
                                    <p> <b>Comment</b>: ${data[id_start].body} </p>      
                                    </div>`;
                id_start++;
            }
            document.getElementById("showid").innerHTML = response;
            document.getElementById("preload").remove();
        })
        .catch((e) => {
            var response = '';
            response += '<p> ⚠ Что-то пошло не так</p>';
            document.getElementById("showid").innerHTML = response;
        });
})