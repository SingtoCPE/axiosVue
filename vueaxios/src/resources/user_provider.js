import HttpRequest from './http_request'

class UserProvider extends HttpRequest {
  constructor () {
    // api api
    super('https://api.myjson.com/bins/udirz')
  }

  async getUser () {
    // example path https://api.myjson.com/bins/17k39m/
    const {data} = await this.get('/')
    return data
  }
}

export default UserProvider