// const hasMeeting = false;

// const meeting = new Promise((resolve, reject)=>{
//     if(!hasMeeting){
//         const meetingDetailes = {
//             name: 'Technical meeting',
//             location: 'Google meet',
//             time: '10:00 pm'
//         };
//         resolve(meetingDetailes);
//     }else{
//         reject(new Error('Meeting already scheduled'));
//     }  
// });
// const addToCalender = (meetingDetailes)=>{
//     const calender = `${meetingDetailes.name} has been schdule on ${meetingDetailes.location} at ${meetingDetailes.time}`;
//     return Promise.resolve(calender);
  
// };

// // meeting
// // .then(addToCalender) 
// // .then((res)=>{
// //     console.log(JSON.stringify(res));
// // })
// // .catch((err)=>{
// //     console.log(err.message);
// // });
// // console.log('Hello world');

// async function myMeeting (){
//     try{
//         const meetingDetails = await meeting;
//         const calender = await addToCalender(meetingDetails);
//         console.log(calender)
//     }catch{
//         console.log(`somthing wrong`);
//     }
// }
// myMeeting();
// console.log('Hello world');

const hasMeeting = false;
const meeting = new Promise((resolve, reject)=>{
    if(!hasMeeting){
        const meetingDetailes = {
            name: "Technical meeting",
            location: "google meet",
            time: "10:00 pm"
        }
        resolve(meetingDetailes);
    }else{
        reject(new Error('Meeting already scheduled'));
    }
});

const addToCalender = (meetingDetailes)=>{
    return new Promise((resolve)=>{
        const calender = `${meetingDetailes.name} has been schdule on ${meetingDetailes.location} at ${meetingDetailes.time}`;
        resolve(calender);
    })
}

// meeting
// .then(addToCalender)
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err.message)
// });

async function myMeeting(){
    try{
        const meetingDetailes = await meeting;
        const Calender = await addToCalender(meetingDetailes);
        console.log(Calender);
    }catch{
        console.log('somthing wrong');
    }
};

myMeeting();


