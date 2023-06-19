import { FeatureFlagsKeysEnum } from '@novu/shared';
import { useFlags } from 'launchdarkly-react-client-sdk';

import { IS_TEMPLATE_STORE_ENABLED, IS_MULTI_PROVIDER_CONFIGURATION } from '../config';

const prepareBooleanStringFeatureFlag = (value: string | undefined, defaultValue: boolean): boolean => {
  const preparedValue = value === 'true';

  return preparedValue || defaultValue;
};

export const useIsTemplateStoreEnabled = (): boolean => {
  const value = IS_TEMPLATE_STORE_ENABLED;
  const fallbackValue = false;
  const defaultValue = prepareBooleanStringFeatureFlag(value, fallbackValue);

  const isTemplateStoreEnabled = useGetFlagByKey<boolean>(FeatureFlagsKeysEnum.IS_TEMPLATE_STORE_ENABLED);

  return isTemplateStoreEnabled ?? defaultValue;
};

export const useisMultiProviderConfigurationEnabled = (): boolean => {
  const value = IS_MULTI_PROVIDER_CONFIGURATION;
  const fallbackValue = false;
  const defaultValue = prepareBooleanStringFeatureFlag(value, fallbackValue);

  const isTemplateStoreEnabled = useGetFlagByKey<boolean>(FeatureFlagsKeysEnum.IS_MULTI_PROVIDER_CONFIGURATION);

  return isTemplateStoreEnabled ?? defaultValue;
};

const useGetFlagByKey = <T>(key: FeatureFlagsKeysEnum): T => {
  const { [key]: featureFlag } = useFlags();

  return featureFlag;
};
