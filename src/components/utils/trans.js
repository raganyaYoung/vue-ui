
/*
grep -rs -oh '_(.*)' src/  | sort | uniq | awk -F"'"  '{ print $2 ": \"\"," }'
上面的命令是批量从代码文件生成需要翻译的所有中文语句
*/

const trans = {
  登录: 'welcome',
  语言: 'language',
  中: 'zh-CN',
  英: 'EN',
  组件: 'components',
  显示提示信息: 'show message',
  删除: 'delete',
  首页: 'first',
  上一页: 'prev',
  下一页: 'next',
  尾页: 'last',
  共: 'total',
  条: 'items',
  确认: 'sure',
  取消: 'back',
}

const getTrans = function(word, lang) {
  if (lang === 'en') {
    return trans[word] || word
  }
  return word
}

export { getTrans }
