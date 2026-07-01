import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;
  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View: View,
    Extrapolate: { CLAMP: 'clamp' },
    Transition: {
      In: jest.fn(),
      Out: jest.fn(),
      Together: jest.fn(),
    },
    useSharedValue: jest.fn(() => ({ value: 0 })),
    useAnimatedStyle: jest.fn(() => ({})),
    useAnimatedProps: jest.fn(() => ({})),
    useDerivedValue: jest.fn((fn) => ({ value: fn() })),
    withTiming: jest.fn(),
    withSpring: jest.fn(),
    withRepeat: jest.fn(),
    withSequence: jest.fn(),
    withDelay: jest.fn(),
    runOnJS: jest.fn((fn) => fn),
    runOnUI: jest.fn((fn) => fn),
    makeMutable: jest.fn((v) => ({ value: v })),
    useAnimatedScrollHandler: jest.fn(() => () => {}),
    useAnimatedGestureHandler: jest.fn(() => () => {}),
    default: {
      View: View,
    },
  };
});

jest.mock('react-native-reanimated-carousel', () => {
  const React = require('react');
  const { View } = require('react-native');
  return (props: any) => {
    return <View testID="carousel-container">{props.data.map((item: any, index: number) => <View key={index}>{props.renderItem({ item, index })}</View>)}</View>;
  };
});

jest.mock('react-native-fast-image', () => {
  const React = require('react');
  class FastImage extends React.Component {
    render() {
      return React.createElement('FastImage', this.props, this.props.children);
    }
  }
  FastImage.resizeMode = {
    contain: 'contain',
    cover: 'cover',
    stretch: 'stretch',
    center: 'center',
  };
  FastImage.priority = {
    low: 'low',
    normal: 'normal',
    high: 'high',
  };
  FastImage.cacheControl = {
    immutable: 'immutable',
    web: 'web',
    cacheOnly: 'cacheOnly',
  };
  return FastImage;
});

jest.mock('@shopify/flash-list', () => {
  const React = require('react');
  const { View } = require('react-native');

  const FlashList = ({ data, renderItem, ListEmptyComponent, ListHeaderComponent, ListFooterComponent }: any) => {
    return (
      <View>
        {ListHeaderComponent && (typeof ListHeaderComponent === 'function' ? ListHeaderComponent() : ListHeaderComponent)}
        {data && data.length > 0 ? (
          data.map((item: any, index: number) => (
            <View key={index}>{renderItem({ item, index })}</View>
          ))
        ) : (
          ListEmptyComponent && (typeof ListEmptyComponent === 'function' ? ListEmptyComponent() : ListEmptyComponent)
        )}
        {ListFooterComponent && (typeof ListFooterComponent === 'function' ? ListFooterComponent() : ListFooterComponent)}
      </View>
    );
  };

  return {
    FlashList,
    MasonryFlashList: FlashList,
  };
});

jest.mock('react-native-mmkv', () => {
  const React = require('react');

  class MMKV {
    store = new Map();

    set = jest.fn((key, value) => {
      this.store.set(key, String(value));
    });
    getString = jest.fn((key) => this.store.get(key));
    getNumber = jest.fn((key) => {
      const value = this.store.get(key);
      return value === undefined ? undefined : Number(value);
    });
    getBoolean = jest.fn((key) => {
      const value = this.store.get(key);
      return value === undefined ? undefined : value === 'true';
    });
    delete = jest.fn((key) => {
      this.store.delete(key);
    });
    clearAll = jest.fn(() => {
      this.store.clear();
    });
    getAllKeys = jest.fn(() => Array.from(this.store.keys()));
  }

  return {
    MMKV,
    useMMKVString: (key) => {
      const storage = React.useMemo(() => new MMKV(), []);
      const [value, setValue] = React.useState(storage.getString(key));
      const setStoredValue = React.useCallback(
        (nextValue) => {
          if (nextValue === undefined) {
            storage.delete(key);
            setValue(undefined);
            return;
          }
          storage.set(key, nextValue);
          setValue(nextValue);
        },
        [key, storage],
      );
      return [value, setStoredValue];
    },
  };
});
