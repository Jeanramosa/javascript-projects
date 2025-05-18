let contactos = [];
    let editando = false;

    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const id = document.getElementById("contactId").value;
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const fechaNacimiento = document.getElementById("fechaNacimiento").value;

      if (!nombre || !email || !telefono || !fechaNacimiento) {
        Swal.fire("Error", "Todos los campos son obligatorios.", "error");
        return;
      }

      if (editando) {
        const index = contactos.findIndex(c => c.id == id);
        contactos[index] = { id, nombre, email, telefono, fechaNacimiento };
        editando = false;
        Swal.fire("Contacto actualizado", "", "success");
      } else {
        const nuevoContacto = {
          id: Date.now().toString(),
          nombre,
          email,
          telefono,
          fechaNacimiento
        };
        contactos.push(nuevoContacto);
        Swal.fire("Contacto agregado", "", "success");
      }

      this.reset();
      renderizarTabla();
    });

    function renderizarTabla() {
      const tbody = document.getElementById("contactList");
      tbody.innerHTML = "";

      contactos.forEach(contacto => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${contacto.nombre}</td>
          <td>${contacto.email}</td>
          <td>${contacto.telefono}</td>
          <td>${contacto.fechaNacimiento}</td>
          <td>
            <button class="btn btn-warning btn-sm" onclick="editarContacto('${contacto.id}')">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="eliminarContacto('${contacto.id}')">Eliminar</button>
          </td>
        `;

        tbody.appendChild(tr);
      });
    }

    function editarContacto(id) {
      const contacto = contactos.find(c => c.id === id);
      if (contacto) {
        document.getElementById("contactId").value = contacto.id;
        document.getElementById("nombre").value = contacto.nombre;
        document.getElementById("email").value = contacto.email;
        document.getElementById("telefono").value = contacto.telefono;
        document.getElementById("fechaNacimiento").value = contacto.fechaNacimiento;
        editando = true;
      }
    }

    function eliminarContacto(id) {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
          contactos = contactos.filter(c => c.id !== id);
          renderizarTabla();
          Swal.fire("Eliminado", "El contacto ha sido eliminado.", "success");
        }
      });
    }

    window.onload = renderizarTabla;