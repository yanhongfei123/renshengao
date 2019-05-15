
var Validator = function (strategys) {
   this.cache = []; // 保存效验规则
   this.strategys = strategys || {};

};

Validator.prototype.addRules = function (value, ruleList, callback) {
  var me = this;
  this.cache.push(function () {
    for (var k = 0; k < ruleList.length; k++) {
      var item = ruleList[k];
      //str 返回 ['minLength' , '6']
      var str = item.strategy.split(":");
      var strategy = str.shift();

      str.unshift(value); // 把input的value添加进参数列表
      str.push(item.errorMsg); // 把errorMsg添加进参数列表   

      var strategys = me.strategys;

      // 验证函数
      var msg = strategys[strategy].apply(null, str);
      // 返回值不为undefined，才退出循环
      if (msg) {
        return msg
      }

    }
    if (callback) {
      // 单个表单全部验证通过
      callback()
    }

  });
};
Validator.prototype.start = function () {
  for (var i = 0; i < this.cache.length; i++) {
    var msg = this.cache[i](); // 开始效验 并取得效验后的返回信息
    if (msg) {
      return msg
    }
  }
};


export default Validator