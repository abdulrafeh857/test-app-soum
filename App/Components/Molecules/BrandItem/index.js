import { useState } from 'react';
import { List } from 'react-native-paper';
import ModelItem from '../ModelItem';
import styles from '../TreeView/style';

const BrandItem = ({ brand }) => {
  console.log('brand', brand);
  const [expanded, setExpanded] = useState(false);

  return (
    <List.Accordion
      title={brand?.brand}
      titleStyle={styles.itemText}
      description={brand?.description}
      descriptionStyle={styles.descText}
      left={props => <List.Icon {...props} icon={expanded ? 'checkbox-marked' : 'checkbox-blank-outline'} />}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
      style={styles.itemViewBrand}>
      {brand?.models.map((model, modelIndex) => (
        <ModelItem key={modelIndex} model={model} />
      ))}
    </List.Accordion>
  );
};

export default BrandItem;
