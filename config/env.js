// Environment defaults
env = {
    "port": process.env.FRONTEND_PORT || 3000,
    "environment": process.env.ENVIRONMENT || "development",
    "mongoDatabase":  process.env.MONGO_DATABASE || false
};

module.exports = env;