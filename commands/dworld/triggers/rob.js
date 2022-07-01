module.exports = {
  name: "pls rob",
  nonPrefixed: true,
  code: `
$deleteIn[10s]

Robbing & heisting is disabled in this server.
If you keep trying this for no reason, you might get a nice time-out. 

$reply
$cooldown[10s;]

$channelSendMessage[988116171423379516;{newEmbed:
{author:$userTag:$userAvatar}
{title:Rob Command Logging}
{description:\`rob\` has been triggerd.}
{field:User:$userTag}
{field:User ID:$authorID}
{field:Source:[click here]($messageURl)}
{field:Channel:<#$channelID>}
{field:Channel ID:$channelID}
{field:Content:$message}
{color:$getVar[ecolor]}
{image:https://media.discordapp.net/attachments/976047400210804747/978911011706896394/unknown.png?width=994&height=24}
}]
`
}