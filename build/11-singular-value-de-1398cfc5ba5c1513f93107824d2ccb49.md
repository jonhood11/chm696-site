# Singular Value Decomposition

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- state the full and reduced SVD with consistent dimensions;
- relate singular vectors to the Gram matrices $A^\dagger A$ and
  $AA^\dagger$;
- construct an optimal truncated-SVD approximation;
- connect centered-data SVD to PCA scores, loadings, and variances; and
- construct the Moore--Penrose pseudoinverse.

Throughout the derivations below, matrices are real, so the adjoint is the
transpose. For complex matrices, replace every transpose by a conjugate
transpose.

## Singular-value-decomposition applications


- Data Processing and Analysis

  - Dimensionality Reduction (via Principal Component Analysis)

  - Image Compression and Processing

  - Noise Reduction

  - Matrix Approximation

- Machine Learning and AI

  - Recommendation Systems (used by Netflix, Amazon, etc.)

  - Text mining

  - Facial Recognition

- Mathematical and Linear Algebra Applications

  - Pseudoinverse Computation

  - Determining Matrix Properties such as rank, null space, range

  - Least Squares Fitting


## SVD: basics

For $A\in\mathbb R^{n\times m}$, let $p=\min(n,m)$. A full SVD is
```{math}
A = U\Sigma V^T,
```


- $\Sigma$ is an $n\times m$ rectangular diagonal matrix with
  $p$ nonnegative singular values;

- $U$ is $n\times n$ orthogonal and contains the left singular vectors; and

- $V$ is $m\times m$ orthogonal and contains the right singular vectors.


```{figure} figures/11-singular-value-decomposition/SVD1.png
:alt: Factorization of a rectangular matrix into left singular vectors, singular values, and right singular vectors
:width: 80%

Full singular value decomposition.
```

## SVD: interpretation


```{math}
A = U\Sigma V^T,
```


- Recall: a square matrix can be represented as $A = S D S^{-1},$ where S is a matrix composed of eigenvectors, and D is a diagonal matrix with eigenvalues.

- Eigenvectors define characteristic directions of matrix A, and eigenvalues show how much the data are squeezed/extended along these directions.

- SVD is a generalization of matrix diagonalization to arbitrary non-square matrices.

- Similar to eigenvectors in matrix diagonalization, singular vectors define characteristic directions along which the space is squeezed/extended by singular values.

- The orthogonal matrices $U$ and $V$ represent orthonormal basis changes;
  they may include reflections as well as rotations.


## SVD: matrix approximation


- U is nxn unitary, i.e., $UU^T = U^TU = I_{n \times n}$

- V is mxm unitary, i.e., $VV^T = V^TV = I_{m \times m}$

- Singular values are ordered
  $\sigma_1\ge\sigma_2\ge\cdots\ge\sigma_p\ge0$.

- The reduced SVD is still exact:
```{math}
A=\hat U\hat\Sigma\hat V^T
=\sum_{i=1}^{p}\sigma_i u_i v_i^T,
```
where $\hat U\in\mathbb R^{n\times p}$,
$\hat\Sigma\in\mathbb R^{p\times p}$, and
$\hat V\in\mathbb R^{m\times p}$.


```{figure} figures/11-singular-value-decomposition/SVD2.png
:alt: Outer-product expansion of a matrix into singular-vector components
:width: 80%

Each singular triplet contributes one rank-one matrix.
```

## SVD: matrix approximation (continued)


- Since singular values $\sigma_i$ are ordered by values, we can ignore the contributions of terms with small $\sigma_i$, effectively truncating the summation at some term $r<m$

- In other words, we truncate the rank of the approximate matrix at $r$

- Such truncation gives a low-dimensionality representation of matrix A


```{math}
A \approx \sigma_1 u_1v_1^T + \sigma_2 u_2v_2^T + \dots + \sigma_r u_rv_r^T = \tilde{U}\tilde{\Sigma}\tilde{V}^T
```


```{figure} figures/11-singular-value-decomposition/SVD3.png
:alt: Truncated singular value decomposition used for low-rank approximation
:width: 80%

Keeping the leading $r$ singular triplets gives the best rank-$r$
approximation in both the spectral and Frobenius norms.
```

## Correlation matrices


- Let's start with economical (exact) SVD: $A = \hat{U}\hat{\Sigma}V^T$

- $A^TA$ and $AA^T$ are Gram matrices. They become proportional to covariance
  matrices when $A$ contains appropriately centered observations.

- $A^TA$ is mxm matrix:
```{math}
A^TA = V\hat{\Sigma} \hat{U}^T \hat{U} \hat{\Sigma} V^T = V \hat{\Sigma}^2 V^T \Rightarrow
```

```{math}
(A^TA) V = V \hat{\Sigma}^2,
```
 i.e., V are the eigenvectors and $\hat{\Sigma}^2$ are eigenvalues of $(A^TA)$!

- Similarly, $AA^T$ (nxn matrix):
```{math}
AA^T = \hat{U} \hat{\Sigma} V^T V \hat{\Sigma} \hat{U}^T = \hat{U} \hat{\Sigma}^2 \hat{U}^T  \Rightarrow
```

```{math}
(AA^T)  \hat{U} =  \hat{U} \hat{\Sigma}^2,
```
 i.e., $\hat{U}$ are the eigenvectors and $\hat{\Sigma}^2$ are eigenvalues of $(AA^T)$!


## Principal Component Analysis (PCA)


- PCA is a statistical technique used for dimensionality reduction.

- PCA identifies the directions of maximum variance in data, so-called [principal components]{style="color: blue"}.

- PCA involves calculating the [covariance matrix]{style="color: blue"} of the data and then performing an eigen-decomposition of this matrix to find the eigenvalues and eigenvectors.


## Principal Component Analysis (PCA) (continued)

Original matrix with data to analyze (different \"experiments\" are stored in rows):
```{math}
A_{n \times m} = \begin{pmatrix}
    \cdots x_1 \cdots \\
    \cdots x_2 \cdots \\
    \cdots  \\
    \cdots x_n \cdots \\
\end{pmatrix}
```


1.  Compute mean row: $\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$

2.  Create mean matrix $\bar{A} = \begin{pmatrix}
            1 \\ 1\\ \vdots \\1
        \end{pmatrix}
        \begin{pmatrix}
            \cdots \bar{x} \cdots
        \end{pmatrix}$

3.  Center data: $B = A - \bar{A}$

4.  Sample covariance matrix:
    $C=B^TB/(n-1)$.


## Principal Component Analysis (PCA) (continued)


1.  Sample covariance matrix: $C=B^TB/(n-1)$.

2.  Compute SVD on matrix B: $B = U \Sigma V^T$

3.  The loading vectors satisfy $CV=VD$, with
    $\lambda_i=\sigma_i^2/(n-1)$.

4.  The score matrix is $T=BV=U\Sigma$; the columns of $V$ are the
    loading vectors.


## Pseudo-inverse


- An ordinary inverse exists only for an invertible square matrix:
  $AA^{-1}=A^{-1}A=I$.

- However, we often work with linear systems $Ax = b$ for non-square matrices.

- Let's use SVD to define a [pseudo-inverse]{style="color: blue"} or Moore-Penrose inverse:
```{math}
Ax = b
```

```{math}
U\Sigma V^T x = b
```

```{math}
V\Sigma^\dagger U^T U\Sigma V^T x
=V\Sigma^\dagger U^T b
```

```{math}
\tilde{x} = A^{\dagger} b
```

```{math}
A^{\dagger}=V\Sigma^\dagger U^T,
```
where $\Sigma^\dagger$ transposes the rectangular diagonal matrix and replaces
each nonzero $\sigma_i$ by $1/\sigma_i$ while leaving zeros unchanged.


- For every system, $\tilde x=A^\dagger b$ is a least-squares solution with
  minimum Euclidean norm. If an underdetermined system is consistent, it is
  the minimum-norm exact solution.

- Pseudo-inverse is used for linear regression of data.

---

*Migration source: `03_Linear_algebra/SVD.tex` from the archived Overleaf export.*
