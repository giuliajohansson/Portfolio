var alter = 0

function verificar()
{
    console.log(alter)

    if(alter%2==0) {
        document.body.style.background = "#ffffff"
    } else {
        document.body.style.background = "#ffc8dd"
    }

    alter++

}