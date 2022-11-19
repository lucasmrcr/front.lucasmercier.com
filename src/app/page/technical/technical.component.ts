import {AfterViewInit, Component} from '@angular/core'
import {GitHubService} from '../../../service/github.service';
import {RepositoryDTO} from '../../../dto/repository.dto'

@Component({
  selector: 'app-technical',
  templateUrl: '../../../template/technical/technical.component.html',
  styleUrls: [
    '../../../style/technical/technical.component.scss',
    '../../../style/shared/github.component.scss'
  ]
})
export class TechnicalComponent implements AfterViewInit {

  repositories: RepositoryDTO[] = [];

  constructor(private gitHubService: GitHubService) {}

  ngAfterViewInit(): void {
    this.gitHubService.listGitHubRepositories(entities => this.repositories = entities.filter(entity => !entity.isFork))
  }

}
