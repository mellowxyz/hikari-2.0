module.exports = [{
  name: "heistar",
  aliases: ["h", "har"],
  code: `

$editMessage[$get[msg];{
    "content" : "Heist trigger — Configure auto reply",
    "components" : "{actionRow:{button:enable:success:henable_$authorID:true:}{button:disable:danger:>hdisable_$authorID:true:}{button:close:2:hchangemsg_$authorID:true:}}"
    }]

$wait[20s]

$let[msg;$sendMessage[{
"content" : "Heist trigger — Configure auto reply.",
"components" : "{actionRow:{button:enable:success:henable_$authorID:false:}{button:disable:danger:hdisable_$authorID:false:}{button:close:2:hchangemsg_$authorID:false:}}"
};yes]]

$channelSendMessage[$getServerVar[bot_glogs];{newEmbed:{title:Command Logs}
{author:$usertag:$userAvatar}
{description:\`$getServerVar[prefix]$commandName\` has been used.}
{field:User:<@$authorID>}
{field:User ID:$authorID}
{field:Content ID:$messageID}
{field:Channel:<#$channelID>}
{field:Channel ID:$channelID}
{thumbnail:$serverIcon}
{footer:Hikari Logs:https#COLON#//cdn.discordapp.com/emojis/979402046098776084.webp}
{timestamp}
{color:$getVar[ecolor]}
}]

$onlyPerms[admin;$getVar[cross] you are missing \`ADMIN\` permission.]
`
},
{

type: "interaction",
prototype: "button",
code:
`

$deleteMessage[$messageID]

$wait[5s]

$interactionReply[$getVar[tick] **heist trigger has been enabled.**]
$setServerVar[hsar;on]
$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==henable]

`
},
{

type: "interaction",
prototype: "button",
code:
`

$deleteMessage[$messageID]

$wait[5s]

$interactionReply[$getVar[tick] **disabled auto reply for \`heist\`.**]
$setServerVar[hsar;off]


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==hdisable]

`
},
{

type: "interaction",
prototype: "button",
code:
`

$deleteMessage[$messageID]

$wait[3s]

$interactionUpdate[$getVar[star] Thanks for using me.]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]
$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==hchangemsg]

`
},
{

type: "awaited",
name: "changearmsg",
code:
`
$interactionReply[$getVar[tick] Set auto reply content to:
\`\`\`
$message
\`\`\`]

`
}]
