import store from '../store/api-mocker'

const state = store.state()

const getRoles = () => {
    return store.getters.getMockData(state)
}
const apiCreateNewRole = (roleData) => {
    console.log('store.commit', store.mutations.addNewRole)
    store.mutations.addNewRole(state, roleData)
}
export { getRoles, apiCreateNewRole };