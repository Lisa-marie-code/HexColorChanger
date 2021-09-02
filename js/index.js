
    const myCol = document.getElementById('btn')
    const body = document.querySelector('body')
    const hexValue = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    const myHex = document.querySelector('#hex-value')
   
   myCol.addEventListener('click',changeHex)
   
   function changeHex (){
       let hex = '#'
      for (let i = 0;i < 6; i++ ){
          const index = Math.floor(Math.random()*hexValue.length)
          hex += hexValue[index];
        //   console.log(index);
      }
      myHex.textContent = hex
      body.style.backgroundColor = hex
    }
