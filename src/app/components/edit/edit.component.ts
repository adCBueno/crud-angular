import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  public editForm: FormGroup
  postRef: any

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.editForm = this.formBuilder.group({
      title : [''],
      content : [''],
      author : ['']
    })
   }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.postService.getPostById(id).subscribe(res => {
      this.postRef = res
      this.editForm = this.formBuilder.group({
        title: [this.postRef.title],
        content: [this.postRef.content],
        author: [this.postRef.author]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')
    this.postService.updatePost(this.editForm.value, id)
    this.router.navigate([''])
  }
}
