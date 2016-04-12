// Environment defaults
env = {
    "port": process.env.FRONTEND_HTTP_PORT || 30080,
    "environment": process.env.ENVIRONMENT || "development",
    "mongoDatabase":  process.env.MONGO_DATABASE || false
};

module.exports = env;