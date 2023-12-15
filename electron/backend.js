const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
const port = 3001;
const path = require('path');

const dataFilePath = path.join(__dirname, 'component', 'data.json');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.post('/add-client', (req, res) => {
  const newClient = req.body;
  // Charger le fichier JSON existant
  
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  // Ajouter le nouveau client à la liste des clients
  data.clients.push(newClient);
  // Écrire les données mises à jour dans le fichier JSON
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  console.log("add done");
  res.json({ success: true, message: 'Client ajouté avec succès' });
});

app.post('/delete-client',(req,res)=>{
  
  let client = req.body;
  console.log(client);
  let data = JSON.parse(fs.readFileSync(dataFilePath));

  let nvClients = data.clients
  nvClients = nvClients.filter((cl)=> cl.nom!== client.nom)
  console.log(nvClients);
  data.clients = nvClients
  fs.writeFileSync(dataFilePath,JSON.stringify(data,null,2))
  console.log("delete done");
  res.json({success:true,message:'Client supprimé avec succés'})
})
app.post('/add-facture', (req, res) => {
  const newFacture = req.body;
  // Charger le fichier JSON existant
  
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  // Ajouter le nouveau client à la liste des clients
  let client = data.clients.find((cl)=>cl.nom === newFacture.client.nom)
  let nvClients = data.clients.filter((cl)=>cl.nom !== newFacture.client.nom)
  client.factures.push({factureNum :newFacture.factureNum , produits:newFacture.produits})
  nvClients.push(client)
  data.clients = nvClients
  // Écrire les données mises à jour dans le fichier JSON
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  console.log("add done");
  res.json({ success: true, message: 'Client ajouté avec succès' });
});
app.post('/rech-factures', (req, res) => {
  const newFacture = req.body;
  // Charger le fichier JSON existant
  
  const data = JSON.parse(fs.readFileSync(dataFilePath));
  // Ajouter le nouveau client à la liste des clients
  let client = data.clients.find((cl)=>cl.nom === newFacture.client.nom)
  let nvClients = data.clients.filter((cl)=>cl.nom !== newFacture.client.nom)
  client.factures.push({factureNum :newFacture.factureNum , produits:newFacture.produits})
  nvClients.push(client)
  data.clients = nvClients
  // Écrire les données mises à jour dans le fichier JSON
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  console.log("add done");
  res.json({ success: true, message: 'Client ajouté avec succès' });
});
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
