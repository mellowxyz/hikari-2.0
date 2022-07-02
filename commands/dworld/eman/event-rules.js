module.exports = [{
  
 name: "event-rules",
 aliases: ["er", "evr", "eventrules"],
 $if: "v4",
 code:
`
$if[$message==]

$let[mainmsg;$sendMessage[{
"embeds": "{newEmbed:
{title:Help [ Event Rules]}
{description:\`\`\`js
$getServerVar[prefix]$commandName <sub_command>
\`\`\`}
{field:・aliases:\`er\`, \`evr\`, \`eventrules\`}
{field:・cooldown:Role: User: \`10 seconds\`}
{field:・permissions:Role: \`event manager\`}
{color:$getVar[ecolor]}
{timestamp}
}",
"components": "{actionRow:{button:﹒sub commands:2:ersub_$authorID}}"
};yes]]


$endif

$if[$message[1]==panel]

$editMessage[$get[panelmsg];{
"content": "Select — Event Type.",
"components": "{actionRow:{button::2:ermafia_$authorID:true:<:yellow_1:960783704660246558>}{button::2:ergartic_$authorID:true:<:yellow_2:960783765775474688>}{button::2:errumble_$authorID:true:<:yellow_3:960783770368245811>}{button::2:ertype-race_$authorID:true:<:yellow_4:960783775594336256>}{button::2:erturtle_$authorID:true:<:yellow_5:960783779440525312>}}{actionRow:{button::2:ergtn_$authorID:true:<:yellow_6:960783787422277682>}{button::2:errlgl_$authorID:true:<:yellow_7:960783793889882122>}{button::2:ertea_$authorID:true:<:yellow_8:960783800588206140>}{button::2:erbattle_$authorID:true:<:yellow_9:960783806200184862>}{button::4:erclose_$authorID:true:<:org_crossmark2:966358688686288916>}}"
}]

$wait[5s]

$let[panelmsg;$sendMessage[{
"content": "Select — Event Type.",
"components": "{actionRow:{button::2:ermafia_$authorID:false:<:yellow_1:960783704660246558>}{button::2:ergartic_$authorID:false:<:yellow_2:960783765775474688>}{button::2:errumble_$authorID:false:<:yellow_3:960783770368245811>}{button::2:ertype-race_$authorID:false:<:yellow_4:960783775594336256>}{button::2:erturtle_$authorID:false:<:yellow_5:960783779440525312>}}{actionRow:{button::2:ergtn_$authorID:false:<:yellow_6:960783787422277682>}{button::2:errlgl_$authorID:false:<:yellow_7:960783793889882122>}{button::2:ertea_$authorID:false:<:yellow_8:960783800588206140>}{button::2:erbattle_$authorID:false:<:yellow_9:960783806200184862>}{button::4:erclose_$authorID:false:<:org_crossmark2:966358688686288916>}}"
};yes]]

$endIf

$onlyForIDs[$botOwnerID;]
`
},
{
  type: "interaction",
  prototype: "button",
  code:
    `
$interactionUpdate[;{newEmbed:
{title:Sub Commands [ event-rules ]}
{description:\`\`\`js
$getServerVar[prefix]event-rules <sub_command>
\`\`\`}
{field:mafia:Show a set of mafia rules in the channel.}
{field:gartic:Show a set of gartic rules in the channel.}
{field:rumble:Show a set of rumble rules in the channel.}
{field:typerace:Show a set of typerace rules in the channel.}
{field:turtlerace:Show a set of turtlerace rules in the channel.}
{field:gtn:Show a set of gtn rules in the channel.}
{field:rlgl:Show a set of rlgl rules in the channel.}
{field:tea:Show a set of tea rules in the channel.}
{field:battle:Show a set of ban battle rules in the channel.}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{button:﹒home page:secondary:erhome_$authorID}{button:﹒compact format:secondary:ershortsub_$authorID}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ersub]
`
  },
{
  type: "interaction",
  prototype: "button",
  code:
    `
$interactionUpdate[;{newEmbed:
{title:Help [ Event Rules]}
{description:\`\`\`js
$getServerVar[prefix]event-rules <sub_command>
\`\`\`}
{field:・permissions:Role: \`$roleName[847749007988359208]\`}
{field:・cooldown:User: \`10 seconds\`}
{field:・aliases:\`er\`, \`evr\`, \`eventrules\`}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{button:﹒sub commands:secondary:ersub_$authorID}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==erhome]
`
    },
{
  type: "interaction",
  prototype: "button",
  code:
    `
$interactionUpdate[;{newEmbed:
{title:Sub Commands [ event-rules]}
{description:
\`mafia              :\` show set of mafia rules
\`gartic             :\` show set of gartic rules
\`typerace           :\` show set of typerace rules
\`turtlerace         :\` show set of turtlerace rules
\`gtn                :\` show set of gtn rules
\`rlgl               :\` show set of rlgl rules
\`rumble             :\` show set of rumble rules
\`tea                :\` show set of tea rules
\`battle             :\` show set of ban battle rules}
{color:$getVar[ecolor]}
{timestamp}
{footer:Requested by $username}
};{actionRow:{button:﹒home page:secondary:erhome_$authorID}{button:﹒extend format:secondary:ersub_$authorID}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];{"content": "Only <@$advancedTextSplit[$interactionData[customId];_;2]> can use this interaction.","ephemeral" : true,"options" : {"interaction" : true}}]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ershortsub]
`
}]