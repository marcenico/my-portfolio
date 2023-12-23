import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = [
  trigger('fadeAnimation', [
    state('hidden', style({ opacity: 0.75, transform: 'translateY(50px)' })),
    state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('hidden => visible', animate('300ms ease')),
    transition('visible => hidden', animate('300ms ease'))
  ])
];
