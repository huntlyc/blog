---
title: WordPress Local Date/Time
slug: wordpress-local-date-time
date: 2019-06-09
published: true
canonical_url: false
tags: ['WordPress', 'PHP']
description: If you get hosting from a provider half way around the world, you'll find that their server time may not be the same as your local time.  You've got a few options...
cover_image: /assets/img/uploads/wp-time.jpg
---

If you get hosting from a provider half way around the world, you'll find that their server time may not be the same as your local time.  You've got a few options:

### Update the php.ini file

Some hosts will give you access to this, some will not.  Some may allow you to create a php.ini override file in your hosting directory, some will not.

If you do have the ability to do this then, you'll want to add the following line into a file called *php.ini* located in your main web root folder (htdocs, public_html, or something along those lines):

```ini
date.timezone = "Europe/London";
```

You can find a list of supported timezones here: [https://www.php.net/manual/en/timezones.php](https://www.php.net/manual/en/timezones.php)

Once you set this you may need to restart your web server or PHP-FPM service.  If this does not work, try and contact your hosting provider as they will be able to help you.

### Set your timezone on the fly

If you can't do the above then you can always add the following line at the top of your php files:

```php
    <?php date_default_timezone_set('Europe/London'); ?>
```

Again, get your timezone from here: [https://www.php.net/manual/en/timezones.php](https://www.php.net/manual/en/timezones.php)

### Let WordPress do the heavy lifting

Probably the easiest solution here is to go into the general settings section in your wordpress admin and set the Timezone option.  Then instead of using the **date()** function to get a formatted version of the current date and time you can use the **current_time()** function from wordpress.  You can pass in '*mysql*', '*timestamp*', or any valid format string you would normally use for the **date()** function.

**Resources:**

- PHP Timezones: [https://www.php.net/manual/en/timezones.php](https://www.php.net/manual/en/timezones.php)
- PHP Date Function: [https://www.php.net/manual/en/function.date.php](https://www.php.net/manual/en/function.date.php)
- WordPress Timezone Settings: [https://en.support.wordpress.com/settings/time-settings/](https://en.support.wordpress.com/settings/time-settings/)
- WordPress current_time Function: [https://developer.wordpress.org/reference/functions/current_time/](https://developer.wordpress.org/reference/functions/current_time/)
