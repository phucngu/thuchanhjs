let textone =document.getElementById("textone");
let btntwo =document.getElementById("btntwo");
let result=document.getElementById("result");
let image =document.getElementById("image");

btntwo.addEventListener("click", hamGiDo);

function hamGiDo(){
    let listanimal = ['dog','cat'];
    let animal = textone.value;

    // Can hoc va ren luyen tu duy Lap trinh truoc do
    if(animal == ''){
        alert('You must input a animal');
    }else{
        let result = false;
        for(let i=0; i<listanimal.length; i++){
            if(animal == listanimal[i]){
                result = true;
                break;
            }
        }
        if(result == true){
            result.textContent = animal;
            // imgContainer.innerHTML='<img src="assets/images/'+fruit+'.jpg" alt="">';
            image.src = 'image/'+animal+'.jpg';
        }else{
            alert("animal is not exited")
        }
    }


}
