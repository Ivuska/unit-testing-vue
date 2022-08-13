// Example of stubbing child components in unit testing.
// Stub = Canned response/placeholder/substitute.

// Stubbing advantages
// 1. Isolate what you're testing.
// 2. test one thing at time.
// 3. Helps pinpoint what part of your code is broken.

//  Stubbing disadvantages.
// 1. Maintenance costs.
// 2. Decreased confidence/coverage.

// Use stubbing wisely and sparingly.


import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

describe('MessageContainer', () => {
  it('Wrap the MessageDisplay component.', () => {
		const wrapper = mount(MessageContainer, {
			global: {
				// This is substitue for real component.
				stubs: {
					MessageDisplay: {
						template: '<p data-testid="message">Hello from the db!</p>'
					}
				}
			}
		})

		const message = wrapper.find('[data-testid="message"]').text()
		expect(message).toEqual('Hello from the db!')
	})
})