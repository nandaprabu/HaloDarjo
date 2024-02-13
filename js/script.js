// Mengatur Icon Menu
const navbarNav = document.querySelector('.navbar-nav');
const Menu = document.querySelector('#icon-menu');

document.querySelector('#icon-menu').onclick = (e) => {
    e.preventDefault();
    navbarNav.classList.toggle('active');
};

document.addEventListener('click', function(e){
    if(!Menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

// Mengatur Alert Form
function showAlert() {
    const nama = document.getElementById('nama-user').value;
    const message = "Hai " +nama+ "! terimakasih telah menghubungi kami. pesan kamu telah kami terima. team kami akan segera menghubungi anda!"
    alert(message);
}