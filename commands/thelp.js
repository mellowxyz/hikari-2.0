module.exports = {
name: "thelp",
code:
`
$editMessage[$get[msg];{
"embeds" : "{newEmbed:
{title:Help menu}
{author:$userTag:$userAvatar}
{description:Select a category from the menu below}
{timestamp}
{image:https://media.discordapp.net/attachments/976047400210804747/977879140554395648/Cheers_2.png}
{color:$getVar[ecolor]}}"}]


$wait[20s]

$let[msg;$sendMessage[{
"embeds" : "{newEmbed:
{title:Help menu}
{author:$userTag:$userAvatar}
{description:Select a category from the menu below}
{timestamp}
{image:https://media.discordapp.net/attachments/976047400210804747/977879140554395648/Cheers_2.png}
{color:$getVar[ecolor]}}",
"components" : "{actionRow:{selectMenu:helpMenu_$authorID:Select Category...:1:1:false:{selectMenuOptions:・action commands:actioncm:,,}{selectMenuOptions:・admin commands:funcm:,,}}}"};yes]]

$reply

$onlyForIDs[$botOwnerID;]
`
  
}
