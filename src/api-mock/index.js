import axios from 'axios'
import mockAdapter from 'axios-mock-adapter'
import common from './modules/common'

console.log('[log] loading mocks...')

export const routes = [
  ...common
]

const methodMap = {
  GET: 'onGet',
  PUT: 'onPut',
  POST: 'onPost',
  DELETE: 'onDelete'
}

function applyMock (data) {
  const mock = new mockAdapter(axios)
  data.forEach(d => {
    const params = [d.url]
    if (d.method === 'GET') params.push({ params: d.param_values })
    else params.push(d.params_values)

    mock[methodMap[d.method]](...params).reply(() => {
      const { url, method, status, response } = d
      const responseStatus = response.status || 'OK'
      console.log(`Request: [${method}] ${url}\n`,
        `Status: ${responseStatus}\n`,
        `Response: `, response)
      return [ status || 200, response ]
    })
  })
}

applyMock(routes)

export default routes
