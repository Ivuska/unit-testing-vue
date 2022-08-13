import AppHeader from '@/components/AppHeader'
import { mount } from '@vue/test-utils'

// Creates a block of tests, aka a "test suite".
describe('AppHeader', ( () => {
    // Creates a Jest test.
    test('If user is not logged in, do not show logout button.', () => {
        // We need to mount the component that we are testing.
        const wrapper = mount(AppHeader)
        // An assertion about the expected outcome.
        expect(wrapper.find('button').isVisible()).toBe(false)
    })

    test('If user is logged in, show logout button.', async() => {
        const wrapper = mount(AppHeader)
        // We need to set data to the proper state we want to test.
        await wrapper.setData({ loggedIn: true })
        // An assertion about the expected outcome.
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
}))