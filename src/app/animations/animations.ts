import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeAnimation = [
  trigger('fadeAnimation', [
    state('hidden', style({ opacity: 0.75, transform: 'translateY(20px)' })),
    state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
    transition('hidden => visible', animate('400ms ease')),
    transition('visible => hidden', animate('400ms ease'))
  ])
];
