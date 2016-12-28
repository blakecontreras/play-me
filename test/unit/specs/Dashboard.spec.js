import Vue from 'vue'
import Dashboard from 'src/components/Dashboard'
import axios from 'axios'

describe('Dashboard.vue', () => {
  let sandbox
  let vm
  beforeEach(function() {
    sandbox = sinon.sandbox.create()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('should render at least one game element', () => {
    const title = 'Gex'
    const image = {medium_url: 'test.jpg'}
    const detail = 'test detail'
    const resolved = new Promise((resolve, reject) => {
      resolve({title, image, site_detail_url: detail})
    })
    sandbox.stub(axios, 'get').returns(resolved)
    vm = new Vue(Dashboard).$mount()
    expect(vm.$el.querySelector('.game')).to.exist
  })
  it('should fetch game info using a searchGame function', (done) => {
    let title = 'Gex'
    let image = {medium_url: 'test.jpg'}
    let detail = 'test detail'
    let resolved = new Promise((resolve, reject) => {
      resolve({title, image, site_detail_url: detail})
    })
    sandbox.stub(axios, 'get').returns(resolved)
    let mock = sinon.mock(Dashboard.methods)
    mock.expects("searchGame").once().throws()
    vm = new Vue(Dashboard).$mount()
    Vue.nextTick(() => {
      mock.verify()
      done()
    })
  })
})
