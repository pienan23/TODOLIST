var addToDoButton=document.querySelector('#addToDo');
var ToDoContainer=document.querySelector('#todoContainer');
var inputField=document.querySelector('#inputField');

/* foction button*/
addToDoButton.onclick=function(){
    //verifier si l'input est non vide
    if( inputField !=null){

        //si l'input n'est pas vide alors creer un paragraphe
        var paragraphe = document.createElement('p')
   
    //valorise ce praragraphe avce le contenu de l'input
    paragraphe.innerHTML=inputField.value;

    //styliser mon paragraphe 
     paragraphe.classList.add('paragraphe-style');


    //inserer le paragraphe dans l'elementToDoContainer
    ToDoContainer.appendChild(paragraphe);

    // vidé input quand le paragraphe est ajouté
    inputField.value=''; 

     //barrer le paragraphe lorsqu'on clique sur lui
     paragraphe.addEventListener('click',function(){
        paragraphe.classList.add('paragraphe-click');
     })


      //supprimer le paragraphe lorsqu'on clique  deux fois sur lui
      paragraphe.addEventListener('dblclick',function(){
        ToDoContainer.removeChild(paragraphe);
     })

}

}
