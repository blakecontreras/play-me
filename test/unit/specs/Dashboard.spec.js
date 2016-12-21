import Vue from 'vue'
import Dashboard from 'src/components/Dashboard'
import sinon from 'sinon'
import axios from 'axios'

describe('Dashboard.vue', () => {
  beforeEach(function() {
    this.get = sinon.stub(axios, 'get', () => {
      return Promise.resolve('true')
    })
  })
  afterEach(() => {
    axios.get.restore()
  })
  it('should render at least one game element', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Dashboard)
    })
    expect(vm.$el.querySelector('.game')).to.exist
  })
})
