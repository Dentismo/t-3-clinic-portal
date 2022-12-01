# Clinic Portal Component for the Dentismo Web Application



## Description
This component is necessary to retrieve the clinic, list of clinics, and information about the dentist from the database. Authentication component receives user credentials via the MQTT Protocol and verifies them using the database. Clinic portal component returns the dentist information that has been stored in the database upon successful authentication. When a user clicks on a specific clinic, information about that clinic is displayed that was returned from the database with the aid of the clinic portal. Clinic portal also returns a list of clinics from the database that is viewable from the UI.

### Sequence Diagram
This sequence diagram illustrates a use case where a user tries to find information on a dentist account, a clinic, and a list of clinics.

![sequence-diagram.png](./Sequence-diagram.png)

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README
Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges - TODO
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
1. Clone Repository
2. Via the terminal navigate to the cloned repository
3. Run `npm i` to download all required packages for running the app
4. Run `npm start` to run the component
5. Open the Client Dentismo website, you will see a list of clinics. If you click on one of them, you will see information for that clinic. If you log in using the proper credentials, you will have all the information you need in your account.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Developer of the component: @bardiaf 
Clickable email: bardia.forooraghi@gmail.com

## Roadmap
No established roadmap is in place at this time.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
The contributors to the Availability Checker Component include:</br>
&nbsp; **Bardia Forooraghi** - @bardiaf</br>
- Lead Developer for the Component

&nbsp; **Georg Zsolnai** - @zsolnai</br>
- Added CI/CD

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
