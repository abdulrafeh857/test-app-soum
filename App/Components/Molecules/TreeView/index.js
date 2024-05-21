import { Text, View } from 'react-native';
import CategoryItem from '@Molecules/CategoryItem';
import styles from './style';

const TreeView = ({ data }) => {
  return (
    <View>
      {data && data.length > 0 ? (
        data.map((category, categoryIndex) => <CategoryItem key={categoryIndex} category={category} />)
      ) : (
        <Text style={styles.text}>No Data Found...</Text>
      )}
    </View>
  );
};

export default TreeView;
