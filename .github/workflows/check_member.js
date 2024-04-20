module.exports = async ({github, context}) => {
    const checkIfUserExistsInDatabase = async (userId) => {
        // Implementation to check if user exists in the database
        // You can use database queries or any other method to perform this check
        return true; // For demonstration purposes, always returning true
    };
  
    const githubId = context.payload.pull_request.user.login;
    const userExists = await checkIfUserExistsInDatabase(githubId);
    if (userExists) {
        await github.issues.createComment({
            issue_number: context.issue.number,
            owner: context.repo.owner,
            repo: context.repo.repo,
            body: `It doesn't seem like you are a ColorStack member. This codebase is primarily meant to benefit our students so that they can gain experience contributing to a codebase, so unfortunately your contribution will not be prioritized. 
            
  If you are a ColorStack member, then be sure to connect your GitHub account in your [Member Profile](https://app.colorstack.io/profile/integrations)!`
        });
    }
  };