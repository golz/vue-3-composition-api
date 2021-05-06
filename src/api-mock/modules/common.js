export default [
  {
    method: 'GET',
    url: '/api/user',
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 'id-123',
        name: 'goldwin'
      }
    }
  },
  {
    method: 'POST',
    url: '/api/login',
    response: {
      code: 200,
      status: 'OK',
      data: {
        id: 'id-123',
        name: 'goldwin'
      }
    }
  }
]
