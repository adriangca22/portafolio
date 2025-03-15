import React, { useEffect } from "react";

const TawkToChat = () => {
  useEffect(() => {
    // Verificar si el script ya está cargado
    if (!document.querySelector("#tawk-to-script")) {
      const script = document.createElement("script");
      script.id = "tawk-to-script"; // ID correcto para evitar duplicados
      script.async = true;
      script.src = "https://embed.tawk.to/67d437c40f4830190d96b30e/1imafjmei";
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      // Agregar el script al DOM
      document.body.appendChild(script);
    }

    // No es necesario limpiar el script porque solo se agrega una vez

  }, []);

  return null; // No renderiza nada visible
};

export default TawkToChat;
