const ronin = require('ronin-server');
const database = require('ronin-database');
const mocks = require('ronin-mocks');

// const server = ronin.server();

// server.use('/',mocks.server(server.Router(),false,true))
// server.start();

// dckr_pat_YI9kikYLu4iFZ1T7RBpdtMnGURw

async function main(){
	try{
		await database.connect(process.env.CONNECTIONSTRING)
		const server = ronin.server({
			port: process.env.SERVER_PORT
		})

		server.use('/foo',(req,res)=>{
			return res.json({'foo':'bar'})
		})

		server.use('/',mocks.server(server.Router()))
		const result = await server.start()
		console.info(result);
	}catch(error){
		console.error(error);
	}
}

main();