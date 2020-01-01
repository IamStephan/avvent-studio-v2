import { observable, action } from 'mobx';

class NotificationStore {
  @observable notifications = []

  @action AddNotification(type, title, message, timer = 4000) {
    let randomID = (Math.random() * 10) + Date.now()

    this.notifications.push({
      id: randomID,
      type,
      title,
      message
    })

    setTimeout(() => {
      this.RemoveNotification(randomID)
    }, timer)
  }

  @action RemoveNotification(id) {
    for(let i = 0; i < this.notifications.length; i++) {
      if(this.notifications[i].id === id) {
        this.notifications.splice(i, 1)
        return
      }
    }
  }
}

const store = new NotificationStore()

export default store