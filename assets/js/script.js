$(function functionName() {
  // la valeur commencera avec 0
  var add = 0;
  $('#button1').click(function(){
    // ajout de valeur en plus ++
    add++;
    // permet de le modifier dans le fichier index.html
    $('#add').html(add + ' arbres plantés')
  });
  $('#button2').click(function(){
    // ça marche comme les soustractions
    add--;
    // permet de le modifier dans le fichier index.html
    $('#add').html('Arrête ._. ' + add)
  });
})
