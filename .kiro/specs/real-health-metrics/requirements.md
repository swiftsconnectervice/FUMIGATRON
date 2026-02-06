# Requirements Document

## Introduction

This feature replaces the hardcoded demo data in the Growth OS portal's Health Status page with real analytics and site health data. It integrates Google Analytics Data API (GA4) for visitor metrics and Google PageSpeed Insights API for performance/mobile/SSL scores. Data is fetched via Supabase Edge Functions to keep API keys secure and cached in Supabase to avoid hitting API rate limits.

## Glossary

- **Health_Status_Page**: The portal page at `/portal/health` displaying site health metrics
- **Site_Metrics_Table**: Supabase table caching API results to avoid rate limits
- **Edge_Function**: Supabase serverless function that securely calls external APIs
- **GA4_API**: Google Analytics Data API for fetching visitor statistics
- **PageSpeed_API**: Google PageSpeed Insights API for performance, mobile, and SSL scores
- **Metric_Cache**: Stored API results with timestamps to reduce API calls
- **Health_Score**: A 0-100 value indicating site performance quality

## Requirements

### Requirement 1: Site Metrics Database Table

**User Story:** As a developer, I want a database table to cache API results, so that the portal doesn't hit API rate limits on every page load.

#### Acceptance Criteria

1. THE Site_Metrics_Table SHALL contain columns: id (uuid, primary key), metric_type (text), metric_value (jsonb), last_updated (timestamp)
2. THE Site_Metrics_Table SHALL support metric_type values: 'analytics', 'pagespeed'
3. THE Site_Metrics_Table SHALL have Row Level Security enabled with read access for authenticated users
4. WHEN a metric is updated, THE Site_Metrics_Table SHALL store the new value and update the last_updated timestamp

### Requirement 2: Google Analytics Integration

**User Story:** As the site owner, I want to see real visitor statistics, so that I can understand my website traffic.

#### Acceptance Criteria

1. WHEN the Edge_Function fetches analytics, THE GA4_Integration SHALL retrieve total sessions for the current month
2. WHEN the Edge_Function fetches analytics, THE GA4_Integration SHALL retrieve total sessions for the previous month
3. THE GA4_Integration SHALL calculate the percentage change between current and previous month
4. THE GA4_Integration SHALL store results in Site_Metrics_Table with metric_type 'analytics'
5. IF the GA4_API returns an error, THEN THE GA4_Integration SHALL return a structured error response

### Requirement 3: PageSpeed Insights Integration

**User Story:** As the site owner, I want to see my site's performance scores, so that I can verify my site is fast and mobile-friendly.

#### Acceptance Criteria

1. WHEN the Edge_Function fetches pagespeed data, THE PageSpeed_Integration SHALL retrieve the mobile performance score (0-100)
2. WHEN the Edge_Function fetches pagespeed data, THE PageSpeed_Integration SHALL retrieve the desktop performance score (0-100)
3. THE PageSpeed_Integration SHALL detect if the site uses HTTPS (SSL enabled)
4. THE PageSpeed_Integration SHALL store results in Site_Metrics_Table with metric_type 'pagespeed'
5. IF the PageSpeed_API returns an error, THEN THE PageSpeed_Integration SHALL return a structured error response

### Requirement 4: Supabase Edge Function

**User Story:** As a developer, I want a secure edge function to call Google APIs, so that API keys are never exposed to the frontend.

#### Acceptance Criteria

1. THE Edge_Function SHALL read API credentials from Supabase secrets (not hardcoded)
2. WHEN called with action 'fetch-analytics', THE Edge_Function SHALL call GA4_API and cache results
3. WHEN called with action 'fetch-pagespeed', THE Edge_Function SHALL call PageSpeed_API and cache results
4. WHEN called with action 'get-metrics', THE Edge_Function SHALL return cached metrics from Site_Metrics_Table
5. THE Edge_Function SHALL return JSON responses with consistent structure: { success, data, error }
6. IF any API call fails, THEN THE Edge_Function SHALL return success: false with error details

### Requirement 5: Health Status Page Updates

**User Story:** As the site owner, I want the Health Status page to show real data, so that I can see actual site performance.

#### Acceptance Criteria

1. WHEN the Health_Status_Page loads, THE Page SHALL fetch cached metrics from Supabase
2. WHEN metrics are loading, THE Page SHALL display a loading state for each metric
3. WHEN analytics data is available, THE Page SHALL display real visitor count and percentage change
4. WHEN pagespeed data is available, THE Page SHALL display status indicators based on scores
5. THE Page SHALL display scores >= 90 as green (good), 50-89 as yellow (warning), < 50 as red (poor)
6. THE Page SHALL display the last_updated timestamp for each metric type
7. IF metrics fail to load, THEN THE Page SHALL display a fallback message with retry option

### Requirement 6: Score Status Mapping

**User Story:** As the site owner, I want clear visual indicators of my site's health, so that I can quickly understand performance status.

#### Acceptance Criteria

1. WHEN mobile score is >= 90, THE Status_Indicator SHALL display as green with "Excelente"
2. WHEN mobile score is 50-89, THE Status_Indicator SHALL display as yellow with "Necesita mejoras"
3. WHEN mobile score is < 50, THE Status_Indicator SHALL display as red with "Crítico"
4. WHEN SSL is detected as true, THE SSL_Indicator SHALL display as green
5. WHEN SSL is detected as false, THE SSL_Indicator SHALL display as red
6. THE Speed_Score indicator SHALL follow the same color thresholds as mobile score

### Requirement 7: Manual Refresh Capability

**User Story:** As the site owner, I want to manually refresh metrics, so that I can see updated data when needed.

#### Acceptance Criteria

1. THE Health_Status_Page SHALL display a "Refresh" button for each metric section
2. WHEN the refresh button is clicked, THE Page SHALL call the Edge_Function to fetch fresh data
3. WHILE refresh is in progress, THE Page SHALL display a loading indicator on the button
4. WHEN refresh completes, THE Page SHALL update the displayed metrics and last_updated timestamp
5. IF refresh fails, THEN THE Page SHALL display an error toast notification

