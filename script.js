document.getElementById('generate-button').addEventListener('click', function() {
  // Obtener los datos del formulario
  const tenantName = document.getElementById('tenant-name').value;
  const landlordName = document.getElementById('landlord-name').value;
  const propertyAddress = document.getElementById('property-address').value;
  const contractStartDate = document.getElementById('contract-start-date').value;
  const contractEndDate = document.getElementById('contract-end-date').value;
  const paymentAmount = document.getElementById('payment-amount').value;
  const paymentFrequency = document.getElementById('payment-frequency').value;

  // Construir la vista previa del contrato con más apartados
  const contractPreview = `
    <h2>Contrato de Arrendamiento</h2>

    <h3>I. Datos de las Partes</h3>
    <p><strong>Arrendador:</strong> ${landlordName}</p>
    <p><strong>Arrendatario:</strong> ${tenantName}</p>

    <h3>II. Objeto del Contrato</h3>
    <p>El Arrendador cede en arrendamiento al Arrendatario el inmueble ubicado en ${propertyAddress}.</p>

    <h3>III. Plazo del Contrato</h3>
    <p>El plazo de este contrato es de ${calculateDateDifference(contractStartDate, contractEndDate)} días, contados a partir del ${contractStartDate}.</p>

    <h3>IV. Renta y Forma de Pago</h3>
    <p>El Arrendatario pagará al Arrendador una renta de $${paymentAmount} por ${paymentFrequency}, pagaderos los primeros 5 días de cada mes.</p>

    <h3>V. Garantía</h3>
    <p>(Aquí puedes agregar información sobre la garantía, si aplica).</p>

    <h3>VI. Otras Disposiciones</h3>
    <p>(Aquí puedes agregar otras cláusulas relevantes).</p>
  `;

  // Mostrar la vista previa en la sección derecha
  document.getElementById('contract-preview').innerHTML = contractPreview;

  // ... (código para enviar los datos a tu AppScript) ...
});

// Función auxiliar para calcular la diferencia en días entre dos fechas
function calculateDateDifference(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffInMilliseconds = end.getTime() - start.getTime();
  return Math.ceil(diffInMilliseconds / (1000 * 60 * 60 * 24));
}
