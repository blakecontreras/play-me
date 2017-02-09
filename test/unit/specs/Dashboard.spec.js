import Vue from 'vue'
import Dashboard from 'src/components/Dashboard'
import axios from 'axios'

describe('Dashboard.vue', () => {
  let sandbox
  let vm
  beforeEach(function() {
    sandbox = sinon.sandbox.create()
    const title = 'Gex'
    const image = {medium_url: 'test.jpg'}
    const detail = 'test detail'
    const resolved = new Promise((resolve, reject) => {
      resolve({title, image, site_detail_url: detail})
    })
    sandbox.stub(axios, 'get').returns(resolved)
    vm = new Vue(Dashboard).$mount()
  })
  afterEach(() => {
    sandbox.restore()
  })
  it('should render a current-game component', () => {
    expect(vm.$el.querySelector('current-game')).to.exist
  })
  xit('should have a searchGame function', (done) => {
    // let title = 'Gex'
    // let image = {medium_url: 'test.jpg'}
    // let detail = 'test detail'
    // let resolved = new Promise((resolve, reject) => {
    //   resolve({title, image, site_detail_url: detail})
    // })
    // sandbox.stub(axios, 'get').returns(resolved)
    // let mock = sinon.mock(Dashboard.methods)
    // mock.expects("searchGame").once().throws()
    // vm = new Vue(Dashboard).$mount()
    // Vue.nextTick(() => {
    //   mock.verify()
    //   done()
    // })
    done()
  })
  it('should render a suggestion element', () => {
    expect(vm.$el.querySelector('.suggestion')).to.exist
  })
  it('should render a search element', () => {
    expect(vm.$el.querySelector('.search')).to.exist
  })
  it('should render a recommendation element', () => {
    expect(vm.$el.querySelector('.recommendation + .queue')).to.exist
  })
  it('should render a rating element', () => {
    expect(vm.$el.querySelector('.rating + .queue')).to.exist
  })
  it('should return a game when searching', () => {

  })
})
