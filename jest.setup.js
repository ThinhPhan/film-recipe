import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};
  return Reanimated;
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

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
  return {
    MMKV: class {
      set = jest.fn();
      getString = jest.fn();
      getNumber = jest.fn();
      getBoolean = jest.fn();
      delete = jest.fn();
      clearAll = jest.fn();
    }
  };
});
