-- SQL script that creates a stored procedure ComputeAverageScoreForUser
-- that computes and store the average score for a student
DROP PROCEDURE IF EXISTS ComputeAverageScoreForUser;
DELIMITER |
CREATE PROCEDURE ComputeOverallScoreForUser (
  IN user_id INT)
BEGIN
  UPDATE users
  SET overall_score = (
    SELECT AVG(score) FROM corrections
    WHERE corrections.user_id = user_id
    GROUP BY corrections.user_id)
  WHERE id = user_id;
END;
|
