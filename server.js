let arr = [{chore : 'Go to the GYM', status : "incomplete"}, {chore : 'Cook Food', status : "incomplete"},
 {chore : 'Go for Jog', status : "complete"}]

 const renderList = (filter = 'all') => {
     arr.forEach(element => {
        if (filter === 'all') {
            console.log(element)
        }
         else if(element.status === filter)  {
             console.log(element)
         }
     })
 }

 renderList()
 renderList('incomplete')
 renderList('complete')
