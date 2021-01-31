const hasmeeting = false;
const meeting = new Promise((resolve,reject) => {
    if(!hasmeeting){
       const meetingDetails = {
            name:"saad",
            value:"710",
            address:"uddxcs"
        }
    resolve(meetingDetails)
    }
    else{
        reject((new Error("meeting is already created")))
    }
})
meeting
.then((res) => {
    console.log(JSON.stringify(res))
})
.catch((err) => {
    console.log(err)
})