import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MembershipSelectionPage } from './membership-selection.page';

describe('MembershipSelectionPage', () => {
  let component: MembershipSelectionPage;
  let fixture: ComponentFixture<MembershipSelectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipSelectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MembershipSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
