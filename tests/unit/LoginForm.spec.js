import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginForm', () => {
	// 'it' works the same way as 'test'.
	it('Emits and event with a user data payload.', () => {
		const wrapper = mount(LoginForm)
		// 1. Find the text input.
		const input = wrapper.find('[data-testid="name-input"]')

		// 2. Write the text in the text input.
		input.setValue('Iva F')

		// 3. Simulate form submission.
		wrapper.trigger('submit')

		// 4. Assert event has been emitted.
		const formSubmittedCalls = wrapper.emitted('formSubmitted')
		expect(formSubmittedCalls).toHaveLength(1)

		// 5. Assert payload is correct.
		const expectedPayload = { name: 'Iva F' }
		expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(
			expectedPayload
			)
	})
})