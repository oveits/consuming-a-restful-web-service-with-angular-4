import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'https://public-api.wordpress.com/rest/v1.1/sites/oliverveits.wordpress.com/posts/3078';
    public ApiUrl: string = 'rest/v1.1/sites/oliverveits.wordpress.com/posts/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
