const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

const formatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  return [year, month].map(formatNumber).join('-');
};

const formatTime = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
};

const Toast = {
    warn: function(val) {
        wx.showToast({
            title: val,
            icon: 'none',
            duration: 2000,
            mask: true
        })
    },
    loading: function() {
        wx.showToast({
            icon: 'loading',
            duration: 1500,
            mask: true
        })
    },
    success: function(val) {
        wx.showToast({
            title: val,
            icon: 'success',
            duration: 2000,
            mask: true
        })
    },
    error: function(val) {
        wx.showToast({
            title: val,
            image: 'https://www.ishiyaji.com/static/images/others/icon-error.png',
            duration: 2000,
            mask: true
        })
    },
    alert: function(param) {
        wx.showModal({
            content: param,
            title: '提示',
            showCancel: false
        })
    },
    showLoading: function(param = 'Loading') {
        wx.showLoading({
            title: param,
            mask: true
        })
    },
    hideLoading: function() {
        setTimeout(() => {
            wx.hideLoading()
        }, 100)
    },
    showModal: function(param = 'msg') {
        wx.showModal({
            title: '',
            content: param,
            showCancel: false
        })
    }
};

module.exports = {
    formatDate,
    formatTime,
    Toast
};
