import {
  _fetchGetApi,
  fetchGetApi,
  fetchApi
} from './apiBase.js'
import {
  API_DOMAIN
} from './config'
// 发布买家秀
const forumAppend = (params) => {
  return fetchApi('forum/append', params).then(res => res)
};
// 发布买家秀图片
const uploadImg = (userId, filePath) => {
  return new Promise((resolve, reject)=>{
    wx.uploadFile({
      url: `${API_DOMAIN}/forum/uploadImg`,
      filePath,
      name: 'picFile',
      formData: {
        userId
      },
      success(res) {
        resolve(JSON.parse(res.data).content.pic)
      },
      fail(err) {
        reject(err)
      }
    })
  })
};
// 买家秀列表
const getForumList = (params) => {
  return fetchGetApi('forum/fList', params)
};
// 获取用户点赞数，评论数，未读消息数
const getufInfo = (params) => {
  return fetchGetApi('forum/ufInfo', params)
};
// 赞买家秀
const zanSub = (params) => {
  return fetchApi('forum/zanSub', params)
};
// 赞买家秀
const comSub = (params) => {
  return fetchApi('forum/comSub', params)
};

// 获取用户点赞数，评论数，未读消息数
const comList = (params) => {
  return fetchGetApi('forum/comList', params)
};

// 用户点赞列表
const zanList = (params) => {
  return fetchGetApi('forum/zanList', params)
};
// 买家秀 详情
const getForumDetail = (params) => {
  return fetchGetApi('forum/detail', params)
};
// 买家秀 删除
const forumDel = (params) => {
  return fetchApi('forum/del', params)
};
// 买家秀 读取消息
const forumRead = (params) => {
  return fetchGetApi('forum/read', params)
};
/***
 * 
 * 我的分红
 * 
 */
// 我的分红 接口
// 分公司董事长积分明细
const getRewardfhList = (params) => {
  return fetchGetApi('reward/fhList', params)
};
//  分公司董事长积分统计信息
const getRewardsum = (params) => {
  return fetchGetApi('reward/sumInfo', params)
};
//  分红股东/加权分红积分明细
const getRewardGdList = (params) => {
  return fetchGetApi('reward/gdList', params)
};
//辅导奖励
//  统计招募+销售的积分总体情况
const tutorSumInfo = (params) => {
  return fetchGetApi('tutor/sumInfo', params)
};
//  分红股东/加权分红积分明细
const tutorFhList = (params) => {
  return fetchGetApi('tutor/fhList', params)
};
/**
 * 任务模块
 */
// 任务信息
const getTask1 = (params) => {
  return fetchGetApi('task1/info', params)
};
const task1SavePic = (params) => {
  return fetchApi('task1/savePic', params)
};
const getTask2 = (params) => {
  return fetchGetApi('task2/info', params)
};
const getTask3 = (params) => {
  return fetchGetApi('task3/info', params)
};
// 荣誉海报接口
const getTaskPic = (params) => {
  return fetchGetApi('task/taskPic', params)
};
// 领取任务奖品
const reciveGoods = (params) => {
  return fetchApi('task/reciveGoods', params)
};
// 领取任务奖品
const taskCheckReward = (params) => {
  return fetchApi('task/checkReward', params)
};
reciveGoods
module.exports = {
  forumAppend,
  getForumList,
  uploadImg,
  getufInfo,
  zanSub,
  comSub,
  comList,
  zanList,
  getForumDetail,
  forumDel,
  forumRead,
  // 我的分红
  getRewardfhList,
  getRewardsum,
  getRewardGdList,
  // 辅导奖励
  tutorSumInfo,
  tutorFhList,
  // 任务模块
  getTask1,
  task1SavePic,
  getTask2,
  getTask3,
  getTaskPic,
  reciveGoods,
  taskCheckReward
}