/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  let cmsUsers = sequelize.define('cmsUsers', {
    firstName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'first_name'
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'username'
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'gender'
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: 'id'
    },
    mobile: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'mobile'
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'status'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    profilePicture: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'profile_picture'
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'password'
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'email'
    },
    createdBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'created_by'
    },
    lastName: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'last_name'
    },
    updatedBy: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'updated_by'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    roleId: {
      type: DataTypes.BIGINT,
      allowNull: true,
      field: 'role_id',
      references: {
        model: 'cms_roles',
        key: 'id'
      }
    }
  }, {
    tableName: 'cms_users'
  }
  );
      cmsUsers.associate = function (models) {
    models.cmsUsers.belongsTo(models.cmsRoles, {
      onDelete: "CASCADE",
      constraints: false,
      foreignKey: 'roleId',
    });
  };
  return cmsUsers;
};
