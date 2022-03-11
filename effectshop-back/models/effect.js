const DataTypes = require('sequelize');
const {Model} = DataTypes;


module.exports = class Effect extends Model {
    static init(sequelize){
        return super.init({
            title:{
                type: DataTypes.STRING(50),
                allowNull: false,
                
            },
            html: {
                type: DataTypes.TEXT,
                allowNull: false, 
            },
            css: {
                type: DataTypes.TEXT,
                allowNull: false, 
            },
        },{
            modelName: 'Effect',
            tableName:'effects',
            charset: 'utf8', // 이렇게 셋팅안하면 한글넣을시 에라남.
            collate: 'utf8_general_ci', //한글저장
            sequelize,
        });
    }

    static associate(db){
        db.Effect.belongsTo(db.User);
        db.Effect.belongsToMany(db.User, {through:'Like',as:'Likers'});
    }
};








