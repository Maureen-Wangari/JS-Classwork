const internship = false;
const ourPromise = new Promise((resolve, rejectt)=>{
    if(internship){
        resolve('I made it')
    }
    else{
        reject('I will not give up')
    }
})
ourPromise.then(()=>{
    console.log('I will not get confirmed');
})
.catch(()=>{
    console.log('I will continue applying');
})
.finally(()=>{
    console.log('I will be a software engineer');
});
async function myAkirachixDream(){
    try{
        await ourPromise;
    }
    catch{
        console.log('I will get a job one day');
    }
}
myAkirachixDream();