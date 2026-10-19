# Google Tag Manager with consent mode: first-pageview setup

When **Load Analytics & Tagmanager in consent mode v2** is enabled (Customizer > Analytics), GTM loads immediately with all consent types set to `denied`. For a new visitor the landing `page_view` is therefore sent without cookies (no client ID, no session, no source/medium). The visitor's choice only arrives after they click in the cookiebar.

The theme pushes a `cookie_consent_update` event to the dataLayer at that moment. It carries the visitor's choice as `consent_analytics`, `consent_marketing` and `consent_preferences` (`true` or `false`, matching `analytics_storage`, `ad_storage` and `personalization_storage`). Use it to send one extra `page_view` once analytics consent is granted. The page URL and referrer are unchanged, so the landing page and traffic source are recorded correctly.

Requires wp-lemon 5.67.0 or later.

## When the event fires

| Situation                             | `gtag('consent', 'update')` | `cookie_consent_update` | Flags            |
| ------------------------------------- | --------------------------- | ----------------------- | ---------------- |
| Visitor clicks Accept                 | with their choices          | yes                     | their checkboxes |
| Visitor clicks Reject                 | all denied                  | yes                     | all `false`      |
| Returning visitor with a saved choice | restored before GTM loads   | no                      | n/a              |

The flags map to consent types as follows:

| dataLayer key         | Consent type                                       | Cookiebar checkbox                                |
| --------------------- | -------------------------------------------------- | ------------------------------------------------- |
| `consent_analytics`   | `analytics_storage`                                | Analytics                                         |
| `consent_marketing`   | `ad_storage`, `ad_user_data`, `ad_personalization` | Marketing                                         |
| `consent_preferences` | `personalization_storage`                          | Preferences (hidden unless the filter enables it) |

Because returning visitors are not affected, the extra `page_view` is never sent twice for the same page.

## Setup

### 1. Create the variable

- Variable type: **Data Layer Variable**
- Data Layer Variable Name: `consent_analytics`
- Name: `DLV - consent_analytics`

### 2. Create the trigger

- Trigger type: **Custom Event** (CE)
- Event name: `cookie_consent_update`
- Fires on: **Some Custom Events**, `DLV - consent_analytics` equals `true`
- Name: `CE - cookie_consent_update (analytics granted)`

### 3. Create the tag

- Tag type: **Google Analytics: GA4 Event**
- Measurement ID: the same ID as your Google tag
- Event name: `page_view`
- Triggering: `CE - cookie_consent_update (analytics granted)`
- Advanced Settings > Consent Settings > **Require additional consent for tag to fire**: `analytics_storage`

The trigger condition keeps the tag from firing after Reject or when analytics is unchecked. The consent requirement is a second safeguard in case the condition is changed later. Keep both.

### 4. Other consent-gated tags (optional)

Ads remarketing, Meta pixel and similar tags that fire on All Pages are skipped on a new visitor's first page, because consent is not granted yet. Add a second trigger on those tags: a Custom Event on `cookie_consent_update` with `DLV - consent_marketing` equal to `true` (create that variable like step 1). Keep their own consent requirements (for example `ad_storage`). They then fire right after the visitor accepts.

For tags that depend on personalization (for example video recommendations), use `consent_preferences` and `personalization_storage` the same way.

## Do not use this when

- The cookiebar is disabled for the site. The event fires on every page there with all flags `true`, which would duplicate each `page_view`.
- Consent mode is off in the Customizer. GTM then loads only after the visitor accepts, and its own page view already has the right consent.

## Testing

1. Open the site in a private window and start GTM Preview.
2. On the **Consent** tab, check that every type is `denied` on page load.
3. Click Accept. `cookie_consent_update` should appear in the summary and the GA4 Event tag should fire once.
4. In GA4 DebugView, check that you see one `page_view` with the landing page URL and the original referrer.
5. Repeat with Reject. The event appears but the tag must not fire.
6. Reload after Accept. There should be no `cookie_consent_update`, and the normal page view fires once.

If DebugView shows two `page_view` events after Accept, your Google tag already resends on consent update. Remove the extra tag.
