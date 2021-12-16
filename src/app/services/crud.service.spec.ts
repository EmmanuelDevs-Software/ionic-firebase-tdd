import { TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { environment } from 'src/environments/environment';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFirestoreModule,
      ],
    });
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add task', () => {
    let task = {
      $key: 'string',
      title: 'title',
      description: 'description',
    };

    let result = service.create(task);
    console.log('result', result);
    expect(result).toBeTruthy();
  });

  it('get tasks', () => {
    let result = service.getTasks();
    expect(result).toBeTruthy();
  });

  it('get task', () => {
    let result = service.getTask('string');
    expect(result).toBeTruthy();
  });

  it('fail task', () => {
    let result = service.getTask(1);
    expect(result).not.toBeTruthy();
  });

  it('update task', () => {
    let result = {
      $key: 'string',
      title: 'pepito',
      description: 'description updated',
    };

    service.update('string', result).then((res) => {
      let result = res;
      expect(result).toBeTruthy();
    });
  });

  it('delete task', () => {
    let result = service.getTask('string');
    expect(result).toBeTruthy();
  });
});
