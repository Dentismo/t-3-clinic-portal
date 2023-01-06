const mqtt = require("mqtt");
const ClinicPortalController = require("./clinicPortalController");

const clinic = new ClinicPortalController();

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = "http://localhost:1883";
    this.username = "YOUR_USER"; // mqtt credentials if these are needed to connect
    this.password = "YOUR_PASSWORD";

    this.requestDentistTopic = "request/dentist/#";
    this.responseDentistTopic = "response/dentist/#";
    this.requestClinicTopic = "request/clinic/#";
    this.responseClinicTopic = "response/clinic/#";
    this.requestClinicsTopic = "request/clinics/#";
    this.responseClinicsTopic = "response/clinics/#";
  }

  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host, {
      username: this.username,
      password: this.password,
    });

    // Mqtt error calback
    this.mqttClient.on("error", (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on("connect", () => {
      console.log(
        `mqtt client connected, Subscribed to ${this.requestDentistTopic}\n`
      );
      console.log(
        `mqtt client connected, Subscribed to ${this.requestClinicTopic}\n`
      );
      console.log(
        `mqtt client connected, Subscribed to ${this.requestClinicsTopic}`
      );
      this.mqttClient.subscribe(this.requestDentistTopic, { qos: 1 });
      this.mqttClient.subscribe(this.requestClinicTopic, { qos: 1 });
      this.mqttClient.subscribe(this.requestClinicsTopic, { qos: 1 });
    });

    const client = this.mqttClient;
    // When a message arrives, console.log it
    this.mqttClient.on("message", async function (topic, message) {
      //-------------------------------------------------------------------\\
      let incomingTopic = topic.split("/"); // array of topic fields
      const id = incomingTopic[2]; //   [request, clinicportal, clinic, id]
      incomingTopic.splice(2, 1); // removes id = [request, clinicportal, clinic]
      const finalTopic = incomingTopic.join("/"); // finalTopic = request/clinicportal/clinic
      //--------------------------------------------------------------------\\
      switch (finalTopic) {
        case "request/dentist":
          const responseDentist = await clinic.getDentist(
            JSON.parse(message.toString())._id
          );
          client.publish(`response/dentist/${id}`, responseDentist);
          break;

        case "request/clinic":
          const responseClinic = await clinic.getClinic(
            JSON.parse(message.toString())
          );
          client.publish(
            `response/clinic/${id}`,
            JSON.stringify(responseClinic)
          );
          break;

        case "request/clinics":
          const responseClinics = await clinic.getClinics();
          client.publish(`response/clinics/${id}`, responseClinics);
          break;
      }
    });
  }
}
module.exports = MqttHandler;
