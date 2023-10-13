//----------------------------------------------------------------------------------
/**
 * @function showNotification: se trata de una integración
 * por medio de CDN de SweetAlert.
 * La integración sólo es para ejemplos prácticos.
 */
export async function showNotification(message: string) {
  return new window.Sweetalert2({
    text: message,
    toast: true,
    target: 'body',
    width: 'fit-content',
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2500,
  });
}
//----------------------------------------------------------------------------------
