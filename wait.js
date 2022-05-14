function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  /*var wait = await delay;
  wait(1000)
  alert("hi")
  
  var wait = async function(ms) {
      await delay(ms);
  }
  
  wait(5000);
  alert("Hi");*/