function nextBigger(num){
    var arr = num.toString().split('');
    var newArr = arr.slice();
    var temp=10;
    
    for(let i = arr.length; i >= 1; i--){
      if(+arr[i])
      if(+arr[i]> +arr[i-1]){
        arr[i-1] = arr[i]
        arr[i] = temp
        break;
      }
    }
    if(arr.join() === newArr.join()){
      return -1
    }
    return +arr.join('')
  }
  
  
  console.log(nextBigger(929008632))