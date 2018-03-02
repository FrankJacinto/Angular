import { TestBed, inject } from '@angular/core/testing';

import { Servicio2Service } from './servicio2.service';

describe('Servicio2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Servicio2Service]
    });
  });

  it('should be created', inject([Servicio2Service], (service: Servicio2Service) => {
    expect(service).toBeTruthy();
  }));
});
