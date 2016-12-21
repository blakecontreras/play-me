import Vue from 'vue'
import Dashboard from 'src/components/Dashboard'
import axios from 'axios'

describe('Dashboard.vue', () => {
  let sandbox
  let vm
  beforeEach(function() {
    sandbox = sinon.sandbox.create()
    sandbox.stub(axios, 'get').returns(Promise.resolve('hi'))
    vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Dashboard)
    })
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('should render at least one game element', () => {
    expect(vm.$el.querySelector('.game')).to.exist
  })
})
