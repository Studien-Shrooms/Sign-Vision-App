import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';

describe('TranslatePipe', () => {
  it('create an instance', () => {
    const pipe = new TranslatePipe();
    expect(pipe).toBeTruthy();
  });
});
