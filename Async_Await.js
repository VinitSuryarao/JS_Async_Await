 
 // Function which takes times
 function GetData(){
    let i = 0;
    let result = 0;
    for(let i = 0; i<= 100000; i ++)
    {
        result=i;
    }
    return result;

 }
 
 // Async Function
 async function Test(){

    console.log("Message : 2");
    // Await will execute next stmt 
    //and return this func value later
    let data = await GetData();
    console.log("Message : "+data);
    console.log("Message : 3");

 }


 console.log("Message : 1");
 Test();
 console.log("Message : 4");
 console.log("Message : 5");