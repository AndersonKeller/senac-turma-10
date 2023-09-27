let array = ["a","b","c","d","e"]

function findindex(list=[],element){
    let res = -1
    for(let i=0;i<list.length;i++){
        if(list[i]==element){
            res = i
        }
    }
    return res
}
function slice(list=[],index){
    let aux = []
    for(let i=0;i<list.length;i++){
        if(i!=index){
            aux.push(list[i])
        }
    }
    return aux
}
// const res = array.findIndex((item)=>item=="b")
// console.log(res)
const res = array.slice(1)
// console.log(res)