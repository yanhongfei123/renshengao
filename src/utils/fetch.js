
/**
 * 请求API接口
 * @param  {String} api    api 根地址
 * @param  {String} path   请求路径
 * @param  {Object} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */

module.exports = function (methods, path, params, header = {}) {
    return $.ajax({
        url: path,
        data: Object.assign({}, params),
        method: methods,
        timeout: 5000,
        header: Object.assign({}, header),
    })
        .done(function (res) {
            if (res.statusCode == 200) {
                console.log(res.data)
            }
        })
        .fail(function (res) {
            //alert(res.status)
        })

};
