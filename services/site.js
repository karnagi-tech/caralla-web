/*
Caralla Site Service
*/

function CarallaSiteService() {

}

// public variable
CarallaSiteService.prototype.global = {
  title: "Caralla",
  address: "10 Bayfront Ave, Singapore 018956",
  fulladdress: "10 Bayfront Ave, Marina Bay Sands, #01-01, Singapore 018956",
  phone: "+65 9768 7657",
  fax: "+65 9768 7658",
  emailaddress: "inquiry@caralla.com.sg"
}

// public functions
CarallaSiteService.prototype.newinstance = function() {
  return new CarallaSiteService();  
}

module.exports = CarallaSiteService;