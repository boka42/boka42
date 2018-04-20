<html>
<script type="text/javascript">
var cols = prompt("Введите количество строк", "");
var rows = prompt("Введите количество столбцов", "");
cols = parseInt(cols);
rows = parseInt(rows);
if (cols<1 || rows <1) {
    cols = 1;
    rows = 1;
}
document.write(' <table border=1, cellpadding=2, cellspacing=0, width="90%">');
for (i = 0; i <= cols; i++) 
    {
        document.write("<tr>");
        for (k = 0; k <= rows; k++)
         {
 
             if (k == 0) {
                 document.write('<td style="background-color:gold">');
                 document.write(i);
                
             }
             else
                 if (i == 0) {
                     document.write('<td style="background-color:gold">');
                     document.write(k);
                     
 
                 }
                 else {
                     document.write('<td style="background-color:white">');
                     document.write(i * k);
                    
                 }
 
                 document.write("</td>");
         }
   
        document.write("</tr>");
    }
document.write("</table>");
</script>