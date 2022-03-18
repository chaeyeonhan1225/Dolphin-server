import { DietService } from '../src/service/DietService';

const dietService = new DietService();

describe('diet test', () => {
  it('getSocietyDiet test - 1', async (done) => {
    const result = await dietService.getSocietyDiet();
    expect(result).toBeTruthy();
    done();
  });
});
