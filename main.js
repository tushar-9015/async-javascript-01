const strLength = (name, cb) => {
    const lengthOfName = name.length;
    cb(lengthOfName);
}

const printName = (nameLength) => console.log(`OMG! my name is ${nameLength} characters long.`);

strLength("tushar", printName);


const willThanosKillMe = (name2, iLiveCb, iDieCb) => {
    if (name2.length % 2 === 0 ){
        iLiveCb();
    } else {
        iDieCb();
    }
}

const iLiveCb = () => console.log(`yay! I'm alive.`);
const iDieCb = () => console.log(`oops! I'm dead.`);

willThanosKillMe("tushar", iLiveCb, iDieCb);



const messageMe = (msg, delay) => setTimeout(() => console.log(msg), delay);

messageMe(`dance monkey`, 5000);