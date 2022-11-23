const mqtt = require('mqtt');
const ClinicPortalController = require('./clinicPortalController')
//const dentist = require('./clinicPortalController')

const clinic = new ClinicPortalController();

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'http://localhost:1883';
    this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    this.password = 'YOUR_PASSWORD';
    this.reqestDentistTopic = 'clinicPortal/dentist/request';
    this.responseDentistTopic = 'clinicPortal/dentist/response';
  }

  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, { username: this.username, password: this.password });

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected, Subscribed to ${this.reqestDentistTopic}`);
      this.mqttClient.subscribe(this.reqestDentistTopic, {qos: 1});
    });

    const client = this.mqttClient;
    let responseD = 'clinicPortal/dentist/response'

    // When a message arrives, console.log it
    this.mqttClient.on('message', async function (topic, message) {
      const response = await clinic.dentist(message.toString());
      client.publish(responseD, response);
      console.log(response);
    });
  }

}

module.exports = MqttHandler;