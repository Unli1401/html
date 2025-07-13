// Configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAG-bhvl4ckjlZ04U9-Au_ga3GFFE0wab4",
  authDomain: "formulario-retiro-11427.firebaseapp.com",
  projectId: "formulario-retiro-11427",
  storageBucket: "formulario-retiro-11427.firebasestorage.app",
  messagingSenderId: "191830176442",
  appId: "1:191830176442:web:b062935f74bbb16b400883",
  measurementId: "G-CSCB1EEYNH"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById("retiroForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  try {
    await db.collection("checklists_retiro").add(data);
    document.getElementById("mensajeEnviado").classList.remove("hidden");
    this.reset();

    // EmailJS si se quiere integrar envío de correo
    // emailjs.send(...)

    emailjs.send("service_8hx368a", "template_1uoe82d", {
  "00 empresa": data["00. empresa"],
  "01 quien_solicita": data["01. quien_solicita"],
  "02 direccion": data["02. direccion"],
  "03 contacto": data["03. contacto"],
  "04 correo": data["04. correo"],
  "05 telefono": data["05. telefono"],
  "06 fecha_retiro": data["06. fecha_retiro"],
  "07 horario_retiro": data["07. horario_retiro"],
  "08 qué_retiro": data["08. qué_retiro"],
  "09 cantidad": data["09. cantidad"],
  "10 modelos_series": data["10. modelos_series"],
  "11 accesorios": data["11. accesorios"],
  "12 estado": data["12. estado"],
  "13 embalado": data["13. embalado"],
  "14 mantencion": data["14. mantencion"],
  "15 destino": data["15. destino"],
  "16 Observaciones": data["16. Observaciones"]
});


  } catch (error) {
    alert("Hubo un error al guardar: " + error);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
