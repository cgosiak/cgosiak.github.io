import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs/Rx';

import { GitHubRepo } from '../classes/githubRepo';

@Injectable()
export class RepoService {

	private GitHubRepoAPIUrl: string = "https://api.github.com/users/cgosiak/repos";

	constructor(
		private http: Http
	) {

	}

	public getRepos() : Observable<GitHubRepo[]> {
		return this.http.get(this.GitHubRepoAPIUrl)
			.map((res:Response) => res.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
	}

}