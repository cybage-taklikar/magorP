import { Injectable } from '@angular/core';

export const CustomBreakpointNames = {
  extraSmall: 'extraSmall',
  small: 'small',
  medium: 'medium',
  large: 'large',
  extraLarge: 'extraLarge',
};
@Injectable({
  providedIn: 'root',
})

// Small (smaller than 640px)
// Medium (641px to 1007px)
// Large (1008px and larger)
export class BreakpointService {
  breakpoints: object = {
    '(max-width: 3600px)': CustomBreakpointNames.extraSmall,
    '(min-width:480px)': CustomBreakpointNames.small,
    '(min-width:640px)': CustomBreakpointNames.medium,
    '(min-width:1008px)': CustomBreakpointNames.large,
    '(min-width:1200px)': CustomBreakpointNames.extraLarge,
  };

  getBreakpoints(): string[] {
    return Object.keys(this.breakpoints);
  }

  getBreakpointName(breakpointValue): string {
    return this.breakpoints[breakpointValue];
  }

  constructor() {}
}
