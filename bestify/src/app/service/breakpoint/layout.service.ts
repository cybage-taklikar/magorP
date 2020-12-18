import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointService } from './breakpoint.service';
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  activeBreakpoints: string[] = [];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private breakpointService: BreakpointService
  ) {}

  subscribeToLayoutChanges(): Observable<string[]> {
    return this.breakpointObserver
      .observe(this.breakpointService.getBreakpoints())
      .pipe(
        map((observeResponse) =>
          this.parseBreakpointsResponse(observeResponse.breakpoints)
        )
      );
  }

  parseBreakpointsResponse(breakpoints): string[] {
    this.activeBreakpoints = [];

    Object.keys(breakpoints).map((key) => {
      if (breakpoints[key]) {
        this.activeBreakpoints.push(
          this.breakpointService.getBreakpointName(key)
        );
      }
    });

    return this.activeBreakpoints;
  }

  isBreakpointActive(breakpointName) {
    return this.activeBreakpoints.find(
      (breakpoint) => breakpoint === breakpointName
    );
  }
}
