import {Injectable} from '@angular/core';
import {Api} from '../dao/api/api';
import {RepositoryDTO} from '../dto/repository.dto';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(private api: Api) {}

  listGitHubRepositories(callback: (entities: Array<RepositoryDTO>) => void) {
    this.api.listGitHubRepositories().subscribe(callback)
  }

}
