function clearDisplay() 
{
    document.getElementById('display').innerText = '';
}
function appendCharacter(character) 
{
    document.getElementById('display').innerText += character;
}
function calculate() 
{
    const display = document.getElementById('display');
    try 
    {
        display.innerText = eval(display.innerText);
    } 
    catch 
    {
        display.innerText = 'Error';
    }
}
