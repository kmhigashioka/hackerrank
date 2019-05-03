import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

  // Complete the bfs function below.
  static int[] bfs(int n, int m, int[][] edges, int s) {
    Graph graph = new Graph(n + 1);
    int[] distances = new int[n + 1];
    for (int i = 0; i <= n; i++) {
      distances[i] = -1;
    }
    distances[s] = 0;

    for (int i = 0; i < m; i++) {
      graph.addEdge(edges[i][0], edges[i][1]);
    }

    Queue q = new Queue();
    q.add(s);

    while (!q.isEmpty()) {
      int vertex = q.poll();
      AdjlistNode x = graph.adjListArr[vertex].head;
      while (x != null) {
        if (distances[x.vertex] == -1) {
          q.add(x.vertex);
          distances[x.vertex] = distances[vertex] + 6;
        }
        x = x.next;
      }
    }

    int[] actualDistances = new int[n - 1];
    for (int i = 1, j = 0; i <= n; i++) {
      if (i == s)
        continue;
      actualDistances[j++] = distances[i];
    }

    return actualDistances;
  }

  private static final Scanner scanner = new Scanner(System.in);

  public static void main(String[] args) throws IOException {
    BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

    int q = scanner.nextInt();
    scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

    for (int qItr = 0; qItr < q; qItr++) {
      String[] nm = scanner.nextLine().split(" ");

      int n = Integer.parseInt(nm[0]);

      int m = Integer.parseInt(nm[1]);

      int[][] edges = new int[m][2];

      for (int i = 0; i < m; i++) {
        String[] edgesRowItems = scanner.nextLine().split(" ");
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        for (int j = 0; j < 2; j++) {
          int edgesItem = Integer.parseInt(edgesRowItems[j]);
          edges[i][j] = edgesItem;
        }
      }

      int s = scanner.nextInt();
      scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

      int[] result = bfs(n, m, edges, s);

      for (int i = 0; i < result.length; i++) {
        bufferedWriter.write(String.valueOf(result[i]));

        if (i != result.length - 1) {
          bufferedWriter.write(" ");
        }
      }

      bufferedWriter.newLine();
    }

    bufferedWriter.close();

    scanner.close();
  }
}


class Queue {
  LinkedList head;
  LinkedList tail;

  public void add(int vertex) {
    LinkedList temp = new LinkedList(vertex);
    if (head == null) {
      head = tail = temp;
      return;
    }
    tail.next = temp;
    tail = tail.next;
  }

  public int poll() {
    LinkedList temp = head;
    head = head.next;
    if (head == null)
      tail = head;
    return temp.data;
  }

  public boolean isEmpty() {
    return head == null;
  }
}

class LinkedList {
    public LinkedList next;
    public int data;

    public LinkedList(int data) {
        this.data = data;
    }
}

class Graph {
  int num_vertices;
  AdjList[] adjListArr;

  public Graph(int n) {
    num_vertices = n;
    adjListArr = new AdjList[n];
    for (int i = 0; i < n; i++) {
      adjListArr[i] = new AdjList();
    }
  }

  void addEdge(int src, int dest) {
    AdjlistNode newNode = new AdjlistNode(dest);
    if (adjListArr[src].tail != null) {
      adjListArr[src].tail.next = newNode;
      adjListArr[src].tail = newNode;
    } else {
      adjListArr[src].head = adjListArr[src].tail = newNode;
    }
    adjListArr[src].num_members++;

    newNode = new AdjlistNode(src);
    if (adjListArr[dest].tail != null) {
      adjListArr[dest].tail.next = newNode;
      adjListArr[dest].tail = newNode;
    } else {
      adjListArr[dest].head = adjListArr[dest].tail = newNode;
    }
    adjListArr[dest].num_members++;
  }

  void display(int i) {
    AdjlistNode adjList = adjListArr[i].head;
    while (adjList != null) {
      System.out.printf("%d ", adjList.vertex);
      adjList = adjList.next;
    }
    System.out.printf("\n");
  }
}

class AdjlistNode {
  int vertex;
  AdjlistNode next;

  public AdjlistNode(int v) {
    vertex = v;
    next = null;
  }
}

class AdjList {
  int num_members;
  AdjlistNode head;
  AdjlistNode tail;

  public AdjList() {
    num_members = 0;
    head = tail = null;
  }
}
