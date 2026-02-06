# Requirements Document

## Introduction

The Video Management feature is a "Quality Control Gate" for the Growth OS client portal. It enables clients to review and approve marketing videos before they go live, bridging the gap between the team's creative work and the results the client sees. This feature transforms the chaotic WhatsApp-based approval process into a structured, professional workflow that reinforces the connection between marketing efforts and lead generation.

The feature addresses three core pain points: WhatsApp chaos (lost videos, wrong version approvals), strategy drift (approving without considering objectives), and the disconnect between marketing activities and business results.

## Glossary

- **Video_Management_System**: The portal feature that handles video review, approval, and library management
- **Video**: A marketing content asset uploaded for client review, containing metadata about its strategic purpose
- **Video_Version**: A specific iteration of a video, allowing comparison between revisions
- **Approval_Status**: The state of a video in the review workflow (pending, approved, rejected, revision_requested)
- **Video_Objective**: The strategic purpose of a video (trust_building, lead_generation, brand_awareness, service_showcase)
- **Video_Library**: The permanent collection of approved videos owned by the client
- **Client**: The authenticated portal user who reviews and approves videos

## Requirements

### Requirement 1: Video Review Queue

**User Story:** As a client, I want to see all videos awaiting my approval in one clear view, so that I can quickly review and approve content without searching through messages.

#### Acceptance Criteria

1. WHEN a client navigates to the Video Management tab, THE Video_Management_System SHALL display all videos with pending approval status
2. WHEN displaying pending videos, THE Video_Management_System SHALL show the video thumbnail, title, objective, and upload date for each item
3. WHEN no videos are pending approval, THE Video_Management_System SHALL display an empty state message indicating no action is required
4. THE Video_Management_System SHALL order pending videos by upload date with newest first

### Requirement 2: Video Playback and Preview

**User Story:** As a client, I want to watch videos directly in the portal, so that I can review content without downloading files or switching applications.

#### Acceptance Criteria

1. WHEN a client selects a video to review, THE Video_Management_System SHALL display an embedded video player with playback controls
2. WHEN playing a video, THE Video_Management_System SHALL display the video objective prominently alongside the player
3. WHEN a video has multiple versions, THE Video_Management_System SHALL provide a version selector to compare iterations
4. THE Video_Management_System SHALL support common video formats (MP4, WebM, MOV)

### Requirement 3: Video Approval Workflow

**User Story:** As a client, I want to approve or request changes to videos with a single action, so that I can provide clear direction without lengthy explanations.

#### Acceptance Criteria

1. WHEN a client approves a video, THE Video_Management_System SHALL update the video status to approved and record the approval timestamp
2. WHEN a client requests revisions, THE Video_Management_System SHALL prompt for feedback and update the status to revision_requested
3. WHEN a client rejects a video, THE Video_Management_System SHALL prompt for a reason and update the status to rejected
4. IF a video is already approved, THEN THE Video_Management_System SHALL prevent status changes and display the approval date
5. THE Video_Management_System SHALL persist all approval actions to the database immediately

### Requirement 4: Video Library

**User Story:** As a client, I want to access all my approved videos in a permanent library, so that I have ownership of my marketing assets.

#### Acceptance Criteria

1. WHEN a client views the video library, THE Video_Management_System SHALL display all approved videos organized by objective category
2. WHEN displaying library videos, THE Video_Management_System SHALL show the video thumbnail, title, approval date, and objective
3. WHEN a client selects a library video, THE Video_Management_System SHALL allow playback of the approved version
4. THE Video_Management_System SHALL provide a count of total approved videos in the library

### Requirement 5: Strategic Context Display

**User Story:** As a client, I want to see the strategic purpose of each video, so that I can make approval decisions based on business goals rather than personal preference.

#### Acceptance Criteria

1. WHEN displaying any video, THE Video_Management_System SHALL show the video objective with a descriptive label (e.g., "Objective: Trust Building")
2. WHEN displaying video objectives, THE Video_Management_System SHALL use distinct visual indicators for each objective type
3. THE Video_Management_System SHALL support four objective types: trust_building, lead_generation, brand_awareness, service_showcase

### Requirement 6: Video Data Persistence

**User Story:** As a developer, I want video data stored in Supabase, so that the feature integrates with the existing portal infrastructure.

#### Acceptance Criteria

1. THE Video_Management_System SHALL store video metadata in a videos table with id, title, objective, status, video_url, thumbnail_url, and timestamps
2. THE Video_Management_System SHALL store version history in a video_versions table linked to the parent video
3. THE Video_Management_System SHALL store approval feedback in a video_feedback table linked to the video
4. WHEN retrieving videos, THE Video_Management_System SHALL use Row Level Security to ensure only authenticated users can access data
5. WHEN serializing video data for storage, THE Video_Management_System SHALL encode it as JSON
6. WHEN deserializing video data from storage, THE Video_Management_System SHALL parse the JSON and validate the structure

### Requirement 7: Portal Integration

**User Story:** As a client, I want the video management feature to feel like part of the existing portal, so that my experience is consistent and professional.

#### Acceptance Criteria

1. THE Video_Management_System SHALL integrate with the PortalLayout sidebar navigation as a new menu item
2. THE Video_Management_System SHALL use the same visual patterns as Dashboard, ActivityLog, and HealthStatus pages
3. THE Video_Management_System SHALL use brand colors (brand-green, brand-forest) consistent with the portal design
4. THE Video_Management_System SHALL display loading and error states consistent with other portal pages
