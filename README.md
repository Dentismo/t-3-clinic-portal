# Clinic Portal Component for the Dentismo Web Application

## Description
This component is necessary to retrieve the clinic, list of clinics, and information about the dentist from the database. Authentication component receives user credentials via the MQTT Protocol and verifies them using the database. Clinic portal component returns the dentist information that has been stored in the database upon successful authentication. When a user clicks on a specific clinic, information about that clinic is displayed that was returned from the database with the aid of the clinic portal. Clinic portal also returns a list of clinics from the database that is viewable from the UI.

## Badges - TODO
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
### Sequence Diagram
This sequence diagram illustrates a use case where a user tries to find information on a dentist account, a clinic, and a list of clinics.
![sequence-diagram.png](./Sequence-diagram.png)

## Installation
1. Clone Repository
2. Via the terminal navigate to the cloned repository
3. Run `npm i` to download all required packages for running the app
4. Run `npm start` to run the component
5. Open the Client Dentismo website, you will see a list of clinics. If you click on one of them, you will see information for that clinic. If you log in using the proper credentials, you will have all the information you need in your account.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Developer of the component: [@bardiaf](https://git.chalmers.se/bardiaf)</br>
Clickable email: bardia.forooraghi@gmail.com

## Roadmap
No established roadmap is in place at this time.

## Contributing
I welcome contributions, but they must be sought via a merge request and followed up with an email outlining why.

- What is fixed by this?
- Why it's advantageous to the component?
- If the person is prepared to support these fixes and improvements going forward

## Authors and acknowledgment
The contributors to the Availability Checker Component include:</br>
&nbsp; **Bardia Forooraghi** - @bardiaf</br>
- Lead Developer for the Component

&nbsp; **Georg Zsolnai** - @zsolnai</br>
- Added CI/CD

## License - TODO
For open source projects, say how it is licensed.

## Project status
Clinic Portal has been finished. As a result, this repository won't be receiving any new changes for the time being. The additional elements of the larger Dentismo distributed system have been finished. We will develop tests to ensure everything is operating as expected as well as linking the backend to the frontend over the course of the upcoming few weeks. By December 16th, 2022, we hope to have completed the larger Dentismo project.
