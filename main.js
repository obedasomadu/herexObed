const randomFotos = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
  ];
  let newFotos = [];
 
  console.log("test")

  const fotos = document.querySelector('#root');
  
  let nr = 0;

  function go(){ 
        setInterval(function(){ 
            if(nr < 9){ 
            nr++
            newFotos.push(`<div id="${nr}jpg" style="background-image: url('./img/${nr}.jpg');width: 100%;opacity: 0.5;" onclick="reply_click(this.id)">${randomFotos[nr]}</div>`);
            fotos.innerHTML = newFotos;
        }else if(nr >= 9){   
        }
         }, );
         
  }

    document.getElementById('root').style.display = "flex";
    document.getElementById('root').style.flexDirection = "row";
    document.getElementById('root').style.height = "80vh";
    function toonKnop(){
        setTimeout(function(){
            newFotos.push('<button onclick="reset()">clear my choice</button>');
            fotos.innerHTML = newFotos;
        }, 500);
            
      }

let newArray = [];

 
      function reply_click(clicked_id)
  {
      if(newArray.length <=2){
        document.getElementById(`${clicked_id}`).style.border = "13px solid #FF0000";
        document.getElementById(`${clicked_id}`).style.opacity = "1";
      newArray.push(`${clicked_id}`)
      console.log(newArray)
      }
  }

function reset(){
    
    fotos.innerHTML = newFotos;
    newArray = [];

}
      
      

go();
toonKnop()
toonError()

  