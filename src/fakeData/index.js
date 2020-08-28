import fakeCourses from './fakeCourse';

const fakeData = [...fakeCourses];


// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i - 1], a[j]] = [a[j], a[i - 1]];
//     }
// }
const shuffle = a => {
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        
    }
}


shuffle(fakeData);

export default fakeData;