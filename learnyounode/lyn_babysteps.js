var output = 0;

var i =2;
while(i < process.argv.length)
{
  output += Number(process.argv[i]);
  i++;
}

console.log(output);
