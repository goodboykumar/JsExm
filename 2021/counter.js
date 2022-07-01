/* This example is having setinterval and localstorage example in it*/

if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}

//let counter = 0;
//    let count = () => {
//       counter++;
//       alert(counter);
//    }
function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector("h1").innerHTML = counter;
    localStorage.setItem('counter',counter);

    // if (counter % 10 === 0) {
    //     alert(`Count is now ${counter}`);
    // }

}
/* This addeventlistener stands for the loading of all elements because sometimes we used to declare
script tag at top in head part so it will throw error like "null" in console because it follows top-down 
approach
*/
document.addEventListener('DOMContentLoaded', function () {
    //update the value of h1 tag to the current value
    document.querySelector("h1").innerHTML = localStorage.getItem('counter')
    document.querySelector("button").onclick = count;
    

    //setInterval(count,1000);
});
