
-- Workflow Definitions
CREATE TABLE WorkflowDefinition (
    WorkflowID INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL UNIQUE,
    Description NVARCHAR(255) NULL,
    IsActive BIT NOT NULL DEFAULT 1,
    CreatedDate DATETIME DEFAULT GETDATE()
);

-- Stages
CREATE TABLE Stage (
    StageID INT IDENTITY(1,1) PRIMARY KEY,
    WorkflowID INT FOREIGN KEY REFERENCES WorkflowDefinition(WorkflowID),
    Name NVARCHAR(100) NOT NULL,
    RoleID INT,
    IsInitial BIT NOT NULL DEFAULT 0,
    IsFinal BIT NOT NULL DEFAULT 0,
    SLA_Hours INT NULL,
    StageOrder INT NULL
);

-- Transitions
CREATE TABLE Transition (
    TransitionID INT IDENTITY(1,1) PRIMARY KEY,
    WorkflowID INT FOREIGN KEY REFERENCES WorkflowDefinition(WorkflowID),
    FromStageID INT FOREIGN KEY REFERENCES Stage(StageID),
    ToStageID INT FOREIGN KEY REFERENCES Stage(StageID),
    ActionName NVARCHAR(50) NOT NULL,
    AllowedRoleID INT NULL,
    DisplayName NVARCHAR(100) NULL
);

-- Workflow Instances
CREATE TABLE WorkflowInstance (
    InstanceID INT IDENTITY(1,1) PRIMARY KEY,
    WorkflowID INT FOREIGN KEY REFERENCES WorkflowDefinition(WorkflowID),
    FormID INT NOT NULL,
    CurrentStageID INT FOREIGN KEY REFERENCES Stage(StageID),
    StartedBy NVARCHAR(100),
    StartDate DATETIME DEFAULT GETDATE(),
    LastUpdated DATETIME DEFAULT GETDATE(),
    IsCompleted BIT DEFAULT 0
);

-- Tasks
CREATE TABLE Task (
    TaskID INT IDENTITY(1,1) PRIMARY KEY,
    InstanceID INT FOREIGN KEY REFERENCES WorkflowInstance(InstanceID),
    StageID INT FOREIGN KEY REFERENCES Stage(StageID),
    AssignedRoleID INT,
    AssignedToUser NVARCHAR(100),
    DelegatedToUser NVARCHAR(100) NULL,
    Status NVARCHAR(20) DEFAULT 'Pending',
    ActionTaken NVARCHAR(50) NULL,
    CompletedBy NVARCHAR(100) NULL,
    CompletedDate DATETIME NULL,
    DueDate DATETIME NULL,
    Comments NVARCHAR(500) NULL
);

-- Roles
CREATE TABLE Role (
    RoleID INT IDENTITY(1,1) PRIMARY KEY,
    RoleName NVARCHAR(50) NOT NULL,
    ADGroup NVARCHAR(100),
    Description NVARCHAR(255) NULL
);

-- Delegation
CREATE TABLE Delegation (
    DelegationID INT IDENTITY(1,1) PRIMARY KEY,
    FromUser NVARCHAR(100) NOT NULL,
    ToUser NVARCHAR(100) NOT NULL,
    RoleID INT FOREIGN KEY REFERENCES Role(RoleID),
    StartDate DATETIME NOT NULL,
    EndDate DATETIME NULL,
    IsActive BIT DEFAULT 1
);
