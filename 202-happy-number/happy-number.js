// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function(n) {
//      //Helper function
//     var recur=function(num){
//    const str=num.toString();
//    const splitStr=str.split("");
//    console.log(splitStr);
   
//    let output=0;
   
//    for(let i of splitStr){
//        // Recursion
//        output+=parseInt(i)*parseInt(i);
      
//    }
//     if(output===1){
//            return true;
//        }
//        if(output!==1){
//         return false;
//        }
//   recur(output.toString());
//     }
   
//    return recur(n);
// };

var isHappy = function(n) {
    // Helper function
    var recur = function(num) {
        let str = num.toString();
        let splitStr = str.split("");

        let output = 0;

        for (let i of splitStr) {
            output += parseInt(i) * parseInt(i);
        }

        if (output === 1) {
            return true;
        }

        // 🔥 Fix: detect cycle (important)
        if (output === 4) {  // all unhappy numbers end in this loop
            return false;
        }

        return recur(output); // 🔥 Fix: pass number, not string
    };

    return recur(n);
};

