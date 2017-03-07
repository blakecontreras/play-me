import Vue from 'vue'
import CurrentGame from 'src/components/CurrentGame'

describe('CurrentGame.vue', () => {
  let vm
  let Ctor
  beforeEach(() => {
    const title = 'Gex'
    const image = {medium_url: 'test.jpg'}
    const detail = 'test detail'
    let game = {title: title, image: image, detail: detail}
    Ctor = Vue.extend(CurrentGame)
    vm = new Ctor({currentGame: game}).$mount()
  })
  it('should render an image from the current game', () => {
    const actual = vm.$el.querySelector('img').getAttribute('src')
    const expected = vm.currentGame.image
    expect(actual).to.be(expected)
  })
})
