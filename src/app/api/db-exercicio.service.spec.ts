import { TestBed } from '@angular/core/testing';

import { DbExercicioService } from './db-exercicio.service';

describe('DbExercicioService', () => {
  let service: DbExercicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbExercicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
