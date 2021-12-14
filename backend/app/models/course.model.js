module.exports=(sequelize,Sequelize)=>{
    const Course=sequelize.define("course",{
    Title:{
        type:Sequelize.STRING
    },
    Description:{
        type:Sequelize.STRING
    },
    Price:{
        type:Sequelize.INTEGER
    },
    Duration:{
        type:Sequelize.STRING
    }
});
    return Course;
};