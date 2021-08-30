const searchClub = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;
    searchField.value = '';
    // console.log(searchValue);
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayClub(data))
}

const displayClub = (clubIn) => {
    const searchResult = document.getElementById('search-result');
    const clubs = clubIn.teams;
    for (const club of clubs) {
        console.log(club);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="card">
                 <img src="${club.strTeamBadge}" class="card-img-top w-50 mx-auto" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${club.strTeam}</h5>
                            <h6>${club.strCountry}</h6>
                            <p class="card-text">${club.strDescriptionEN.slice(0, 200)}</p>
                        </div>
             </div>

        `;
        searchResult.appendChild(div);
    }

}