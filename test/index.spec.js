import {shallowMount} from '@vue/test-utils';
import App from '../src/App.vue';

const wrapper = shallowMount(App);

describe('App', () => {
    it('render menu', () => {
        expect(vm.menuList.length).toEqual(4);
    })
})