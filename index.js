'use strict';

const _ = require('lodash');
let request;

const defaults = {
  info_type: ['type','imei','imsi','iccid','number','reg'],
  port: []
};

class Dinstar {
  constructor(url) {
    request = require('request').defaults({baseUrl: url});
  };

  getPortInfo(info_type = defaults.info_type, port = defaults.port) {
    const options = {
      url: '/api/get_port_info',
      qs: {
        info_type: _.join(info_type, ','),
        port: _.join(port, ',')
      }
    };
    return new Promise((resolve, reject) => {
      request(options, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
    });
  }
}

module.exports = Dinstar;
