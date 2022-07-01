module.exports = [{
  name: "gman",
  aliases: ["gguide"],
  code: 
`

$editMessage[$get[gmsg];{
"embeds": "{newEmbed:{title:Giveaway manager guide}
{description:> Welcome to the giveaway manager guide. Here you will find guides that's needed to host giveaways, ping tags, how to manage donations etc. Feel free to test anything in staff commands channel.}
{field:Guides available:>>> \`1. \` How to host giveaways
\`2. \` How to use ping tags
\`3. \` Ping & channel reqs
\`4. \` How to manage donations
\`5. \` Extra stuff to know}
{field:Navigate:> Click on the corresponding button to get its guide.}
{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}}",
"components": "{actionRow:{button:1:2:host_$authorID:true}{button:2:2:tags_$authorID:true}{button:3:2:reqs_$authorID:true}{button:4:2:donos_$authorID:true}{button:5:2:extra_$authorID:true}}
{actionRow:{button:﹒close interaction:4:close_$authorID:true}}"
}]

$wait[3m]


$let[gmsg;$sendMessage[{
"embeds": "{newEmbed:{title:Giveaway manager guide}
{description:> Welcome to the giveaway manager guide. Here you will find guides that's needed to host giveaways, ping tags, how to manage donations etc. Feel free to test anything in staff commands channel.}
{field:Guides available:>>> \`1. \` How to host giveaways
\`2. \` How to use ping tags
\`3. \` Ping & channel reqs
\`4. \` How to manage donations
\`5. \` Extra stuff to know}
{field:Navigate:> Click on the corresponding button to get its guide.}
{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}}",
"components": "{actionRow:{button:1:2:host_$authorID}{button:2:2:tags_$authorID}{button:3:2:reqs_$authorID}{button:4:2:donos_$authorID}{button:5:2:extra_$authorID}}{actionRow:{button:﹒close interaction:4:close_$authorID:false}}"
};yes]]


$coolDown[30s;**You are on cooldown on of 30 seconds.** {delete:30s}]

$onlyForRoles[908379849352175653;894149947274977345;You are not staff, Wanna become one? apply from <#976009818391322644>! {delete:10s}]


$channelSendMessage[$getServerVar[bot_glogs];{newEmbed:{title:Command Logs}
{author:$usertag:$userAvatar}
{description:[\`$getServerVar[prefix]$commandName\` has been used.]($messageURL)}
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

`    
},
 {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:{title:How to host giveaways!}
{description:> In this page, You can select on which bot you wanna learn to host giveaways.}
{field:Bots available:>>> \`1. \` Noumenon
\`2. \` BB Yoda
\`3. \` FreeBee
\`4. \` Melon
\`5. \` Giveaway Boat}
{field:Navigate:> Click on the corresponding button to get its guide.}
{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:1:2:noumenon_$authorID}{button:2:2:bbyoda_$authorID}{button:3:2:freebee_$authorID}
{button:4:2:melon_$authorID}
{button:5:2:gboat_$authorID}{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}}}]


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==host]
`
},
                   {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:{title:Giveaway manager guide}
{description:> Welcome to the giveaway manager guide. Here you will find guides that's needed to host giveaways, ping tags, how to manage donations etc. Feel free to test anything in staff commands channel.}
{field:Guides available:>>> \`1. \` How to host giveaways
\`2. \` How to use ping tags
\`3. \` Ping & channel reqs
\`4. \` How to manage donations
\`5. \` Extra stuff to know}

{field:Navigate:> Click on the corresponding button to get its guide.}

{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:1:2:host_$authorID}{button:2:2:tags_$authorID}{button:3:2:reqs_$authorID}{button:4:2:donos_$authorID}{button:5:2:extra_$authorID}}{actionRow:{button:﹒close interaction:4:close_$authorID:false}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==mainpage]
`
                   },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:{title:Ping Tags Guide}
{description:> In this page, we will give you some information on how to ping the giveaway roles. You can use  \`Lunar.#9360\` bot or \`・aura#4560\` bot for this.}
{field:Commands of lunar:The main command#COLON#
\`\`\`js
*sping <ping> [message]\`
\`\`\`
Sub commands#COLON#
\`\`\`js
*sping mini - @・mini giveaways
*sping flash - @・flash giveaways
*sping biggaw - @・giveaways
\`\`\`
You can use the message flag to add a message with the command#COLON#
\`\`\`js
*sping mini Join these giveaways!
\`\`\`}
{field:Commands of aura:The main command#COLON#
\`\`\`js
a!ping-<ping_name> [message]
\`\`\`
Sub aliases#COLON#
\`\`\`js
a!ping-minigaw - @・mini giveaways
a!ping-flashgaw - @・flash giveaways
a!ping-gaw - @・giveaways
\`\`\`
You can use the message flag to add a message with the tag#COLON#
\`\`\`js
a!ping-gaw join these giveaways!
\`\`\`}
{field:Requirements:\`-\` <@&979946638992891955>
\`\`\`js
Should only be pinged if the gaw is worth 1m-29.9m and if the gaws duration is more than 15 minutes.
\`\`\`
\`-\` <@&979056977789468803>
\`\`\`js
Should only be pinged if the duration of the gaw is 15 minutes or less. Prize amount should not be less than 1m , can be pinged in any channel as well.
\`\`\`
\`-\` <@&979057048077623366>
\`\`\`js
Should only be pinged in #﹒special-giveaways and if the gaw is worth 30m+
\`\`\`
 }
{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==tags]
`
       },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:{title:Requirements Guide}
{description:> In this page, we will give you some information on where to use ping tags the worth to ping it, which channels etc.}

{field:Ping Requirements:\`-\` <@&979946638992891955>
\`\`\`js
Should only be pinged if the gaw is worth 1m-29.9m and if the gaws duration is more than 15 minutes.
\`\`\`
\`-\` <@&979056977789468803>
\`\`\`js
Should only be pinged if the duration of the gaw is 15 minutes or less. Prize amount should not be less than 1m , can be pinged in any channel as well.
\`\`\`
\`-\` <@&979057048077623366>
\`\`\`js
Should only be pinged in #﹒special-giveaways and if the gaw is worth 30m+
\`\`\`}

{field:Channel Requirements:\`-\` Host gaws worth 1m-29m in <#841931319407804426>
\`-\` Host gaws worth 30m+ in <#914206004441395250>
}
{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==reqs]
`

               },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:
{title:Donations Guide}
{description:> In this page, we will give you some information on how to add, remove donations using def, how to take giveaway donations etc.}
{field:How to add/remove donations:\`-\` To add donation#COLON#
\`\`\`js
d?dono add [user] [amount]
\`\`\`
\`-\` To remove donation#COLON# 
\`\`\`js
d?dono remove [user] [amount]
\`\`\`
Examples#COLON#
\`\`\`js
- d?dono add @mellow.org#8308 50000000
- d?dono add @mellow.org#8308 50e6
\`\`\`}

{field:Giveaway Donations:Follow these steps to take donations from <#959526203159621672> when someone uses the donate command.
\`\`\`js
- Whichever gman comes first can take it
- Collect the prize from the donor
- Once you got the prize, add their dono
- Use the item trade value to add in dono
- Use -gdono before leaving the channel
\`\`\`
Host the giveaway accordingly after then. You can add the sponsor in the ping message or using the donor flag in the giveaway bots.}

{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==donos]
`
},
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:
{title:Extra Information}
{description:> In this page, we will give you some information on what to do after giveaways, how to payout etc.}
{field:Reporting:>>> \`-\` Please report in <#935792275383017512> after hosting every giveaways.
\`-\` Report the giveaway even if its donated by you or not.
\`-\` You can add your donations in <#914192855382249532>
}

{field:Payments:>>> \`-\` Winners have 24 hours to claim by their giveaway by creating a ticket or dming the host.
\`-\` Don't go by saying you have less than 24 hours to claim.
\`-\` You don't have to cover tax if its a sponsered giveaway.
\`-\` Incase someone spam mentions or dm spam you for payouts, you can either reroll or re-host it.}

{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==extra]
`
},
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:
{title:Noumenon Giveaways Guide}
{description:In this page, we will give you some information on how to host giveaways using noumenon.}
{field:Starting Giveaways:\`\`\`js
,giveaway start <time> [winners=1] <requirements> <title> [flags]
\`\`\`
Examples#COLON#
\`\`\`js
,g start 1h 1 none Trophy
,g start 1h 1 908379849352175653 Nitro --donor @mellow.org#8308
\`\`\`
}

{field:Giveaway Time:Supported time formats#COLON#
\`\`\`js
s - seconds
m - minutes
h - hours
d - days
w - weeks
\`\`\`
Examples#COLON#
\`\`\`js
30s - 30 seconds
1h30m - 1 hour and 30 minutes
"1d 12h" - 1 day and 12 hours
\`\`\`
Giveaways have a minimum time of 10 seconds and maximum of 2 weeks.}

{field:Ending & Cancelling:
To end a giveaway prematurely#COLON#
\`\`\`js
,giveaway end [messageID | messageURL]
\`\`\`
Giveaways can be cancelled in a similar way#COLON#
\`\`\`js
,giveaway cancel [messageID | messageURL]
\`\`\`}

{field:Rerolling:You can pick a new winner using the following command#COLON#
\`\`\`js
,giveaway reroll  [messageID | messageURL] [winners=1]
\`\`\`
By default, only one winner will be rolled, however you can specify up to 30 winners to be rerolled after the giveaway ID.}

{field:Extra Information:Please use \`,g explain\` for a more efficient guide on noumenon giveaways.}

{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}{button::2:botspage_$authorID:false:<:emoji_44:979402046098776084>}}]


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==noumenon]
`
                    },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:
{title:BB Yoda Giveaways Guide}
{description:In this page, we will give you some information on how to host giveaways using noumenon.}
{field:Starting Giveaways:\`\`\`js
b.giveaway start <time> [winners=1] <requirements> <title> [flags]
\`\`\`
Examples#COLON#
\`\`\`js
b.g start 1h 1 none Trophy
b.g start 1h 1 908379849352175653 Nitro --donor @mellow.org#8308
\`\`\`
}

{field:Giveaway Time:Supported time formats#COLON#
\`\`\`js
s - seconds
m - minutes
h - hours
d - days
w - weeks
\`\`\`
Examples#COLON#
\`\`\`js
30s - 30 seconds
1h30m - 1 hour and 30 minutes
"1d 12h" - 1 day and 12 hours
\`\`\`
Giveaways have a minimum time of 10 seconds and maximum of 2 weeks.}

{field:Ending & Cancelling:
To end a giveaway prematurely#COLON#
\`\`\`js
b.giveaway end [messageID | messageURL]
\`\`\`
Giveaways can be cancelled in a similar way#COLON#
\`\`\`js
b.giveaway cancel [messageID | messageURL]
\`\`\`}

{field:Rerolling:You can pick a new winner using the following command#COLON#
\`\`\`js
b.giveaway reroll  [messageID | messageURL] [winners=1]
\`\`\`
By default, only one winner will be rolled, however you can specify up to 30 winners to be rerolled after the giveaway ID.}

{field:Extra Information:Please use \`b.g explain\` for a more efficient guide on noumenon giveaways.}

{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}{button::2:botspage_$authorID:false:<:emoji_44:979402046098776084>}}]


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==bbyoda]
`
               },
                  {
type: "interaction",
prototype: "button",
code: 
`

$interactionUpdate[;{newEmbed:
{title:Freebee Giveaways Guide}
{description:> In this page, we will give you some information on how to host giveaways using freebee.}
{field:Starting Giveaways:>>> Freebee only has slash commands so everything should be easy.
\`/gstart\`
You can use this command you can use the required & optional options, Rest should be pretty straight forward.}

{field:Ending & Rerolling:> To end a on-going giveaway, you can use the \`/gend [message_ID]\` slash command. To cancel a on-going giveaway and delete it, you can use the  \`/gcancel [message_ID]\` slash command.}

{field:Extra Information:> Please make sure you are using \`/gstart\` and not \`/gdrop\` for hosting a giveaway. Drop is used for events and other stuff.}


{color:$getVar[ecolor]{footer:Requested by $userTag}{timestamp}};{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}{button::2:botspage_$authorID:false:<:emoji_44:979402046098776084>}}]


$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==freebee]

`
                    },
                  {
type: "interaction",
prototype: "button",
code: 
`

$deleteMessage[$messageID]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==close]
`
                  
                      },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionUpdate[;{newEmbed:{title:How to host giveaways!}
{description:> In this page, You can select on which bot you wanna learn to host giveaways.}
{field:Bots available:>>> \`1. \` Noumenon
\`2. \` BB Yoda
\`3. \` FreeBee
\`4. \` Melon
\`5. \` Giveaway Boat}
{field:Navigate:> Click on the corresponding button to get its guide.}
{color:$getVar[ecolor]}{footer:Requested by $userTag}{timestamp}};{actionRow:{button:1:2:noumenon_$authorID}{button:2:2:bbyoda_$authorID}{button:3:2:freebee_$authorID}
{button:4:2:melon_$authorID}
{button:5:2:gboat_$authorID}{actionRow:{button:﹒main page:1:mainpage_$authorID}{button:﹒close interaction:4:close_$authorID:false}}}]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==botspage]
`

                                         },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionReply[This isn't available for now.;;;;;yes]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==melon]
`

                                                             },
                  {
type: "interaction",
prototype: "button",
code: 
`
$interactionReply[This isn't available for now.;;;;;yes]

$onlyif[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==gboat]
`
}]
                    