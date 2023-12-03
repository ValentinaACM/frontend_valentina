const data = [
    {
        modulos: 'Configuración',
        permisos: [
            { name: 'Roles', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Gestion de usuarios', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] }
        ]
    },
    {
        modulos: 'Compras',
        permisos: [
            { name: 'Categoria De Insumos', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Gestión De Insumos', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Gestión De Proveedores', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Gestión De Compras', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] }
        ]
    },
    {
        modulos: 'Producción',
        permisos: [
            { name: 'Gestión De Empleados', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Gestión De Ficha Tecnica', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] },
            { name: 'Gestión De Orden De Producción', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] }
        ]
    },
    {
        modulos: 'Productos',
        permisos: [
            { name: 'Estampados', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Catalogo De Productos', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] },
            { name: 'Producto Base', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] },
            { name: 'Producto Personalizado', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] }
        ]
    },
    {
        modulos: 'Pedidos',
        permisos: [
            { name: 'Gestión De Cotización', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] },
            { name: 'Gestión Carrito De Productos', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] },
            { name: 'Gestión De Pedidos', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] }
        ]
    },
    {
        modulos: 'Ventas',
        permisos: [
            { name: 'Gestión De Clientes', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar', 'Cambiar estado'] },
            { name: 'Gestión De Ventas', privilegios: ['Listar', 'Crear', 'Editar', 'Eliminar', 'Buscar'] }
        ]
    },
];

let moduleList = document.getElementById('moduleList');

data.forEach(moduleData => {
    let moduleName = moduleData.modulos;
    let permissions = moduleData.permisos;

    let listItem = document.createElement('li');
    listItem.classList.add('module-item');
    moduleList.appendChild(listItem);

    let moduleTitle = document.createElement('span');
    moduleTitle.textContent = moduleName;
    moduleTitle.classList.add('module-title');
    listItem.appendChild(moduleTitle);

    let arrowSymbolModule = document.createElement('span');
    arrowSymbolModule.textContent = '\u25BE';
    arrowSymbolModule.classList.add('arrow-symbol');
    listItem.appendChild(arrowSymbolModule);

    let permissionsList = document.createElement('ul');
    permissionsList.classList.add('permissions-list');
    permissionsList.style.display = 'none';

    permissions.forEach(permission => {
        let permissionItem = document.createElement('li');
        permissionItem.textContent = permission.name;

        let privilegesList = document.createElement('ul');
        privilegesList.classList.add('privileges-list');
        privilegesList.style.display = 'none';

        permission.privilegios.forEach(privilege => {
            let privilegeItemContainer = document.createElement('li');
            privilegeItemContainer.classList.add('privilege-item-container');

            let privilegeName = document.createElement('span');
            privilegeName.textContent = privilege;
            privilegeName.classList.add('privilege-name');

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('privilege-checkbox');

            privilegeItemContainer.appendChild(checkbox);
            privilegeItemContainer.appendChild(privilegeName);

            privilegesList.appendChild(privilegeItemContainer);
        });

        permissionItem.appendChild(privilegesList);
        permissionsList.appendChild(permissionItem);

        permissionItem.addEventListener('click', (event) => {
            event.stopPropagation();
            privilegesList.style.display = (privilegesList.style.display === 'none') ? 'block' : 'none';
        });

        privilegesList.addEventListener('click', (event) => {
            event.stopPropagation();
        });

        let arrowSymbolPermission = document.createElement('span');
        arrowSymbolPermission.textContent = '\u25BE';
        arrowSymbolPermission.classList.add('arrow-symbol');
        permissionItem.appendChild(arrowSymbolPermission);
    });

    listItem.addEventListener('click', () => {
        permissionsList.style.display = (permissionsList.style.display === 'none') ? 'block' : 'none';
    });

    listItem.appendChild(permissionsList);
});

let rolIdToDelete = null;

function eliminarRol(id) {
    rolIdToDelete = id;
    $('#confirmarEliminarModal').modal('show');
}

let rolIdToChangeState = null;

function cambiarEstado(id) {
    $('#confirmarCambioEstadoModal').modal('show');
    rolIdToChangeState = id;
}

function confirmarCambioEstado() {
    if (rolIdToChangeState !== null) {
        const indexToChangeState = rolesArray.findIndex(rol => rol.id === rolIdToChangeState);

        if (indexToChangeState !== -1 && rolesArray[indexToChangeState]) {
            rolesArray[indexToChangeState].estado = rolesArray[indexToChangeState].estado === 'Activo' ? 'Inactivo' : 'Activo';

            llenarTablaRoles();

            rolIdToChangeState = null;

            $('#confirmarCambioEstadoModal').modal('hide');
        } else {
            console.error('No se encontró el rol con el ID especificado.');
        }
    }
}

function confirmarEliminarRol() {
    const index = rolesArray.findIndex(rol => rol.id === rolIdToDelete);

    rolesArray.splice(index, 1);

    llenarTablaRoles();

    $('#confirmarEliminarModal').modal('hide');

    $('#eliminadoExitosamenteModal').modal('show');
}

let rolIdToEdit = null;

function editarRol(id) {
    const roleToEdit = rolesArray.find(rol => rol.id === id);

    rolIdToEdit = id;

    document.getElementById('nombreAccion').textContent = 'Editar rol';

    document.getElementById('inputNombreRol').value = roleToEdit.nombre;

    $('#registroRolModal').modal('show');

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

function verRol(id){
    window.location.href = `detalleRol`;
}

let rolesArray = [
    { id: '0001', nombre: 'Administrador', estado: 'Activo' },
];

var tablaRoles = document.getElementById('tablaRoles');

function crearFilaRol(rol) {
    var fila = tablaRoles.insertRow();

    var idCell = fila.insertCell(0);
    var nombreCell = fila.insertCell(1);
    var estadoCell = fila.insertCell(2);
    var accionesCell = fila.insertCell(3);

    idCell.textContent = rol.id;
    nombreCell.textContent = rol.nombre;
    estadoCell.textContent = rol.estado;

    accionesCell.style.display = 'flex';
    accionesCell.style.justifyContent = 'center';

    accionesCell.innerHTML = `
    <button type="button" class="btn" onclick="editarRol('${rol.id}')">
        <img src="img/pencil.ico" alt="Editar" class="iconos-listar">
    </button>
    <button type="button" class="btn" onclick="verRol('${rol.id}')">
        <img src="img/show.ico" alt="Ver" class="iconos-listar">
    </button>
    <button type="button" class="btn" onclick="eliminarRol('${rol.id}')">
        <img src="img/delete.ico" alt="Borrar" class="iconos-listar">
    </button>
    <div class="form-check form-switch checkeo" style="margin-top: 5px;">
        <input class="form-check-input" type="checkbox" role="switch" id="switch-${rol.id}"
            ${rol.estado ? 'checked' : ''} onchange="cambiarEstado(${rol.id})">
    </div>`;
}

function llenarTablaRoles() {
    while (tablaRoles.rows.length > 1) {
        tablaRoles.deleteRow(1);
    }

    for (var i = 0; i < rolesArray.length; i++) {
        var rol = rolesArray[i];
        crearFilaRol(rol);
    }
}

llenarTablaRoles();

function validarNombre() {
    var inputNombre = document.getElementById('inputNombreRol');
    var mensajeError = document.getElementById('mensajeError');

    var nombre = inputNombre.value.trim();

    if (nombre === '') {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.textContent = 'Este campo no puede estar vacío.';
    } else if (!/^[A-Za-z\s]+$/.test(nombre)) {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.textContent = 'Ingrese un nombre válido (solo letras y espacios).';
    } else if (!/^[A-Z][a-zA-Z\s]{2,49}$/.test(nombre)) {
        inputNombre.classList.remove('valido');
        inputNombre.classList.add('invalido');
        mensajeError.textContent = 'El nombre debe comenzar con mayúscula y tener entre 3 y 50 caracteres.';
    } else {
        inputNombre.classList.remove('invalido');
        inputNombre.classList.add('valido');
        mensajeError.textContent = '';
    }
}

document.getElementById('inputNombreRol').addEventListener('input', validarNombre);

document.getElementById('guardarCambiosBtn').addEventListener('click', function () {
    validarNombre();

    if (document.getElementById('inputNombreRol').classList.contains('valido')) {
        if (rolIdToEdit !== null) {
            const indexToEdit = rolesArray.findIndex(rol => rol.id === rolIdToEdit);

            rolesArray[indexToEdit].nombre = document.getElementById('inputNombreRol').value;

            rolIdToEdit = null;

            $('#exitoModalEdit').modal('show');
            document.getElementById('nombreAccion').textContent = 'Registrar rol';

        } else {
            const nuevoRol = {
                id: '0002',
                nombre: document.getElementById('inputNombreRol').value,
                estado: 'Activo'
            };

            rolesArray.push(nuevoRol);

            $('#exitoModal').modal('show');
        }

        document.getElementById('inputNombreRol').value = '';
        document.getElementById('inputNombreRol').classList.remove('valido', 'invalido');

        llenarTablaRoles();
    }
});
