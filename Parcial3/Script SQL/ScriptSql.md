create DATABASE Doctores
GO

USING Doctores
SELECT * FROM Medicos;
USING Doctores
CREATE TABLE Medicos;
( NumeroDeCedula int PRIMARY KEY NOT NULL,  
   Nombre Medico varchar(25) NOT NULL,  
   ApellidoPaterno varchar(25) NOT NULL,  
   Apellido Materno varchar(25) NOT NULL,  
   Direccion varchar(25) NOT NULL,  
   Colonia varchar(25) NOT NULL,
   Ciudad varchar(25) NOT NULL,  
   Estado varchar(25) NOT NULL,  
   Numero Telefonico varchar(25) NOT NULL,  
   Especialidad del Medico  varchar(25) NOT NULL);  
 