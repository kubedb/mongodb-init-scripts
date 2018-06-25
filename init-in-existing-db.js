// This data will be inserted into database given by 'MONGO_INITDB_DATABASE' environment variable.
// If the environment variable is not set then it will be inserted into database name 'test'

db.people.insert({"firstname" : "kubernetes", "lastname" : "database" });
