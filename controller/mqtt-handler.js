const mqtt = require('mqtt');
const ClinicPortalController = require('./clinicPortalController')

const clinic = new ClinicPortalController();

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'http://localhost:1883';
    this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    this.password = 'YOUR_PASSWORD';
    this.reqestDentistTopic = 'request/clinicPortal/dentist/*';
    this.responseDentistTopic = 'response/clinicPortal/dentist/*';
    this.reqestClinicTopic = 'request/clinicPortal/clinic/*';
    this.responseClinicTopic = 'response/clinicPortal/clinic/*';
    this.reqestClinicsTopic = 'request/clinicPortal/clinics/*';
    this.responseClinicsTopic = 'response/clinicPortal/clinics/*';
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
      console.log(`mqtt client connected, Subscribed to ${this.reqestClinicTopic}`);
      console.log(`mqtt client connected, Subscribed to ${this.reqestClinicsTopic}`);
      this.mqttClient.subscribe(this.reqestDentistTopic, {qos: 1});
      this.mqttClient.subscribe(this.reqestClinicTopic, {qos: 1});
      this.mqttClient.subscribe(this.reqestClinicsTopic, {qos: 1});
    });

    const client = this.mqttClient;
    // When a message arrives, console.log it
    this.mqttClient.on('message', async function (topic, message) {

       //-------------------------------------------------------------------\\
      let incomingTopic = topic.split('/') // array of topic fields
      id = s[3]  //   [request, clinicportal, clinic, id]
      incomingTopic = s.splice(3,1) // removes id = [request, clinicportal, clinic]
      const finalTopic = s.join('/') // finalTopic = request/clinicportal/clinic 
       //--------------------------------------------------------------------\\

      switch (finalTopic) {
        case 'request/clinicPortal/dentist':
          const responseDentist = await clinic.getDentist(message.toString());
          client.publish(`response/clinicPortal/dentist/${id}`, responseDentist);
          console.log(responseDentist);
          break;
        
        case 'request/clinicPortal/clinic':
          const responseClinic = await clinic.getClinic(message.toString());
          client.publish(`response/clinicPortal/clinic/${id}`, responseClinic);
          console.log(responseClinic);
          break;

        case 'request/clinicPortal/clinics':
          const responseClinics = await clinic.getClinics();
          client.publish(`response/clinicPortal/clinics/${id}`, responseClinics);
          console.log(responseClinics);
          break;
      }
    });
  }

}

module.exports = MqttHandler;