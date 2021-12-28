import { get, post } from './ajax'

export default {
  getTopics(params) {
    return get('/topics', params, 'api')
  },
  getDetails(id) {
    return get(`/topic/${id}`, {}, 'api')
  },
  login(params) {
    return post('/accesstoken', params, 'api')
  },
  user(username) {
    return get(`/user/${username}`, '', 'api')
  },
  ups(params) {
    return post(
      `/reply/${params.replayId}/ups`,
      { accesstoken: params.accesstoken },
      'api'
    )
  },
  replies(topicId, params) {
    return post(`/topic/${topicId}/replies`, params, 'api')
  },
  // /topic/:topic_id/replies
  collect(params) {
    return post('/topic_collect/collect', params, 'api')
  },
  de_collect(params) {
    return post('/topic_collect/de_collect ', params, 'api')
  },
  myCollect(username) {
    return get(`/topic_collect/${username}`, '', 'api')
  },
  messages(params) {
    return get('messages', params, 'api')
  },
  markOne(id, params) {
    return post(`/message/mark_one/${id}`, params, 'api')
  },
}
