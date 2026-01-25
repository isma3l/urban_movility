module.exports = {
  light: {
    primary: '#0066CC',
    secondary: '#00A8E8',
    background: '#F8F9FA',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onBackground: '#212529',
    onSurface: '#212529',
    mutedText: '#6C757D',
    success: '#28A745',
    error: '#DC3545',
    warning: '#FFC107',
    info: '#00A8E8',
    border: '#EAECEF',
    notification: '#FF3B30', // react navigation notification color
  },
  dark: {
    primary: '#E3EEFF',
    secondary: '#4DC3F2',
    background: '#121212',
    surface: '#1E1E1E',
    onPrimary: '#121212',
    onSecondary: '#121212',
    onBackground: '#E0E0E0',
    onSurface: '#E0E0E0',
    mutedText: '#8C8C8C',
    success: '#66BB6A',
    error: '#EF5350',
    warning: '#FFD54F',
    info: '#4DC3F2',
    border: '#2F2F2F',
    notification: '#FF453A', // react navigation notification color
  },
};
/*
Rol (Variable)	                        Light Mode (Día)	Dark Mode (Noche)	Explicación y Uso
Background (Fondo General)	            #F8F9FA	#121212	El lienzo de la app, detrás de todas las tarjetas.
Surface (Tarjetas, Modales)	            #FFFFFF	#1E1E1E	La superficie de la tarjeta flotante de destino o el historial.
Primary (Marca, Headers)	              #0A2540	#AECBFA	El color de la marca y de los títulos principales.
Secondary (Acción, CTA)	                #00A8E8	#4DC3F2	El color del botón "Pedir Viaje" o la ruta activa.
On-Primary (Texto sobre Primary)	      #FFFFFF	#121212	El texto que va sobre el color Primary (Ej: Si el header es #0A2540, el texto del título es #FFFFFF).
On-Secondary (Texto sobre Secondary)	  #FFFFFF	#121212	El texto que va sobre el color Secondary (Ej: El texto dentro del botón de Cian).
On-Surface (Texto Principal)	          #212529	#E0E0E0	El color del texto principal que va sobre las superficies blancas/grises (Ej: Nombres de las calles, la dirección).
Text-Muted (Texto Secundario)	          #6C757D	#8C8C8C	Texto secundario o informativo (Ej: "A 5 minutos de distancia", "Llegada estimada a...").
Success (Éxito)	                        #28A745	#66BB6A	Conductor ha llegado, pago completado. Verde debe ser claro en oscuro.
Error (Peligro)	                        #DC3545	#EF5350	Viaje cancelado, error de pago. Rojo.
Warning (Advertencia)	                  #FFC107	#FFD54F	Tarifa dinámica, tráfico. Amarillo/Ámbar.

Borders:
Divisores, líneas entre secciones - #EAECEF (Light), #2F2F2F (Dark)

Input Fields:
No enfocado: #6C757D (Light), #8C8C8C (Dark)
Enfocado: #00A8E8 (Light), #4DC3F2 (Dark)
Invalido: #DC3545 (Light), #EF5350 (Dark)
*/
