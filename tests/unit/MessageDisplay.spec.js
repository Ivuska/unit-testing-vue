import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

// Put path of module to mock.
jest.mock('@/services/axios')

// Set the Mock to zero.
beforeEach(() => {
	jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage and displays the message.', async () => {
		// Mock the API call.
		const mockMessage = 'Hello from the db!'
		getMessage.mockResolvedValueOnce({ text: mockMessage })
		const wrapper = mount(MessageDisplay)

		// Wait for promise to resolve. 'flushPromises' will resolve all promises.
		await flushPromises()

		// Check that call happened once.
		expect(getMessage).toHaveBeenCalledTimes(1)

		// Check that component displays message.
		const message = wrapper.find('[data-testid="message"]').text()
		expect(message).toEqual(mockMessage)
	})

	it('Displays an error when getMessage call fails.', async () => {
		// Mock the failed API call.
		const mockError = 'Oops! Something went wrong.'
		getMessage.mockRejectedValueOnce(mockError)
		const wrapper = mount(MessageDisplay)

		// Wait for promise to resolve.
		await flushPromises()

		// Check that call happened once.
		expect(getMessage).toHaveBeenCalledTimes(1)

		// Check that component displays error.
		const displayedError = wrapper.find('[data-testid="message-error"]').text()
		expect(displayedError).toEqual(mockError)
	})
})