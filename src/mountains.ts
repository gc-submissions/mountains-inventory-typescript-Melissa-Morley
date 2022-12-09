interface Mountain {
    name:string,
    height: number
}

let newMountain:Mountain = {
    name: "Kilamanjaro",
    height: 10000
}

let mountains:Mountain[] = [{name: "Kilimanjaro", height: 19341}, {name: "Everest", height: 29029}, {name: "Denali", height: 20310}];


//fnction signature is function => what it returns (ie function findNameOfTallestMountain (mountains:Mountain[]) :string) 
function findNameOfTallestMountain (mountains:Mountain[]) :string {
let currentTallest = 0;
let currentName = "";
if(mountains.length === 0){
    return "";
}

for(let mountain of mountains){
    if(mountain.height > currentTallest){
    currentTallest = mountain.height;
    currentName = mountain.name;
}
}
return currentName;
};

let tallestMountain = (findNameOfTallestMountain(mountains));

console.log(tallestMountain);

export {findNameOfTallestMountain, Mountain};
