const NOTIFY_TIMEOUT = 5000;

export const NOTIFY_TYPES = {
    PLAIN: 'PLAIN',
    RICH_IMAGE: 'RICH_IMAGE'
};

export default function notify(opts, timeout) {
  // todo: be quiet on disturb state
  // https://github.com/felixrieseberg/electron-notification-state
  let notification = new Notification(opts.title, opts);

  // hide automatically
  setTimeout(function() {
    if (notification) notification.close();
  }, timeout || NOTIFY_TIMEOUT);

  return notification;
}
