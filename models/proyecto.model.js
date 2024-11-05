module.exports = (sequelize, Sequelize) => {
    const Proyecto = sequelize.define("proyecto", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: Sequelize.STRING(50),
            allowNull: false
        },
        descripcion: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        completada: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        fecha_creacion: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        fecha_vencimiento: {
            type: Sequelize.DATE,
            allowNull: true
        },
        prioridad: {
            type: Sequelize.ENUM('baja', 'media', 'alta'),
            defaultValue: 'media'
        },
        asignado_a: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        categoria: {
            type: Sequelize.STRING(50),
            allowNull: true
        },
        costo_proyecto: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        pagado: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Proyecto;
};
