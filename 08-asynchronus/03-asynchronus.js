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
}

const printGitHubUser = async() => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();