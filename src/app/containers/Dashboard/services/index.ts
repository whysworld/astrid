import { BaseService } from "../../../../utils/http/base";
class DashboardService extends BaseService {
  private prefix = 'dashboard'

  public getLayout(name: string): Promise<any> {
    return this.get(`/${this.prefix}/${name}`)
  }
}
export default new DashboardService()