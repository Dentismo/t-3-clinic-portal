const mqtt = require('mqtt');
const ClinicPortalController = require('./clinicPortalController')

const clinic = new ClinicPortalController();

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'http://localhost:1883';
    this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    this.password = 'YOUR_PASSWORD';
    this.reqestDentistTopic = 'clinicPortal/dentist/request';
    this.responseDentistTopic = 'clinicPortal/dentist/response';
    this.reqestClinicTopic = 'clinicPortal/clinic/request';
    this.responseClinicTopic = 'clinicPortal/clinic/response';
    this.reqestClinicsTopic = 'clinicPortal/clinics/request';
    this.responseClinicsTopic = 'clinicPortal/clinics/response';

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
      //console.log(`mqtt client connected, Subscribed to ${this.reqestDentistTopic}`);
      console.log(`mqtt client connected, Subscribed to ${this.reqestClinicsTopic}`);
      //this.mqttClient.subscribe(this.reqestDentistTopic, {qos: 1});
      //this.mqttClient.subscribe(this.reqestClinicTopic, {qos: 1});
      this.mqttClient.subscribe(this.reqestClinicsTopic, {qos: 1});

    });

    const client = this.mqttClient;
    // When a message arrives, console.log it
    this.mqttClient.on('message', async function (topic, message) {
      switch (topic) {
        case 'clinicPortal/dentist/request':
          const responseDentist = await clinic.dentist(message.toString());
          client.publish('clinicPortal/dentist/response', responseDentist);
          console.log(responseDentist);
          break;
        
        case 'clinicPortal/clinic/request':
          const responseClinic = await clinic.getClinic(message.toString());
          client.publish('clinicPortal/clinic/response', responseClinic);
          console.log(responseClinic);
          break;

        case 'clinicPortal/clinics/request':
          const responseClinics = await clinic.getClinics();
          client.publish('clinicPortal/clinics/response', responseClinics);
          console.log(responseClinics);
          break;  
      }
    });
  }

}

module.exports = MqttHandler;