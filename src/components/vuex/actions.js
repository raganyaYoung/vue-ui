export const changeLang = function({dispatch, state}, lang) {
  console.log('lang actions', lang)
  dispatch('CHANGE_LANG', lang)
}

export const changeMsg = function( { dispatch, state}, payload) {
  if (state.message.timer)
    clearTimeout(state.message.timer)
  dispatch('CHANGE_MSG', { ...payload, visible: true })
  dispatch('CHANGE_MSG', { ...payload, message: payload.message })
  state.message.timer = window.setTimeout(() => {
    dispatch('CHANGE_MSG', { ...payload, visible: false })
  }, state.message.duration*1000)

}