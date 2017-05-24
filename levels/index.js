'use strict';

module.exports = {
  emergency : require('./emergency'),
  alert     : require('./alert'),
  critical  : require('./critical'),
  error     : require('./error'),
  warning   : require('./warning'),
  notice    : require('./notice'),
  debug     : require('./debug'),
  level     : require('./level'),
}
