module.exports = {
name: "unban",
aliases: "unsnap",
info: "Unban a member from the server.",
usage: "unban < userID>",
code: `
$unban[$guildid;$findUser[$message;yes]]

$getVar[tick] Unbanned user \`$usertag[$findUser[$message]]\`

$reply[$messageID;no]

$onlyIf[$isBanned[$findUser[$message;yes]]==true;$getServerVar[cross] **$username** That user is not banned]

$onlyPerms[ban;$getVar[cross] You are missing \`BAN_MEMBERS\` permission.]

$onlyBotPerms[ban;$getVar[cross] I'm missing \`BAN_MEMBERS\` permission.]


$argsCheck[>0;$getServerVar[cross] **Correct usage:** \`\`\`js
$getservervar[prefix]$commandname [user]
\`\`\` {delete:5s}]

`}
