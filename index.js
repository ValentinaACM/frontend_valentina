const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port =  8081;

app.use(express.static('public'));
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/pedidos', (req, res) => {
    res.render('listarPedido');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/proveedores', (req, res) => {
    res.render('proveedores');
});

app.get('/empleados', (req, res) => {
    res.render('empleados');
});

app.get('/fichatecnica', (req, res) => {
    res.render('fichatecnica');
});

app.get('/agregarPedido', (req, res) => {
    res.render('agregarPedido');
});

app.get('/compras', (req, res) => {
    res.render('compras');
});

app.get('/cotizacion', (req, res) => {
    res.render('cotizacion');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/editarCompra', (req, res) => {
    res.render('editarCompra');
});

app.get('/editarfichatecnica', (req, res) => {
    res.render('editarfichatecnica');
});

app.get('/listarfichatecnica', (req, res) => {
    res.render('listarfichatecnica');
});

app.get('/insumos', (req, res) => {
    res.render('registrarInsumos');
});

app.get('/categoriaInsumos', (req, res) => {
    res.render('registrarCatInsumos');
});

app.get('/listarCotizacion', (req, res) => {
    res.render('listarCotizacion');
});

app.get('/vistaCotizacion', (req, res) => {
    res.render('vistaCotizacion');
});

app.get('/visualizarproveedor', (req, res) => {
    res.render('visualizarproveedor');
});

app.get('/visualizarempleado', (req, res) => {
    res.render('visualizarempleado');
});

app.get('/editarPedido', (req, res) => {
    res.render('editarPedido');
});

app.get('/visualizarPedido', (req, res) => {
    res.render('visualizarPedido');
});

app.get('/visualizarficha', (req, res) => {
    res.render('visualizarficha');
});

app.get('/editarUsuario', (req, res) => {
    res.render('editarUsuario');
});

app.get('/estampados', (req, res) => {
    res.render('estampados');
});

app.get('/fichaTecnica', (req, res) => {
    res.render('fichaTecnica');
});

app.get('/listarOrdenProduccion', (req, res) => {
    res.render('listarOrdenProduccion');
});

app.get('/listarEmpleados', (req, res) => {
    res.render('listarEmpleados');
});

app.get('/listarFichaTecnica', (req, res) => {
    res.render('listarFichaTecnica');
});

app.get('/ordenProduccion', (req, res) => {
    res.render('ordenProduccion');
});

app.get('/registrarCatInsumos', (req, res) => {
    res.render('registrarCatInsumos');
});

app.get('/registrarInsumos', (req, res) => {
    res.render('registrarInsumos');
});

app.get('/roles', (req, res) => {
    res.render('roles');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

app.get('/detalleRol', (req, res) => {
    res.render('detalleRol');
});

app.get('/disenoEstampados', (req, res) => {
    res.render('disenoEstampados');
});

app.get('/tamanoEstampados', (req, res) => {
    res.render('tamanoEstampados');
});

app.get('/ventas', (req, res) => {
    res.render('ventas');
});

app.get('/detalleVenta', (req, res) => {
    res.render('detalleVenta');
});

app.get('/visualizarCompra', (req, res) => {
    res.render('visualizarCompra');
});

app.get('/visualizarEmpleado', (req, res) => {
    res.render('visualizarEmpleado');
});

app.get('/visualizarFicha', (req, res) => {
    res.render('visualizarFicha');
});

app.get('/visualizarPedido', (req, res) => {
    res.render('visualizarPedido');
});

app.get('/visualizarProveedor', (req, res) => {
    res.render('visualizarProveedor');
});

app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
