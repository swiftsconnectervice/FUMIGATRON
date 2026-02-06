# Implementation Plan: Real Health Metrics

## Overview

This plan implements real Google Analytics and PageSpeed Insights integration for the Growth OS portal's Health Status page. The implementation follows a bottom-up approach: database schema first, then edge function, then frontend hook, and finally UI updates.

## Tasks

- [ ] 1. Create site_metrics database table
  - [ ] 1.1 Create migration file for site_metrics table
    - Add columns: id (uuid), metric_type (text, unique), metric_value (jsonb), last_updated (timestamptz)
    - Add CHECK constraint for valid metric_type values ('analytics', 'pagespeed')
    - Enable Row Level Security with read policy for authenticated users
    - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2. Create TypeScript types and utilities
  - [ ] 2.1 Create shared types for metrics
    - Create `src/types/healthMetrics.ts` with AnalyticsMetric, PageSpeedMetric, SiteMetricRow interfaces
    - _Requirements: 1.1, 2.1, 3.1_
  
  - [ ] 2.2 Implement score status utility function
    - Create `src/utils/healthScoreStatus.ts` with getScoreStatus and getSslStatus functions
    - Map scores to 'good'/'warning'/'poor' status with Spanish labels
    - _Requirements: 5.5, 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_
  
  - [ ]* 2.3 Write property test for score status mapping
    - **Property 2: Score to status mapping**
    - Generate random scores 0-100, verify correct status thresholds
    - **Validates: Requirements 5.5, 6.1, 6.2, 6.3, 6.6**
  
  - [ ] 2.4 Implement percentage change calculation utility
    - Create calculatePercentChange function in `src/utils/healthScoreStatus.ts`
    - Handle edge case of zero previous value
    - _Requirements: 2.3_
  
  - [ ]* 2.5 Write property test for percentage change calculation
    - **Property 1: Percentage change calculation**
    - Generate random session count pairs, verify formula correctness
    - **Validates: Requirements 2.3**

- [ ] 3. Checkpoint - Verify utilities work correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Create Supabase Edge Function
  - [ ] 4.1 Set up edge function structure
    - Create `supabase/functions/site-metrics/index.ts`
    - Set up Deno imports and CORS headers
    - Define request/response interfaces
    - _Requirements: 4.1, 4.5_
  
  - [ ] 4.2 Implement get-metrics action
    - Query site_metrics table for cached data
    - Return both analytics and pagespeed metrics
    - _Requirements: 4.4_
  
  - [ ] 4.3 Implement fetch-analytics action
    - Call Google Analytics Data API (GA4) using service account
    - Extract current and previous month sessions
    - Calculate percentage change
    - Upsert results to site_metrics table
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 4.2_
  
  - [ ] 4.4 Implement fetch-pagespeed action
    - Call PageSpeed Insights API
    - Extract mobile score, desktop score, SSL status
    - Upsert results to site_metrics table
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 4.3_
  
  - [ ] 4.5 Implement error handling
    - Return structured error responses for all failure cases
    - Handle missing secrets, API errors, rate limits
    - _Requirements: 2.5, 3.5, 4.6_
  
  - [ ]* 4.6 Write property test for response structure invariant
    - **Property 4: Edge function response structure invariant**
    - Verify all responses have { success, data?, error? } structure
    - **Validates: Requirements 4.5, 4.6, 2.5, 3.5**

- [ ] 5. Checkpoint - Test edge function locally
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Create useHealthMetrics React hook
  - [ ] 6.1 Implement hook with cached data fetching
    - Create `src/hooks/useHealthMetrics.ts`
    - Fetch cached metrics from Supabase on mount
    - Expose analytics, pagespeed, isLoading, error states
    - _Requirements: 5.1, 5.2_
  
  - [ ] 6.2 Implement refresh functions
    - Add refreshAnalytics and refreshPagespeed functions
    - Track isRefreshing state for each metric type
    - Call edge function and update local state
    - _Requirements: 7.2, 7.3, 7.4_
  
  - [ ]* 6.3 Write unit tests for hook
    - Test loading states, error handling, refresh behavior
    - Mock Supabase client
    - _Requirements: 5.1, 5.2, 7.2, 7.3_

- [ ] 7. Update HealthStatus page component
  - [ ] 7.1 Integrate useHealthMetrics hook
    - Replace hardcoded values with hook data
    - Display real visitor count and percentage change
    - _Requirements: 5.3_
  
  - [ ] 7.2 Add loading states
    - Show skeleton loaders while metrics are loading
    - _Requirements: 5.2_
  
  - [ ] 7.3 Update status indicators with real scores
    - Use getScoreStatus utility for mobile/speed scores
    - Use getSslStatus for SSL indicator
    - _Requirements: 5.4, 5.5_
  
  - [ ] 7.4 Add last updated timestamps
    - Display when each metric was last refreshed
    - Format as relative time (e.g., "hace 2 horas")
    - _Requirements: 5.6_
  
  - [ ] 7.5 Add refresh buttons
    - Add refresh button to each metric section
    - Show loading spinner during refresh
    - _Requirements: 7.1, 7.3_
  
  - [ ] 7.6 Implement error fallback UI
    - Show fallback message when metrics fail to load
    - Include retry button
    - _Requirements: 5.7, 7.5_

- [ ] 8. Final checkpoint - End-to-end verification
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Create setup documentation
  - [ ] 9.1 Write Google Cloud setup guide
    - Document how to create Google Cloud project
    - Document how to enable GA4 Data API and PageSpeed API
    - Document how to create service account and get credentials
    - Document how to set up Supabase secrets
    - _Requirements: 4.1_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- The edge function requires Supabase secrets to be configured before testing with real APIs
