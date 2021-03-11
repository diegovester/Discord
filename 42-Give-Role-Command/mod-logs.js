const roles = ['Moderator']

module.exports = (client) => {
  const channelId = '819718498749906954'

  client.on('message', (message) => {
    const { guild, content, member } = message

    if (member.user.bot) {
      return
    }

    const hasRole = member.roles.cache.find((role) => {
      return roles.includes(role.name)
    })

    if (hasRole) {
      const channel = guild.channels.cache.get(channelId)
      if (channel) {
        channel.send(`<@${member.id}> said this:
      
"${content}"`)
      }
    }
  })
}
