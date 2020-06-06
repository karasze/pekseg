console.warn('Hello');

function katt(k)
{
    $(document.getElementById('m1')).removeClass("active").addClass("semmi");
    $(document.getElementById('m2')).removeClass("active").addClass("semmi");
    $(document.getElementById('m3')).removeClass("active").addClass("semmi");
    $(document.getElementById('m'+k)).removeClass("semmi").addClass("active");
    
}