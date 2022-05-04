import {ArrayList} from "./ArrayList";

interface Post {
    title : string;
}

let arrayList = new ArrayList<Post>();
arrayList.add({title: "Lập trình JS"});
arrayList.add({title: "Lập trình PHP"});
arrayList.add({title: "Lập trình Java"});
arrayList.add({title: "Lập trình C++"});

console.log(arrayList);