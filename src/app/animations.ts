import { animate, AnimationEntryMetadata, state, style, transition, trigger, keyframes } from '@angular/core';

const animeSetting = [
    animate(550, keyframes([
        style({ opacity: 0, transform: 'translateY(0)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(-5px)', offset: 0.5 }),
        style({ opacity: 1, transform: 'translateY(0%)', offset: 1 })
    ]))
];


// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata =
    trigger('routeAnimation', [
        transition('inactive => active', animeSetting),
        transition('active => inactive', animeSetting)
    ]
    );
