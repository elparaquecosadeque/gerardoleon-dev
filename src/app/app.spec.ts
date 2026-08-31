import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the hero name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('León');
  });

  it('toggles between English and Spanish content and persists the choice', async () => {
    localStorage.removeItem('gl-lang');
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance as any;
    await fixture.whenStable();

    expect(app.lang()).toBe('en');
    expect(app.t().experience.heading).toBe('Experience');

    app.toggleLang();
    expect(app.lang()).toBe('es');
    expect(app.t().experience.heading).toBe('Experiencia');
    expect(localStorage.getItem('gl-lang')).toBe('es');

    app.toggleLang();
    expect(app.lang()).toBe('en');
  });
});
