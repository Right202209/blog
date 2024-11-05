---
title: "数据结构"
tags:
    - utility
    - giscus
date: "2024-02-07"
thumbnail: "https://i.ibb.co/V9j2Qsg/sample.webp"
bookmark: true
---
# 数据结构

以下是一个简要的、包括代码和解释的数据结构教程大纲：


### 1. 数组（Array）

- **解释**：

- 数组是一种线性数据结构，由一系列连续的内存单元组成，用于存储相同类型的元素。

- **基本操作**：

- 访问、插入、删除、查找。

- **示例代码**（Python）：

  ```python
  # 创建数组
  arr = [1, 2, 3, 4, 5]
  
  # 访问元素
  print(arr[0])  # 输出：1
  
  # 插入元素
  arr.append(6)
  
  # 删除元素
  del arr[2]
  
  # 查找元素
  if 3 in arr:
      print("Element found")
  ```

### 2. 链表（Linked List）

- **解释**：

- 链表是一种线性数据结构，由一系列节点组成，每个节点包含数据和指向下一个节点的引用。

- **基本操作**：

- 插入、删除、查找。

- **示例代码**（Python）：

  ```python
  # 定义节点
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  
  # 创建链表
  class LinkedList:
      def __init__(self):
          self.head = None
  
      # 在链表末尾插入节点
      def append(self, data):
          new_node = Node(data)
          if self.head is None:
              self.head = new_node
              return
          last_node = self.head
          while last_node.next:
              last_node = last_node.next
          last_node.next = new_node
  
      # 在链表中删除节点
      def delete(self, key):
          temp = self.head
          if temp is not None:
              if temp.data == key:
                  self.head = temp.next
                  temp = None
                  return
          while temp is not None:
              if temp.data == key:
                  break
              prev = temp
              temp = temp.next
          if temp == None:
              return
          prev.next = temp.next
          temp = None
  ```

###  栈

栈（Stack）是一种线性数据结构，具有后进先出（Last In, First Out，LIFO）的特性，即最后进入栈的元素最先被访问或移出。栈通常具有以下基本操作：

1. **压入（Push）**：将元素添加到栈的顶部。
2. **弹出（Pop）**：从栈顶移除元素。
3. **查看栈顶元素（Peek）**：获取栈顶的元素值，但不对栈进行修改。
4. **判空（isEmpty）**：判断栈是否为空。
5. **获取栈的大小（getSize）**：获取栈中元素的数量。

栈可以通过数组或链表实现。

### 栈的应用：

1. **函数调用栈**：在编程中，函数调用时使用栈来保存函数的局部变量和返回地址。
2. **表达式求值**：如中缀表达式转换为后缀表达式并求值。
3. **内存管理**：栈用于跟踪内存中变量的分配和释放。
4. **浏览器历史记录**：浏览器使用栈来实现“后退”和“前进”按钮的功能。
5. **撤销操作**：许多应用程序使用栈来实现撤销操作。

### 栈的示例代码（Python）：

```python
class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.isEmpty():
            return self.items.pop()
        else:
            return "Stack is empty"

    def peek(self):
        if not self.isEmpty():
            return self.items[-1]
        else:
            return "Stack is empty"

    def getSize(self):
        return len(self.items)

# 示例
stack = Stack()
stack.push(1)
stack.push(2)
stack.push(3)
print("Stack peek:", stack.peek())  # 输出：3
print("Stack size:", stack.getSize())  # 输出：3
print("Popped item:", stack.pop())  # 输出：3
```

栈是一种简单而强大的数据结构，常用于许多编程场景中。理解栈的原理和应用有助于提高编程效率和解决问题的能力。



## 队列

队列（Queue）是一种线性数据结构，具有先进先出（First In, First Out，FIFO）的特性，即最先进入队列的元素最先被访问或移出。队列通常具有以下基本操作：

1. **入队（Enqueue）**：将元素添加到队列的尾部。
2. **出队（Dequeue）**：从队列的头部移除元素。
3. **查看队首元素（Peek）**：获取队列头部的元素值，但不对队列进行修改。
4. **判空（isEmpty）**：判断队列是否为空。
5. **获取队列的大小（getSize）**：获取队列中元素的数量。

队列可以通过数组或链表实现。

### 队列的应用：

1. **任务调度**：操作系统中进程的调度使用队列来实现先来先服务（FCFS）或其他调度算法。
2. **消息传递**：在计算机网络和消息队列系统中，队列用于传递和处理消息。
3. **广度优先搜索（BFS）**：在图的搜索算法中，BFS使用队列来保存遍历的顶点。
4. **缓存**：在计算机系统中，队列用于实现缓存淘汰策略，如最近最少使用（LRU）。
5. **打印队列**：打印机使用队列来管理打印作业的顺序。

### 队列的示例代码（Python）：

```python
class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.append(item)

    def dequeue(self):
        if not self.isEmpty():
            return self.items.pop(0)
        else:
            return "Queue is empty"

    def peek(self):
        if not self.isEmpty():
            return self.items[0]
        else:
            return "Queue is empty"

    def getSize(self):
        return len(self.items)

# 示例
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
print("Queue peek:", queue.peek())  # 输出：1
print("Queue size:", queue.getSize())  # 输出：3
print("Dequeued item:", queue.dequeue())  # 输出：1
```

队列是一种常用的数据结构，在许多领域都有广泛的应用。理解队列的原理和使用方法有助于提高编程的效率和解决问题的能力。

以下是C++代码示例，涵盖了数组、链表、队列、树、图、集合和映射的基本实现，并附有简要解释：

### 数组（Array）：

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 数组是一种用于存储相同类型元素的线性数据结构。在这个例子中，我们创建了一个包含五个整数的数组，并通过循环遍历打印数组中的元素。

### 链表（Linked List）：

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node* head = new Node();
    head->data = 1;
    head->next = nullptr;
    Node* second = new Node();
    second->data = 2;
    second->next = nullptr;
    head->next = second;
    return 0;
}
```

- 链表是一种由节点组成的线性数据结构，每个节点包含数据和指向下一个节点的指针。在这个例子中，我们创建了两个节点，并使用指针连接它们，形成一个简单的链表。

### 队列（Queue）：

```cpp
#include <iostream>
#include <queue>
using namespace std;

int main() {
    queue<int> q;
    q.push(1);
    q.push(2);
    q.push(3);
    while (!q.empty()) {
        cout << q.front() << " ";
        q.pop();
    }
    return 0;
}
```

- 队列是一种先进先出（FIFO）的线性数据结构，支持在队尾插入元素，队头删除元素。在这个例子中，我们使用标准库中的队列来演示队列的基本操作。

### 树（Tree）：

```cpp
#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
};

int main() {
    TreeNode* root = new TreeNode();
    root->data = 1;
    root->left = new TreeNode();
    root->left->data = 2;
    root->right = new TreeNode();
    root->right->data = 3;
    return 0;
}
```

- 树是一种非线性数据结构，由节点组成，每个节点有一个父节点和零个或多个子节点。在这个例子中，我们创建了一个简单的二叉树，并分配了节点的数据和连接关系。

### 图（Graph）：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<vector<int>> graph = {
        {0, 1, 0, 0},
        {1, 0, 1, 1},
        {0, 1, 0, 1},
        {0, 1, 1, 0}
    };
    // 可以根据需要对图进行进一步的操作
    return 0;
}
```

- 图是由节点和边组成的非线性数据结构。在这个例子中，我们使用邻接矩阵表示图的连接关系。

### 集合（Set）：

```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s;
    s.insert(1);
    s.insert(2);
    s.insert(3);
    for (auto it = s.begin(); it != s.end(); ++it) {
        cout << *it << " ";
    }
    return 0;
}
```

- 集合是一种不重复元素的数据结构。在这个例子中，我们使用集合来存储整数，并通过迭代器遍历集合中的元素。

### 映射（Map）：

```cpp
#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> m;
    m["one"] = 1;
    m["two"] = 2;
    m["three"] = 3;
    for (auto it = m.begin(); it != m.end(); ++it) {
        cout << it->first << ": " << it->second << endl;
    }
    return 0;
}
```

- 映射是一种键值对的数据结构。在这个例子中，我们使用映射来存储字符串和对应的整数，并通过迭代器遍历映射中的键值对。

这些示例展示了 C++ 中基本数据结构的简单实现，帮助理解它们的基本概念和用法。

以下是C代码示例，涵盖了数组、链表、队列、树、图、集合和映射的基本实现，并附有简要解释：

### 数组（Array）：

```c
#include <stdio.h>

int main() {
    int arr[5] = {1, 2, 3, 4, 5};
    for (int i = 0; i < 5; ++i) {
        printf("%d ", arr[i]);
    }
    return 0;
}
```

- 数组是一种用于存储相同类型元素的线性数据结构。在这个例子中，我们创建了一个包含五个整数的数组，并通过循环遍历打印数组中的元素。

### 链表（Linked List）：

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

int main() {
    struct Node* head = (struct Node*)malloc(sizeof(struct Node));
    head->data = 1;
    head->next = NULL;
    struct Node* second = (struct Node*)malloc(sizeof(struct Node));
    second->data = 2;
    second->next = NULL;
    head->next = second;
    return 0;
}
```

- 链表是一种由节点组成的线性数据结构，每个节点包含数据和指向下一个节点的指针。在这个例子中，我们创建了两个节点，并使用指针连接它们，形成一个简单的链表。

### 队列（Queue）：

```c
#include <stdio.h>
#include <stdlib.h>

struct Queue {
    int* items;
    int front;
    int rear;
    int capacity;
};

int main() {
    struct Queue q;
    q.capacity = 5;
    q.front = 0;
    q.rear = -1;
    q.items = (int*)malloc(q.capacity * sizeof(int));
    q.items[++q.rear] = 1;
    q.items[++q.rear] = 2;
    q.items[++q.rear] = 3;
    while (q.front <= q.rear) {
        printf("%d ", q.items[q.front++]);
    }
    free(q.items);
    return 0;
}
```

- 队列是一种先进先出（FIFO）的线性数据结构，支持在队尾插入元素，队头删除元素。在这个例子中，我们使用数组实现了一个简单的队列。

### 树（Tree）：

```c
#include <stdio.h>
#include <stdlib.h>

struct TreeNode {
    int data;
    struct TreeNode* left;
    struct TreeNode* right;
};

int main() {
    struct TreeNode* root = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->data = 1;
    root->left = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->left->data = 2;
    root->left->left = NULL;
    root->left->right = NULL;
    root->right = (struct TreeNode*)malloc(sizeof(struct TreeNode));
    root->right->data = 3;
    root->right->left = NULL;
    root->right->right = NULL;
    return 0;
}
```

- 树是一种非线性数据结构，由节点组成，每个节点有一个父节点和零个或多个子节点。在这个例子中，我们创建了一个简单的二叉树，并分配了节点的数据和连接关系。

### 图（Graph）：

```c
#include <stdio.h>

int main() {
    int graph[4][4] = {
        {0, 1, 0, 0},
        {1, 0, 1, 1},
        {0, 1, 0, 1},
        {0, 1, 1, 0}
    };
    // 可以根据需要对图进行进一步的操作
    return 0;
}
```

- 图是由节点和边组成的非线性数据结构。在这个例子中，我们使用邻接矩阵表示图的连接关系。

### 集合（Set）：

```c
#include <stdio.h>
#include <stdbool.h>

#define SET_SIZE 5

int main() {
    int set[SET_SIZE] = {1, 2, 3, 4, 5};
    for (int i = 0; i < SET_SIZE; ++i) {
        printf("%d ", set[i]);
    }
    return 0;
}
```

- 集合是一种不重复元素的数据结构。在这个例子中，我们创建了一个整数集合并打印了集合中的元素。

### 映射（Map）：

```c
#include <stdio.h>

int main() {
    struct Map {
        char key;
        int value;
    };
    struct Map map[3] = {
        {'a', 1},
        {'b', 2},
        {'c', 3}
    };
    for (int i = 0; i < 3; ++i) {
        printf("%c: %d\n", map[i].key, map[i].value);
    }
    return 0;
}
```

- 映射是一种键值对的数据结构。在这个例子中，我们使用结构体数组实现了一个简单的映射，并打印了映射中的键值对。

这些示例展示了 C 中基本数据结构的简单实现，帮助理解它们的基本概念和用法。



### C语言实现：

#### 平衡树（Balanced Tree）：

平衡树是一种树形数据结构，确保在插入或删除元素时树的高度保持较小的增量，从而保持树的平衡性。常见的平衡树包括AVL树、红黑树等。

#### 堆（Heap）：

堆是一种特殊的树形数据结构，通常是一个数组对象，用于表示完全二叉树。堆的性质是父节点的键值总是保持固定的序关系，如小顶堆中父节点的值小于或等于子节点的值，大顶堆则相反。

#### 哈希表（Hash Table）：

哈希表是一种数据结构，用于存储键值对。哈希表通过将键映射到表中的一个位置来加快查找速度。在哈希表中，键的值经过哈希函数计算后得到一个索引，然后将值存储在对应的索引位置。

#### 图算法（Graph Algorithms）：

图算法是针对图数据结构的算法，用于解决图中的各种问题，如最短路径、最小生成树、图的遍历等。常见的图算法包括深度优先搜索（DFS）、广度优先搜索（BFS）、Dijkstra算法、Prim算法等。

### C++语言实现：

#### 平衡树（Balanced Tree）：

C++中可以使用STL提供的`set`和`map`来实现平衡树，`set`基于红黑树实现，`map`是基于红黑树实现的关联容器，确保元素有序。

```cpp
#include <set>
#include <map>
using namespace std;

int main() {
    // 使用set实现平衡树
    set<int> balancedTree;
    balancedTree.insert(3);
    balancedTree.insert(1);
    balancedTree.insert(5);
    // 使用map实现平衡树
    map<char, int> balancedMap;
    balancedMap['a'] = 1;
    balancedMap['b'] = 2;
    balancedMap['c'] = 3;
    return 0;
}
```

#### 堆（Heap）：

C++中可以使用STL提供的`priority_queue`来实现堆，它是一个基于堆的优先队列容器，支持在队列的头部进行快速插入和删除操作。

```cpp
#include <queue>
using namespace std;

int main() {
    // 最小堆
    priority_queue<int, vector<int>, greater<int>> minHeap;
    minHeap.push(3);
    minHeap.push(1);
    minHeap.push(5);
    // 最大堆
    priority_queue<int> maxHeap;
    maxHeap.push(3);
    maxHeap.push(1);
    maxHeap.push(5);
    return 0;
}
```

#### 哈希表（Hash Table）：

C++中可以使用STL提供的`unordered_map`来实现哈希表，它是一个基于哈希函数的关联容器，支持在常数时间内进行插入、删除和查找操作。

```cpp
#include <unordered_map>
using namespace std;

int main() {
    unordered_map<string, int> hashTable;
    hashTable["apple"] = 10;
    hashTable["banana"] = 5;
    hashTable["orange"] = 15;
    return 0;
}
```

#### 图算法（Graph Algorithms）：

C++中可以使用图算法库Boost Graph Library（BGL）来实现各种图算法，包括最短路径、最小生成树、图的遍历等。

```cpp
#include <boost/graph/adjacency_list.hpp>
#include <boost/graph/dijkstra_shortest_paths.hpp>
#include <boost/graph/kruskal_min_spanning_tree.hpp>
using namespace boost;

int main() {
    typedef adjacency_list<vecS, vecS, undirectedS, no_property, property<edge_weight_t, int>> Graph;
    Graph g(4);
    add_edge(0, 1, 2, g);
    add_edge(1, 2, 3, g);
    add_edge(2, 3, 1, g);
    
    // 最短路径
    vector<int> distances(num_vertices(g));
    dijkstra_shortest_paths(g, 0, distance_map(&distances[0]));

    // 最小生成树
    vector<Graph::edge_descriptor> spanning_tree;
    kruskal_minimum_spanning_tree(g, back_in
```

#### 遍历（Traversal）：

遍历是指访问数据结构中的所有元素的过程。常见的数据结构包括数组、链表、树和图。以下是C++中常见数据结构的遍历方法：

##### 数组遍历：

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 数组遍历是通过循环逐个访问数组中的元素。

##### 链表遍历：

```cpp
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node* next;
};

int main() {
    Node* head = new Node();
    head->data = 1;
    head->next = NULL;
    Node* current = head;
    while (current != NULL) {
        cout << current->data << " ";
        current = current->next;
    }
    return 0;
}
```

- 链表遍历是通过指针依次访问链表中的节点。

##### 树的遍历：

```cpp
#include <iostream>
using namespace std;

struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
};

void inorderTraversal(TreeNode* root) {
    if (root == NULL) return;
    inorderTraversal(root->left);
    cout << root->data << " ";
    inorderTraversal(root->right);
}

int main() {
    TreeNode* root = new TreeNode();
    root->data = 1;
    root->left = NULL;
    root->right = NULL;
    inorderTraversal(root);
    return 0;
}
```

- 树的中序遍历是先访问左子树，然后访问根节点，最后访问右子树。

##### 图的遍历：

对于图的遍历，通常使用深度优先搜索（DFS）或广度优先搜索（BFS）。

#### 排序（Sorting）：

排序是将一组数据按照一定的规则重新排列的过程，常见的排序算法包括冒泡排序、选择排序、插入排序、快速排序、归并排序等。

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    sort(arr, arr + n);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 以上是C++中使用STL的`sort`函数对数组进行排序的示例。

#### 搜索（Searching）：

搜索是在数据集合中查找特定元素的过程。常见的搜索算法包括线性搜索、二分搜索等。

```cpp
#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; ++i) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 4;
    int index = linearSearch(arr, n, target);
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}
```

- 以上是C++中线性搜索的示例。

  

### 排序（Sorting）：

排序是将一组数据按照一定的规则重新排列的过程，常见的排序算法包括冒泡排序、选择排序、插入排序、快速排序、归并排序等。

#### 冒泡排序（Bubble Sort）：

```cpp
#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        for (int j = 0; j < n - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    bubbleSort(arr, n);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 冒泡排序是一种基本的排序算法，它重复地走访过要排序的元素列，依次比较相邻的两个元素，如果顺序不对则交换。

### 搜索（Searching）：

搜索是在数据集合中查找特定元素的过程。常见的搜索算法包括线性搜索、二分搜索等。

#### 二分搜索（Binary Search）：

```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int left, int right, int target) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 4;
    int index = binarySearch(arr, 0, n - 1, target);
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}
```

- 二分搜索是一种在有序数组中查找特定元素的搜索算法，它通过将目标值与数组中间元素比较来决定下一步搜索的方向。



### 排序（Sorting）：

#### 选择排序（Selection Sort）：

```cpp
#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
    for (int i = 0; i < n - 1; ++i) {
        int minIndex = i;
        for (int j = i + 1; j < n; ++j) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr[i], arr[minIndex]);
    }
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    selectionSort(arr, n);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 选择排序是一种简单直观的排序算法，它的基本思想是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置。

#### 插入排序（Insertion Sort）：

```cpp
#include <iostream>
using namespace std;

void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; ++i) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    insertionSort(arr, n);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 插入排序是一种简单直观的排序算法，它的基本思想是每次将一个待排序的元素，按其关键字的大小插入到已经排好序的一组元素的适当位置上。

### 搜索（Searching）：

#### 线性搜索（Linear Search）：

```cpp
#include <iostream>
using namespace std;

int linearSearch(int arr[], int n, int target) {
    for (int i = 0; i < n; ++i) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 4;
    int index = linearSearch(arr, n, target);
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}
```

- 线性搜索是一种基础的搜索算法，它逐个地检查数据结构中的每个元素，直到找到目标元素或搜索到数据结构的末尾。



### 排序（Sorting）：

#### 快速排序（Quick Sort）：

```cpp
#include <iostream>
using namespace std;

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(&arr[i], &arr[j]);
        }
    }
    swap(&arr[i + 1], &arr[high]);
    return i + 1;
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    quickSort(arr, 0, n - 1);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 快速排序是一种高效的排序算法，它采用了分治的思想，通过选择一个基准元素，将数据分割成两个子数组，小于基准的元素放在左边，大于基准的元素放在右边，然后对子数组进行递归排序。

#### 归并排序（Merge Sort）：

```cpp
#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0;
    int j = 0;
    int k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l >= r) {
        return;
    }
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}

int main() {
    int arr[] = {3, 1, 4, 2, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    mergeSort(arr, 0, n - 1);
    for (int i = 0; i < n; ++i) {
        cout << arr[i] << " ";
    }
    return 0;
}
```

- 归并排序是一种稳定的排序算法，它将数据分成两个子序列，分别进行递归排序，然后合并两个有序子序列。

### 搜索（Searching）：

#### 二分搜索（Binary Search）：

```cpp
#include <iostream>
using namespace std;

int binarySearch(int arr[], int left, int right, int target) {
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int n = sizeof(arr) / sizeof(arr[0]);
    int target = 4;
    int index = binarySearch(arr, 0, n - 1, target);
    if (index != -1) {
        cout << "Element found at index: " << index << endl;
    } else {
        cout << "Element not found" << endl;
    }
    return 0;
}
```

- 二分搜索是一种高效的搜索算法，但它要求数据必须是有序的。它通过反复将查找范围划分为两半并比较中间元素来减少需要检查的元素数量。

#### 深度优先搜索（Depth First Search，DFS）：

```cpp
#include <iostream>
#include <vector>
#include <stack>
using namespace std;

void dfs(vector<vector<int>>& graph, int start) {
    int n = graph.size();
    vector<bool> visited(n, false);
    stack<int> s;
    s.push(start);
    visited[start] = true;
    cout << "DFS Traversal: ";
    while (!s.empty()) {
        int node = s.top();
        s.pop();
        cout << node << " ";
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                s.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
    cout << endl;
}
int main() {
    vector<vector<int>> graph = {A{1, 2 }, {0, 3, 4}, {0, 5, 6}, {1}, {1}, {2}, {2}A};
    int start = 0;
    dfs(graph, start);
    return 0;
}
```


- 深度优先搜索是一种图遍历算法，它沿着图的深度遍历图的节点，尽可能深地搜索图的分支。DFS 使用栈来实现，它从起始节点开始，沿着一条路径一直到达最深的节点，然后回溯，继续搜索下一条分支。

以上是一些常见的排序和搜索算法的C++实现，它们在实际的编程中具有广泛的应用场景。

## BFS

以下是广度优先搜索（Breadth First Search，BFS）的C++实现示例：

```cpp
#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>
using namespace std;

void bfs(vector<vector<int>>& graph, int start) {
    int n = graph.size();
    vector<bool> visited(n, false);
    queue<int> q;
    q.push(start);
    visited[start] = true;
    cout << "BFS Traversal: ";
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        cout << node << " ";
        for (int neighbor : graph[node]) {
            if (!visited[neighbor]) {
                q.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
    cout << endl;
}

int main() {
    vector<vector<int>> graph = {A{1, 2}, {0, 3, 4}, {0, 5, 6}, {1}, {1}, {2}, {2}};
    int start = 0;
    bfs(graph, start);
    return 0;
}
```

- 广度优先搜索是一种图遍历算法，它从图的某个顶点开始，先访问其所有的相邻节点，然后再依次访问相邻节点的相邻节点，以此类推。BFS使用队列来实现，从起始节点开始，将其加入队列，然后按层级依次访问节点，直到队列为空为止。

快速幂（Fast Exponentiation）是一种用于计算幂运算的算法，它可以在较短的时间内计算出大整数的幂，时间复杂度为 O(logN)。快速幂算法的基本思想是利用指数的二进制表示来减少乘法的次数。

以下是快速幂的C++实现示例：

```cpp
#include <iostream>
using namespace std;

long long fastPower(long long base, long long exponent) {
    long long result = 1;
    while (exponent > 0) {
        if (exponent % 2 == 1) {
            result *= base;
        }
        base *= base;
        exponent /= 2;
    }
    return result;
}

int main() {
    long long base = 2;
    long long exponent = 10;
    long long result = fastPower(base, exponent);
    cout << base << " raised to the power of " << exponent << " is: " << result << endl;
    return 0;
}
```

在这个示例中，`fastPower`函数接受两个参数：底数（base）和指数（exponent），并返回底数的指数次幂。在函数内部，我们使用了一个 while 循环来迭代计算结果。在每次迭代中，我们检查指数的最低位（exponent % 2）是否为1，如果是，则将当前的底数乘到结果中。然后，将底数自乘以进行下一次迭代，并将指数除以2以向右移动到下一个二进制位。

通过这种方式，我们可以在 O(logN) 的时间复杂度内计算出给定底数和指数的幂运算结果。

矩阵快速幂是快速幂算法的一种扩展，用于高效地计算矩阵的幂。它在计算矩阵的幂时，利用了矩阵乘法的性质，并通过将指数表示为二进制来减少乘法的次数，从而降低了时间复杂度。

以下是矩阵快速幂的C++实现示例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

typedef vector<vector<int>> Matrix;

Matrix multiply(Matrix &A, Matrix &B) {
    int n = A.size();
    int m = B[0].size();
    int p = B.size();
    Matrix C(n, vector<int>(m, 0));
    for (int i = 0; i < n; ++i) { //
        for (int j = 0; j < m; ++j) {//
            for (int k = 0; k < p; ++k) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return C;
}

Matrix matrixPower(Matrix &A, int exponent) { //A
    int n = A.size();
    Matrix result(n, vector<int>(n, 0));
    for (int i = 0; i < n; ++i) {//
        result[i][i] = 1; // 单位矩阵
    }
    while (exponent > 0) { //
        if (exponent % 2 == 1) { //
            result = multiply(result, A);
        }
        A = multiply(A, A); // 矩阵平方
        exponent /= 2;
    }
    return result;
}

int main() {//
    Matrix A = {/**/{1, 1}, {1, 0}/**/}; // 斐波那契矩阵
    int exponent = 5; // 指数
    Matrix result = matrixPower(A, exponent);
    cout << "Resulting matrix after raising to the power of " << exponent << ":" << endl;
    for (int i = 0; i < result.size(); ++i) {
        for (int j = 0; j < result[0].size(); ++j) {
            cout << result[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
```

在这个示例中，我们定义了两个函数，`multiply`函数用于计算两个矩阵的乘积，`matrixPower`函数用于计算矩阵的指数次幂。在 `matrixPower` 函数中，我们首先初始化一个单位矩阵作为结果矩阵，然后利用循环和矩阵乘法进行幂运算的计算。通过这种方式，我们可以高效地计算矩阵的幂运算结果。



动态规划（Dynamic Programming，DP）是一种通过将复杂问题分解成更小的子问题来解决的优化技术。它通常用于优化递归算法，避免重复计算子问题。

以下是动态规划的一般步骤：

1. **定义子问题**：将原始问题分解为更小的子问题。
2. **找出状态转移方程**：确定子问题之间的关系，即如何将更大的问题的解构建为更小问题的解。
3. **确定初始条件**：确定最小子问题的解，通常是基本情况的解。
4. **自底向上求解**：根据状态转移方程，从最小的子问题开始，依次解决更大的问题，直到达到原始问题的解。

动态规划常用于解决一些优化问题，如最长公共子序列、背包问题、最短路径问题等。

下面是一个动态规划的示例，解决了斐波那契数列问题：

```cpp
#include <iostream>
#include <vector>
using namespace std;

int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    vector<int> dp(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (int i = 2; i <= n; ++i) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

int main() {
    int n = 10;
    cout << "Fibonacci number at position " << n << " is: " << fibonacci(n) << endl;
    return 0;
}
```

在这个示例中，我们利用动态规划的思想解决了斐波那契数列问题。我们定义了一个长度为 n+1 的动态规划数组 dp，其中 dp[i] 表示斐波那契数列中第 i 个数的值。然后我们使用迭代的方式，根据状态转移方程 dp[i] = dp[i-1] + dp[i-2] 依次求解 dp 数组的值，最终返回 dp[n] 即可得到斐波那契数列第 n 个数的值。



贪心算法（Greedy Algorithm）是一种在每一步选择中都采取在当前状态下最好或最优（即局部最优解）的选择，从而希望能够导致全局最优解的算法策略。贪心算法通常不会回溯，因为它一旦做出选择就不会改变。

贪心算法适用于满足以下两个条件的问题：

1. 最优子结构：问题的最优解包含了子问题的最优解。
2. 贪心选择性质：通过局部最优选择，能够得到全局最优解。

贪心算法的优点在于简单、高效，容易实现。然而，它并不是所有问题都适用，因为它可能会产生局部最优解但不一定能得到全局最优解。

以下是一个简单的贪心算法示例，解决了活动选择问题（Activity Selection Problem）：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Activity {
    int start;
    int finish;
};

bool compare(Activity a, Activity b) {
    return a.finish < b.finish;
}

void selectActivities(vector<Activity>& activities) {
    sort(activities.begin(), activities.end(), compare);
    cout << "Selected activities: ";
    int n = activities.size();
    cout << "(" << activities[0].start << ", " << activities[0].finish << ") ";
    int prev_finish = activities[0].finish;
    for (int i = 1; i < n; ++i) {
        if (activities[i].start >= prev_finish) {
            cout << "(" << activities[i].start << ", " << activities[i].finish << ") ";
            prev_finish = activities[i].finish;
        }
    }
    cout << endl;
}

int main() {
    vector<Activity> activities = {/**/{1, 4}, {3, 5}, {0, 6}, {5, 7}, {3, 9}, {5, 9}, {6, 10}, {8, 11}, {8, 12}, {2, 14}, {12, 16}};
    selectActivities(activities);
    return 0;
}
```

在这个示例中，我们定义了一个活动结构体，包含了每个活动的开始时间和结束时间。然后我们按照活动的结束时间对活动进行排序，然后从排好序的活动中选择最早结束的活动，并确保选中的活动与已选中的活动不重叠。这样，我们就可以通过贪心算法求解出最大的可选活动数量。

以下是贪心算法的另一个示例，解决了找零钱问题（Coin Change Problem）：

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> makeChange(vector<int>& coins, int amount) {
    vector<int> result;
    for (int i = coins.size() - 1; i >= 0; --i) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            result.push_back(coins[i]);
        }
    }
    return result;
}

int main() {
    vector<int> coins = {1, 5, 10, 25}; // 美分硬币面额
    int amount = 99; // 找零的金额
    vector<int> change = makeChange(coins, amount);
    cout << "Change for " << amount << " cents: ";
    for (int coin : change) {
        cout << coin << " ";
    }
    cout << endl;
    return 0;
}
```

在这个示例中，我们有一组美分硬币的面额，以及一个需要找零的金额。我们按照硬币面额从大到小的顺序进行贪心选择，每次尽量选择面额最大的硬币。通过循环遍历硬币面额，我们不断地将最大面额的硬币加入找零列表中，直到达到需要找零的金额。最终返回的找零列表即为贪心算法所得到的结果。

需要注意的是，贪心算法并不一定能够得到最优解，它只能得到局部最优解。在找零钱的问题中，如果硬币面额不是常见的面额组合（如1、5、10、25美分），贪心算法可能无法得到最小数量的硬币找零方案。





二分答案是一种常用的优化技巧，通常用于解决满足某个条件的最优解问题。它的基本思想是，在一个有序的解空间中，利用二分查找的思想来快速地确定满足条件的解的范围。

下面是一个简单的示例，演示了如何使用二分答案来解决一个简单的问题：

假设有一个升序排列的数组 `nums`，我们要找到数组中第一个大于等于目标值 `target` 的元素的下标。

```cpp
#include <iostream>
#include <vector>
using namespace std;

int binarySearch(vector<int>& nums, int target) {
    int left = 0;
    int right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left < nums.size() ? left : -1; // 返回找到的元素的下标，如果找不到则返回 -1
}

int main() {
    vector<int> nums = {1, 3, 5, 7, 9};
    int target = 6;
    int index = binarySearch(nums, target);
    if (index != -1) {
        cout << "The index of the first element greater than or equal to " << target << " is: " << index << endl;
    } else {
        cout << "No such element found." << endl;
    }
    return 0;
}
```

在这个示例中，我们使用了二分答案的思想。我们首先设定一个有序的解空间，在这个示例中，解空间即为数组 `nums` 的索引范围。然后我们通过不断地调整左右边界来缩小解空间，最终找到满足条件的最优解。

二分答案是一种非常高效的优化技巧，在解决一些需要在有序解空间中查找满足条件的最优解的问题时非常有用。

二分答案的思想还可以应用于更复杂的问题，例如求解满足某种条件的最优解，或者在一个有序的范围内查找满足某种条件的解的位置。

下面是一个更复杂的示例，演示了如何使用二分答案来解决一个数值范围内的问题：

假设有一个函数 `bool isValid(int x)`，可以用来判断一个整数 `x` 是否满足某种条件。现在要在一个给定的区间 `[left, right]` 中找到满足条件的最小整数。

```cpp
#include <iostream>
using namespace std;

bool isValid(int x) {
    // 假设这里是一个条件判断函数，用于判断整数 x 是否满足某种条件
    return x >= 10;
}

int binarySearch(int left, int right) {
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (isValid(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

int main() {
    int left = 0;
    int right = 20;
    int result = binarySearch(left, right);
    cout << "The smallest integer that satisfies the condition is: " << result << endl;
    return 0;
}
```

在这个示例中，我们通过二分答案的思想，在给定的区间 `[left, right]` 中查找满足条件的最小整数。我们首先设定了一个有序的解空间，然后不断地调整左右边界来缩小解空间，直到找到满足条件的最小整数。

二分答案的思想可以应用于各种各样的问题，它是一种非常高效且常用的算法优化技巧。





前缀和（Prefix Sum）是一种常用的技巧，用于高效地计算数组或序列的区间和。它的基本思想是预处理数组，将数组中每个位置的前缀和存储起来，然后利用前缀和的性质来快速计算任意区间的和。

以下是一个简单的示例，演示了如何使用前缀和来计算数组的区间和：

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> calculatePrefixSum(vector<int>& nums) {
    int n = nums.size();
    vector<int> prefixSum(n + 1, 0); // 初始化前缀和数组，多出的一个位置用于处理边界情况
    for (int i = 0; i < n; ++i) {
        prefixSum[i + 1] = prefixSum[i] + nums[i]; // 计算前缀和
    }
    return prefixSum;
}

int rangeSum(vector<int>& prefixSum, int left, int right) {
    return prefixSum[right + 1] - prefixSum[left]; // 利用前缀和计算区间和
}

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    vector<int> prefixSum = calculatePrefixSum(nums);
    int left = 1, right = 3; // 求区间 [1, 3] 的和
    int sum = rangeSum(prefixSum, left, right);
    cout << "The sum of elements in the range [" << left << ", " << right << "] is: " << sum << endl;
    return 0;
}
```

在这个示例中，我们首先计算了数组 `nums` 的前缀和，然后通过前缀和数组可以快速地计算任意区间的和。利用前缀和的性质，区间 `[left, right]` 的和等于前缀和数组中右边界 `right+1` 对应的值减去左边界 `left` 对应的值。

前缀和的优势在于在预处理阶段计算了所有可能的区间和，使得在查询阶段可以快速地得到结果，时间复杂度为 O(1)。这使得前缀和成为了解决涉及区间和的问题时一个非常高效的技巧。



除了用于计算数组的区间和，前缀和还可以应用于解决其他类型的问题，比如查找数组中的连续子数组，使得子数组的和满足特定条件。

以下是一个示例，演示了如何使用前缀和来解决一个查找数组中满足特定条件的连续子数组的问题：

假设给定一个整数数组 `nums`，我们要找到一个连续的子数组，使得子数组的和等于目标值 `target`。

```cpp
#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int subarraySum(vector<int>& nums, int target) {
    int count = 0;
    int sum = 0;
    unordered_map<int, int> prefixSumCount; // 前缀和及其出现次数的哈希表
    prefixSumCount[0] = 1; // 初始化前缀和为0的出现次数为1
    for (int num : nums) {
        sum += num;
        if (prefixSumCount.find(sum - target) != prefixSumCount.end()) {
            count += prefixSumCount[sum - target]; // 如果存在前缀和为 sum - target 的子数组，则增加计数
        }
        prefixSumCount[sum]++; // 更新前缀和出现次数
    }
    return count;
}

int main() {
    vector<int> nums = {1, 1, 1};
    int target = 2;
    int count = subarraySum(nums, target);
    cout << "Number of subarrays with sum equal to " << target << " is: " << count << endl;
    return 0;
}
```

在这个示例中，我们使用了一个哈希表 `prefixSumCount` 来存储前缀和及其出现次数。我们从左到右遍历数组 `nums`，在遍历的过程中，计算当前位置的前缀和，并检查是否存在前缀和为 `sum - target` 的子数组。如果存在，则增加计数器。

利用前缀和的思想，我们可以在线性时间内解决这个问题，而不需要通过枚举所有可能的子数组来寻找满足条件的解。这种方法在解决数组和子数组相关的问题时非常高效。

容斥原理（Inclusion-Exclusion Principle）是组合数学中的一种重要原理，用于计算多个集合的并集、交集和补集等操作的元素个数。它是一种通过排除重复计数来计算所需结果的方法。

容斥原理的基本形式是：如果有若干个集合，要求它们的并集中的元素个数，可以通过依次加上每个集合的元素个数，然后减去每两个集合的交集的元素个数，再加上每三个集合的交集的元素个数，依次类推，直到最后加上或减去所有集合的交集的元素个数。

以下是一个简单的示例，演示了如何使用容斥原理计算多个集合的并集中的元素个数：

假设有三个集合 A、B、C，我们要求它们的并集中的元素个数。

```cpp
#include <iostream>
#include <set>
using namespace std;

int inclusionExclusion(set<int>& A, set<int>& B, set<int>& C) {
    int totalElements = A.size() + B.size() + C.size();
    int intersectionAB = 0, intersectionAC = 0, intersectionBC = 0, intersectionABC = 0;
    for (int x : A) {
        if (B.count(x) > 0) intersectionAB++;
        if (C.count(x) > 0) intersectionAC++;
        if (B.count(x) > 0 && C.count(x) > 0) intersectionABC++;
    }
    for (int x : B) {
        if (C.count(x) > 0) intersectionBC++;
    }
    int result = totalElements - intersectionAB - intersectionAC - intersectionBC + intersectionABC;
    return result;
}

int main() {
    set<int> A = {1, 2, 3};
    set<int> B = {3, 4, 5};
    set<int> C = {5, 6, 7};
    int count = inclusionExclusion(A, B, C);
    cout << "Number of elements in the union of sets A, B, C is: " << count << endl;
    return 0;
}
```

在这个示例中，我们首先计算了三个集合的元素个数，并分别计算了它们之间的交集元素个数。然后根据容斥原理的公式，依次减去交集的元素个数，再加上交集的交集的元素个数，得到最终的结果。

二维前缀和是一种用于高效计算二维数组区域和的技巧。它类似于一维前缀和，通过预处理的方式，将原始二维数组转换为一个对应的二维前缀和数组，以便快速计算任意二维区域的和。

以下是一个简单的示例，演示了如何使用二维前缀和来计算二维数组区域和：

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<vector<int>> calculatePrefixSum(vector<vector<int>>& matrix) {
    int m = matrix.size();
    int n = matrix[0].size();
    vector<vector<int>> prefixSum(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i) {
        for (int j = 1; j <= n; ++j) {
            prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + matrix[i - 1][j - 1];
        }
    }
    return prefixSum;
}

int rangeSum(vector<vector<int>>& prefixSum, int row1, int col1, int row2, int col2) {
    return prefixSum[row2 + 1][col2 + 1] - prefixSum[row1][col2 + 1] - prefixSum[row2 + 1][col1] + prefixSum[row1][col1];
}

int main() {
    vector<vector<int>> matrix = {/**/{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    vector<vector<int>> prefixSum = calculatePrefixSum(matrix);
    int row1 = 1, col1 = 1, row2 = 2, col2 = 2; // 计算二维区域和的左上角和右下角坐标
    int sum = rangeSum(prefixSum, row1, col1, row2, col2);
    cout << "Sum of elements in the range [" << row1 << ", " << col1 << "] to [" << row2 << ", " << col2 << "] is: " << sum << endl;
    return 0;
}
```

在这个示例中，我们首先计算了二维数组的前缀和数组。然后，通过利用前缀和数组的性质，可以在常量时间内计算任意二维区域的和，这种方法的时间复杂度为 O(1)。





高精度（High Precision）计算是指对于超出常规数据类型表示范围的数字进行精确计算。在计算机科学中，常见的数据类型（如int、float、double）有其表示范围和精度限制，无法精确表示超出其范围的大整数或小数。

在处理需要高精度计算的问题时，一种常见的方法是使用字符串来表示数字，然后模拟手工计算的方式进行运算。这种方法可以有效地处理大整数或精确小数，但通常会牺牲计算速度。

以下是一个简单的示例，演示了如何使用字符串来实现高精度加法：

```cpp
#include <iostream>
#include <string>
using namespace std;

string addStrings(string num1, string num2) {
    string result = "";
    int carry = 0;
    int i = num1.size() - 1;
    int j = num2.size() - 1;
    while (i >= 0 || j >= 0 || carry > 0) {
        int digit1 = i >= 0 ? num1[i] - '0' : 0;
        int digit2 = j >= 0 ? num2[j] - '0' : 0;
        int sum = digit1 + digit2 + carry;
        result = to_string(sum % 10) + result;
        carry = sum / 10;
        i--;
        j--;
    }
    return result;
}

int main() {
    string num1 = "123456789";
    string num2 = "987654321";
    string sum = addStrings(num1, num2);
    cout << "Sum of " << num1 << " and " << num2 << " is: " << sum << endl;
    return 0;
}
```

在这个示例中，我们通过模拟手工加法的方式，从字符串的最后一位（个位）开始，依次相加，同时考虑进位。最终得到两个大整数的和。

对于高精度计算，除了加法，还可以实现减法、乘法、除法等运算，以及其他复杂的数学运算。这种方法虽然可能比较慢，但可以保证计算的精确性，适用于需要精确计算的场景。





模拟是一种常用的算法技巧，通常用于模拟实际问题的解决过程。它的基本思想是通过编写代码模拟实际问题的操作步骤，逐步推进问题的解决。

模拟常常用于解决一些具体的问题，比如游戏、仿真、物理系统等。在算法竞赛中，模拟也是常见的题型之一，题目可能涉及到模拟人物移动、模拟交通流量、模拟系统状态变化等。

以下是一个简单的示例，演示了如何使用模拟技巧解决一个问题：

假设有一个游戏中的小人，初始位置在原点 (0, 0)，根据输入的指令（方向和步数），移动小人的位置，并输出最终位置。

```cpp
#include <iostream>
#include <string>
using namespace std;

void movePerson(int& x, int& y, char direction, int steps) {
    if (direction == 'U') {
        y += steps;
    } else if (direction == 'D') {
        y -= steps;
    } else if (direction == 'L') {
        x -= steps;
    } else if (direction == 'R') {
        x += steps;
    }
}

int main() {
    string instructions = "UDLR"; // 指令串，U表示向上移动，D表示向下移动，L表示向左移动，R表示向右移动
    int x = 0, y = 0; // 初始位置
    int steps = 1; // 每次移动的步数
    for (char direction : instructions) {
        movePerson(x, y, direction, steps);
    }
    cout << "Final position of the person: (" << x << ", " << y << ")" << endl;
    return 0;
}
```

在这个示例中，我们定义了一个模拟移动小人的函数 `movePerson()`，根据输入的指令来移动小人的位置。然后我们通过遍历输入的指令串，依次执行移动操作，最终得到小人的最终位置。

模拟是一种非常灵活的算法技巧，可以根据具体问题的特点来编写相应的模拟代码。通过模拟，我们可以更好地理解问题的本质，并且能够解决一些复杂的实际问题。





并查集（Disjoint Set Union，DSU），又称为不相交集合数据结构，是一种用于处理集合合并与查询的数据结构。它主要用于解决集合的合并、查询等问题，常被应用于图论、网络连接问题、最小生成树算法（如Kruskal算法）等领域。

并查集的基本操作包括：

1. **MakeSet(x)**：创建一个新的集合，其中包含元素x。
2. **Find(x)**：查找元素x所在的集合（根结点）。
3. **Union(x, y)**：将包含元素x和元素y的两个集合合并为一个集合。

以下是一个简单的并查集的实现示例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

class DisjointSet {
private:
    vector<int> parent;

public:
    DisjointSet(int n) {
        parent.resize(n);
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // 初始时每个元素都是独立的集合，其父结点为自身
        }
    }

    int Find(int x) {
        if (parent[x] != x) {
            parent[x] = Find(parent[x]); // 路径压缩，将x的父结点设为根结点
        }
        return parent[x];
    }

    void Union(int x, int y) {
        int rootX = Find(x);
        int rootY = Find(y);
        if (rootX != rootY) {
            parent[rootY] = rootX; // 将y的根结点指向x的根结点，完成合并操作
        }
    }
};

int main() {
    int n = 5;
    DisjointSet dsu(n);

    dsu.Union(0, 1);
    dsu.Union(2, 3);
    dsu.Union(0, 4);

    cout << "Find(1): " << dsu.Find(1) << endl;
    cout << "Find(3): " << dsu.Find(3) << endl;
    cout << "Find(4): " << dsu.Find(4) << endl;

    return 0;
}
```

在这个示例中，我们首先创建了一个大小为n的并查集，然后通过Union操作将不同的元素合并到同一个集合中，并通过Find操作查找元素所在的集合（根结点）。

并查集的优化还有路径压缩、按秩合并等，可以进一步提高效率，特别是在大规模应用中。

在并查集的基本实现之上，有几种优化策略可以进一步提高效率：

1. **路径压缩（Path Compression）**：在Find操作中，将节点的父节点设置为根节点，以减少下次查找的时间。这样，路径上的所有节点都直接连接到根节点，减少了树的高度。

2. **按秩合并（Union by Rank）**：在Union操作中，将具有较小秩的树的根节点连接到具有较大秩的树的根节点上。秩可以理解为树的高度的上界，树的高度越低，操作效率越高。

下面是一个并查集的优化实现示例，结合了路径压缩和按秩合并：

```cpp
#include <iostream>
#include <vector>
using namespace std;

class DisjointSet {
private:
    vector<int> parent;
    vector<int> rank;

public:
    DisjointSet(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // 初始时每个元素都是独立的集合，其父结点为自身
        }
    }

    int Find(int x) {
        if (parent[x] != x) {
            parent[x] = Find(parent[x]); // 路径压缩，将x的父结点设为根结点
        }
        return parent[x];
    }

    void Union(int x, int y) {
        int rootX = Find(x);
        int rootY = Find(y);
        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY; // 将x的根结点连接到y的根结点上
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX; // 将y的根结点连接到x的根结点上
            } else {
                parent[rootY] = rootX;
                rank[rootX]++; // 如果秩相同，则任意选择一个作为根结点，并增加秩
            }
        }
    }
};

int main() {
    int n = 5;
    DisjointSet dsu(n);

    dsu.Union(0, 1);
    dsu.Union(2, 3);
    dsu.Union(0, 4);

    cout << "Find(1): " << dsu.Find(1) << endl;
    cout << "Find(3): " << dsu.Find(3) << endl;
    cout << "Find(4): " << dsu.Find(4) << endl;

    return 0;
}
```

这个示例中的并查集实现结合了路径压缩和按秩合并两种优化策略，可以在保持算法正确性的同时提高效率，特别是在大规模应用中。

在并查集的基本实现和优化之上，还可以应用一些高级技巧来解决特定类型的问题，例如路径压缩优化的启发式合并（Path Compression with Heuristic Union）。

启发式合并是一种在进行Union操作时，根据某种启发式规则决定将哪个集合合并到另一个集合中的策略。这种策略可以根据具体的应用场景来选择，以最大程度地提高并查集的效率。

以下是一个简单的示例，演示了如何在并查集中应用路径压缩优化的启发式合并策略：

```cpp
#include <iostream>
#include <vector>
using namespace std;

class DisjointSet {
private:
    vector<int> parent;
    vector<int> rank;

public:
    DisjointSet(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // 初始时每个元素都是独立的集合，其父结点为自身
        }
    }

    int Find(int x) {
        if (parent[x] != x) {
            parent[x] = Find(parent[x]); // 路径压缩，将x的父结点设为根结点
        }
        return parent[x];
    }

    void Union(int x, int y) {
        int rootX = Find(x);
        int rootY = Find(y);
        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY; // 将x的根结点连接到y的根结点上
            } else {
                parent[rootY] = rootX; // 将y的根结点连接到x的根结点上
                if (rank[rootX] == rank[rootY]) {
                    rank[rootX]++; // 如果秩相同，则任意选择一个作为根结点，并增加秩
                }
            }
        }
    }
};

int main() {
    int n = 5;
    DisjointSet dsu(n);

    dsu.Union(0, 1);
    dsu.Union(2, 3);
    dsu.Union(0, 4);

    cout << "Find(1): " << dsu.Find(1) << endl;
    cout << "Find(3): " << dsu.Find(3) << endl;
    cout << "Find(4): " << dsu.Find(4) << endl;

    return 0;
}
```

在这个示例中，我们在进行Union操作时，根据两个集合的秩（rank）来决定哪个集合合并到另一个集合中。这种启发式策略可以有效地保持并查集的平衡性，从而提高整体效率。

通过合理选择并实现合适的启发式策略，可以使并查集在解决各种实际问题时更加高效。

在继续讨论并查集的应用之前，我们可以进一步探讨一些常见的应用场景和问题，这些问题可以通过并查集高效地解决。

一些常见的并查集应用包括：

1. **连通性问题**：并查集最常见的应用之一是解决连通性问题，比如判断图中的节点是否连通，或者在网络中查找是否存在通路。通过将具有相同根节点的节点视为同一个集合，可以快速判断两个节点是否连通。

2. **最小生成树算法（Minimum Spanning Tree，MST）**：Kruskal算法是一种基于并查集的最小生成树算法，它通过对边进行排序，然后依次添加边到最小生成树中，同时保证不形成环路，直到所有节点都连接在一起。

3. **区域合并问题**：在二维网格中，区域合并问题涉及将相邻的相同区域合并在一起。这可以通过并查集来实现，每个单元格对应一个节点，通过合并相邻的单元格来合并区域。

4. **社交网络中的关系处理**：在社交网络中，可以使用并查集来处理关系，比如判断两个人是否属于同一个朋友圈、组织或团体。

5. **图的连通性问题**：在图论中，可以使用并查集来判断图的连通性，或者判断是否存在环路等。

这些是并查集的一些常见应用场景，它在解决这些问题时能够提供高效的算法和数据结构支持。在实际应用中，我们可以根据具体问题的特点，灵活运用并查集算法来解决各种连通性和合并性问题。

带权并查集（Weighted Union-Find Disjoint Set）是对普通的并查集进行了扩展，使其支持在合并操作时维护集合的权值或秩信息。这种扩展使得在某些应用场景下能更加灵活地处理问题，特别是涉及到集合合并时需要考虑权值或秩的情况。

在普通的并查集中，每个集合的权值或秩信息通常是相等的，但在带权并查集中，每个节点都可以携带不同的权值或秩信息。

以下是带权并查集的基本实现示例：

```cpp
#include <iostream>
#include <vector>
using namespace std;

class WeightedUnionFind {
private:
    vector<int> parent;
    vector<int> rank;
    vector<int> weight;

public:
    WeightedUnionFind(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        weight.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // 初始时每个元素都是独立的集合，其父结点为自身
        }
    }

    int Find(int x) {
        if (parent[x] != x) {
            int root = Find(parent[x]);
            weight[x] += weight[parent[x]]; // 路径压缩，累加权值信息
            parent[x] = root;
        }
        return parent[x];
    }

    void Union(int x, int y, int w) {
        int rootX = Find(x);
        int rootY = Find(y);
        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
                weight[rootX] = w - weight[x] + weight[y]; // 更新权值信息
            } else {
                parent[rootY] = rootX;
                weight[rootY] = weight[x] - weight[y] + w; // 更新权值信息
                if (rank[rootX] == rank[rootY]) {
                    rank[rootX]++; // 如果秩相同，则任意选择一个作为根结点，并增加秩
                }
            }
        }
    }

    bool Same(int x, int y) {
        return Find(x) == Find(y);
    }

    int Diff(int x, int y) {
        if (!Same(x, y)) {
            return -1; // 如果不属于同一个集合，返回-1
        }
        return weight[y] - weight[x]; // 返回y的权值减去x的权值
    }
};

int main() {
    int n = 5;
    WeightedUnionFind wuf(n);

    wuf.Union(0, 1, 2);
    wuf.Union(1, 2, 3);
    wuf.Union(3, 4, 5);

    cout << "Diff(0, 2): " << wuf.Diff(0, 2) << endl; // 5 - 2 = 3
    cout << "Diff(1, 3): " << wuf.Diff(1, 3) << endl; // 5 - 2 = 3

    return 0;
}
```

在带权并查集中，除了维护每个节点的父节点和秩信息外，还需要维护每个节点的权值信息。在合并操作时，需要根据节点的权值信息来更新合并后集合的权值信息。同时，在Find操作中，需要更新路径上每个节点的权值信息，以保证正确的权值计算。通过带权并查集，我们可以更灵活地处理一些具有权值信息的合并问题。

带权并查集主要用于处理一些需要考虑权值信息的合并和查询问题，常见的应用场景包括：

1. **最小生成树算法（Minimum Spanning Tree，MST）**：在Kruskal算法中，需要判断加入一条边后是否会形成环路，并且在形成最小生成树时，要选择权值最小的边。带权并查集可以用于判断两个节点是否在同一个连通分量中，并且可以快速获取连通分量中的最小权值。

2. **网络连接问题**：在网络连接问题中，节点表示网络设备或者计算机，边表示网络连接。带权并查集可以用来判断两个节点是否在同一个网络中，同时可以用来查找网络中的最小权值连接。

3. **区域合并问题**：在二维网格中，带权并查集可以用来合并相邻的相同区域，并且可以根据合并后的区域的权值信息来进行判断和处理。

4. **优先级合并问题**：在一些优先级合并的场景中，带权并查集可以用来维护节点之间的优先级关系，同时可以根据节点的权值信息进行合适的合并操作。

5. **社交网络中的关系处理**：在社交网络中，可以使用带权并查集来处理关系，比如判断两个人是否属于同一个朋友圈、组织或团体，并且可以根据节点的权值信息来进行合适的处理和操作。

这些应用场景是带权并查集在实际问题中的一些常见应用，它能够帮助我们高效地处理具有权值信息的合并和查询问题，并且可以应用于各种领域的算法和数据结构中。



## 最小生成树

最小生成树（Minimum Spanning Tree，MST）是一个无向图的生成树，它包含图中的所有顶点，并且具有最小总权值的所有边。最小生成树在许多应用中都有重要的作用，比如网络设计、电力传输、通信网络等领域。

最小生成树算法有多种实现方式，其中最常见的算法包括：

1. **Kruskal算法**：Kruskal算法是一种贪心算法，它通过不断地选择具有最小权值的边，且不会形成环路，从而构建最小生成树。Kruskal算法通常基于并查集数据结构实现，用于判断边的两个顶点是否在同一个连通分量中。

2. **Prim算法**：Prim算法是一种基于顶点的贪心算法，它从一个初始顶点开始，逐步添加新的顶点，直到生成最小生成树。Prim算法通常基于优先队列（最小堆）实现，用于选择具有最小权值的边。

下面是Kruskal算法的基本实现示例：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Edge {
    int u, v, weight;
    Edge(int _u, int _v, int _weight) : u(_u), v(_v), weight(_weight) {}
};

class DisjointSet {
private:
    vector<int> parent;
    vector<int> rank;

public:
    DisjointSet(int n) {
        parent.resize(n);
        rank.resize(n, 0);
        for (int i = 0; i < n; ++i) {
            parent[i] = i; // 初始时每个元素都是独立的集合，其父结点为自身
        }
    }

    int Find(int x) {
        if (parent[x] != x) {
            parent[x] = Find(parent[x]); // 路径压缩，将x的父结点设为根结点
        }
        return parent[x];
    }

    void Union(int x, int y) {
        int rootX = Find(x);
        int rootY = Find(y);
        if (rootX != rootY) {
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY; // 将x的根结点连接到y的根结点上
            } else {
                parent[rootY] = rootX; // 将y的根结点连接到x的根结点上
                if (rank[rootX] == rank[rootY]) {
                    rank[rootX]++; // 如果秩相同，则任意选择一个作为根结点，并增加秩
                }
            }
        }
    }
};

int kruskalMST(vector<Edge>& edges, int n) {
    sort(edges.begin(), edges.end(), [](const Edge& a, const Edge& b) {
        return a.weight < b.weight; // 按边的权值升序排序
    });

    DisjointSet dsu(n);
    int minCost = 0;

    for (const Edge& edge : edges) {
        if (dsu.Find(edge.u) != dsu.Find(edge.v)) {
            dsu.Union(edge.u, edge.v);
            minCost += edge.weight;
        }
    }

    return minCost;
}

int main() {
    int n = 4;
    vector<Edge> edges = {/**/{0, 1, 10}, {0, 2, 6}, {0, 3, 5}, {1, 3, 15}, {2, 3, 4}};

    int minCost = kruskalMST(edges, n);
    cout << "Minimum Cost of Spanning Tree: " << minCost << endl;

    return 0;
}
```

在这个示例中，我们使用Kruskal算法来计算图的最小生成树的总权值。首先将边按照权值升序排序，然后依次选择边，如果边的两个顶点不在同一个连通分量中，就将它们合并，并将边的权值加到总权值中。最终得到的总权值即为最小生成树的总权值。

Prim算法是另一种常用的最小生成树算法，它基于顶点的贪心策略，在构建最小生成树的过程中，每次选择与当前树连接的顶点中权值最小的边，将其加入最小生成树的集合中。Prim算法通常使用优先队列（最小堆）来选择下一个顶点，以保证每次选择的边权值最小。

以下是Prim算法的基本实现示例：

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

struct Edge {
    int to;
    int weight;
    Edge(int _to, int _weight) : to(_to), weight(_weight) {}
};

class Graph {
private:
    int V; // 顶点数
    vector<vector<Edge>> adj; // 邻接表表示的图

public:
    Graph(int V) : V(V) {
        adj.resize(V);
    }

    void addEdge(int u, int v, int weight) {
        adj[u].push_back(Edge(v, weight));
        adj[v].push_back(Edge(u, weight)); // 无向图，双向连接
    }

    int primMST() {
        vector<int> key(V, INT_MAX); // 存储顶点到最小生成树的最小权值
        vector<bool> inMST(V, false); // 记录顶点是否已经加入最小生成树
        int minCost = 0; // 最小生成树的总权值

        // 创建一个优先队列，按边的权值进行排序
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;

        // 选择任意一个顶点作为起始点
        int src = 0;
        key[src] = 0; // 将起始点的权值设为0
        pq.push(make_pair(0, src));

        while (!pq.empty()) {
            int u = pq.top().second; // 选择当前最小权值的顶点
            pq.pop();

            if (inMST[u]) continue; // 如果顶点已经在最小生成树中，跳过

            inMST[u] = true; // 将顶点加入最小生成树

            // 遍历与当前顶点相邻的边
            for (const Edge& edge : adj[u]) {
                int v = edge.to;
                int weight = edge.weight;

                if (!inMST[v] && weight < key[v]) {
                    key[v] = weight; // 更新顶点到最小生成树的最小权值
                    pq.push(make_pair(key[v], v)); // 将顶点加入优先队列中
                }
            }
        }

        // 计算最小生成树的总权值
        for (int i = 0; i < V; ++i) {
            minCost += key[i];
        }

        return minCost;
    }
};

int main() {
    int V = 5;
    Graph graph(V);

    // 添加图的边
    graph.addEdge(0, 1, 2);
    graph.addEdge(0, 3, 6);
    graph.addEdge(1, 2, 3);
    graph.addEdge(1, 3, 8);
    graph.addEdge(1, 4, 5);
    graph.addEdge(2, 4, 7);
    graph.addEdge(3, 4, 9);

    // 计算最小生成树的总权值
    int minCost = graph.primMST();
    cout << "Minimum Cost of Spanning Tree: " << minCost << endl;

    return 0;
}
```

在Prim算法的实现中，我们使用了优先队列来存储待选的边，并通过不断地选择权值最小的边来构建最小生成树。该算法的时间复杂度为 O(ElogV)，其中 E 是边的数量，V 是顶点的数量。



## STL

STL（Standard Template Library）是C++标准库的一部分，提供了许多常用的数据结构和算法实现。STL包括多个组件，其中一些主要的组件有：

1. **容器（Containers）**：STL提供了多种容器，包括向量（vector）、列表（list）、双端队列（deque）、集合（set）、映射（map）等。这些容器提供了不同的数据组织方式，以满足不同的需求。

2. **迭代器（Iterators）**：迭代器是STL中用于遍历容器元素的抽象概念，它提供了统一的访问容器元素的接口。STL中的算法通常接受迭代器作为参数，以便对容器中的元素进行操作。

3. **算法（Algorithms）**：STL提供了大量的算法，涵盖了排序、搜索、复制、删除、变换等各种常见操作。这些算法通常定义在<algorithm>头文件中，可以直接使用。

4. **函数对象（Function Objects）**：STL中的函数对象是一种可调用对象，它可以像函数一样被调用，但可以保持状态。函数对象在STL中被广泛用于算法的参数。

5. **适配器（Adapters）**：STL提供了一些适配器，用于将一个容器或迭代器接口转换成另一个容器或迭代器接口。常见的适配器包括堆栈（stack）、队列（queue）、优先队列（priority_queue）等。

下面是一个简单的示例，演示了STL中向量容器、迭代器和算法的使用：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // 创建一个向量容器并初始化
    vector<int> vec = {4, 2, 6, 1, 8, 3};

    // 使用迭代器遍历并输出向量中的元素
    cout << "Original vector: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    // 使用STL中的算法对向量进行排序
    sort(vec.begin(), vec.end());

    // 使用迭代器遍历并输出排序后的向量
    cout << "Sorted vector: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;

    // 使用STL中的算法查找向量中是否存在元素值为6的元素
    auto it = find(vec.begin(), vec.end(), 6);
    if (it != vec.end()) {
        cout << "Element 6 found at position: " << distance(vec.begin(), it) << endl;
    } else {
        cout << "Element 6 not found in vector." << endl;
    }

    return 0;
}
```

这个示例演示了如何使用STL中的向量容器、迭代器和算法。通过STL提供的丰富工具，我们可以更加方便地处理数据结构和算法问题，提高代码的效率和可读性。



### vector

`std::vector` 是 C++ 标准库中最常用的动态数组容器。它提供了动态大小的数组功能，可以在运行时根据需要动态增加或减少元素的个数。以下是关于 `std::vector` 的一些重要特性和用法：

### 特性：

1. **动态大小：** `std::vector` 可以动态增长或缩小，根据需要自动调整内部存储空间。

2. **随机访问：** 可以通过索引直接访问 `std::vector` 中的元素，时间复杂度为 O(1)。

3. **连续存储：** `std::vector` 中的元素在内存中是连续存储的，这使得访问元素的速度更快。

4. **自动管理内存：** `std::vector` 自动处理内存的分配和释放，使得使用更加方便。

### 用法示例：

```cpp
#include <iostream>
#include <vector>

int main() {
    // 创建一个空的 vector
    std::vector<int> vec;

    // 添加元素到 vector
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);

    // 使用迭代器遍历 vector
    std::cout << "Vector elements: ";
    for (auto it = vec.begin(); it != vec.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << std::endl;

    // 访问 vector 中的元素
    std::cout << "First element: " << vec[0] << std::endl;
    std::cout << "Second element: " << vec.at(1) << std::endl;

    // 修改 vector 中的元素
    vec[0] = 4;

    // 删除 vector 中的元素
    vec.pop_back();

    // 获取 vector 的大小和容量
    std::cout << "Size of vector: " << vec.size() << std::endl;
    std::cout << "Capacity of vector: " << vec.capacity() << std::endl;

    // 清空 vector
    vec.clear();

    // 检查 vector 是否为空
    if (vec.empty()) {
        std::cout << "Vector is empty" << std::endl;
    }

    return 0;
}
```

在这个示例中，我们演示了如何使用 `std::vector` 创建动态数组，添加、访问、修改和删除元素，以及获取其大小、容量，并清空向量。`std::vector` 提供了简单而强大的动态数组功能，在许多场景下都是首选的容器类型。





## 背包问题

背包问题是一个经典的组合优化问题，在计算机科学和组合数学中都有重要的应用。背包问题通常包括一个背包容量限制以及一组物品，每个物品都有自己的重量和价值。目标是在不超过背包容量的情况下，选择合适的物品放入背包，使得背包中物品的总价值最大。

背包问题通常分为两种类型：

1. **0-1背包问题（0-1 Knapsack Problem）：** 每个物品要么全部装入背包，要么不装入，不能选择部分装入物品。这意味着每种物品只有两种状态：选中或不选中。

2. **分数背包问题（Fractional Knapsack Problem）：** 每个物品可以被分割成更小的部分放入背包，所以可以选择部分装入物品。这样，每种物品就有更多的状态，可以是部分选中。

以下是两种背包问题的基本介绍和解决方法：

### 0-1背包问题：

#### 解决方法：

1. **动态规划（Dynamic Programming）：** 使用动态规划算法可以有效地解决0-1背包问题。定义一个二维数组 `dp[i][j]`，表示在前 i 个物品中，背包容量为 j 时可以获得的最大价值。然后根据递推关系进行状态转移，最终得到 `dp[n][W]` 就是所求的最大价值，其中 n 表示物品数量，W 表示背包容量。

2. **回溯法（Backtracking）：** 可以使用回溯法穷举所有可能的选择方案，然后选择价值最大的方案作为最优解。但是由于背包问题的指数级复杂度，回溯法不适合处理大规模的背包问题。

### 分数背包问题：

#### 解决方法：

1. **贪心算法（Greedy Algorithm）：** 对于分数背包问题，贪心算法是一个常用的解决方法。贪心算法根据每种物品的单位重量价值来进行选择，优先选择单位重量价值最高的物品放入背包。这种方法可以得到一个近似最优解，但不一定能够保证获得最优解。

背包问题是一个经典的组合优化问题，对于0-1背包问题，动态规划是最常用的解决方法，而对于分数背包问题，贪心算法通常是一个简单而有效的解决方案。

在继续讨论背包问题之前，我们可以详细了解一下0-1背包问题和分数背包问题的解决方法，以及它们的特点和应用场景。

### 0-1背包问题（0-1 Knapsack Problem）：

#### 特点：

- 每种物品只有两种状态：选中或不选中。
- 物品不可分割，要么全部装入背包，要么不装入。

#### 解决方法：

1. **动态规划（Dynamic Programming）：** 使用动态规划算法来解决0-1背包问题，通常需要构建一个二维数组 `dp[i][j]`，表示在前 i 个物品中，背包容量为 j 时可以获得的最大价值。然后根据递推关系进行状态转移，最终得到 `dp[n][W]` 就是所求的最大价值，其中 n 表示物品数量，W 表示背包容量。

### 分数背包问题（Fractional Knapsack Problem）：

#### 特点：

- 每种物品可以被分割成更小的部分放入背包。
- 物品可以选择部分装入背包。

#### 解决方法：

1. **贪心算法（Greedy Algorithm）：** 对于分数背包问题，贪心算法是一个常用的解决方法。贪心算法根据每种物品的单位重量价值来进行选择，优先选择单位重量价值最高的物品放入背包。这种方法可以得到一个近似最优解，但不一定能够保证获得最优解。

### 应用场景：

- 背包问题在资源分配和优化领域有着广泛的应用，比如货物装载、资源分配、投资组合优化等。
- 0-1背包问题常见于资源有限、决策离散的场景，如物品装载、任务调度等。
- 分数背包问题常见于资源可以分割、决策连续的场景，如化工原料混合、机器加工等。

以上是关于背包问题的一些基本概念、解决方法和应用场景。在实际问题中，根据具体的情况和要求，选择合适的背包问题类型和解决方法来解决问题是非常重要的。



多重背包问题是背包问题的一个变种，与0-1背包问题和分数背包问题不同，多重背包问题中每种物品都有限定的数量可供选择，即每种物品都有多个相同的物品可供放入背包。与普通的背包问题相比，多重背包问题增加了对物品数量的限制，这使得问题更加复杂。

### 解决方法：

1. **二进制拆分法：** 将多重背包问题转化为0-1背包问题。对于每种物品，根据其数量进行二进制拆分，将每种物品拆分成若干个数量为 1 的物品和数量为 2 的物品，然后使用0-1背包问题的动态规划算法进行求解。

2. **多重背包问题优化：** 在动态规划算法中，可以对多重背包问题进行优化。对于数量较大的物品，可以考虑采用优化策略，比如分组思想、二进制优化等方法，以减少时间和空间复杂度。

### 应用场景：

- 多重背包问题常见于需要考虑资源数量限制的场景，如货物运输、物资调配等。
- 在实际问题中，有些物品可能存在多个相同的副本，需要根据具体的资源分配情况进行合理的选择和分配。

下面是一个简单的示例，演示了如何使用动态规划算法解决多重背包问题：

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int multipleKnapsack(int N, int W, vector<int>& weight, vector<int>& value, vector<int>& quantity) {
    vector<int> dp(W + 1, 0);

    for (int i = 0; i < N; ++i) {
        for (int j = W; j >= weight[i]; --j) {
            for (int k = 1; k <= quantity[i] && k * weight[i] <= j; ++k) {
                dp[j] = max(dp[j], dp[j - k * weight[i]] + k * value[i]);
            }
        }
    }

    return dp[W];
}

int main() {
    int N = 3; // 物品种类数
    int W = 10; // 背包容量

    vector<int> weight = {3, 4, 5}; // 每种物品的重量
    vector<int> value = {4, 5, 6}; // 每种物品的价值
    vector<int> quantity = {2, 3, 1}; // 每种物品的数量

    int maxValue = multipleKnapsack(N, W, weight, value, quantity);
    cout << "Maximum value that can be obtained: " << maxValue << endl;

    return 0;
}
```

在这个示例中，我们使用动态规划算法解决了一个多重背包问题。通过状态转移方程，我们可以有效地计算出背包容量为W时可以获得的最大价值。

完全背包问题和混合背包问题是背包问题的两个变种，它们分别考虑了不同的限制条件和特性。

### 完全背包问题（Unbounded Knapsack Problem）：

完全背包问题是背包问题的一个变种，与0-1背包问题不同，完全背包问题中每种物品的数量是无限的，即可以选择多次放入同一种物品。因此，完全背包问题通常更加复杂，需要使用不同的解决方法。

#### 解决方法：

1. **动态规划：** 使用动态规划算法可以有效地解决完全背包问题。与0-1背包问题类似，定义一个二维数组 `dp[i][j]`，表示在前 i 个物品中，背包容量为 j 时可以获得的最大价值。然后根据递推关系进行状态转移，最终得到 `dp[n][W]` 就是所求的最大价值，其中 n 表示物品数量，W 表示背包容量。

### 混合背包问题（Mixed Knapsack Problem）：

混合背包问题是背包问题的另一个变种，它将0-1背包问题、完全背包问题和多重背包问题组合在一起，每种物品可以根据情况选择放入背包、不放入背包或者放入有限的数量。混合背包问题考虑了更复杂的资源分配情况，因此需要更灵活的解决方法。

#### 解决方法：

1. **动态规划：** 可以将混合背包问题转化为0-1背包问题、完全背包问题和多重背包问题的组合，然后使用动态规划算法进行求解。根据每种物品的限制条件和背包容量，分别求解最优解，并将结果合并得到最终的解决方案。

混合背包问题的解决方法通常需要根据具体的限制条件和资源分配情况进行灵活的选择和组合。在实际应用中，根据问题的具体要求和限制条件，选择合适的解决方法是非常重要的。