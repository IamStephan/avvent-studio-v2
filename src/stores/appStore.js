import { action, observable } from 'mobx';

class AppStore {
  @observable sidebar = {
    isOpen: false
  }

  @observable serviceDropdown = {
    isOpen: false,
    offset: 0
  }

  @action openSidebar () {
    this.sidebar.isOpen = true
  }

  @action closeSidebar () {
    this.sidebar.isOpen = false
  }

  @action openServiceDropdown (offset) {
    this.serviceDropdown.isOpen = true

    this.setOffset(offset)
  }

  @action closeServiceDropdown () {
    this.serviceDropdown.isOpen = false
  }

  @action setOffset(offset) {
    this.serviceDropdown.offset = offset
  }
}

const store = new AppStore()

export default store