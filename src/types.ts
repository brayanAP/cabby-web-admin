export type RouteCheckerComponent = React.VFC<{
    element: JSX.Element;
    loadingElement?: JSX.Element;
}>;

export type Music = {
    id: string;
    personId: string;
    name: string;
    author: string;
}

export type Conductor = {
    id: string;
    primerNombre: string;
    segundoNombre?: string;
    telefono: string;
    apellidoMaterno: string;
    apellidoPaterno: string;
    nombreCompleto: string;
    email: string;
    fotoPerfil: string;
    calificacion: string;
    estatus: 'Activo' | 'Denegado' | 'Pendiente' | 'FaltaVehiculo' | 'FaltaDocumentos';
    fechaAceptado: string;
    fechaRegistro: string;
    fechaUltInicio: string;
    fechaUltViaje: string;
    vehiculoID: string;
    vehiculoAño: string;
    vehiculoColor: string;
    vehiculoMarca: string;
    vehiculoModelo: string;
    vehiculoPlacas: string;
}

export type Admin = {
    id: string;
    email: string;
    nombre: string;
    telefono: string;
    fotoPerfil: string;
    estatus: 'Activo' | 'Denegado';
    fechaRegistro: string;
}
