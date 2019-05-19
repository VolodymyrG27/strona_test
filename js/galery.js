var locale = document.getElementsByClassName('locale_li'), i = 0;
down.onclick = function() {
    locale[i].style.display="none";
    i = (i < (locale.length - 1))?i+1:0;
    locale[i].style.display="block";
}

up.onclick = function() {
    locale[i].style.display="none";
    i = (i > 0)?i-1:locale.length - 1;
    locale[i].style.display="block";
}