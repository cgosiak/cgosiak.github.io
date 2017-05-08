import { Component } from '@angular/core';
import { RepoService } from '../services/repo.service';
import { GitHubRepo } from '../classes/githubRepo';

@Component({
  selector: 'projects',
  templateUrl: '../../templates/projects.html'
})
export class ProjectsComponent {

  public title: string = "Projects";
  public repos: GitHubRepo[];

  constructor(
    private repoService: RepoService
  ) {
    this.repoService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
