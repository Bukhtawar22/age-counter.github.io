function res() {

    var data_1 = document.getElementById('data_1').value ;
    var data_2 = document.getElementById('data_2').value ;


    var tot = parseInt(data_2) - parseInt(data_1);
    document.getElementById('result').innerHTML = "Your current Age is: " + tot;
    
    




}
function clr() {
    document.getElementById('result').innerHTML = "  "; 
    var data_1 = document.getElementById('data_1').value = " ";
    var data_2 = document.getElementById('data_2').value = " ";

}