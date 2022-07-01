module.exports = {
    name: "ping-flashgiveaway",
    aliases: ['ping-flashgaw'],
    $if : "v4",
    code: `
$if[$message==]

$getVar[star] <@&979056977789468803> new giveaways! 

$addButton[1;vote us;5;https://top.gg/servers/840506530809643059/vote;no;]
$addButton[1;donate;5;https://discord.com/channels/840506530809643059/959526203159621672;no;]

$else

<@&979056977789468803>

$author[1;$username;$userAvatar]
$title[1;message:]
$description[1; $message]
$addTimestamp[1]
$color[1;$getVar[ecolor]]

$addButton[1;vote us;5;https://top.gg/servers/840506530809643059/vote;no;]
$addButton[1;donate;5;https://discord.com/channels/840506530809643059/959526203159621672;no;]

$endIf

$onlyForChannels[914206004441395250;841710434813739068;843534604945850459;841930316460589116;841931319407804426;850666463760089088;**$username** you can't use this here.]

$onlyForRoles[841878434128461825;{newEmbed:
{title:$username, you need \`$roleName[841878434128461825]\` to use this.}
{color:$getVar[ecolor]}
}]

$onlyForServers[840506530809643059;947704590877478962;{newEmbed:{title:This command will only work in danker's world.}{color:$getVar[ecolor]}{url:https://discord.gg/dworld}}]

$onlyForIDs[$botOwnerID;Under maintainence.]

`
}

/*
$cooldown[30m;{newEmbed:
{title:$username, you can use this again in %time%}
{color:$getVar[ecolor]}
}]
*/