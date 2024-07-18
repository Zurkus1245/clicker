    let but1 =document.getElementById("but1")
    let score = document.getElementById("score")
    let but2 = document.getElementById("but2")
    let but3 = document.getElementById("but3")
    let but4 = document.getElementById("but4")
    let inv = document.getElementById("inv")
    let money = 0

    but1.onclick = plus
    function plus(){
        money+= 1*power
        score.innerText=money
    }
    but3.onclick = telephone
    function telephone(){
        if (money>25){
            money -= 25;
            document.getElementById("score").textContent = money ;
            alert("предмет куплен");
            spisok.push('https://i1.wp.com/uz-taf-img.s3.eu-central-1.amazonaws.com/wp-content/uploads/2020/09/16142116/screenshot_155.png?resize=150%2C150&ssl=1')
          
        }  
          else{
            alert("недостаточно денег");
          }
          refresh()
    }
    but2.onclick = car
    function car(){
        if (money>30){
            money -= 30;
            document.getElementById("score").textContent = money ;
            alert("предмет куплен");
            spisok.push('https://i.pinimg.com/280x280_RS/9b/1c/9a/9b1c9a25b6ad8f436c8145549346932d.jpg  ')
          
          }  
          else{
            alert("недостаточно денег");
          }
          refresh()
    }
    let superclick1 = false
    let power = 1
    but4.onclick = superclick
    function superclick(){
        if (money > 40 &&!superclick1){
            money -= 40
            superclick1 = true;
            document.getElementById("score").textContent = money;
            alert("суперклик куплен")
            power = 3

        } 
        else if(superclick){
            alert("уже куплен")
        }
        
        else {
            alert("недостаточно денег")
        }
        refresh()
}
        
let spisok = []
function refresh(){
   let inv2=document.getElementById('inv2')
     inv2.innerHTML=''  
    for (i=0;i<spisok.length;i++){
        inv2.innerHTML+='<img width= "50px" src='+spisok[i]+'>'
    }
}