import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHistoryComponent } from './order-history.component';
import { OrderService } from '../../services/order.service';
import {AccordionModule} from 'primeng/accordion';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OrderHistoryComponent', () => {
  let component: OrderHistoryComponent;
  let fixture: ComponentFixture<OrderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AccordionModule , HttpClientTestingModule],
      declarations: [ OrderHistoryComponent ],
      providers: [OrderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
