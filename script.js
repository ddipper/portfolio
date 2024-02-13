var chr = -1;
var txt = `I'm back-end developer located in Belarus`;
var l = txt.length;
function printtext()
{
    chr++;
    t = document.all["typed-out"].innerHTML;
    tt = t.substring(0,t.length);
    if(txt.charAt(chr)!="<")
    {
        document.all["typed-out"].innerHTML= tt + txt.charAt(chr);
    }
    else {
        document.all["typed-out"].innerHTML= tt + txt.substring(chr, chr+4);
        chr=chr+3;
    }
    setTimeout("printtext()", 40);
}
function str(num) {
    var s = "";
    for(i=0; i<num; i++) {
        s = s + " ";
    }
    return s ;
}
