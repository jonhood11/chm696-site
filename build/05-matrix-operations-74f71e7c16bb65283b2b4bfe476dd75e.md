# Linear Algebra: Matrix Operations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- define analytic functions of matrices using convergent power series;
- compute and use transposes, complex conjugates, and adjoints;
- interpret determinants geometrically and apply their algebraic properties;
- relate invertibility, determinant, and rank; and
- recognize orthogonal, unitary, Hermitian, and anti-Hermitian matrices.

## Functions of matrices


- What does it mean to take a function of a matrix $f(\mathbf{A})$? E.g., $e^{\mathbf{A}}$?

- We define this operation using the Taylor series expansion for the exponential function:
```{math}
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
```


- Extending this series to matrices, we define:
```{math}
e^{\mathbf{A}} = \mathbf{I} + \mathbf{A} + \frac{\mathbf{A}^2}{2!} + \frac{\mathbf{A}^3}{3!} + \cdots,
```
 where $\mathbf{I}$ is the identity matrix, and powers of $\mathbf{A}$ are computed by matrix multiplication.

- However, when dealing with matrices, we must be cautious because matrices generally do not commute, meaning $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$ in general.

- This noncommutativity introduces important differences from the scalar case.
  In general, $e^{\mathbf A}e^{\mathbf B}\ne e^{\mathbf A+\mathbf B}$.


## Functions of Matrices (continued)


- Specifically, for matrices $\mathbf{A}$ and $\mathbf{B}$,
```{math}
e^{\mathbf{A}} e^{\mathbf{B}} \neq e^{\mathbf{A} + \mathbf{B}},
```
 in general. Equality does hold when
 $\mathbf A\mathbf B=\mathbf B\mathbf A$.

- This highlights how non-commutativity affects matrix exponentials, resulting in different outcomes compared to scalar exponentials.


## Transpose


- *Transpose* of the matrix: interchange the rows and columns, i.e., $\text{A}$ which is MxN becomes $\text{A}^T$ which is NxM.

- $A_{ij} = A^T_{ji}$

- The transpose of a product of matrices satisfies:
```{math}
(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T \mathbf{A}^T.
```


- More generally, for multiple matrices:
```{math}
(\mathbf{A}\mathbf{B}\mathbf{C})^T = \mathbf{C}^T \mathbf{B}^T \mathbf{A}^T.
```


## Complex and Hermitian Conjugates


- The complex conjugate $\text{A}^*$: take the complex conjugate of each of the elements of A (i.e., the matrix remains of the same dimensions NxM!)

- $(A^*)_{ij} = (A_{ij})^*$

- For a *real* matrix, $\text{A}^* = \text{A}$

- The Hermitian conjugate, or *adjoint*, of a matrix A is the transpose of its complex conjugate, or equivalently, the complex conjugate of its transpose:
```{math}
\text{A}^\dagger = (\text{A}^*)^T = (\text{A}^T)^*
```


- For a *real* matrix, $\text{A}^\dagger = \text{A}^T$

- We can write the inner product of two vectors using the Hermitian conjugate (or transpose in the case of real vectors):
```{math}
\text{a}^\dagger \text{b} = (a^*_1 \; a^*_2 \; \dots a^*_N) \begin{pmatrix}
      b_1 \\ b_2 \\ \vdots \\ b_N
      \end{pmatrix}
      = \sum_{i=1}^N a^*_i b_i = \langle \mathbf{a}| \mathbf{b}\rangle
```


## Determinant


- For a square matrix viewed as a linear transformation, the determinant is
  the **signed** volume-scaling factor. Its absolute value gives the ratio of
  the transformed unit-box volume to the original volume.

- The determinant is a scalar value that can be computed from the elements of a square matrix. For a $2 \times 2$ matrix:
```{math}
\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix},
```
 the determinant is: $\det(\text{A}) = |\text{A}| = ad - bc$

- For a $3 \times 3$ matrix:
```{math}
\text{A} = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix},
```
 the determinant is: $\det(\mathbf{A}) = |\text{A}| = a(ei - fh) - b(di - fg) + c(dh - eg).$


## Cofactor expansion


- The determinant represents the scaling factor for area in 2D (or volume in higher dimensions) under the linear transformation defined by the matrix.

:::{figure} figures/05-matrix-operations/determinant.png
:alt: Hand-drawn parallelogram illustrating determinant as signed area scaling
:width: 65%

Geometric determinant construction from Jonathan's original notes.
:::

- If $\det(\text{A}) = 0$, the transformation squashes the space into a lower dimension, indicating that $\text{A}$ is *singular* (non-invertible).

- For an $n \times n$ matrix $\text{A} = (A_{ij})$, the determinant can be defined using cofactor expansion along any row or column. E.g., for the first row:
```{math}
\det(\mathbf A)=\sum_{j=1}^n(-1)^{1+j}A_{1j}\det(\mathbf M_{1j}),
```
 where $\mathbf M_{1j}$ is obtained by deleting row $1$ and column $j$ from
 $\mathbf A$.

- This process can be repeated recursively, breaking down the determinant calculation of $\text{A}$ into determinants of smaller matrices until reaching $1 \times 1$ determinants.


## Properties of Determinants

The determinant satisfies several important properties that provide additional insight and simplify calculations:

- $\det(\text{I}) = 1$.

- $\det(\text{A}\text{B}) = \det(\text{A}) \det(\text{B})$.

- $\det(\text{A}^T) = \det(\text{A})$

- $\det(\text{A}^\dagger) = \det((\text{A}^*)^T) = \det(\text{A}^*) = (\det(\text{A}))^*$

- For an invertible matrix $\text{A}$: $\det(\text{A}^{-1}) = \dfrac{1}{\det(\text{A})}$

- If any two rows (columns) of A are identical or are multiples of one another, $\det(\text{A}) = 0$.

Elementary row or column operations affect the determinant as follows:

- Swapping two rows or columns changes the sign of the determinant.

- Multiplying a row or column by a scalar $k$ multiplies the determinant by $k$.

- Adding a multiple of one row to another row does not change the determinant.


## Determinants


:::{admonition} Question
Consider the following matrices. Compute their determinant and explain the effect on the area of a unit square under the transformation defined by $M$.

1.  $M = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

2.  $R = \begin{pmatrix} \cos(\theta) & \sin(\theta) \\ -\sin(\theta) & \cos(\theta) \end{pmatrix}$
:::


## Inverse of a Matrix


- The inverse of a matrix $\text{M}$, denoted as $\text{M}^{-1}$, satisfies the equation:
```{math}
\text{M} \text{M}^{-1} =\text{M}^{-1} \text{M}=  \text{I}.
```


- Does an inverse of a matrix $\text{M}$ always exist? A similar question could be asked for a number $y = m x$, for which the answer is when $m \ne 0$.

- The inverse of a matrix exists if and only if the determinant of the matrix is non-zero, i.e., if $|\text{M}| \neq 0$

- Otherwise, if $|\text{M}| = 0$, the matrix is said to be *singular*, and no inverse exists.

Properties of inverses:

- The determinant of the inverse is related to the determinant of the original matrix as:
```{math}
|\text{M}^{-1}| = \frac{1}{|\text{M}|}.
```


- For two invertible matrices $\text{A}$ and $\text{B}$, the inverse of their product is given by: $(\text{A} \text{B})^{-1} = \text{B}^{-1} \text{A}^{-1}$.


## Rank of the Matrix


- The *rank* of a matrix is an important concept, particularly in the solution of sets of simultaneous linear equations.

- The rank of A, denoted by rank A or by R(A), is defined as the number of *linearly independent vectors* in either set of column or row vectors, and equals the dimension of the vector space spanned by those vectors.

- Equivalently, the rank is the order of the largest square submatrix with
  nonzero determinant.

- A square $N\times N$ matrix is invertible exactly when
  $\operatorname{rank}(\mathbf A)=N$.


## Special types of square matrices


- *Orthogonal* matrix: $\text{A}^T = \text{A}^{-1}$ or $\text{A}^T \text{A}= \text{I}$

- Thus the determinant of an orthogonal matrix is: $|\text{A}| = \pm 1$.

- *Unitary* matrix is an extension of an orthogonal matrix to the case of complex numbers: $\text{A}^\dagger = \text{A}^{-1}$.

- The determinant of the unitary matrix has unit modulus.

- Orthogonal and unitary matrices preserve inner products and therefore norms.

- *Hermitian* matrix: $\text{A} = \text{A}^\dagger$

- *Anti-Hermitian* matrix: $\text{A} = -\text{A}^\dagger$

- Every square complex matrix has a unique decomposition into Hermitian and
  anti-Hermitian parts:

  ```{math}
  \mathbf A
  =\frac{\mathbf A+\mathbf A^\dagger}{2}
  +\frac{\mathbf A-\mathbf A^\dagger}{2}.
  ```

---

*Migration source: `03_Linear_algebra/Matrices2.tex` from the archived Overleaf export.*
