import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tag } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TagService {
  constructor(httpClient: HttpClient) {}

  createTag(newTagData: Tag) {
    console.log(newTagData);
  }
}
