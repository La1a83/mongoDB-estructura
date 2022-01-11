



use optica

db.dropDatabase()

db.createCollection("proveidor")

db.proveidor.insertMany([

	{
	 _id :1,
	 nom: "proveidor1",adreça: {
                                      carrer: "cr. Corró", numero: 163, pis: "baixos", porta: 0, ciutat: "Granollers", codiPostal: 08400, pais: "Espannya"
                                    },
	 telefon: 937658748,
	 fax: 93765876554,
	 nif: "B398494384"},

	{_id :2,
	 nom: "proveidor2",adreça: {
                                      carrer: "cr. Aribau", numero: 300, pis: "baixos", porta: 0, ciutat: "Barcelona", codiPostal: 08010, pais: "Espannya"
                                    },
	 telefon: 937659876,
	 fax: 93765876554,
	 nif: "B98797979"},
	{_id : 3,
	 nom: "proveidor3",adreça: {
                                      carrer: "Passeig de Gràcia", numero: 250, pis: "baixos", porta: 0, ciutat: "Barcelona", codiPostal: 08015, pais: "Espannya"
                                    },
	 telefon: 937658748,
	 fax: 93765876554,
	 nif: "B398494384"}])
	
db.createCollection("empleats")

db.empleats.insertMany([
	{_id:1, nom: "Laura Garcia Lorente"},{_id:2, nom: "Albert Fernandez Capdevila"},{_id:3, nom: "Joana Vila Sanchez"}])

db.createCollection("clients")

db.clients.insertMany([
	{_id:1,nom: "Jaon Fernandez Ulldecona", adreça: {carrer: "Aribau", numero:150, pis: 2, porta: 2, ciutat: "Barcelona", codiPostal: 08010, Pais: "Espanya"},
	telefon: 6156353535, mail: "joan@gmail.com", dataRegistre: ISODate("2021-05-01")},
	{_id:2,nom: "Fermí Garcia Mogas", adreça: {carrer: "Princessa", numero:300, pis: 2, porta: 2, ciutat: "Barcelona", codiPostal: 08015, Pais: "Espanya"},
	telefon: 628764353, mail: "fermi@gmail.com", dataRegistre: ISODate("2021-06-01"), clientRecomana: "Joan Fernandez Ulldecona"},
	{_id:3, nom:"Lourdes Gomez Santaolalla", adreça: {carrer: "Minetes", numero:21, pis: 21, porta: 3, ciutat: "Barcelona", codiPostal: 08010, Pais: "Espanya"},
	telefon: 628342165, mail: "lourdes@gmail.com", dataRegistre: ISODate("2021-07-01"), clientRecomana: "Joan Fernandez Ulldecona"}])

db.createCollection("ulleres")

db.ulleres.insertMany([
       {	_id : 1, marca:"Ray Ban",
	idProveidor: 1,
	graduacio: {
			vidreDret: 5.00, vidreEsq: 5.00 },
	montura: "flotant",
	colMontura: "marró",
	colVidres: {
			vidreDret: "marró", vidreEsq: "marró"},
	preu: 200.00},
       {	_id: 2, marca:"Guess",
	idProveidor: 2,
	graduacio: {
			vidreDret: 0.00, vidreEsq: 0.00 },
	montura: "pasta",
	colMontura: "marró",
	colVidres: {
			vidreDret: "marró", vidreEsq: "marró"},
	preu: 250.00},
       {	_id: 3 , marca:"Ralph Lauren",
	idProveidor: 3,
	graduacio: {
			vidreDret: 2.00, vidreEsq: 2.00 },
	montura: "metàlica",
	colMontura: "vermell",
	colVidres: {
			vidreDret: "transparent", vidreEsq: "transparent"},
	preu: 150.00}])

db.createCollection("factures")

db.factures.insertMany([
	{_id: 1, empleat: 1, client: 1, dataFactura: ISODate("2021-09-01"), producte: 1, preu: 300.00},
	{_id: 2, empleat: 1,  client: 2, dataFactura: ISODate("2021-10-01"), producte: 2, preu: 250.00},
	{_id: 3, empleat: 3, client: 3, dataFactura: ISODate("2021-11-01"), producte: 3, preu: 200.00}])



	

