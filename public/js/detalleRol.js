const data = [
  {
    modulos: "Configuración",
    permisos: [
      {
        name: "Roles",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Gestion de usuarios",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
    ],
  },
  {
    modulos: "Compras",
    permisos: [
      {
        name: "Categoria De Insumos",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Gestión De Insumos",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Gestión De Proveedores",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Gestión De Compras",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
    ],
  },
  {
    modulos: "Producción",
    permisos: [
      {
        name: "Gestión De Empleados",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Gestión De Ficha Tecnica",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
      {
        name: "Gestión De Orden De Producción",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
    ],
  },
  {
    modulos: "Productos",
    permisos: [
      {
        name: "Estampados",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Catalogo De Productos",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
      {
        name: "Producto Base",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
      {
        name: "Producto Personalizado",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
    ],
  },
  {
    modulos: "Pedidos",
    permisos: [
      {
        name: "Gestión De Cotización",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
      {
        name: "Gestión Carrito De Productos",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
      {
        name: "Gestión De Pedidos",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
    ],
  },
  {
    modulos: "Ventas",
    permisos: [
      {
        name: "Gestión De Clientes",
        privilegios: [
          "Listar",
          "Crear",
          "Editar",
          "Eliminar",
          "Buscar",
          "Cambiar estado",
        ],
      },
      {
        name: "Gestión De Ventas",
        privilegios: ["Listar", "Crear", "Editar", "Eliminar", "Buscar"],
      },
    ],
  },
];

const permisosList = document.getElementById("permisosList");

// Función para manejar el clic en el nombre del permiso
function handlePermisoClick(permisosListElement) {
  const privilegiosList = permisosListElement.querySelector("ul");

  if (
    privilegiosList.style.display === "none" ||
    !privilegiosList.style.display
  ) {
    privilegiosList.style.display = "block";
  } else {
    privilegiosList.style.display = "none";
  }
}

data.forEach((modulo) => {
  const moduloElement = document.createElement("div");
  moduloElement.innerHTML = `<p style="font-weight: bold;">${modulo.modulos}</p>`;

  const permisosListElement = document.createElement("ul");
  modulo.permisos.forEach((permiso, index) => {
    const permisoElement = document.createElement("li");
    const collapseId = `collapse-${modulo.modulos}-${index}`;
    permisoElement.innerHTML = `
                <span class="text-decoration-underline" data-bs-toggle="collapse" href="#${collapseId}">
                    ${permiso.name}
                </span>
                <ul class="collapse" id="${collapseId}">
                    ${permiso.privilegios
                      .map((privilegio) => `<li>${privilegio}</li>`)
                      .join("")}
                </ul>`;
    permisosListElement.appendChild(permisoElement);
  });

  moduloElement.appendChild(permisosListElement);
  permisosList.appendChild(moduloElement);
});
