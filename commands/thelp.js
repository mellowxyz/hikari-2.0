module.exports = [{
name: "help",
code:
`

$editMessage[$get[msg];{
"embeds" : "{newEmbed:
{title:Help menu}
{author:$userTag:$userAvatar}
{description:**__Command Categories__**
> <a:hik_spark2:987022866962858016>・admin commands
> <a:hik_spark2:987022866962858016>・action commands 
> <a:hik_spark2:987022866962858016>・fun commands
> <a:hik_spark2:987022866962858016>・info commands
> <a:hik_spark2:987022866962858016>・mod commands
> <a:hik_spark2:987022866962858016>・music commands
> <a:hik_spark2:987022866962858016>・utility commands

Select a category from the menu below.}
{timestamp}
{color:$getVar[ecolor]}}",
"components" : "{actionRow:{selectMenu:helpMenu_$authorID:Select a category [ bot ]:1:1:yes:{selectMenuOptions:・action commands:actisoncm:,,}{selectMenuOptions:・admin commands:funscm:,,}}}"}]


$wait[1m]

$let[msg;$sendMessage[{
"embeds" : "{newEmbed:
{title:Help menu}
{author:$userTag:$userAvatar}
{description:**__Command Categories__**
> <a:hik_spark2:987022866962858016>・admin commands
> <a:hik_spark2:987022866962858016>・action commands 
> <a:hik_spark2:987022866962858016>・fun commands
> <a:hik_spark2:987022866962858016>・info commands
> <a:hik_spark2:987022866962858016>・mod commands
> <a:hik_spark2:987022866962858016>・music commands
> <a:hik_spark2:987022866962858016>・utility commands

Select a category from the menu below.}
{timestamp}
{footer:Requested by $username}
{color:$getVar[ecolor]}}",
"components" : "{actionRow:{selectMenu:helpMenu_$authorID:Select a category [ bot ]:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}"};yes]]

$reply

$cooldown[10s;<@$authorID> woah! Slowdown buddy. You are on cooldown of %time%. {delete:10s}]
`
  
},
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ action ]}
{author:$userTag:$userAvatar}
{field:baka:Gets a baka gif from neko api.}
{field:bite:Gets a bite gif from neko api.}
{field:cuddle:Gets a cuddle gif from neko api.}
{field:feed:Gets a feed gif from neko api.}
{field:highfive:Gets a highfive gif from neko api.}
{field:hug:Gets a hug gif from neko api.}
{field:kiss:Gets a kiss gif from neko api.}
{field:pat:Gets a pat gif from neko api.}
{field:poke:Gets a poke gif from neko api.}
{field:slap:Gets a slap gif from neko api.}
{field:tickle:Gets a tickle gif from neko api.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==actioncm;]
`   
    },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ admin ]}
{author:$userTag:$userAvatar}
{field:disable-heistar:Disable the heist auto reply.}
{field:enable-heistar:Enable the heist auto reply.}
{field:heistar:Interactive panel to control heist trigger.}
{field:say:Say something using the bot.}
{field:set-armsg:Config the heist auto reply content.}
{field:set-goal:Config the server goal count.}
{field:set-prefix:Config the custom server prefix.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==admincm;]
`   
     },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ fun ]}
{author:$userTag:$userAvatar}
{field:enter:Just enter the chat & make friends.}
{field:exit:Just exit the chat dude.}
{field:fact:Get a nice random spicy fact.}
{field:penis:Measure your penis size, The fake one yes.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==funcm;]
` 
     },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ information ]}
{author:$userTag:$userAvatar}
{field:help:Get my commands list to get started.}
{field:ping:Get my latencies to know if am functioning.}
{field:servericon:Get the server icon in webp format.}
{field:serverinfo:Get some information about this server.}
{field:stats:Get some information about myself.}
{field:uptime:Get information about my host uptime.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==infocm;]
` 
        },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ moderation ]}
{author:$userTag:$userAvatar}
{field:ban:Ban a member from the server & make peace.}
{field:lock:Lock the channel, let the channel rest.}
{field:unban:Unban a fellow user n let him enjoy.}
{field:unlock:Unlock the channel & let the chaos begin.}
{field:unviewlock:Unviewlock the channel from everyone.}
{field:viewlock:Viewlock the channel from everyone.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==chatcm;]
`
            },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ music ]}
{author:$userTag:$userAvatar}
{field:join:Make the bot join ur voice channel.}
{field:leave:Make the bot leave ur voice channel.}
{field:nowplaying:Get the nowplaying track info.}
{field:pause:Pause the current playing track.}
{field:play:Play a track by URL or main title.}
{field:resume:Resume the paused current track & enjoy.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==musiccm;]
`
                },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:・Commands List [ utility ]}
{author:$userTag:$userAvatar}
{field:avatar:Get a user's or your avatar.}
{field:bans:Get information on server banned users.}
{field:esnipe:Get the last edited message.}
{field:goal:Get the stats on server goal.}
{field:snipe:Get the last deleted message.}
{field:whois:Get info on a server member.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==utilcm;]
`
                   },
  {
    type: "interaction",
    prototype: "selectMenu",
    code: `

$interactionUpdate[;{newEmbed:
{title:Help menu}
{author:$userTag:$userAvatar}
{description:Select a category from the menu below}
{timestamp}
{footer:Requested by $username}
{image:https://media.discordapp.net/attachments/976047400210804747/977879140554395648/Cheers_2.png}
{color:$getVar[ecolor]}};{actionRow:{selectMenu:helpMenu_$authorID:Select a category:1:1:false:{selectMenuOptions:・home page:home:,, home page:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・action commands:actioncm:,, action commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・admin commands:admincm:,, admin commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・fun commands:funcm:,, fun commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・info commands:infocm:,, info commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・mod commands:chatcm:,, mod commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・music commands:musiccm:,, music commands:no:<a:hik_spark2:987022866962858016>}{selectMenuOptions:・utility commands:utilcm:,, utility commands:no:<a:hik_spark2:987022866962858016>}}}]


$onlyIf[$interactionData[customId]==helpMenu_$interactionData[author.id];]
 $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$interactionData[values[0]]==home;]
`
  }]
