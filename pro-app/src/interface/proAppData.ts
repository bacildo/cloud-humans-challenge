export interface IProApplication {
  age: number;
  education_level: 'no_education' | 'high_school' | 'bachelors_degree_or_high';
  past_experiences: {
    sales: boolean;
    support: boolean;
  };
  internet_test: {
    download_speed: number;
    upload_speed: number;
  };
  writing_score: number;
  referral_code?: string;
}