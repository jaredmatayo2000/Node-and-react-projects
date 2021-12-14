const db = require("../models");
const Student=db.students;
const Op=Sequelize.Op;


exports.create=(req,res)=>{
    // Validate request
    if (!req.body.FirstName && !req.body.LastName && 
        !req.body.Email){
            res.status(400).send({
                message: "All field are required"
            });
            return;
        }
        // Create a Student
        const student={
            FirstName:req.body.FirstName,
            LastName:req.body.LastName,
            OtherNames:req.body.OtherNames,
            Age:req.body.Age,
            Gender:req.body.Gender,
            Email:req.body.Email,
            Password:req.body.Password
        };
        // Save Student in the database
        Student.create(student)
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message:
                err.message || "Some error occurred while saving your record."
            });
        });

};
exports.findAll=(req,res)=>{
    const FirstName=req.query.FirstName;
    var condition=FirstName ? {FirstName:{[Op.iLike]:`%${FirstName}%` } } : null;

    Student.findAll({where: condition})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:
            err.message || "Some error while retrieving students"
        });
    });
};

exports.findOne=(req,res)=>{
    const id=req.params.id;
    Student.findByPk(id)
    .then(data=>{
        if(data){
            res.send(data);
        } else {
            res.status(404).send({
                message: `Cannot find Student with id=${id}.`
            });
        }
    })
}