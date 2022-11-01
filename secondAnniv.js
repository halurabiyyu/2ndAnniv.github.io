function validasi() {
    var name = document.getElementById("name").value;
    var pass = document.getElementById("pass").value;
    if (name == "lintangazaliafidelani" && pass == "411" ){
        myWeb();
    }else if(name != "lintangazaliafidelani" && pass == "411"){
        alert("Siapa ni??? aku tidak kenal, hufffttt");
    }else if(name == "lintangazaliafidelani" && pass !="411"){
        alert("Parah bangett, kamu lupa??? huffttt");
    }else{
        alert("ini pasti bukan lintang")
    }
}
function myWeb(){
    window.location.href = "https://halurabiyyu.github.io/2ndAnniv.github.io/";
}