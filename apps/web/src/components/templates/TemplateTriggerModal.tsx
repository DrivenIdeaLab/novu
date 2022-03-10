import { INotificationTrigger } from '@notifire/shared';
import { Modal, useMantineTheme } from '@mantine/core';
import { Button, colors, shadows, Title } from '../../design-system';
import { TriggerSnippetTabs } from './TriggerSnippetTabs';

export function TemplateTriggerModal({
  isVisible,
  onDismiss,
  trigger,
}: {
  isVisible: boolean;
  onDismiss: () => void;
  trigger: INotificationTrigger;
}) {
  const theme = useMantineTheme();
  const dark = theme.colorScheme === 'dark';

  return (
    <Modal
      onClose={onDismiss}
      opened={isVisible}
      overlayColor={dark ? colors.BGDark : colors.BGLight}
      overlayOpacity={0.7}
      styles={{
        modal: {
          backgroundColor: dark ? colors.B15 : colors.white,
        },
        body: {
          paddingTop: '5px',
        },
        inner: {
          paddingTop: '180px',
        },
      }}
      sx={{ backdropFilter: 'blur(10px)' }}
      title={<Title>Trigger implementation code</Title>}
      shadow={dark ? shadows.dark : shadows.medium}
      radius="md"
      size="xl">
      <TriggerSnippetTabs trigger={trigger} data-test-id="success-trigger-modal" />
      <div style={{ alignItems: 'end' }}>
        <Button mt={30} onClick={onDismiss} inherit>
          Got it
        </Button>
      </div>
    </Modal>
  );
}
