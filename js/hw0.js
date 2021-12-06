// const chooseBestDistance = (t, k, ls) => {
//     let t = 174;
//     let k = 3;
//     let ls = [];
//     for (let i = 0; i <= 173  ; i++)
//     {
//         for(let j = 0; j >=1; j++)
//         {
//             for(let k = 0; k >= 51; k++)
//             {
//     return null;
// }
// }   
//     }
// }

// chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); 
// chooseBestDistance(163, 3, [50]);

const chooseBestDistance = (t, k, ls) => {
    let bestSum = 0;
     k >= 1;
 
    for (let i = 0; i < ls.length; i++)
       
    {
        for(let j =i + 1; j < ls.length; j++)
        {
            for(let k =j + 1; k < ls.length; k++)
            { 
                let total = ls[i] + ls[j] + ls[k];
            
                if (Math.abs(t - bestSum) > Math.abs(t - total)) {
                    bestSum = total;
                 
                    if (Math.abs(bestSum - t) <=1)
                        return bestSum;
                }  
            }
    }    
    }
    return null;      
     
}
chooseBestDistance(174, 3, [51, 56, 58, 59, 61]); 
chooseBestDistance(163, 3, [50]);