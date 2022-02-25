module.exports = (sequelize, DataTypes) => {
    const Effect = sequelize.define('Effect', {// MySQL 에는 'Effect' => effects 로 테이블이 생성된다.
        //id가 기본적으로 들어있다.
        title:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        html: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
        css: {
            type: DataTypes.TEXT,
            allowNull: false, 
        },
    }, {
        charset: 'utf8', // 이렇게 셋팅안하면 한글넣을시 에라남.
        collate: 'utf8_general_ci', //한글저장
    });
    Effect.associate = (db) => {
        db.Effect.belongsTo(db.User);
        db.Effect.belongsToMany(db.User, {through:'Like',as:'Likers'});
    };
    return Effect;
}