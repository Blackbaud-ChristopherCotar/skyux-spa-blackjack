import { TestBed } from '@angular/core/testing';
import { expect, SkyAppTestModule } from '@blackbaud/skyux-builder/runtime/testing/browser';

import { BlackjackBoardComponent } from './blackjack-board.component';

describe('Blackjack Board component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SkyAppTestModule]
    });
  });

  it('should display a new game button', () => {
    const fixture = TestBed.createComponent(BlackjackBoardComponent);
    const newGameButton = fixture.nativeElement.querySelector('button');

    // Using custom expect matchers
    expect(newGameButton).toBeVisible();
    expect(newGameButton).toHaveText(`New Game`);
  });

});
