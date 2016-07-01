var fs = require('fs'),
    packData = require('./level');

var contents = [], packData=pack;
// var c,e;
// $.get('c.xml',function(data){ c=data; });
// $.get('e.xml',function(data){ e=data; });
for (var packName in packData) {
    var pack = packData[packName];
    for (var index in pack) {
        var level = pack[index];
        contents.push(`#### ${level.name}`);
        contents.push(`- Level ${level.id}`);
        contents.push(`- ![${level.id}](images/level/${level.image}.png) `);
        contents.push(`- 英文标题: ${level.title}`);
        contents.push(`- 中文标题: ${$('#'+level.name, c).attr('title')}`);
        contents.push(`- 英文描述: ${level.description}`);
        contents.push(`- 中文描述: ${$('#'+level.name, c).attr('description')}`);
        contents.push(`- 英文谚语: ${level.quote}`);
        contents.push(`- 中文谚语:`);
        contents.push(`- 英文谚语作者: ${level.quote_author}`);
        contents.push(`- 中文谚语作者:`);
        contents.push('\n');
    }
    contents.push('\n\n');
}

saveFileContent('../trans.md', contents.join('\n'));

function saveFileContent(file, content) {
    fs.writeFileSync(file, content, {encoding: 'utf8'});
}