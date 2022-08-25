"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class author extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            author.hasMany(models.book);
        }
    }
    author.init(
        {
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Author name can't be empty!",
                    },
                },
            },
            dateOfBirth: {
                type: DataTypes.DATE,
                validate: {
                    notEmpty: {
                        message: "Date of birth can't be empty!",
                    },
                },
            },
            city: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "city can't be empty!",
                    },
                },
            },
        },
        {
            sequelize,
            modelName: "author",
        }
    );
    return author;
};
