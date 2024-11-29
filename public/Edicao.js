document.getElementById('menu-btn').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === '-350px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-350px';
    }
});

document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-350px';
});
