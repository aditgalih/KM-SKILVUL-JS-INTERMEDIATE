const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = (user_id) => {
    try {
        let response = await fetch(`https://api.github.com/users/${user_id}`, {
            method: 'GET',
        });
        let jsonResponse = await response.json();
        return jsonResponse;
    } catch (error) {
        console.log(error);
    }
};

elFormUsername.onsubmit = (e) => {
    e.preventDefault();
};