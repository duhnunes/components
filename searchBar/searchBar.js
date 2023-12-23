const searchBox = document.getElementById('searchBar');
const searchIcon = document.querySelector('.searchBar_icon');
const searchIcon2 = document.querySelector('.searchBar_icon i');

searchIcon.addEventListener("mouseover", () => {
    if(searchBox.value == ""){
        searchIcon.disabled = true;
    }else{
        searchIcon.disabled = false;
    }
})

