import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
	moduleId: module.id
	,selector: 'user'
	,templateUrl: 'user.component.html'
	,providers: [PostsService]
})

export class UserComponent {
  firstName: string;
  lastName: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.firstName = 'Josh';
    this.lastName = 'Orvis';
    this.email = 'jorvis@nerdyhippie.com'
    this.address = {
      street: '2906 Blueridge Ave'
      ,city: 'Silver Spring'
      ,state: 'MD'
      ,zip: '20902'
    };
    this.hobbies = ['Music','Movies'];
    this.showHobbies = false;

	this.postsService.getPosts().subscribe(posts => {
		this.posts = posts;
	});
  }

  toggleHobbies() {
  	this.showHobbies = !this.showHobbies;
  }

	addHobby(hobby:string) {
		if (this.hobbies.indexOf(hobby) < 0) {
			this.hobbies.push(hobby);
		}
	}

	deleteHobby(i:number) {
  		this.hobbies.splice(i,1);
	}
}

interface address {
  street: string;
  city: string;
  state: string;
  zip: string;

}

interface Post {
	id: number;
	title: string;
	body: string;


}
