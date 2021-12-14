module.exports=(sequelize,Sequelize)=>{
    const Student=sequelize.define("student",{
        FirstName:{
            type: Sequelize.STRING
        },
        LastName:{
            type: Sequelize.STRING
        },
        OtherNames:{
            type:Sequelize.STRING
        },
        Age:{
            type:Sequelize.INTEGER
        },
        Gender:{
            type:Sequelize.STRING
        },
        Email:{
            type:Sequelize.STRING
        },
        Password:{
            type:Sequelize.INTEGER
        }
    });
    return Student;

};