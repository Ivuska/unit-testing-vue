import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

// We name the test suite according to the component name.
describe('RandomNumber', () => {
	test('By default, randomNumber data value should be zero.', () => {
		const wrapper = mount(RandomNumber)
		expect(wrapper.html()).toContain('<span>0</span>')
	})

	// We need to wait until the number is generated in the DOM so we need to use async-await.
	test('If button is clicked, randomNumber should be between 1 and 10.', async () => {
		const wrapper = mount(RandomNumber)
		await wrapper.find('button').trigger('click')
		const randomNumber = parseInt(wrapper.find('span').text())
		expect(randomNumber).toBeGreaterThanOrEqual(1)
		expect(randomNumber).toBeLessThanOrEqual(10)
	})

	test('If button is clicked, randomNumber should be between 200 and 300.', async () => {
		const wrapper = mount(RandomNumber, {
			props: {
				min: 200,
				max: 300
			}
		})
		await wrapper.find('button').trigger('click')
		const randomNumber = parseInt(wrapper.find('span').text())
		expect(randomNumber).toBeGreaterThanOrEqual(200)
		expect(randomNumber).toBeLessThanOrEqual(300)
	})
})