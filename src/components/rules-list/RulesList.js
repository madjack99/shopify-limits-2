import React from 'react';
import { useStore } from 'effector-react';
import { Stack } from '@shopify/polaris';

import EntityDisplayMatcher from '../entity-display-matcher';
import { $limits, deleteRule } from '../root-component/model';

const RulesList = ({ limitId }) => {
  const limits = useStore($limits);

  const { rules } = limits.find((limit) => limit.id === limitId);

  const handleDeleteRule = (limitIdArg, ruleIndexArg) => {
    console.log(limitIdArg, ruleIndexArg);
    deleteRule({ limitIdArg, ruleIndexArg });
  };

  const renderRules = (rulesList) => {
    return rulesList.map((rule, ruleIndex) => {
      return (
        <div key={ruleIndex}>
          <Stack>
            <EntityDisplayMatcher rule={rule} />
            <button onClick={() => handleDeleteRule(limitId, ruleIndex)}>
              Delete
            </button>
          </Stack>
        </div>
      );
    });
  };

  return (
    <Stack vertical={true} spacing='loose'>
      {renderRules(rules)}
    </Stack>
  );
};

export default RulesList;