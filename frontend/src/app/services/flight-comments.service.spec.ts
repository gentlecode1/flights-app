import { TestBed } from '@angular/core/testing';
import { FlightCommentsService } from './flight-comments.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('FlightCommentsService', () => {
  let service: FlightCommentsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FlightCommentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
