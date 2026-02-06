# Requirements Document

## Introduction

Growth OS is a hidden client portal for the Fumigatron pest control website that transforms the website from a "black box" into a "glass house" for the client. The portal provides ROI visibility, activity logging, and site health monitoring to justify premium pricing and demonstrate ongoing value.

## Glossary

- **Portal**: The protected client-facing dashboard accessible at `/portal/*` routes
- **Lead**: A potential customer who submits their contact information through the website's contact form
- **System_Log**: A record of maintenance, security, or content work performed on the website
- **Pipeline_Value**: Estimated monetary value of leads calculated at $500 per lead
- **Auth_User**: The single authenticated administrator account (admin@fumigatron.com)
- **Supabase**: The backend-as-a-service platform providing authentication and database functionality
- **Protected_Route**: A route that requires authentication to access

## Requirements

### Requirement 1: Routing Infrastructure

**User Story:** As a developer, I want to add routing to the application, so that the portal can exist alongside the public landing page.

#### Acceptance Criteria

1. WHEN a user navigates to `/`, THE Router SHALL render the existing landing page
2. WHEN a user navigates to `/portal/*`, THE Router SHALL check authentication status before rendering
3. WHEN an unauthenticated user accesses a protected route, THE Router SHALL redirect to `/portal/login`
4. WHEN an authenticated user accesses `/portal/login`, THE Router SHALL redirect to `/portal/dashboard`

### Requirement 2: Authentication

**User Story:** As the site owner, I want to log into a protected portal, so that only I can access business-sensitive information.

#### Acceptance Criteria

1. WHEN a user submits valid credentials on the login form, THE Auth_System SHALL authenticate via Supabase and redirect to `/portal/dashboard`
2. WHEN a user submits invalid credentials, THE Auth_System SHALL display an error message and remain on the login page
3. WHEN an authenticated user clicks logout, THE Auth_System SHALL clear the session and redirect to `/`
4. WHILE a user session is active, THE Auth_System SHALL persist authentication state across page refreshes
5. IF the Supabase authentication service is unavailable, THEN THE Auth_System SHALL display a connection error message

### Requirement 3: Lead Capture Integration

**User Story:** As the site owner, I want contact form submissions saved to a database, so that I can track and follow up with potential customers.

#### Acceptance Criteria

1. WHEN a visitor submits the contact form with valid data, THE Lead_Capture_System SHALL save the lead to the Supabase Leads table
2. WHEN a lead is saved, THE Lead_Capture_System SHALL store name, phone, service type, and created_at timestamp
3. IF the database save fails, THEN THE Lead_Capture_System SHALL display an error message to the user
4. WHEN a lead is successfully saved, THE Lead_Capture_System SHALL display a success confirmation to the user
5. WHEN a visitor submits the form with empty required fields, THE Lead_Capture_System SHALL prevent submission and display validation errors

### Requirement 4: ROI Dashboard

**User Story:** As the site owner, I want to see lead statistics and pipeline value, so that I can understand the ROI of my website investment.

#### Acceptance Criteria

1. WHEN the dashboard loads, THE Dashboard SHALL display the total number of leads captured in the current month
2. WHEN the dashboard loads, THE Dashboard SHALL calculate and display estimated pipeline value at $500 per lead
3. WHEN the dashboard loads, THE Dashboard SHALL display the 10 most recent leads with name, phone, service, and timestamp
4. WHEN a user clicks the "Call" button on a lead, THE Dashboard SHALL open the device's phone dialer with the lead's number
5. IF no leads exist for the current month, THEN THE Dashboard SHALL display zero values with appropriate messaging

### Requirement 5: Activity Log

**User Story:** As the site owner, I want to see a log of maintenance work performed, so that I can verify ongoing service value.

#### Acceptance Criteria

1. WHEN the activity page loads, THE Activity_Log SHALL display all system log entries sorted by date descending
2. WHEN displaying a log entry, THE Activity_Log SHALL show an icon based on action type (🛡️ Security, ⚡ Speed, 📝 Content)
3. WHEN an admin submits the log entry form, THE Activity_Log SHALL save a new entry to the System_Logs table
4. WHEN a log entry is saved, THE Activity_Log SHALL store action_type, message, and created_at timestamp
5. IF the log entry save fails, THEN THE Activity_Log SHALL display an error message

### Requirement 6: Health Status Display

**User Story:** As the site owner, I want to see website health indicators, so that I can verify my site is performing well.

#### Acceptance Criteria

1. WHEN the health page loads, THE Health_Display SHALL show a traffic counter with hardcoded demo value "1,240 visits (↑15%)"
2. WHEN the health page loads, THE Health_Display SHALL show three status indicators with green circles
3. THE Health_Display SHALL display status for "Mobile Optimized", "Secure (SSL)", and "Speed Score"
4. THE Health_Display SHALL render all indicators as positive/green for MVP demo purposes

### Requirement 7: Portal Navigation

**User Story:** As the site owner, I want consistent navigation within the portal, so that I can easily access all portal features.

#### Acceptance Criteria

1. WHILE viewing any portal page, THE Portal_Navigation SHALL display a sidebar or navigation bar
2. THE Portal_Navigation SHALL include links to Dashboard, Activity, and Health pages
3. THE Portal_Navigation SHALL include a logout button
4. WHEN a navigation link is clicked, THE Portal_Navigation SHALL navigate to the corresponding page
5. THE Portal_Navigation SHALL visually indicate the currently active page

### Requirement 8: Database Schema

**User Story:** As a developer, I want properly structured database tables, so that data is stored consistently and can be queried efficiently.

#### Acceptance Criteria

1. THE Leads_Table SHALL contain columns: id (uuid, primary key), name (text), phone (text), service (text), created_at (timestamp)
2. THE System_Logs_Table SHALL contain columns: id (uuid, primary key), action_type (text), message (text), created_at (timestamp)
3. THE Leads_Table SHALL have Row Level Security enabled with read access for authenticated users
4. THE System_Logs_Table SHALL have Row Level Security enabled with read/write access for authenticated users

### Requirement 9: Visual Design Consistency

**User Story:** As the site owner, I want the portal to match my brand, so that it feels like a cohesive part of my website.

#### Acceptance Criteria

1. THE Portal_UI SHALL use the existing Fumigatron green color theme (brand-green, brand-forest)
2. THE Portal_UI SHALL use Tailwind CSS classes consistent with the existing App.tsx styling
3. THE Portal_UI SHALL maintain a clean, modern, enterprise aesthetic
4. THE Portal_UI SHALL be responsive and functional on mobile devices
