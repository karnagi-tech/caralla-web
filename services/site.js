/*
Caralla Site Service
*/

function CarallaSiteService() {

}

// public variable
CarallaSiteService.prototype.global = {
  title: "Caralla",
  address: "10 Bayfront Ave, Singapore 018956",
  phone: "+65 9768 7657"
}

// public functions
CarallaSiteService.prototype.newinstance = function() {
  return new CarallaSiteService();  
}

module.exports = CarallaSiteService;