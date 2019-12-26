import { observable } from 'mobx';

class PortfolioStore {
  @observable projects = [
    {
      title: 'Gerimed',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Nisi porta lorem mollis aliquam ut porttitor leo a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.',
      tags: ['Website'],
      img: require('../static/screenshots/gerimed-home.png'),
      url: 'https://gerimed.netlify.com'
    },
    {
      title: 'Gerimed Mobility',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Nisi porta lorem mollis aliquam ut porttitor leo a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.',
      tags: ['Website', 'E-commerce'],
      img: require('../static/screenshots/mobility-home.png'),
      url: 'https://mobility.gerimed.co.za'
    },
    {
      title: 'Cycleworx Langebaan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet justo. Nisi porta lorem mollis aliquam ut porttitor leo a. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim.',
      tags: ['Website', 'E-commerce'],
      img: require('../static/screenshots/cycleworx-home.png'),
      url: 'https://mobility.gerimed.co.za'
    },
  ]
}

const store = new PortfolioStore()

export default store