let search = document.querySelector('.searchbar');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}


let favourite = document.querySelector('.favorite');

document.querySelector('#favourite').onclick = () => {
    favourite.classList.toggle('active');
    search.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');

}


window.onscroll = () => {
    search.classList.remove('active');
    favorite.classList.remove('active');
    checkout.classList.remove('active');
    login.classList.remove('active');
}