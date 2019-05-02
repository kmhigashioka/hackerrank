import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {
  static boolean[][] visited;

  // Complete the connectedCell function below.
  static int connectedCell(int[][] matrix) {
    visited = new boolean[matrix.length][matrix.length];
    int max = 0;
    for (int i=0; i<matrix.length; i++) {
      for (int j=0; j<matrix[i].length; j++) {
        max = Math.max(max, traverse(matrix, i, j));
      }
    }
    return max;
  }

  private static int traverse(int[][] matrix, int i, int j) {
    if (i < 0 || j < 0) return 0;
    else if (i >= matrix.length) return 0;
    else if (j >= matrix[i].length) return 0;

    if (matrix[i][j] == 0) return 0;

    int c = 0;
    if (matrix[i][j] == 1) c++;
    matrix[i][j] = 0;

    return c +
      traverse(matrix, i + 1, j) +        // RIGHT
      traverse(matrix, i - 1, j) +        // LEFT
      traverse(matrix, i, j + 1) +        // UP
      traverse(matrix, i, j - 1) +        // DOWN
      traverse(matrix, i + 1, j + 1) +    // UP RIGHT
      traverse(matrix, i + 1, j - 1) +    // DOWN RIGHT
      traverse(matrix, i - 1, j + 1) +    // UP LEFT
      traverse(matrix, i - 1, j - 1);        // DOWN LEFT
  }

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) throws IOException {
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int n = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    int m = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    int[][] matrix = new int[n][m];

    for (int i = 0; i < n; i++) {
      String[] matrixRowItems = scanner.nextLine().split(" ");
      scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

      for (int j = 0; j < m; j++) {
        int matrixItem = Integer.parseInt(matrixRowItems[j]);
        matrix[i][j] = matrixItem;
      }
    }

    int result = connectedCell(matrix);

    bufferedWriter.write(String.valueOf(result));
    bufferedWriter.newLine();

    bufferedWriter.close();

    scanner.close();
  }
}
