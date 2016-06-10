
// dev  = development environment
// prod = production environment - needs to use https! 
process.env.ENV				= 'dev';

// Database variables
process.env.DB_HOST			= 'localhost';
process.env.DB_USER			= 'tracker_user'; 
process.env.DB_PASSWORD		= 'dbpassword';
process.env.DB_SSL			= true;
process.env.DB 				= 'tracker';

// Server app variables
process.env.APP_IP 			= 'localhost';
process.env.APP_PORT 		= 8080;
process.env.SSL_PASSPHRASE	= 'passphrase';

// Credential server variables
process.env.CRED_PORT		= 8082;
process.env.CRED_ADDR		= 'http://localhost:' + process.env.CRED_PORT;

// Session secret
process.env.SESSION_SECRET	= 'iamasecret';


// Email variables
process.env.EMAIL_USER = 'test.user@gmail.com';
process.env.EMAIL_PASSWORD = 'test123';