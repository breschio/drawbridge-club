import { useState, useEffect } from 'react';

interface GitHubRepoResponse {
  stargazers_count: number;
}

/**
 * Custom hook to fetch GitHub star count for a repository
 * @param owner - Repository owner (e.g., 'breschio')
 * @param repo - Repository name (e.g., 'drawbridge')
 * @returns Object with starCount, isLoading, and error
 */
export const useGithubStars = (owner: string = 'breschio', repo: string = 'drawbridge') => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // In-memory cache to prevent refetching on re-renders
    const cacheKey = `github-stars-${owner}-${repo}`;
    const cached = sessionStorage.getItem(cacheKey);
    
    if (cached) {
      try {
        const { count, timestamp } = JSON.parse(cached);
        // Cache valid for 5 minutes
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          setStarCount(count);
          setIsLoading(false);
          return;
        }
      } catch (e) {
        // Invalid cache, continue to fetch
      }
    }

    // Fetch star count from GitHub API
    const fetchStars = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const data: GitHubRepoResponse = await response.json();
        const count = data.stargazers_count;
        
        setStarCount(count);
        
        // Cache the result
        sessionStorage.setItem(cacheKey, JSON.stringify({
          count,
          timestamp: Date.now()
        }));
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch star count'));
        setStarCount(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStars();
  }, [owner, repo]);

  return { starCount, isLoading, error };
};

