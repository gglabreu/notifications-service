import { CountRecipientNotifications } from './count-recipient-notifications';
import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@teste/repositories/in-memory-notifications-repository';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
        new Notification({
          category: 'social',
          content: new Content('Nova solicitação de amizade!'),
          recipientId: 'recipient-1',
        }),
      );

      await notificationsRepository.create(
        new Notification({
          category: 'social',
          content: new Content('Nova solicitação de amizade!'),
          recipientId: 'recipient-2',
        }),
      );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1'
    });

    expect(count).toEqual(2)
    
  });
});
