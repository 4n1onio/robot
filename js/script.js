const sidebar = document.querySelector('.sidebar');

// open the sidebar
document.querySelector('.header__btn').addEventListener('click', () => {
   sidebar.classList.add('open');
});

// close the sidebar
document.querySelector('.sidebar__btn').addEventListener('click', () => {
   sidebar.classList.remove('open');
});

// close sidebar, when user clicks outside of it
document.querySelector('.overlay').addEventListener('click', () => {
   sidebar.classList.remove('open');
});

// close the sidebar, when user clicks on links inside of it 
document.querySelector('.sidebar__menu').addEventListener('click', () => {
   sidebar.classList.remove('open');
});