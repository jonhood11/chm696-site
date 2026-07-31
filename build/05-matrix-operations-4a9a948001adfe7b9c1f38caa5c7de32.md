# Linear Algebra: Matrix Operations

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Functions of Matrices


- What does it mean to take a function of a matrix $f(\mathbf{A})$? E.g., $e^{\mathbf{A}}$?

- We define this operation using the Taylor series expansion for the exponential function: 
$$
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
$$


- Extending this series to matrices, we define: 
$$
e^{\mathbf{A}} = \mathbf{I} + \mathbf{A} + \frac{\mathbf{A}^2}{2!} + \frac{\mathbf{A}^3}{3!} + \cdots,
$$
 where $\mathbf{I}$ is the identity matrix, and powers of $\mathbf{A}$ are computed by matrix multiplication.

- However, when dealing with matrices, we must be cautious because matrices generally do not commute, meaning $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$ in general.

- This non-commutativity introduces important differences from the scalar case. For instance, while for real numbers $e^a e^b = e^{a+b}$, this property does not hold for matrices!


## Functions of Matrices (continued)


- Specifically, for matrices $\mathbf{A}$ and $\mathbf{B}$, 
$$
e^{\mathbf{A}} e^{\mathbf{B}} \neq e^{\mathbf{A} + \mathbf{B}},
$$
 unless $\mathbf{A}$ and $\mathbf{B}$ commute (i.e., $\mathbf{A}\mathbf{B} = \mathbf{B}\mathbf{A}$).

- This highlights how non-commutativity affects matrix exponentials, resulting in different outcomes compared to scalar exponentials.


## Transpose


- *Transpose* of the matrix: interchange the rows and columns, i.e., $\text{A}$ which is MxN becomes $\text{A}^T$ which is NxM.

- $A_{ij} = A^T_{ji}$

- The transpose of a product of matrices satisfies: 
$$
(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T \mathbf{A}^T.
$$


- More generally, for multiple matrices: 
$$
(\mathbf{A}\mathbf{B}\mathbf{C})^T = \mathbf{C}^T \mathbf{B}^T \mathbf{A}^T.
$$


## Complex and Hermitian Conjugates


- The complex conjugate $\text{A}^*$: take the complex conjugate of each of the elements of A (i.e., the matrix remains of the same dimensions NxM!)

- $(A^*)_{ij} = (A_{ij})^*$

- For a *real* matrix, $\text{A}^* = \text{A}$

- The Hermitian conjugate, or *adjoint*, of a matrix A is the transpose of its complex conjugate, or equivalently, the complex conjugate of its transpose: 
$$
\text{A}^\dagger = (\text{A}^*)^T = (\text{A}^T)^*
$$


- For a *real* matrix, $\text{A}^\dagger = \text{A}^T$

- We can write the inner product of two vectors using the Hermitian conjugate (or transpose in the case of real vectors): 
$$
\text{a}^\dagger \text{b} = (a^*_1 \; a^*_2 \; \dots a^*_N) \begin{pmatrix}
      b_1 \\ b_2 \\ \vdots \\ b_N
      \end{pmatrix}
      = \sum_{i=1}^N a^*_i b_i = \langle \mathbf{a}| \mathbf{b}\rangle
$$


## Determinant


- Thinking of a matrix as a transformation to the vector, we can ask about how a unit box transforms to the new space (e.g., rotation, stretch, skew, etc.). An important property is the area of the new unit box after the transformation. This new area is called the *determinant*.

- The determinant is a scalar value that can be computed from the elements of a square matrix. For a $2 \times 2$ matrix: 
$$
\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix},
$$
 the determinant is: $\det(\text{A}) = |\text{A}| = ad - bc$

- For a $3 \times 3$ matrix: 
$$
\text{A} = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix},
$$
 the determinant is: $\det(\mathbf{A}) = |\text{A}| = a(ei - fh) - b(di - fg) + c(dh - eg).$


## Cofactor expansion


- The determinant represents the scaling factor for area in 2D (or volume in higher dimensions) under the linear transformation defined by the matrix.

- If $\det(\text{A}) = 0$, the transformation squashes the space into a lower dimension, indicating that $\text{A}$ is *singular* (non-invertible).

- For an $n \times n$ matrix $\text{A} = (A_{ij})$, the determinant can be defined using cofactor expansion along any row or column. E.g., for the first row: 
$$
\det(\text{A}) = \sum_{j=1}^n (-1)^{1+j} A_{1j} \det(\text{A}_{1j}),
$$
 where: $A_{1j}$ is the element in the first row and $j$-th column, $\text{A}_{1j}$ is the $(n-1) \times (n-1)$ submatrix obtained by removing the first row and $j$-th column from $\text{A}$, $(-1)^{1+j}$ is the sign factor that alternates for each term in the expansion.

- This process can be repeated recursively, breaking down the determinant calculation of $\text{A}$ into determinants of smaller matrices until reaching $1 \times 1$ determinants.


## Properties of Determinants

The determinant satisfies several important properties that provide additional insight and simplify calculations:

- $\det(\text{I}) = 1$.

- $\det(\text{A}\text{B}) = \det(\text{A}) \det(\text{B})$.

- $\det(\text{A}^T) = \det(\text{A})$

- $\det(\text{A}^\dagger) = \det((\text{A}^*)^T) = \det(\text{A}^*) = (\det(\text{A}))^*$

- For an invertible matrix $\text{A}$: $\det(\text{A}^{-1}) = \dfrac{1}{\det(\text{A})}$

- If any two rows (columns) of A are identical or are multiples of one another, $\det(\text{A}) = 0$.

There are also several operations on a matrix that leave its determinant unchanged:

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
$$
\text{M} \text{M}^{-1} =\text{M}^{-1} \text{M}=  \text{I}.
$$


- Does an inverse of a matrix $\text{M}$ always exist? A similar question could be asked for a number $y = m x$, for which the answer is when $m \ne 0$.

- The inverse of a matrix exists if and only if the determinant of the matrix is non-zero, i.e., if $|\text{M}| \neq 0$

- Otherwise, if $|\text{M}| = 0$, the matrix is said to be *singular*, and no inverse exists.

Properties of inverses:

- The determinant of the inverse is related to the determinant of the original matrix as: 
$$
|\text{M}^{-1}| = \frac{1}{|\text{M}|}.
$$


- For two invertible matrices $\text{A}$ and $\text{B}$, the inverse of their product is given by: $(\text{A} \text{B})^{-1} = \text{B}^{-1} \text{A}^{-1}$.


## Rank of the Matrix


- The *rank* of a matrix is an important concept, particularly in the solution of sets of simultaneous linear equations.

- The rank of A, denoted by rank A or by R(A), is defined as the number of *linearly independent vectors* in either set of column or row vectors, and equals the dimension of the vector space spanned by those vectors.

- Alternatively, the rank of matrix A is given by the largest square submatrix of A whose determinant is non-zero.

- In the case of a square N×N matrix A, it is singular unless R(A) = N.


## Special types of square matrices


- *Orthogonal* matrix: $\text{A}^T = \text{A}^{-1}$ or $\text{A}^T \text{A}= \text{I}$

- Thus the determinant of an orthogonal matrix is: $|\text{A}| = \pm 1$.

- *Unitary* matrix is an extension of an orthogonal matrix to the case of complex numbers: $\text{A}^\dagger = \text{A}^{-1}$.

- The determinant of the unitary matrix has unit modulus.

- An orthogonal/unitary matrix represents a linear operator that leaves the norms (lengths) of real/complex vectors unchanged.\

- *Hermitian* matrix: $\text{A} = \text{A}^\dagger$

- *Anti-Hermitian* matrix: $\text{A} = -\text{A}^\dagger$

- Any N × N matrix A can be written as the sum of an Hermitian matrix and an anti-Hermitian matrix: $\text{A} = 1/2(\text{A} + \text{A}^\dagger) + 1/2 (\text{A} - \text{A}^\dagger) = \text{B} + \text{C}$, where $\text{B} = \text{B}^\dagger$ is the Hermitian part and $\text{C} = -\text{C}^\dagger$ is the anti-Hermitian part.

---

*Migration source: `03_Linear_algebra/Matrices2.tex` from the archived Overleaf export.*
