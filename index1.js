 Q. write a javascript program to print reverse of the number?
 
 let num=3456;
let sum=0;
let rem=0;
while(num>0){
   rem=num%10;
   sum=sum*10+rem;
   num=parseInt(num/10);
}
console.log(sum);


