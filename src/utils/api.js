import {
  _fetchGetApi,
  fetchGetApi,
  fetchApi
} from './apiBase.js'

/**
 * 登录
 * @param params
 * @returns {Promise<T | never>}
 * @constructor
 */
const authLogin = (params) => {
  return fetchApi('wechat/authLogin', params).then(res => res)
};

const getUserInfo = (params) => {
  return fetchApi('wechat/getUserInfo', params).then(res => res)
};


// 获取全国省市区数据

const getCityData = (params) => {
  return _fetchGetApi('city.json', params).then(res => res)
};


// 轮播图
const getBannerList = (params) => {
  return fetchGetApi('homeApi/banLbDatas', params).then(res => res)
};
// 商品分类
const getGoodsTypes = (params) => {
  return fetchGetApi('homeApi/goodsTypeDatas', params).then(res => res)
};
// 中间横幅广告图
const getBanZjDatas = (params) => {
  return fetchGetApi('homeApi/banZjDatas', params).then(res => res)
};

// 首页展示商品
const getHomeGoodsDatas = (params) => {
  return fetchGetApi('homeApi/homeGoodsDatas', params).then(res => res)
};

// 首页展示商品
const getGoodsList = (params) => {
  return fetchGetApi('goodsApi/goodsList', params).then(res => res)
};

// 商品详情
const getGoodsDetail = (params) => {
  return fetchGetApi('goodsApi/goodsDetail', params).then(res => res)
};

// 查询商品规格
const getGoodsSpecValue = (params) => {
  return fetchApi('goodsApi/goodsSpecValue', params).then(res => res)
};

// 加入/取消收藏
const goodsCollect = (params) => {
  return fetchApi('goodsApi/goodsCollect', params).then(res => res)
};

// 加入购物车
const addToCart = (params) => {
  return fetchApi('cartApi/addCard', params).then(res => res)
};

// 购物车列表
const getCartList = (params) => {
  return fetchGetApi('cartApi/cardList', params).then(res => res)
};

// 删除购物车
const cartDelete = (params) => {
  return fetchApi('cartApi/cradDelete', params).then(res => res)
};

// 修改购物车商品数量 cardEditNumber  cradEditNumber
const cartEditNumber = (params) => {
  return fetchGetApi('cartApi/cradEditNumber', params).then(res => res)
};

// 优惠券列表
const getCouponList = (params) => {
  return fetchGetApi('orderApi/couponList', params).then(res => res)
};

//提交订单 submitOrder
const submitOrder = (params) => {
  return fetchApi('orderApi/submitOrder', params).then(res => res)
};

//购物车去结算  立即购买
const orderSaveData = (params) => {
  return fetchApi('orderApi/orderSaveData', params).then(res => res)
};

// 获取订单页所有数据
const orderSettle = (params) => {
  return fetchGetApi('orderApi/orderSettle', params).then(res => res)
};

// 更新订单页数据，比如修改商品数量，删除商品，修改地址
const orderUpdateData = (params) => {
  return fetchApi('orderApi/orderUpdateData', params).then(res => res)
};

// 地址列表
const getAddressList = (params) => {
  return fetchGetApi('address/adlist', params).then(res => res)
};

// 地址详情
const getAddressDetail = (params) => {
  return fetchGetApi('address/addetail', params).then(res => res)
};

// 新增/编辑/设为默认地址
const editAddress = (params) => {
  return fetchApi('address/edit', params).then(res => res)
};

// 删除地址
const deleteAddress = (params) => {
  return fetchApi('address/del', params).then(res => res)
};

const zeroPay = (params) => {
  return fetchApi('wxpay/payZero', params).then(res => res)
};

//微信支付
const wxPay = (params) => {
  return fetchApi('wxpay/payData', params).then(function (res) {
    // 发起支付
    wx.requestPayment({
      timeStamp: res.data.timeStamp + '',
      nonceStr: res.data.nonceStr,
      package: res.data.package,
      signType: res.data.signType,
      paySign: res.data.paySign,
      fail: function (err) {
        // console.log(err);
        wx.redirectTo({
          url: '/pages/my-order-list/index?type=2'
        })
      },
      success: function () {
        wx.showToast({ title: '支付成功' });
        wx.switchTab({
          url: params.url
        })
      }
    })
  })
};

// 订单列表
const getOrderList = (params) => {
  return fetchGetApi('myorder/orderList', params).then(res => res)
};

// 订单详情
const getOrderDetails = (params) => {
  return fetchGetApi('myorder/orderDetail', params).then(res => res)
};

// 订单状态操作
const setOrderStatus = (params) => {
  return fetchApi('myorder/orderStatus', params).then(res => res)
};

// 招募积分
const getZmjf = (params) => {
  return fetchGetApi('integral/zmJf', params).then(res => res)
};

// 招募积分列表
const getZmjfList = (params) => {
  return fetchGetApi('integral/zmjfList', params).then(res => res)
};

// 销售积分
const getXsjf = (params) => {
  return fetchGetApi('integral/xsJf', params).then(res => res)
};

// 销售积分列表
const getXsjfList = (params) => {
  return fetchGetApi('integral/xsjfList', params).then(res => res)
};

// 获取个人信息
const getPersonerInfo = (params) => {
  return fetchGetApi('myinfo/info', params).then(res => res)
};

// 修改个人信息
const editPersonerInfo = (params) => {
  return fetchApi('myinfo/editinfo', params).then(res => res)
};

// 获取银行卡列表
const getBankList = (params) => {
  return fetchGetApi('myinfo/getbank', params).then(res => res)
};

// 我的
const getUserInfoCenter = (params) => {
  return fetchGetApi('myinfo/checkInfoCenter', params).then(res => res)
};

// 所有的的优惠券列表
const getAllCouponList = (params) => {
  return fetchGetApi('myinfo/couponList', params).then(res => res)
};

// 收藏列表
const getCollectList = (params) => {
  return fetchGetApi('myinfo/myCollect', params).then(res => res)
};

// 查询物流 draw/history
const getOrderLogistics = (params) => {
  return fetchApi('myorder/orderLogistics', params).then(res => res)
};

// 积分兑换记录
const getRechargeList = (params) => {
  return fetchGetApi('draw/history', params).then(res => res)
};

// 积分兑换申请
const getRechargeApply = (params) => {
  return fetchApi('draw/apply', params).then(res => res)
};

// 查询提现日期
const checkDrawDate = (params) => {
  return fetchApi('draw/checkDrawdate', params).then(res => res)
};

// 销售榜单
const getSalesList = (params) => {
  return fetchGetApi('ranking/salesList', params).then(res => res)
};

// 团队榜单
const getTeamRank = (rankType, params) => {
  return fetchGetApi(`ranking/${rankType}`, params).then(res => res)
};

// 我的团队-团队信息
const getMyTeamInfo = (params) => {
  return fetchGetApi('myteam/teamInfo', params).then(res => res)
};

// 我的团队-店长列表
const getShopList = (params) => {
  return fetchGetApi('myteam/shopList', params).then(res => res)
};

// 我的团队-查看直推
const checkzt = (params) => {
  return fetchGetApi('myteam/checkzt', params).then(res => res)
};

// 我的销售 mysale/theSale
const mysale = (params) => {
  return fetchGetApi('mysale/theSale', params).then(res => res)
};

// 推广海报
const getMiniQrcode = (params) => {
  return fetchGetApi('myinfo/miniQrcode', params).then(res => res)
};

//获取当前推荐人信息接口
const getRecomenderInfo = (params) => {
  return fetchGetApi('wechat/conInfo', params).then(res => res)
};

//修改推荐人信息接口
const editRecomenderInfo = (params) => {
  return fetchApi('wechat/chdirect', params).then(res => res)
};

module.exports = {
  authLogin,
  getUserInfo,
  getBannerList,
  getGoodsTypes,
  getBanZjDatas,
  getHomeGoodsDatas,
  getGoodsList,
  getGoodsDetail,
  getGoodsSpecValue,
  goodsCollect,
  addToCart,
  getCartList,
  cartDelete,
  cartEditNumber,
  getCouponList,
  submitOrder,
  orderSaveData,
  orderSettle,
  orderUpdateData,
  getAddressList,
  getAddressDetail,
  editAddress,
  deleteAddress,
  getCityData,
  zeroPay,
  wxPay,
  getOrderList,
  getOrderDetails,
  setOrderStatus,
  getZmjf,
  getXsjf,
  getZmjfList,
  getXsjfList,
  getPersonerInfo,
  editPersonerInfo,
  getBankList,
  getUserInfoCenter,
  getAllCouponList,
  getCollectList,
  getOrderLogistics,
  getRechargeList,
  getRechargeApply,
  checkDrawDate,
  getSalesList,
  getTeamRank,
  getMyTeamInfo,
  getShopList,
  checkzt,
  mysale,
  getMiniQrcode,
  getRecomenderInfo,
  editRecomenderInfo
};