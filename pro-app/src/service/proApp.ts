import { ProApplication } from "../entities/";

export class ProApplicationService {
  calculateScore(proApplication: ProApplication): number {
    let score = 0;

    if (proApplication.age >= 0 && proApplication.age < 18) {
      return score;
    }

    if (proApplication.education_level === "high_school") {
      score += 1;
    } else if (proApplication.education_level === "bachelors_degree_or_high") {
      score += 2;
    }

    if (proApplication.past_experiences.sales) {
      score += 5;
    }

    if (proApplication.past_experiences.support) {
      score += 3;
    }

    if (proApplication.internet_test.download_speed > 50) {
      score += 1;
    }

    if (proApplication.internet_test.upload_speed > 50) {
      score += 1;
    }

    if (proApplication.writing_score < 0.3) {
      score -= 1;
    } else if (
      proApplication.writing_score >= 0.3 &&
      proApplication.writing_score <= 0.7
    ) {
      score += 1;
    } else if (proApplication.writing_score > 0.7) {
      score += 2;
    }

    if (proApplication.referral_code === "token1234") {
      score += 1;
    }

    return score;
  }

  findEligibleProjects(score: number): string[] {
    const projects: string[] = [];

    if (score > 10) {
      projects.push("Calculate the Dark Matter of the universe for Nasa");
    }

    if (score > 5) {
      projects.push("Determine if the Schrodinger's cat is alive");
    }

    if (score > 3) {
      projects.push("Attend to users support for a YXZ Company");
    }

    if (score > 2) {
      projects.push(
        "Collect specific people information from their social media for XPTO Company"
      );
    }

    return projects;
  }
}
