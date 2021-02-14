db.empleados2.aggregate(
    [
        {
            $lookup: {
                from: "departamentos2",
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
             Departamento:1,
             Sueldo: 1
         },
     }
 },   
 {
     $sort : {Nombre: 1}
 }

    ]
).pretty()