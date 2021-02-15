/**
 * 动态规划
 * Dynamic Programming
 */

/**
 * 爬楼梯
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * @param n
 * 台阶数
 */
function climbStairs(n){
  const dp = []
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2

  for (let i = 0; i < n; i++) {
    dp[n] = dp[i-1] + dp[i-2]
  }

  return dp[n]
}
