import React from 'react';
import { Select, TextField } from '@shopify/polaris';

import { quantityMatchers } from '../auxInformation';
import ProductInput from '../product-input';
import {
  setConditionForQuantityRule,
  setValueForQuantityRule,
} from '../root-component/model';

const ProductQuantityRuleItem = ({
  valueItem,
  limitId,
  ruleIndex,
  deleteHandlerForProductInput,
  selectionHandlerForProductInput,
}) => {
  const { product, condition, value } = valueItem;

  const handleSelectChange = (value) => {
    setConditionForQuantityRule({
      condition: value,
      limitId,
      ruleIndex,
      valueItem,
    });
  };

  const handleValueChange = (newValue) =>
    setValueForQuantityRule({ value: newValue, limitId, ruleIndex, valueItem });

  return (
    <div>
      <ProductInput
        productObj={valueItem.product}
        limitId={limitId}
        ruleIndex={ruleIndex}
        deleteHandlerForProductInput={deleteHandlerForProductInput}
        selectionHandlerForProductInput={selectionHandlerForProductInput}
      />
      <Select
        options={quantityMatchers}
        value={condition}
        onChange={handleSelectChange}
      />
      <TextField value={value} onChange={handleValueChange} />
    </div>
  );
};

export default ProductQuantityRuleItem;
