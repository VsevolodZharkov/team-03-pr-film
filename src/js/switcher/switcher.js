const themeSwitchers = document.querySelectorAll('.theme__icon');

themeSwitchers.forEach(switcher => {
    switcher.addEventListener('click', function() {
        alert(this.dataset.theme)
    })
})

