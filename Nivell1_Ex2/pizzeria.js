



use pizzeria

db.dropDatabase()

db.createCollection("localitats")

db.localitats.insertMany([{ _id :1, nom: "Barcelona"},{_id :2, nom: "Granollers"},{_id:3, nom: "Mataró"}])
	
db.createCollection("provincies")

db.provincies.insertMany([{_id: 1, nom: "Barcelona", localitats:[1,2,3]}])

db.createCollection("botigues")

db.botigues.insertMany([{_id:1, adreça: {carrer: "Passeig de Gràcia", numero: 160, pis: 0, porta: 0, codi: 08010, idlocalitat:1},
			empleats: [{_id:1,nom: "Pep", cognoms: " Morales Gutierrez",nif: "74973447B", telefon: 615767383, feina: "repartidor"},
  				{_id:2, nom: "Laura", cognoms: "Pepis Román", nif: "456767635C", telefon: 628868756, feina: "cuiner"}]},
			{_id: 2, adreça: {carrer: "Joan Prim", numero: 40, pis: 0, porta: 0, codi: 08400, idlocalitat: 2}, empleats: [{_id: 1, nom: "Joana", cognoms: "Miralles Oviedo", nif: "47708636L", telefon: 620879737, feina: "repartidor"},{_id: 4, nom: "Pol", cognoms: "Guerrero López", nif: "979749327H", telefon: 615632253, feina: "cuiner"}]},
		{_id: 3, adreça: {carrer: "Riera", numero: 35, pis: 0, porta: 0, codi: 08480, idlocalitat: 3},
			empleats: [{_id: 5, nom: "Lluïsa", cognoms: "Capdevila Fortuny", nif: "47708300D", telefon: 6348343974, feina: "repartidor"},
				{_id: 6, nom: "Mireia", cognoms: "Vázquez Alba", nif: "46679379H", telefon: 615983834, feina: "cuiner"}]}])


	
db.createCollection("categories")

db.categories.insertMany([
	{_id:1, nom:"estiu_primavera"}, {_id:2, nom: "tardor_hivern"}])

db.createCollection("productes")

db.productes.insertMany([
	{_id:1, tipus: "pizza", nom: "margarita", descripcio: "mozarella", imatge: Object(null), preu: 10.00, categoria: 1},
	{_id:2, tipus: "pizza", nom: "prosciutto", descripcio: "mozarella i pernil dolç", imatge: Object(null), preu: 12.00,categoria: 2},
	{_id:3, tipus: "hamburguesa", nom: "hamburguesa formatge", descripcio: "hamburguesa amb formatge", imatge: Object(null), preu: 15.00},
	{_id:4, tipus: "hamburguesa", nom: "hamburguesa extra", descripcio: "hamburguesa amb extra de formatge", imatge: Object(null), preu: 20.00},
	{_id:5, tipus: "beguda", nom: "aigua", descripcio: "aigua natural", imatge: Object(null), preu: 2.00},
	{_id:6, tipus: "beguda", nom: "coca-cola", descripcio: "refresc de cola", imatge: Object(null), preu: 2.50}])

db.createCollection("comandes") 

db.comandes.insertMany([
       {	_id: 1, idBotiga: 1, data: new Date ("2021-09-01T22:00:00.000Z"), repartir: true, productes: [{idproducte:2, quantitat:2},{idproducte: 6, quantitat:2}], repartidor: 1, entrega: 			new Date("2021-09-01T22:30:00.000Z"),preuTotal: 29.00},
	{_id:2, idBotiga: 2, data: new Date("2021-09-08T22:10:15.000Z"), repartir: false, productes: [{idproducte:3, quantitat:3},{idproducte: 6, quantitat: 3}], preuTotal: 37.50},
	{_id:3, idBotiga: 3, data: new Date("2021-10-10T21:00:00.000Z"), repartir: true, productes: [{idproducte:4, quantitat:1},{idproducte: 1, quantitat: 1}], repartidor:5, entrega: new Date("2021-10-10T21:20:00.000Z"), preuTotal: 22.00}])

db.createCollection("clients")

db.clients.insertMany([
	{_id: 1, nom: "Filomena", cognoms: "Bertrán Romula",adreça: {carrer: "Mallorca", numero: 40, pis: 5, porta: 3, codi: 08010, idlocalitat: 1}, telefon: 938266376, comanmdes: 1},
	{_id: 2, nom: "Josefa", cognoms:  "Garcia Minguez", adreça: {carrer: "Roselló", numero: 60, pis: 3, porta: 2, codi: 08400, idlocalitat: 2}, telefon: 615435363, comandes: 2 },
	{_id: 3, nom: "Pere" ,cognoms: "Messeguer Membrive", adreça: {carrer: "Espanya", numero: 3, pis: 4, porta:2, codi: 08480, idlocalitat:3}, telefon: 628978797, comandes: 3 }]) 



	

