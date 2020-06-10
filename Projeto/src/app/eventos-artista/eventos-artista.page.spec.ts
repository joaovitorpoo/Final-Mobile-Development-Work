import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventosArtistaPage } from './eventos-artista.page';

describe('EventosArtistaPage', () => {
  let component: EventosArtistaPage;
  let fixture: ComponentFixture<EventosArtistaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosArtistaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventosArtistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
