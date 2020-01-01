import { observable } from 'mobx';

class PortfolioStore {
  @observable projects = [
    {
      title: 'Gerimed',
      description: 'Gerimed is business specializing in private elderly care. The needed a redesign of their website to make it more accessible for their customers. We redesigned the website to be clean and easy flow. Users can easily navigate the website and the it showcases excellent performance loading in a mere 2s. Users have access to an online form to make simply communication.',
      tags: ['Website'],
      img: require('../static/screenshots/production/gerimed-home.jpg'),
      url: 'https://gerimed.netlify.com'
    },
    {
      title: 'Gerimed Mobility',
      description: 'A local store located in langebaan that retails in all that is mobility aids. Gerimed mobility is a sub branch of Gerimed and was in need of a redesign to be consistent with their branding efforts. With the website comes an online store allowing their customers to puchase directly from their website. ',
      tags: ['Website', 'E-commerce'],
      img: require('../static/screenshots/production/mobility-home.jpg'),
      url: 'https://mobility.gerimed.co.za'
    },
    {
      title: 'Cycleworx Langebaan',
      description: 'A small local store in langebaan that offers you the best in bicycle services. With a great reputation to live upto the website needed to be perfect. Customers can not only find information directly on the site but they can also track the progress of their bicycles. This is accomplished with a custom wokshop backed that drives the whole effeciency of this small shop.',
      tags: ['Website', 'Web app'],
      img: require('../static/screenshots/production/cycleworx-home.jpg'),
      url: 'https://cycleworxlangebaan.com'
    },
  ]
}

const store = new PortfolioStore()

export default store