function helloWorld(code)
{
    switch(code)
    {
        case 'es':
            console.log("Hola Mundo");
            break;
        case 'de':
            console.log("Hallo Welt");
            break;
        default:
            console.log("Hello World");
    }
}

helloWorld('es');
helloWorld('de');
helloWorld('burp');
