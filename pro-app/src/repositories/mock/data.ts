import { ProApplication } from "../../entities";

// Mock database data
export const mockData: ProApplication[] = [
  {
    id: 1,
    age: 30,
    education_level: "no_education",
    past_experiences: {
      sales: true,
      support: false,
    },
    internet_test: {
      download_speed: 23.4,
      upload_speed: 20.2,
    },
    writing_score: 0.6,
    referral_code: "token1234",
  },
  {
    id: 2,
    age: 16,
    education_level: "high_school",
    past_experiences: {
      sales: true,
      support: false,
    },
    internet_test: {
      download_speed: 43.4,
      upload_speed: 30.2,
    },
    writing_score: 0.3,
    referral_code: "token1234",
  },

  {
    id: 3,
    age: 23,
    education_level: "bachelors_degree_or_high",
    past_experiences: {
      sales: false,
      support: false,
    },
    internet_test: {
      download_speed: 20.4,
      upload_speed: 20.2,
    },
    writing_score: 0.3,
    referral_code: "token1234",
  },
];
