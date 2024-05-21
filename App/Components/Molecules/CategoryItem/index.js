import { useState } from 'react';
import { List } from 'react-native-paper';
import BrandItem from '@Molecules/BrandItem';
import styles from '../TreeView/style';

const CategoryItem = ({ category }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <List.Accordion
      title={category?.category}
      titleStyle={styles.itemText}
      description={category?.description}
      descriptionStyle={styles.descText}
      left={props => <List.Icon {...props} icon={expanded ? 'checkbox-marked' : 'checkbox-blank-outline'} />}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
      style={styles.itemView}>
      {category?.brands.map((brand, brandIndex) => (
        <BrandItem key={brandIndex} brand={brand} />
      ))}
    </List.Accordion>
  );
};

export default CategoryItem;
