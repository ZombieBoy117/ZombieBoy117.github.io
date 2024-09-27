    // Función para obtener el total del carrito
    function obtenerTotalCarrito() {
        // Obtenemos el valor del total del carrito desde el span correspondiente
        const totalElement = document.querySelector('.cart');
        
        // Verificamos si el elemento existe y tiene contenido
        if (!totalElement || !totalElement.textContent) {
            console.error("No se encontró el elemento del carrito o está vacío.");
            return 0;
        }
        
        // Imprimimos el valor original para depuración
        console.log("Valor original del carrito:", totalElement.textContent);

        // Limpiamos todo excepto números y puntos decimales, y verificamos si hay un punto decimal
        let total = totalElement.textContent.replace(/[^0-9.]/g, '');

        // Si hay más de un punto decimal, eliminamos todos excepto el primero
        const parts = total.split('.');
        if (parts.length > 2) {
            console.error("El valor tiene más de un punto decimal, esto podría causar problemas.");
            total = parts[0] + '.' + parts[1];  // Mantén solo la primera parte
        }

        // Imprimimos el valor después de limpiar los caracteres
        console.log("Valor del carrito después de limpiar caracteres:", total);

        // Convertimos el valor en número flotante
        total = parseFloat(total);

        // Verificamos que el valor sea un número válido antes de formatearlo
        if (isNaN(total)) {
            console.error("El valor total del carrito no es un número válido.");
            return 0;
        }

        // Imprimimos el valor final antes de retornar
        console.log("Valor final del carrito (número):", total.toFixed(2));
        
        return total.toFixed(2); // Convertimos el valor a dos decimales (ej: 230.00)
    }

    // Configuración del botón de PayPal
    paypal.Buttons({
        style: {
            color: 'blue',
            shape: 'pill',
            label: 'pay'
        },
        // Crear la orden de pago
        createOrder: function(data, actions) {
            // Usar la función para obtener el total dinámicamente
            const totalCarrito = obtenerTotalCarrito();

            // Imprimimos el total que se va a enviar a PayPal para depuración
            console.log("Total enviado a PayPal:", totalCarrito);

            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: totalCarrito // Aquí usamos el total dinámico corregido
                    }
                }]
            });
        },
        // Capturar el pago
        onApprove: function(data, actions) {
            actions.order.capture().then(function(detalles) {
                alert("Gracias por su compra");
            });
        },
        // Manejar la cancelación del pago
        onCancel: function(data) {
            alert("Pago cancelado.");
            console.log(data);
        }
    }).render('#paypal-button-container');
