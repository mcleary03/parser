import getNodes from '@/helpers/getNodes'
import getAvailableNodeTypes from '@/helpers/getAvailableNodeTypes'

export default {
  install(Vue) {
    Vue.prototype.$getASTNodes = getNodes,
    
    Vue.prototype.$getAvailableNodeTypes = getAvailableNodeTypes,
    
    Vue.prototype.$coordString = function(obj) {
      return `${obj.x} ${obj.y} ${obj.z}`
    },

    Vue.prototype.$animate = animate
  }
}

const animate = options => `
  property: ${options.property || ''};
  isRawProperty: ${options.isRawProperty || false};
  from: ${options.from || null};
  to: ${options.to || null};
  type: ${options.type || ''};
  delay: ${options.delay || 0};
  dir: ${options.dir || 'normal'};
  dur: ${options.dur || 1000};
  easing: ${options.easing || 'easeInQuad'};
  elasticity: ${options.elasticity || 400};
  loop: ${options.loop || 0};
  round: ${options.round || false};
  startEvents: ${options.startEvents || null};
  pauseEvents: ${options.pauseEvents || null};
  resumeEvents: ${options.resumeEvents || null};
  autoplay: ${options.autoplay || null};
  enabled: ${options.enabled || true};
`
