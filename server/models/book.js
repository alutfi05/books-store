"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            book.belongsTo(models.author);
            book.belongsTo(models.category);
            book.belongsTo(models.publisher);
        }
    }
    book.init(
        {
            title: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Book title can't be empty!",
                    },
                },
                unique: true,
            },
            image: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Book image can't be empty!",
                    },
                },
            },
            synopsis: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        message: "Synopsis can't be empty!",
                    },
                },
            },
            price: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Price must be a number!",
                    },
                },
            },
            publicationYear: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Publication year must be a number!",
                    },
                },
            },
            categoryId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Category Id must be a number!",
                    },
                },
            },
            authorId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Author Id must be a number!",
                    },
                },
            },
            publisherId: {
                type: DataTypes.INTEGER,
                validate: {
                    isInt: {
                        message: "Publisher Id must be a number!",
                    },
                },
            },
        },
        {
            hooks: {
                beforeCreate: (book, options) => {
                    book.image = "https://via.placeholder.com/150";
                },
            },
            sequelize,
            modelName: "book",
        }
    );
    return book;
};
