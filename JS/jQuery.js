$(document).ready(function(){
    var total = 0;
    $('#agregar').click(function(){
        var producto = $('input[id=producto]').val();
        var precio = $('input[id=precio]').val();
        var fila = $('<tr></tr>');
        var div = $('<td class="eliminar">x</td>');
        var cantidad = $('input[id=cantidad]').val();
        var precioC =  parseFloat(precio) * cantidad;
        
        if((precio>0)&&(producto.length > 0)&&(cantidad>0)){
            
            fila.html('<td>'+ producto +'</td>'+
                      '<td>'+ cantidad +'</td>'+
                      '<td>'+ precio +'</td>'+
                      '<td>'+ precioC +'</td>');
            fila.append(div);
            
            $('#container').append(fila);
        
            total =  parseFloat(precioC) + parseFloat(total);
            
            $('#total').text('$' + total.toFixed(2));
            
            
        div.click(function(){
        total = total - parseFloat($(this).prev().text());
        $(this).parent().remove(); 
        $('#total').text('$' + total.toFixed(2));
        });  
        
        }else{
            alert("No se pueden ingresar precios negativos o campos vacios o iguales a 0");
        };
        
        $('input[id=producto]').val('');
        $('input[id=precio]').val('');
        $('input[id=cantidad]').val('');
        $('input[id=producto]').focus();
        });
    
    });