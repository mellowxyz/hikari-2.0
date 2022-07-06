module.exports = {
name:"ban",
aliases: ['thanos','snap','gtfo', 'wipe-existence'],
usage: "ban < userID > < reason >",
info: "Ban a member from the server.",
code: ` 

$ban[$guildID;$findMember[$message[1];yes];0;$if[$messageslice[1]==;No reason provided;$messageslice[1]]]

$getVar[tick] Banned \`$userTag[$findMember[$message[1];yes]]\`

$reply[$messageID]

$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];$getServerVar[cross] You can't ban that user.]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$authorID];$getServerVar[cross] They have the same role as me.]

$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findMember[$message[1];yes]]];$getServerVar[cross] They have a higher role than you. ]
 $onlyIf[$highestRole[$findMember[$message[1];yes]]!=$highestRole[$clientID];$getServerVar[cross] They have a higher role than me or the same role as me. ]
 $onlyIf[$findMember[$message[1];yes]!=$ownerID;$getServerVar[cross] How am i suppose to ban the server owner??]
 $onlyIf[$findMember[$message[1];yes]!=$authorID;$getServerVar[cross] Self harm is bad for health. {delete:5s}]
 $onlyIf[$findMember[$message[1];yes]!=$clientID;$getServerVar[cross] You can't ban me using me. {delete:5s}]

$argsCheck[>0;$getServerVar[cross] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname [member]
\`\`\` {delete:5s}]

$onlyBotPerms[ban;$getVar[cross] I'm missing \`BAN_MEMBERS\` permission. {delete:5s}]

$onlyPerms[ban;$getVar[cross] You are missing \`BAN_MEMBERS\` permission. {delete:5s}]

$onlyForIDs[$botOwnerID;$getVar[cross] Command under maintainence. {delete:5s}]

`}