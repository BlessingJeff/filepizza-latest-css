import socket from 'filePizza-socket'

export function getClient() {
  return new Promise((resolve, reject) => {
    socket.emit('trackerConfig', {}, (trackerConfig) => {
      const client = new WebTorrent({
        tracker: trackerConfig
      })
      resolve(client)
    })
  })
}
