export enum UserStatus {
  active = "active",
  inactive = "inactive",
  pending = "pending",
}

export enum UserRole {
  admin = "admin",
  manager = "manager",
  user = "user",
}

export interface User {
  id: number;
  fullName: string;
  username: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
}

export const dummyUsers: User[] = [
  {
    id: 1,
    fullName: "Mawira Njeri",
    username: "mawira",
    role: UserRole.admin,
    status: UserStatus.active,
    createdAt: "2025-12-01T09:15:00Z",
  },
  {
    id: 2,
    fullName: "James Otieno",
    username: "jameso",
    role: UserRole.manager,
    status: UserStatus.active,
    createdAt: "2025-11-22T14:30:00Z",
  },
  {
    id: 3,
    fullName: "Grace Wanjiku",
    username: "gracew",
    role: UserRole.user,
    status: UserStatus.inactive,
    createdAt: "2025-10-18T11:45:00Z",
  },
  {
    id: 4,
    fullName: "Samuel Kariuki",
    username: "samuelk",
    role: UserRole.user,
    status: UserStatus.active,
    createdAt: "2025-09-05T08:20:00Z",
  },
  {
    id: 5,
    fullName: "Linda Mwikali",
    username: "lindam",
    role: UserRole.manager,
    status: UserStatus.pending,
    createdAt: "2025-12-03T10:05:00Z",
  },
];
