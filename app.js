const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion )
        console.log(tarea)
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for(let tarea of listado)
        {
            console.log('=======Por Hacer======='.green);
            console.log('Tarea:', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('======================='.green)
        }
        break;

    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion,argv.completado);

        if(actualizar)
            console.log('La tarea se actualizó correctamente.');
        else 
            console.log('No se pudo actualizar la tarea.');        

        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido.')
}