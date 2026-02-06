# Implementation Plan: Growth OS Portal

## Overview

This plan implements the Growth OS client portal for Fumigatron, adding React Router, Supabase integration, and three portal screens (Dashboard, Activity, Health) behind protected routes.

## Tasks

- [x] 1. Set up project infrastructure
  - [x] 1.1 Install dependencies (react-router-dom, @supabase/supabase-js, fast-check for testing)
    - Add to package.json and install
    - _Requirements: 1.1, 8.1_
  
  - [x] 1.2 Create Supabase client configuration
    - Create `src/lib/supabase.ts` with client initialization
    - Add environment variables to `.env.local` (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY)
    - _Requirements: 8.1, 8.2_
  
  - [x] 1.3 Create TypeScript type definitions
    - Create `src/types/index.ts` with Lead, SystemLog, ActionType interfaces
    - _Requirements: 8.1, 8.2_

- [x] 2. Set up routing and authentication
  - [x] 2.1 Create AuthContext for authentication state
    - Create `src/context/AuthContext.tsx` with user state, signIn, signOut methods
    - Implement session persistence with Supabase onAuthStateChange
    - _Requirements: 2.1, 2.3, 2.4_
  
  - [x] 2.2 Create ProtectedRoute component
    - Create `src/components/ProtectedRoute.tsx`
    - Redirect unauthenticated users to `/portal/login`
    - _Requirements: 1.2, 1.3_
  
  - [ ]* 2.3 Write property test for protected route redirect
    - **Property 1: Protected Route Authentication Check**
    - **Validates: Requirements 1.2, 1.3**
  
  - [x] 2.4 Set up React Router in index.tsx
    - Configure routes: `/`, `/portal/login`, `/portal/dashboard`, `/portal/activity`, `/portal/health`
    - Wrap protected routes with ProtectedRoute component
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 3. Implement login page
  - [x] 3.1 Create LoginPage component
    - Create `src/pages/portal/LoginPage.tsx`
    - Implement login form with email/password fields
    - Handle authentication via AuthContext
    - Display error messages for invalid credentials
    - Redirect authenticated users to dashboard
    - _Requirements: 2.1, 2.2, 2.5, 1.4_
  
  - [ ]* 3.2 Write property test for invalid credentials error
    - **Property 2: Invalid Credentials Error Display**
    - **Validates: Requirements 2.2**

- [x] 4. Checkpoint - Verify routing and auth
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Create portal layout and navigation
  - [x] 5.1 Create PortalLayout component with sidebar
    - Create `src/components/portal/PortalLayout.tsx`
    - Include navigation links: Dashboard, Activity, Health
    - Include logout button
    - Apply active state styling to current route
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_
  
  - [ ]* 5.2 Write property test for navigation presence and active state
    - **Property 11: Portal Navigation Presence**
    - **Property 13: Active Navigation State**
    - **Validates: Requirements 7.1, 7.5**

- [x] 6. Implement data access layer
  - [x] 6.1 Create leads data access functions
    - Create `src/lib/leads.ts`
    - Implement createLead, getLeadsThisMonth, getRecentLeads functions
    - _Requirements: 3.1, 3.2, 4.1, 4.3_
  
  - [x] 6.2 Create logs data access functions
    - Create `src/lib/logs.ts`
    - Implement createLog, getAllLogs functions
    - _Requirements: 5.3, 5.4_
  
  - [ ]* 6.3 Write property test for lead data integrity
    - **Property 3: Lead Data Integrity**
    - **Validates: Requirements 3.1, 3.2**
  
  - [ ]* 6.4 Write property test for log data integrity
    - **Property 10: Log Data Integrity**
    - **Validates: Requirements 5.3, 5.4**

- [x] 7. Upgrade contact form for lead capture
  - [x] 7.1 Update ContactSection in App.tsx
    - Add form state management
    - Implement form validation (required fields)
    - Call createLead on valid submission
    - Display success/error messages
    - _Requirements: 3.1, 3.3, 3.4, 3.5_
  
  - [ ]* 7.2 Write property test for form validation
    - **Property 4: Lead Form Validation**
    - **Validates: Requirements 3.5**

- [x] 8. Checkpoint - Verify data layer
  - Ensure all tests pass, ask the user if questions arise.

- [x] 9. Implement ROI Dashboard
  - [x] 9.1 Create shared UI components
    - Create `src/components/portal/StatCard.tsx`
    - Create `src/components/portal/LeadCard.tsx`
    - _Requirements: 4.1, 4.2, 4.3, 4.4_
  
  - [x] 9.2 Create Dashboard page
    - Create `src/pages/portal/Dashboard.tsx`
    - Display total leads this month and pipeline value ($500/lead)
    - Display 10 most recent leads with Call button (tel: link)
    - Handle empty state
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [ ]* 9.3 Write property test for dashboard metrics
    - **Property 5: Dashboard Metrics Calculation**
    - **Validates: Requirements 4.1, 4.2**
  
  - [ ]* 9.4 Write property test for call button tel: link
    - **Property 7: Call Button Phone Link**
    - **Validates: Requirements 4.4**

- [x] 10. Implement Activity Log
  - [x] 10.1 Create LogEntry component
    - Create `src/components/portal/LogEntry.tsx`
    - Display icon based on action_type
    - _Requirements: 5.2_
  
  - [x] 10.2 Create ActivityLog page
    - Create `src/pages/portal/ActivityLog.tsx`
    - Display all logs sorted by date descending
    - Include form to add new log entries
    - Handle save errors
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_
  
  - [ ]* 10.3 Write property test for log sorting
    - **Property 8: Activity Log Sorting**
    - **Validates: Requirements 5.1**
  
  - [ ]* 10.4 Write property test for action type icon mapping
    - **Property 9: Action Type Icon Mapping**
    - **Validates: Requirements 5.2**

- [x] 11. Implement Health Status page
  - [x] 11.1 Create StatusIndicator component
    - Create `src/components/portal/StatusIndicator.tsx`
    - Display green circle with label
    - _Requirements: 6.2, 6.3_
  
  - [x] 11.2 Create HealthStatus page
    - Create `src/pages/portal/HealthStatus.tsx`
    - Display hardcoded traffic counter "1,240 visits (↑15%)"
    - Display three green status indicators: Mobile Optimized, Secure (SSL), Speed Score
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [ ]* 11.3 Write unit tests for health page hardcoded values
    - Verify traffic counter displays correct value
    - Verify all three status indicators are present and green
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 12. Final checkpoint - Full integration
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Create Supabase setup documentation
  - [x] 13.1 Create SQL migration file
    - Create `supabase/migrations/001_initial_schema.sql`
    - Include leads table, system_logs table, and RLS policies
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Unit tests validate specific examples and edge cases
- Supabase tables and auth user must be created manually in Supabase dashboard before testing
