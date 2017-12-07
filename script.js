var ages = [1994,1995,2004,2005];
var empty = [];

for(var i=0; i<=ages.length - 1; i++)
    {
        empty[i]=2017 - ages[i];
        if(empty[i]>18)
            {
                empty[i]= true;
            }
        else
            {
                empty[i]=false;
            }
    }
console.log(empty);