const CrudRespository = require("./crud-repository");
const { Booking } = require("../models");

class AirPlaneRespository extends CrudRespository {
  constructor() {
    super(Booking);
  }
}

module.exports = AirPlaneRespository;
