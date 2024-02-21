import { JsonController, Post, Body } from 'routing-controllers';
import { ProApplication } from '../entities';
import { ProApplicationService } from '../service';

@JsonController('/pro-applications')
export class ProApplicationController {
  private proApplicationService: ProApplicationService;

  constructor() {
    this.proApplicationService = new ProApplicationService();
  }

  @Post('/')
  async processProApplication(@Body() proApplication: ProApplication): Promise<any> {
    const score = this.proApplicationService.calculateScore(proApplication);
    const eligibleProjects = this.proApplicationService.findEligibleProjects(score);

    return {
      score,
      selected_project: eligibleProjects.length > 0 ? eligibleProjects[0] : null,
      eligible_projects: eligibleProjects,
    };
  }
}
