import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const fadeIn: AnimationTriggerMetadata = trigger( 'fadeIn', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate('350ms linear')
    ])
])