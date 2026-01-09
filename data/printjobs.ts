import { dummyStudies } from "./studies";

export type PrintJobStatus = "pending" | "completed" | "failed";

export interface PrintJob {
  id: number;
  jobReference: string;
  studyCode: string; // links to Study.code
  barcodeSeries: string;
  startBarcode: string;
  endBarcode: string;
  quantity: number;
  printedBy: string;
  dateRecorded: string;
  status: PrintJobStatus;
}

export const dummyPrintJobs: PrintJob[] = [
  {
    id: 1,
    jobReference: "JOB-001",
    studyCode: dummyStudies[0].code,
    barcodeSeries: "NLSS-2025-A",
    startBarcode: "NLSS-20250001",
    endBarcode: "NLSS-20250050",
    quantity: 50,
    printedBy: "Mawira Njeri",
    dateRecorded: "2025-12-05T09:15:00Z",
    status: "completed",
  },
  {
    id: 2,
    jobReference: "JOB-002",
    studyCode: dummyStudies[0].code,
    barcodeSeries: "NLSS-2025-B",
    startBarcode: "NLSS-20250051",
    endBarcode: "NLSS-20250100",
    quantity: 50,
    printedBy: "James Otieno",
    dateRecorded: "2025-12-06T11:30:00Z",
    status: "pending",
  },
  {
    id: 3,
    jobReference: "JOB-003",
    studyCode: dummyStudies[1].code,
    barcodeSeries: "RVCA-01-A",
    startBarcode: "RVCA010001",
    endBarcode: "RVCA010030",
    quantity: 30,
    printedBy: "Grace Wanjiku",
    dateRecorded: "2025-12-01T08:00:00Z",
    status: "completed",
  },
  {
    id: 4,
    jobReference: "JOB-004",
    studyCode: dummyStudies[2].code,
    barcodeSeries: "AMR-BL-01",
    startBarcode: "AMRBL0001",
    endBarcode: "AMRBL0020",
    quantity: 20,
    printedBy: "Samuel Kariuki",
    dateRecorded: "2025-11-28T14:45:00Z",
    status: "failed",
  },
  {
    id: 5,
    jobReference: "JOB-005",
    studyCode: dummyStudies[3].code,
    barcodeSeries: "ZDEW-P-01",
    startBarcode: "ZDEWP0001",
    endBarcode: "ZDEWP0050",
    quantity: 50,
    printedBy: "Linda Mwikali",
    dateRecorded: "2025-12-03T10:20:00Z",
    status: "completed",
  },
  {
    id: 6,
    jobReference: "JOB-006",
    studyCode: dummyStudies[4].code,
    barcodeSeries: "SDPS-01-A",
    startBarcode: "SDPS01001",
    endBarcode: "SDPS01025",
    quantity: 25,
    printedBy: "Mawira Njeri",
    dateRecorded: "2025-12-04T12:00:00Z",
    status: "pending",
  },
  {
    id: 7,
    jobReference: "JOB-007",
    studyCode: dummyStudies[4].code,
    barcodeSeries: "SDPS-01-B",
    startBarcode: "SDPS01026",
    endBarcode: "SDPS01050",
    quantity: 25,
    printedBy: "James Otieno",
    dateRecorded: "2025-12-06T09:45:00Z",
    status: "completed",
  },
  {
    id: 8,
    jobReference: "JOB-008",
    studyCode: dummyStudies[5].code,
    barcodeSeries: "WLIA-01-A",
    startBarcode: "WLIA010001",
    endBarcode: "WLIA010040",
    quantity: 40,
    printedBy: "Grace Wanjiku",
    dateRecorded: "2025-11-20T15:30:00Z",
    status: "failed",
  },
  {
    id: 9,
    jobReference: "JOB-009",
    studyCode: dummyStudies[5].code,
    barcodeSeries: "WLIA-01-B",
    startBarcode: "WLIA010041",
    endBarcode: "WLIA010080",
    quantity: 40,
    printedBy: "Samuel Kariuki",
    dateRecorded: "2025-11-22T10:10:00Z",
    status: "completed",
  },
];
