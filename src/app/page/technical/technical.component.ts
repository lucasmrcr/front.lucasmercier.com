import {AfterViewInit, Component} from '@angular/core'
import {GitHubService} from '../../../service/github.service';

@Component({
  selector: 'app-technical',
  templateUrl: '../../../template/technical/technical.component.html',
  styleUrls: ['../../../style/technical/technical.component.scss']
})
export class TechnicalComponent implements AfterViewInit {

  constructor(private gitHubService: GitHubService) {}

  ngAfterViewInit(): void {
    this.gitHubService.listGitHubRepositories(entities => console.log(entities))
  }

}
