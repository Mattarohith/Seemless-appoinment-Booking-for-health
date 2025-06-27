document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("patientName").value;
  const doctor = document.getElementById("doctorSelect").value;
  const date = document.getElementById("appointmentDate").value;
  const time = document.getElementById("appointmentTime").value;
  const reason = document.getElementById("reason").value;

  const confirmation = document.getElementById("confirmation");

  confirmation.innerHTML = `
     Appointment booked successfully!<br>
    Patient: ${name}<br>
    Doctor ID: ${doctor}<br>
    Date: ${date}<br>
    Time: ${time}<br>
    Reason: ${reason || "Not specified"}
  `;
  confirmation.classList.remove("hidden");

  document.getElementById("bookingForm").reset();
});
