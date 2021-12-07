const canvas = document.getElementById('canvas');
let ctx;
if (canvas.getContext) {
   ctx = canvas.getContext('2d') ;
   ctx.strokeStyle = 'red';
   ctx.strokeRect(0, 0, 150,150)
} else {
   console.log('canevas non supporté')
 }
