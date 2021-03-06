db.empleados.insertMany([

    { _id : 1,
    Nombre: "Pedro",
    Apellidos: "Villanueva Garcia",
    Fecha_contratacion: ISODate("2015-04-01T08:00:00Z"),
    Telefono: 654897825,
    Cargo: "Comercial",
    Coche_empresa: true
  },
  { _id : 2,
    Nombre: "Paco",
    Apellidos: "Arribas Duran",
    Fecha_contratacion: ISODate("2016-04-01T08:00:00Z"),
    Telefono: 647896695,
    Cargo: "Comercial",
    Coche_empresa: true
  },
  { _id : 3,
    Nombre: "Daniel",
    Apellidos: "Guisado Oliva",
    Fecha_contratacion: ISODate("2014-04-06T08:00:00Z"),
    Telefono: 629785896,
    Cargo: "Camionero",
    Coche_empresa: false
  },
  { _id : 4,
    Nombre: "Augusto",
    Apellidos: "Figueras Coronell",
    Fecha_contratacion: ISODate("2016-25-06T08:00:00Z"),
    Telefono: 654897825,
    Cargo: "Camionero",
    Coche_empresa: false
  },
  { _id : 5,
    Nombre: "Gonzalo",
    Apellidos: "Coronilla Bernabe",
    Fecha_contratacion: ISODate("2014-01-01T08:00:00Z"),
    Telefono: 628754956,
    Cargo: "Direccion",
    Coche_empresa: true
  },    
  { _id : 6,
    Nombre: "Jeronimo",
    Apellidos: "Bettoni Aguilar",
    Fecha_contratacion: ISODate("2018-04-04T08:00:00Z"),
    Telefono: 732589746,
    Cargo: "Montador",
    Coche_empresa: false
  },
  { _id : 7,
    Nombre: "Francisco",
    Apellidos: "Montes Leon",
    Fecha_contratacion: ISODate("2015-08-03T08:00:00Z"),
    Telefono: 629856324,
    Cargo: "Montador",
    Coche_empresa: false
  },
  { _id : 8,
    Nombre: "Miguel",
    Apellidos: "Fernandez Alvarez",
    Fecha_contratacion: ISODate("2015-05-05T08:00:00Z"),
    Telefono: 658637521,
    Cargo: "Limpieza",
    Coche_empresa: false
  }
 
])

db.departamentos.insertMany([

  { _id : 1,
  Departamento: "Limpieza",
  Sueldo: 900,
  Jornada: 4,
},

{ _id : 2,
  Departamento: "Montador",
  Sueldo: 1200,
  Jornada: 8
},

{ _id : 3,
  Departamento: "Direccion",
  Sueldo: 2100,
  Jornada: 8
},

{ _id : 4,
  Departamento: "Camionero",
  Sueldo: 1350,
  Jornada: 8
},

{ _id : 5,
  Departamento: "Comercial",
  Sueldo: 1450,
  Jornada: 8
},


])


