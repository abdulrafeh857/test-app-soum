import { useState } from 'react';
import { List } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../TreeView/style';
import { setSelectedProductsSlice } from 'Store/Redux/selected';

const ModelItem = ({ model }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const selectedProducts = useSelector(state => state.selectedProducts?.data);
  return (
    <List.Accordion
      title={model?.model}
      titleStyle={styles.itemText}
      description={model?.description}
      descriptionStyle={styles.descText}
      left={props => <List.Icon {...props} icon={expanded ? 'checkbox-marked' : 'checkbox-blank-outline'} />}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}
      style={styles.itemViewModel}>
      {model?.variants.map((variant, variantIndex) => (
        <>
          <List.Item
            style={styles.itemViewVariant}
            key={variantIndex}
            title={variant}
            titleStyle={styles.itemText}
            left={props => (
              <List.Icon
                {...props}
                icon={
                  selectedProducts?.findIndex(item => item.model === model?.model && item.variant === variant) !== -1
                    ? 'checkbox-marked'
                    : 'checkbox-blank-outline'
                }
              />
            )}
            onPress={() => {
              let arr = [...model?.variants];
              arr[variantIndex].selected = !arr[variantIndex].selected;
              model.variants = arr;
              dispatch(
                setSelectedProductsSlice([
                  ...selectedProducts,
                  {
                    model: model?.model,
                    variant: variant
                  }
                ])
              );
              console.log('model', model);

              console.log('variant', variant);
            }}
          />
        </>
      ))}
    </List.Accordion>
  );
};

export default ModelItem;
