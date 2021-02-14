db.empleados.aggregate(
    [
        {
            $lookup: {
                from: "departamentos",
                localField: "Cargo",
                foreignField: "Departamento",
                as: "departamentos"
            }
        },
{
     $project:{
         _id: 1,
         Nombre: 1,
         Apellidos: 1,
         Coche_empresa: 1,
         departamentos: {
             Jornada:1,
             Sueldo: 1
         },
     }
 },   
 { $match:{ Coche_empresa:true } }
    ]
).pretty()