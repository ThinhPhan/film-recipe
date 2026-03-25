import { renderHook, act } from '@testing-library/react-native';
import { usePremiumStore } from '../../../src/store/usePremiumStore';

describe('Gating Logic', () => {
  it('identifies premium status correctly', () => {
    const { result } = renderHook(() => usePremiumStore());
    
    expect(result.current.isPremium).toBe(false);
    
    act(() => {
      result.current.setPremium(true);
    });
    
    expect(result.current.isPremium).toBe(true);
  });
});
