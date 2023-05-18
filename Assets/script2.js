function addShowToWatchlist() {
    var storageData = JSON.parse(localStorage.getItem("watchlistData"));
    for (let index = 0; index < storageData.length; index++) {
        const showsArray = storageData[index];
        let showName = document.createElement("li")
    var WatchlistCointainer = document.querySelector(".list-group")
    showName.textContent = storageData[index].name + ":" + " " + "Rating " + storageData[index].rating
    WatchlistCointainer.append(showName);
    }
}
addShowToWatchlist()