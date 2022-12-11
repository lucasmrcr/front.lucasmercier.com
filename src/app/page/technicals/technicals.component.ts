import { AfterViewInit, Component } from '@angular/core';
import { RepositoryDTO } from 'src/dto/repository.dto';
import { GitHubService } from 'src/service/github.service';

@Component({
    selector: 'app-technicals',
    templateUrl: '../../../template/technicals/technicals.component.html',
    styleUrls: ['../../../style/technical/technical.component.scss', '../../../style/shared/github.component.scss'],
})
export class TechnicalsComponent implements AfterViewInit {
    repositories: RepositoryDTO[] = [];

    constructor(private gitHubService: GitHubService) {}

    ngAfterViewInit(): void {
        this.gitHubService.listGitHubRepositories(
            (entities) => (this.repositories = entities.filter((entity) => !entity.isFork))
        );
    }
}
