function test_prime(number){
    //Function can test is number prime r not
    if (number===1){
      return false;
      }
      else if(number === 2){
        return true;
      }else{
        for(var x = 2; x < number; x++){
            if(number % x === 0){
              return false;
            }
        }
        return true;  
      }
  }


function BardToParz(num){
    arr = [];
    let div = 2;
    if (test_prime(num)) {
      return num;
    } else {
      while(div < num){
        if (num % n == 0) {
          arr.push(div);
          num = div;
          div = 2;
          console.log("first num  ",num);
          console.log("n  ",n);
          if (num / div == 1) {
            console.log(num);
            console.log(div);
            arr.push(div);
            break;
          }
        }
        n++;
        console.log("n++ ic hetoi   ",n)
      }
  
    }
    return arr;
  }
  console.log(BardToParz(25))