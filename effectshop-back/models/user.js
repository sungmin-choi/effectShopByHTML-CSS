module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {// MySQL 에는 'User' => users 로 테이블이 생성된다.
        //id가 기본적으로 들어있다.
        email: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
            unique: true, //고유한값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, //필수
        },
        password: {
            type: DataTypes.STRING(100),// 비밀번호는 암호화 되기떄문에 길게 설정해놓는다.
            allowNull: false, //필수
        },
    }, {
        charset: 'utf8', // 이렇게 셋팅안하면 한글넣을시 에라남.
        collate: 'utf8_general_ci', //한글저장
    });
    User.associate = (db) => {
        db.User.hasMany(db.Effect);
        db.User.belongsToMany(db.Effect, { through: 'Like', as: 'Liked'}); 
    };
    return User;
}