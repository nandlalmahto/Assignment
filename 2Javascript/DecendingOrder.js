function sortDescendingOrder(arr)
{
    for(let i=0; i<arr.length; i++)
    {
        for(let j=0; j<arr.length -1; j++)
        {
            if(arr[j] < arr[j+1])
            {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

const arr = [10, 8, 6, 12, 3, 17, 5, 11 , 7];

sortDescendingOrder(arr);
console.log(arr);