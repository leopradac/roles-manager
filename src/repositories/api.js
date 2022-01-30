import store from '../store/api-mocker'

const state = store.state()
const getRoles = () => {
    return store.getters.getMockData(state)
}
export { getRoles };