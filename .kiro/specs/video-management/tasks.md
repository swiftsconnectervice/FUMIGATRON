# Implementation Plan: Video Management

## Overview

This plan implements the Video Management "Quality Control Gate" feature for the Growth OS client portal. The implementation follows existing portal patterns (PortalLayout, Supabase data access, component styling) and builds incrementally from database schema through data layer to UI components.

## Tasks

- [ ] 1. Set up database schema and types
  - [ ] 1.1 Create Supabase migration for videos, video_versions, and video_feedback tables
    - Create `supabase/migrations/002_video_management.sql`
    - Include tables with constraints, RLS policies, and indexes
    - _Requirements: 6.1, 6.2, 6.3, 6.4_
  
  - [ ] 1.2 Add TypeScript types to src/types/index.ts
    - Add Video, VideoVersion, VideoFeedback interfaces
    - Add VideoObjective and ApprovalStatus types
    - Add OBJECTIVE_LABELS and OBJECTIVE_ICONS constants
    - _Requirements: 5.3, 6.1_

- [ ] 2. Implement data access layer
  - [ ] 2.1 Create src/lib/videos.ts with data access functions
    - Implement getPendingVideos(), getApprovedVideos()
    - Implement getVideoVersions()
    - Implement approveVideo(), requestVideoRevision(), rejectVideo()
    - Implement serializeVideo(), deserializeVideo()
    - _Requirements: 1.1, 3.1, 3.2, 3.3, 4.1, 6.5, 6.6_
  
  - [ ]* 2.2 Write property test for serialization round-trip
    - **Property 10: Serialization Round-Trip**
    - **Validates: Requirements 6.5, 6.6**

- [ ] 3. Checkpoint - Verify data layer
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Implement base UI components
  - [ ] 4.1 Create ObjectiveDisplay component
    - Create `src/components/portal/ObjectiveDisplay.tsx`
    - Display objective label with icon and color coding
    - Support sm, md, lg sizes
    - _Requirements: 5.1, 5.2_
  
  - [ ] 4.2 Create VideoCard component
    - Create `src/components/portal/VideoCard.tsx`
    - Display thumbnail, title, objective badge, date
    - Follow LeadCard styling patterns with hover effects
    - _Requirements: 1.2, 4.2_
  
  - [ ]* 4.3 Write property test for video display fields
    - **Property 2: Video Display Contains Required Fields**
    - **Validates: Requirements 1.2, 2.2, 4.2, 5.1**

- [ ] 5. Implement video player and version selector
  - [ ] 5.1 Create VideoPlayer component
    - Create `src/components/portal/VideoPlayer.tsx`
    - HTML5 video player with standard controls
    - Support MP4, WebM, MOV formats
    - _Requirements: 2.1, 2.4_
  
  - [ ] 5.2 Create VersionSelector component
    - Create `src/components/portal/VersionSelector.tsx`
    - Dropdown/pill selector for version switching
    - Hide when only one version exists
    - _Requirements: 2.3_
  
  - [ ]* 5.3 Write property test for version selector visibility
    - **Property 4: Version Selector for Multi-Version Videos**
    - **Validates: Requirements 2.3**

- [ ] 6. Implement approval actions
  - [ ] 6.1 Create ApprovalActions component
    - Create `src/components/portal/ApprovalActions.tsx`
    - Three buttons: Approve (green), Request Revision (yellow), Reject (red)
    - Disable actions for already-approved videos
    - Show approval date when approved
    - _Requirements: 3.1, 3.2, 3.3, 3.4_
  
  - [ ]* 6.2 Write property tests for approval state transitions
    - **Property 5: Approve Action State Transition**
    - **Property 6: Revision Request State Transition**
    - **Property 7: Reject Action State Transition**
    - **Property 8: Approved Videos Immutable**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4**

- [ ] 7. Checkpoint - Verify components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Implement VideoReviewModal
  - [ ] 8.1 Create VideoReviewModal component
    - Create `src/components/portal/VideoReviewModal.tsx`
    - Full-screen modal with VideoPlayer, VersionSelector, ObjectiveDisplay, ApprovalActions
    - Handle feedback input for revisions/rejections
    - _Requirements: 2.1, 2.2, 2.3, 3.1, 3.2, 3.3_

- [ ] 9. Implement main page and navigation
  - [ ] 9.1 Create VideoManagement page
    - Create `src/pages/portal/VideoManagement.tsx`
    - Tab navigation (Review Queue / Library)
    - Integrate StatCard for counts
    - Display VideoCard lists with empty states
    - _Requirements: 1.1, 1.3, 4.1, 4.4, 7.2, 7.3, 7.4_
  
  - [ ]* 9.2 Write property tests for status filtering and ordering
    - **Property 1: Status Filtering Returns Correct Videos**
    - **Property 3: Pending Videos Ordered by Date**
    - **Property 9: Library Count Accuracy**
    - **Validates: Requirements 1.1, 1.4, 4.1, 4.4**
  
  - [ ] 9.3 Add route and navigation
    - Add route to index.tsx with ProtectedRoute wrapper
    - Add navigation item to PortalLayout.tsx navItems array
    - _Requirements: 7.1_

- [ ] 10. Final checkpoint - Integration verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties using fast-check
- Unit tests validate specific examples and edge cases
