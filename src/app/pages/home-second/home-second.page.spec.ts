import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSecondPage } from './home-second.page';
import { IonicModule } from '@ionic/angular';

describe('HomeSecondPage', () => {
  let component: HomeSecondPage;
  let fixture: ComponentFixture<HomeSecondPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSecondPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
