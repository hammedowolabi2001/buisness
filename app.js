//=================================BEGINNER'S METHOD=================================//

// var html = '<div class="main"> <div class="images"> <img src="profilepics" class="img"> </div> <div class="label"> Pixel Phone <br> $300.99 <br> remove </div> <div class="count"> 2 </div> </div>'
// var count =0;
// document.querySelector('#radio').addEventListener('click', function(){
//   var newhtml = html.replace('profilepics', './images/radio.png')
//    newhtml = newhtml.replace('Pixel Phone <br> $300.99 <br> remove', 'pure radio <br> $45.99 <br> remove')
//    newhtml = newhtml.replace('2', count)

//   document.querySelector('.content').insertAdjacentHTML('beforeend', newhtml)
// })

// document.querySelector('#phone').addEventListener('click', function(){
//   var newhtml = html.replace('profilepics', './images/phone.png')
//    newhtml = newhtml.replace('Pixel Phone <br> $300.99 <br> remove','Pixel Phone <br> $300.99 <br> remove')
//    newhtml = newhtml.replace('2', count)

//   document.querySelector('.content').insertAdjacentHTML('beforeend', newhtml)
// })

// document.querySelector('#computer').addEventListener('click', function(){
//   var newhtml = html.replace('profilepics', './images/computer.png')
//    newhtml = newhtml.replace('Pixel Phone <br> $300.99 <br> remove','computer <br> $678.99 <br> remove')
//    newhtml = newhtml.replace('2', count)

//   document.querySelector('.content').insertAdjacentHTML('beforeend', newhtml)
// })
//******************************************************************************************** */










// ======================ADVANCED AND STANDARD METHOD======================================//
var html = '<div class="main"> <div class="images"> <img src="profilepics" class="img"> </div> <div class="label"> Pixel Phone <br> $300.99 <br> remove </div> <div class="count"> 2 </div> </div>'
var Rcount=0  
var Pcount =0  
var Ccount  =0
var totalArr=[];

var allproducts = {
  radio:['images/radio.png', 'pure radio <br> $45.99 <br> remove', Rcount, 45.99 ],
  phone:['./images/phone.png', 'Pixel Phone <br> $300.99 <br> remove', Pcount, 300.99 ],
  computer:['./images/computer.png', 'computer <br> $949.99 <br> remove', Ccount, 949.99]
}


document.querySelector('.master').addEventListener('click', function(event){
  var total =0;
    var id = event.target.id
   //console.log(allproducts[id][0]); 

    var newhtml= html.replace('profilepics', allproducts[id][0])
    newhtml = newhtml.replace(' Pixel Phone <br> $300.99 <br> remove', allproducts[id][1])
    newhtml = newhtml.replace('2', allproducts[id][2])
    totalArr.push(allproducts[id][3]);
    console.log(totalArr);
    for(var n=0; n<=totalArr.length-1; n++ ){
      total+=totalArr[n]
    }
     console.log(total);
     
     document.querySelector('.total').textContent= total
    document.querySelector('.content').insertAdjacentHTML('beforeend', newhtml)


})














