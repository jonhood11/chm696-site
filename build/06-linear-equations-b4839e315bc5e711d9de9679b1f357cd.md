# Systems of Linear Equations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Systems of Linear Equations

The goal is to solve a system of linear equations: 
$$
M \mathbf{x} = \mathbf{b},
$$
 where:

- $M$ is an $n \times n$ matrix,

- $\mathbf{x}$ is the unknown vector we are solving for,

- $\mathbf{b}$ is a given vector.

This problem arises frequently in scientific and engineering applications.


## Gaussian Elimination

The brute-force method for solving a system of linear equations is Gaussian or Gauss-Jordan elimination.

Allowed elementary row operations:

- Interchange two rows

- Multiply (or divide) a row by a (nonzero) constant

- Add/subtract a multiple of one row to another

:::{note}
Example

:::{admonition} Cases
2x - z = 2\
6x + 5 y +3z = 7\
2x - y = 4
:::
:::


## Gaussian Elimination (continued)


:::{note}
Example

:::{admonition} Cases
2x - z = 2\
6x + 5 y +3z = 7\
2x - y = 4
:::
:::

Original matrix: $M = \begin{pmatrix}
2 & 0 & -1  \\
6 & 5 &  3  \\
2 & -1 & 0
\end{pmatrix}$

[Augmented]{style="color: blue"} matrix: $A = \begin{pmatrix}
2 & 0 & -1 & 2 \\
6 & 5 &  3 & 7 \\
2 & -1 & 0 & 4
\end{pmatrix}$


## Systems of Linear Equations (continued)


In a general case, for matrix M being *mxn*, we are solving *m* equations in *n* unknowns.\
The result depends on *ranks* of matrices M and A.\
Recall: the [rank]{style="color: blue"} is the number of linearly independent vectors in either set of column or row vectors, or, alternatively, the dimension of the largest square submatrix with a non-zero determinant.

- If (rank M) $<$ (rank A), the equations are inconsistent and there is no solution.

- If (rank M) = (rank A) $= n$ (number of unknowns), there is one solution.

- If (rank M) = (rank A) = $R < n$, then $R$ unknowns can be found in terms of the remaining $n - R$ unknowns. Such systems are also called [singular]{style="color: blue"}.


## Systems of Linear Equations (continued)

A few examples:

- ::: cases
  x+y = 2\
  x+y = 5


- ::: cases
  x+y = 2\
  2x+2y = 4
  :::

- ::: cases
  x+y = 2\
  x-y = 4
  :::
:::


## Numerical Algorithms

The choice of the numerical algorithm for solving a system of linear equations depends on

- A specific task in hand - will discuss on the next slide.

- Size/sparsity of the problems. Solving systems of linear equations is memory- and processor-time-expensive. For larger (and especially sparse) matrices, iterative methods are typically used.

- type of matrix (symmetric, upper-diagonal, etc.). Special faster or more efficient algorithms might be possible.


## Tasks in linear algebra problems

Specific tasks:

- Solving $A \mathbf{x} = \mathbf{b}$ for a single vector $\mathbf{b}$, with A being a square matrix.

- Solving $A \mathbf{x} = \mathbf{b}$ for multiple vectors $\mathbf{b}_j$, with A being a square matrix.

- Calculation of the inverse $A^{-1}$ of a square matrix. This task is equivalent for the previous task with *m* different $\mathbf{b}_j$ ($n$ is the dimension of A).

- Calculation of the determinant $\det{A}$.

- In the case of $m < n$ or degeneracies in A, we want to find the solution space (or rank) of A. This is done by [Singular Value Decomposition (SVD)]{style="color: blue"}.

- In the case of $m > n$ (more equations than unknowns), generally there is no solution $\mathbf{x}$, also referred to as [overdetermined]{style="color: blue"} set of equations. However, we often want to find the best \"compromise\" solution, i.e., the one that comes closest to satisfying all equations simultaneously. This can be solved using [Linear Least-Squares]{style="color: blue"} method via QR decomposition.


## Direct methods for square matrices


- Gauss-Jordan elimination: brute-force algorithm to find a matrix inverse. We simply bring matrix A to a diagonal form, using pivoting as needed.

- Gaussian elimination with back-substitution: this is half-way between Gauss-Jordan elimination (full elimination) and LU decomposition. We bring the matrix A to the upper-triangular form, then do back-propagation.

- LU decomposition: cheaper than the Gauss-Jordan when solving for one or a few $\mathbf{b}$. (Requires  $2/3 n^3$ operations for factorization; then each new right-hand side only costs $O(n^2)$.

- Cholesky Decomposition: Specialized LU factorization for *symmetric, positive-definite matrices*, with cost of $1/3 n^3$.

- QR Decomposition: $A=QR$, where Q is orthogonal ($Q^T Q = I$) and R is upper triangular. Often used in least squares problems or when A is not square.

The scaling of all of these algorithms is $O(n^3)$, where $n$ is the matrix dimension.


## LU decomposition

The idea is to factorize matrix A in the lower triangular L and upper triangular U: 
$$
A \mathbf{x} = (L \cdot U) \cdot \mathbf{x} = L \cdot (U \cdot \mathbf{x}) = \mathbf{b}
$$
 If L and U are found, then solve first $L \cdot \mathbf{y} = \mathbf{b},$ and then $U \cdot \mathbf{x} = \mathbf{y}$.\
Solution of those equations is trivial with cost   $O(n^2)$, by forward and backward substitutions.

How to compute L and U? This is done using Doolittle's method.

Let 
$$
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}.
$$


We seek 
$$
L = \begin{bmatrix}
1 & 0 & 0 \\
\ell_{21} & 1 & 0 \\
\ell_{31} & \ell_{32} & 1
\end{bmatrix}, \quad
U = \begin{bmatrix}
u_{11} & u_{12} & u_{13} \\
0 & u_{22} & u_{23} \\
0 & 0 & u_{33}
\end{bmatrix}.
$$


## Doolittle's method


- Step 1: First row of $U$ and first column of $L$ 
$$
u_{11} = a_{11}, \quad
  u_{12} = a_{12}, \quad
  u_{13} = a_{13},
$$
 
$$
\ell_{21} = \frac{a_{21}}{u_{11}}, \quad
  \ell_{31} = \frac{a_{31}}{u_{11}}.
$$


- Step 2: Second row/column 
$$
u_{22} = a_{22} - \ell_{21} u_{12}, \quad
  u_{23} = a_{23} - \ell_{21} u_{13},
$$
 
$$
\ell_{32} = \frac{a_{32} - \ell_{31} u_{12}}{u_{22}}.
$$


- Step 3: Last pivot 
$$
u_{33} = a_{33} - \ell_{31} u_{13} - \ell_{32} u_{23}.
$$


  Thus, we obtain the LU decomposition $A = LU$.


## Doolittle's method: Example

Determinant via LU decomposition

Using LU decomposition, the determinant is computed very easily!


$$
\det(A) = \det(L) \det(U) = \prod _{j = 1}^n u_{jj}
$$


## Determinant via LU decomposition

QR factorization For a real $m \times n$ matrix $A$ (with $m \geq n$), the QR factorization writes 
$$
A = QR,
$$
 where:

- $Q$ is an $m \times m$ orthogonal matrix, i.e. $Q^\top Q = I$,

- $R$ is an $m \times n$ upper-triangular matrix (only the first $n$ rows are nonzero).

For a square $n \times n$ matrix, it looks like 
$$
A = QR, \quad Q \in \mathbb{R}^{n \times n}, \quad R \in \mathbb{R}^{n \times n}.
$$


How to compute QR?

There are several algorithms; the two most common are Gram-Schmidt process and Householder reflections.


## QR factorization


- Gram--Schmidt process

  - Start with the column vectors of $A$: $a_1, a_2, \dots, a_n$.

  - Construct orthonormal vectors $q_1, q_2, \dots, q_n$. Place these as columns in $Q$.

  - Then compute $R = Q^\top A$, which will be upper-triangular.

- Householder reflections

  This is the method used in practice. Construct a sequence of orthogonal transformations (Householder matrices) that zero out entries below the diagonal. Each Householder reflection has the form 
$$
H = I - 2\frac{vv^\top}{v^\top v},
$$
 where $v$ is a chosen vector. Applying them step by step transforms $A$ into an upper-triangular $R$, while the product of all reflections gives $Q$.


## QR factorization (continued)

Least-Squares Problems

One of the most important uses of the QR factorization is in solving overdetermined systems of linear equations, i.e. systems where $A$ is a tall matrix with $m > n$: 
$$
A \mathbf{x} \approx \mathbf{b}, \quad A \in \mathbb{R}^{m \times n}, \; \mathbf{b} \in \mathbb{R}^m, \; \mathbf{x} \in \mathbb{R}^n.
$$


The least-squares solution minimizes the residual 
$$
\|A\mathbf{x} - \mathbf{b}\|.
$$


- Step 1. Factorize $A$ using the QR factorization: 
$$
A = QR,
$$
 where $Q \in \mathbb{R}^{m \times m}$ is orthogonal and $R \in \mathbb{R}^{m \times n}$ is upper-triangular.

- Step 2. Simplify the problem:\
  Since $Q$ is orthogonal, multiplying by $Q^\top$ preserves the norm: 
$$
\|A\mathbf{x} - \mathbf{b}\| = \|QR\mathbf{x} - \mathbf{b}\| = \|R\mathbf{x} - Q^\top \mathbf{b}\|.
$$


## Householder reflections: Example

Least-Squares Problems

- Step 3: Partition matrices:\
  Write $Q^\top \mathbf{b} = \begin{pmatrix} \mathbf{c} \\ \mathbf{d} \end{pmatrix}$, where $\mathbf{c} \in \mathbb{R}^n$, $\mathbf{d} \in \mathbb{R}^{m-n}$. Then 
$$
\|R\mathbf{x} - Q^\top \mathbf{b}\|^2 = \|R\mathbf{x} - \mathbf{c}\|^2 + \|\mathbf{d}\|^2.
$$


  The term $\|d\|^2$ is independent of $x$, so minimizing the residual reduces to solving 
$$
R\mathbf{x} = \mathbf{c},
$$
 where $R$ is an $n \times n$ upper-triangular matrix.

- Step 4: Solve by back substitution:\
  The triangular system $R\mathbf{x} = \mathbf{c}$ can be solved efficiently by back substitution. This gives the least-squares solution 
$$
\mathbf{x}^\star = R^{-1}\mathbf{c}.
$$


  **Summary:** QR factorization transforms the least-squares problem into a much simpler triangular system, avoiding the explicit computation of $A^\top A$ (which can be ill-conditioned)!

---

*Migration source: `03_Linear_algebra/linear_equations.tex` from the archived Overleaf export.*
