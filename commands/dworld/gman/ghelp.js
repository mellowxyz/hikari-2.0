module.exports = {
name: "ghelp",
code:
`
$author[1;$username;$useravatar]
$title[1;・Gman Commands List]

$description[1;These commands can be used by our fellow giveaway managers.]

$addField[1;・Other Commands;
\`$getServerVar[prefix]ghelp          :\` commands list for gw managers
\`$getServerVar[prefix]gman           :\` complete guide for gw managers]

$addField[1;・Ping Tags;
\`$getServerVar[prefix]ping-flashgaw  :\` ping <@&979056977789468803>
\`$getServerVar[prefix]ping-maingaw   :\` ping <@&979057048077623366>
\`$getServerVar[prefix]ping-minigaw   :\` ping <@&979946638992891955>]

$color[1;$getVar[ecolor]]
$footer[1;Requested by $username]
$addTimestamp[1]

$addButton[1;﹒become a gman;5;https://discord.com/channels/840506530809643059/976009818391322644]

`
  
}