import { observable } from 'mobx';

class PortfolioStore {
  @observable projects = [
    {
      title: 'Gerimed',
      description: 'Gerimed is a business that specializing in private elderly care. They needed a redesign of their website to make it more accessible for their customers. We redesigned the website to be clean and easy to read. Users can easily navigate the website and it showcases excellent performance loading in a mere 2s. Users have access to an online form to make communication more effective.',
      tags: ['Website'],
      img: require('../static/screenshots/production/gerimed-home.jpg'),
      url: 'https://gerimed.netlify.com'
    },
    {
      title: 'Gerimed Mobility',
      description: 'A local store located in Langebaan that retails in all that is mobility aids. Gerimed Mobility is a sub-branch of Gerimed and needed a redesign to be consistent with its branding efforts. With the website comes an online store allowing their customers to purchase directly from their website. ',
      tags: ['Website', 'E-commerce'],
      img: require('../static/screenshots/production/mobility-home.jpg'),
      url: 'https://mobility.gerimed.co.za'
    },
    {
      title: 'Cycleworx Langebaan',
      description: 'A small local store in Langebaan that offers you the best in bicycle services. With a great reputation to live up to, the website needed to be perfect. Customers can not only find the information directly on the site, but they can also track the progress of their bicycles. This is accomplished with a custom workshop back-end that drives the whole efficiency of this small shop.',
      tags: ['Website', 'Web app'],
      img: require('../static/screenshots/production/cycleworx-home.jpg')
    },
  ]
}

const store = new PortfolioStore()

export default store