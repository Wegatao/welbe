function somar(){
   //console.log('ok')
   var cx1 = window.document.getElementById('txt1')
   var cx2 = window.document.getElementById('txt2')

   var n1  = Number(cx1.value)
   var n2  = Number(cx2.value)
   var s    = n1 + n2

   var res = document.getElementById('res1')

   if(somar = true){
            res.innerHTML = `${s}
            `
   }
  cx1.value=''
  cx2.value=''
}

function menos(){
   var cx1 = window.document.getElementById('MN1')
   var cx2 = window.document.getElementById('MN2')
   var n1  = Number(cx1.value)
   var n2  = Number(cx2.value)
   var s   = n1-n2
   var res = window.document.getElementById('res2')

   if(menos = true){
      res.innerHTML=`${s}`
   }
   cx1.value=''
   cx2.value=''
}

function multi(){
   var cx1 = document.getElementById('VZ1')
   var cx2 = document.getElementById('VZ2')

   var n1  = Number(cx1.value)
   var n2  = Number(cx2.value)
   var s   = n1*n2
   var res = document.getElementById('res3')

   if(multi = true){
      res.innerHTML = `${s}`
   }
   cx1.value=''
   cx2.value=''
}

function Divi(){
   var cx1 = document.getElementById('DV1')
   var cx2 = document.getElementById('DV2')
   var n1  = Number(cx1.value)
   var n2  = Number(cx2.value)
   var s   = n1/n2
   var res = document.getElementById('res4')

     if(Divi = true ){
           res.innerHTML = `${s}`
        }
        cx1.value=''
        cx2.value=''
}

