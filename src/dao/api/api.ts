import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RepositoryDTO} from '../../dto/repository.dto';

export const API_ROOT = 'http://localhost:8080'

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private httpClient: HttpClient) {}

  listGitHubRepositories(): Observable<Array<RepositoryDTO>> {
    return this.httpClient.get(`${API_ROOT}/github/repositories`) as Observable<Array<RepositoryDTO>>
  }
}
