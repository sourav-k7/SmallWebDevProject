let todo=[];
let inp;
while(true)
{
    inp=prompt("enter the command")
    if(inp==='add')
    {
        let toadd=prompt("enter the task")
        todo.push(toadd);
    }
    else if(inp==='show')
    {
        console.log('*********');
        for(let i =0;i<todo.length;i++)
        {
            console.log(`${i}:${todo[i]}`);
        }
        console.log('*********');
    }
    else if(inp==='delete')
    {
        let ind=prompt('enter the index')
        todo.splice(ind,1);

    }
    else if(inp==='quit')
    {
        console.log('App Exit')
        break;
    }
}
