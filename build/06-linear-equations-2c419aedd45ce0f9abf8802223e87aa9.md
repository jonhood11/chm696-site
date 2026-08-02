---
kernelspec:
  name: python3
  display_name: Python 3
---

# Systems of Linear Equations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- classify a linear system using the ranks of its coefficient and augmented
  matrices;
- solve small systems by Gaussian elimination;
- explain when LU factorization is useful and why pivoting matters;
- use QR factorization to formulate a stable least-squares solve; and
- match direct, sparse, and least-squares algorithms to the matrix structure.

## Systems of linear equations

The goal is to solve a system of linear equations:
```{math}
M \mathbf{x} = \mathbf{b},
```
 where:

- $M$ is an $m\times n$ matrix,

- $\mathbf{x}\in\mathbb F^n$ is the unknown vector,

- $\mathbf{b}\in\mathbb F^m$ is given.

This problem arises frequently in scientific and engineering applications.


## Gaussian Elimination

The brute-force method for solving a system of linear equations is Gaussian or Gauss-Jordan elimination.

Allowed elementary row operations:

- Interchange two rows

- Multiply (or divide) a row by a (nonzero) constant

- Add/subtract a multiple of one row to another

:::{admonition} Example
The system

```{math}
\begin{aligned}
2x-z&=2,\\
6x+5y+3z&=7,\\
2x-y&=4
\end{aligned}
```

has augmented matrix

```{math}
\left[
\begin{array}{ccc|c}
2&0&-1&2\\
6&5&3&7\\
2&-1&0&4
\end{array}
\right].
```

Row reduction gives $(x,y,z)=(3/2,-1,1)$.
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

- If $\operatorname{rank}M=\operatorname{rank}A=R<n$, the system has
  $n-R$ free parameters and infinitely many solutions.


### Three rank patterns

- $x+y=2$ and $x+y=5$: inconsistent, so there is no solution.
- $x+y=2$ and $2x+2y=4$: one free parameter, so there are infinitely many
  solutions.
- $x+y=2$ and $x-y=4$: full rank, so there is one solution.


## Numerical Algorithms

The choice of the numerical algorithm for solving a system of linear equations depends on

- A specific task in hand - will discuss on the next slide.

- Size/sparsity of the problems. Solving systems of linear equations is memory- and processor-time-expensive. For larger (and especially sparse) matrices, iterative methods are typically used.

- type of matrix (symmetric, upper-diagonal, etc.). Special faster or more efficient algorithms might be possible.


## Tasks in linear algebra problems

Specific tasks:

- Solving $A \mathbf{x} = \mathbf{b}$ for a single vector $\mathbf{b}$, with A being a square matrix.

- Solving $A \mathbf{x} = \mathbf{b}$ for multiple vectors $\mathbf{b}_j$, with A being a square matrix.

- Calculating $A^{-1}$ is equivalent to solving $A\mathbf x_j=\mathbf e_j$
  for the $n$ columns of the identity. In numerical work, solve the required
  systems directly rather than explicitly forming an inverse.

- Calculation of the determinant $\det{A}$.

- In the case of $m < n$ or degeneracies in A, we want to find the solution space (or rank) of A. This is done by [Singular Value Decomposition (SVD)]{style="color: blue"}.

- In the case of $m > n$ (more equations than unknowns), generally there is no solution $\mathbf{x}$, also referred to as [overdetermined]{style="color: blue"} set of equations. However, we often want to find the best \"compromise\" solution, i.e., the one that comes closest to satisfying all equations simultaneously. This can be solved using [Linear Least-Squares]{style="color: blue"} method via QR decomposition.


## Direct methods for square matrices


- Gauss-Jordan elimination: brute-force algorithm to find a matrix inverse. We simply bring matrix A to a diagonal form, using pivoting as needed.

- Gaussian elimination with back-substitution: this is half-way between Gauss-Jordan elimination (full elimination) and LU decomposition. We bring the matrix A to the upper-triangular form, then do back-propagation.

- LU decomposition: cheaper than the Gauss-Jordan when solving for one or a few $\mathbf{b}$. (Requires  $2/3 n^3$ operations for factorization; then each new right-hand side only costs $O(n^2)$.

- Cholesky Decomposition: Specialized LU factorization for *symmetric, positive-definite matrices*, with cost of $1/3 n^3$.

- QR Decomposition: $A=QR$, where Q is orthogonal ($Q^T Q = I$) and R is upper triangular. Often used in least squares problems or when A is not square.

Dense square factorizations cost $O(n^3)$, while each triangular solve costs
$O(n^2)$. For a tall $m\times n$ matrix, Householder QR costs
$O(mn^2)$ when $m\ge n$. Sparse and iterative costs depend on matrix structure
and convergence.


## LU decomposition

The idea is to factorize matrix A in the lower triangular L and upper triangular U:
```{math}
A \mathbf{x} = (L \cdot U) \cdot \mathbf{x} = L \cdot (U \cdot \mathbf{x}) = \mathbf{b}
```
 If L and U are found, then solve first $L \cdot \mathbf{y} = \mathbf{b},$ and then $U \cdot \mathbf{x} = \mathbf{y}$.\
Solution of those equations is trivial with cost   $O(n^2)$, by forward and backward substitutions.

One construction is Doolittle's method. The formulas below assume nonzero
pivots. In practice, row pivoting is normally used, giving
$P A=L U$ rather than $A=L U$.

Let
```{math}
A = \begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{bmatrix}.
```


We seek
```{math}
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
```


## Doolittle's method


- Step 1: First row of $U$ and first column of $L$
```{math}
u_{11} = a_{11}, \quad
  u_{12} = a_{12}, \quad
  u_{13} = a_{13},
```

```{math}
\ell_{21} = \frac{a_{21}}{u_{11}}, \quad
  \ell_{31} = \frac{a_{31}}{u_{11}}.
```


- Step 2: Second row/column
```{math}
u_{22} = a_{22} - \ell_{21} u_{12}, \quad
  u_{23} = a_{23} - \ell_{21} u_{13},
```

```{math}
\ell_{32} = \frac{a_{32} - \ell_{31} u_{12}}{u_{22}}.
```


- Step 3: Last pivot
```{math}
u_{33} = a_{33} - \ell_{31} u_{13} - \ell_{32} u_{23}.
```


  Thus, we obtain the LU decomposition $A = LU$.


## Doolittle's method: Example

Determinant via LU decomposition

With unit diagonal $L$ and no row exchanges,


```{math}
\det(A)=\prod_{j=1}^n u_{jj}.
```

If pivoting gives $P A=L U$, then
$\det(A)=\det(P)\prod_j u_{jj}$.


## Determinant via LU decomposition

For a real $m\times n$ matrix $A$ with $m\ge n$, a reduced QR
factorization writes
```{math}
A = QR,
```
 where:

- $Q$ is an $m\times n$ matrix with orthonormal columns,
  $Q^\top Q=I_n$,

- $R$ is an $n\times n$ upper-triangular matrix.

For a square $n \times n$ matrix, it looks like
```{math}
A = QR, \quad Q \in \mathbb{R}^{n \times n}, \quad R \in \mathbb{R}^{n \times n}.
```


How to compute QR?

There are several algorithms; the two most common are Gram-Schmidt process and Householder reflections.


## QR factorization


- Gram--Schmidt process

  - Start with the column vectors of $A$: $a_1, a_2, \dots, a_n$.

  - Construct orthonormal vectors $q_1, q_2, \dots, q_n$. Place these as columns in $Q$.

  - Then $R=Q^\top A$ is upper triangular.

- Householder reflections

  This is the method used in practice. Construct a sequence of orthogonal transformations (Householder matrices) that zero out entries below the diagonal. Each Householder reflection has the form
```{math}
H = I - 2\frac{vv^\top}{v^\top v},
```
 where $v$ is a chosen vector. Applying them step by step transforms $A$ into an upper-triangular $R$, while the product of all reflections gives $Q$.


## QR factorization (continued)

Least-Squares Problems

One of the most important uses of the QR factorization is in solving overdetermined systems of linear equations, i.e. systems where $A$ is a tall matrix with $m > n$:
```{math}
A \mathbf{x} \approx \mathbf{b}, \quad A \in \mathbb{R}^{m \times n}, \; \mathbf{b} \in \mathbb{R}^m, \; \mathbf{x} \in \mathbb{R}^n.
```


The least-squares solution minimizes the residual
```{math}
\|A\mathbf{x} - \mathbf{b}\|.
```


- Step 1. Factorize $A$ using the QR factorization:
```{math}
A = QR,
```
For the partition argument below, use the full factorization with
$Q\in\mathbb R^{m\times m}$ orthogonal and
$R=\begin{pmatrix}R_1\\0\end{pmatrix}$, where
$R_1\in\mathbb R^{n\times n}$ is upper triangular.

- Step 2. Simplify the problem:\
  Since $Q$ is orthogonal, multiplying by $Q^\top$ preserves the norm:
```{math}
\|A\mathbf{x}-\mathbf{b}\|_2
=\|Q^\top(A\mathbf{x}-\mathbf{b})\|_2
=\|R\mathbf{x}-Q^\top\mathbf{b}\|_2.
```


## Householder reflections: Example

Least-Squares Problems

- Step 3: Partition matrices:\
  Write $Q^\top \mathbf{b} = \begin{pmatrix} \mathbf{c} \\ \mathbf{d} \end{pmatrix}$, where $\mathbf{c} \in \mathbb{R}^n$, $\mathbf{d} \in \mathbb{R}^{m-n}$. Then
```{math}
\|R_1\mathbf{x}-\mathbf{c}\|_2^2+\|\mathbf{d}\|_2^2.
```


  The term $\|d\|^2$ is independent of $x$, so minimizing the residual reduces to solving
```{math}
R_1\mathbf{x} = \mathbf{c},
```
where $R_1$ is nonsingular when $A$ has full column rank.

- Step 4: Solve by back substitution:\
  Solve the triangular system $R_1\mathbf{x}=\mathbf c$ by back substitution;
  do not form $R_1^{-1}$ explicitly.


  **Summary:** QR factorization transforms the least-squares problem into a much simpler triangular system, avoiding the explicit computation of $A^\top A$ (which can be ill-conditioned)!

## Candidate visualizations for review

These optional figures are collected after the lecture so they can be reviewed
as possible additions rather than treated as required content.

```{code-cell} python
:tags: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

GOLD = "#cfb991"
DARK_GOLD = "#8e6f3e"
BLACK = "#000000"
GRAY = "#6f727b"

plt.rcParams.update({
    "figure.dpi": 120,
    "axes.spines.top": False,
    "axes.spines.right": False,
    "axes.grid": True,
    "grid.alpha": 0.22,
})
```

### The three geometric outcomes for two equations

Unique, inconsistent, and underdetermined systems become intersections of
lines. This puts the rank classification into a familiar geometric picture.

```{code-cell} python
x = np.linspace(-1, 3, 300)
systems = [
    (2-x, x, "one solution", "rank(A) = rank([A|b]) = 2"),
    (2-x, 2.5-x, "no solution", "rank(A) < rank([A|b])"),
    (2-x, 2-x, "infinitely many solutions", "rank(A) = rank([A|b]) < 2"),
]
fig, axes = plt.subplots(1, 3, figsize=(11, 3.8), sharex=True, sharey=True)
for ax, (y1, y2, title, rank_text) in zip(axes, systems):
    ax.plot(x, y1, color=BLACK, linewidth=2)
    ax.plot(x, y2, color=DARK_GOLD, linewidth=2, linestyle="--")
    ax.set(xlim=(-1,3), ylim=(-1,3), aspect="equal", xlabel="$x$", ylabel="$y$",
           title=f"{title}\n{rank_text}")
fig.suptitle("A linear system asks where all equations are true at once")
fig.tight_layout()
plt.show()
```

### Gaussian elimination preserves the solution

A row operation replaces one equation with a linear combination of equations.
The lines change, but their common intersection—and therefore the solution—does
not.

```{code-cell} python
x = np.linspace(-0.5, 2.4, 300)
original_1 = 3 - 2*x
original_2 = (7 - 4*x) / 3
eliminated_2 = np.ones_like(x)
solution = np.array([1.0, 1.0])

fig, axes = plt.subplots(1, 2, figsize=(9.2, 4.1), sharex=True, sharey=True)
axes[0].plot(x, original_1, color=BLACK, linewidth=2, label="$2x+y=3$")
axes[0].plot(x, original_2, color=DARK_GOLD, linewidth=2, label="$4x+3y=7$")
axes[0].set_title("before elimination")
axes[1].plot(x, original_1, color=BLACK, linewidth=2, label="$2x+y=3$")
axes[1].plot(x, eliminated_2, color=DARK_GOLD, linewidth=2, label="$y=1$")
axes[1].set_title(r"after $R_2\leftarrow R_2-2R_1$")
for ax in axes:
    ax.scatter(*solution, color=GOLD, edgecolor=BLACK, s=80, zorder=3)
    ax.set(xlim=(-0.5,2.4), ylim=(-0.5,3.3), aspect="equal",
           xlabel="$x$", ylabel="$y$")
    ax.legend(frameon=False)
fig.suptitle("Row operations change the equations, not their shared solution")
fig.tight_layout()
plt.show()
```

### LU factorization as two successive transformations

The product $A=LU$ is shown as a sequence: an upper-triangular transformation
acts first, followed by a lower-triangular transformation.

```{code-cell} python
A = np.array([[2.0, 0.6], [0.5, 1.4]])
L = np.array([[1.0, 0.0], [A[1,0]/A[0,0], 1.0]])
U = np.array([[A[0,0], A[0,1]], [0.0, A[1,1]-L[1,0]*A[0,1]]])

grid_values = np.linspace(-1, 1, 9)
segments = []
for value in grid_values:
    segments.append(np.vstack([np.linspace(-1,1,80), np.full(80,value)]))
    segments.append(np.vstack([np.full(80,value), np.linspace(-1,1,80)]))

fig, axes = plt.subplots(1, 3, figsize=(11, 3.8), sharex=True, sharey=True)
for ax, transform, title in zip(axes, [np.eye(2), U, A],
                                ["input x", "after Ux", "after L(Ux) = Ax"]):
    for segment in segments:
        mapped = transform @ segment
        ax.plot(mapped[0], mapped[1], color=GRAY, linewidth=0.7)
    ax.set(aspect="equal", xlim=(-3,3), ylim=(-2.3,2.3), title=title)
fig.suptitle("LU breaks one matrix action into two triangular actions")
fig.tight_layout()
plt.show()
```

### QR least squares as an orthogonal projection

For an overdetermined system, $A\mathbf x$ must lie in the column space of
$A$. QR finds the point in that space closest to $\mathbf b$; the remaining
residual is perpendicular to the entire plane.

```{code-cell} python
A = np.array([[1.0, 0.2], [0.2, 1.0], [0.7, 0.5]])
b = np.array([1.35, 1.15, 0.25])
Q, R = np.linalg.qr(A)
projection = Q @ (Q.T @ b)
residual = b - projection

u, v = np.meshgrid(np.linspace(-0.5,1.7,10), np.linspace(-0.5,1.7,10))
plane = u[...,None]*A[:,0] + v[...,None]*A[:,1]
fig = plt.figure(figsize=(7.2, 5.6))
ax = fig.add_subplot(111, projection="3d")
ax.plot_surface(plane[:,:,0], plane[:,:,1], plane[:,:,2], color=GOLD,
                alpha=0.32, edgecolor=GRAY, linewidth=0.3)
ax.quiver(0,0,0,*b, color=BLACK, linewidth=2, arrow_length_ratio=0.1,
          label="b")
ax.quiver(0,0,0,*projection, color=DARK_GOLD, linewidth=2,
          arrow_length_ratio=0.1, label="projection A x̂")
ax.quiver(*projection, *residual, color=GRAY, linewidth=2,
          arrow_length_ratio=0.16, label="residual")
ax.set(xlabel="$b_1$", ylabel="$b_2$", zlabel="$b_3$",
       title="Least squares projects b onto the column space of A")
ax.legend(frameon=False)
plt.show()
```

---

*Migration source: `03_Linear_algebra/linear_equations.tex` from the archived Overleaf export.*
