# Singular Value Decomposition

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Singular Value Decomposition (SVD) applications


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

Any matrix A can be decomposed as $$A = U\Sigma V^T,$$

- A is an arbitrary nxm matrix

- $\Sigma$ is a nxm rectangular \"diagonal\" matrix with \"singular values\" of A

- U is nxn unitary, containing \"left singular vectors\"

- V is mxm unitary, containing \"right singular vectors\"


:::{note} Original-slide figure pending review
The original lecture refers to `SVD1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## SVD: interpretation

$$A = U\Sigma V^T,$$

- Recall: a square matrix can be represented as $A = S D S^{-1},$ where S is a matrix composed of eigenvectors, and D is a diagonal matrix with eigenvalues.

- Eigenvectors define characteristic directions of matrix A, and eigenvalues show how much the data are squeezed/extended along these directions.

- SVD is a generalization of matrix diagonalization to arbitrary non-square matrices.

- Similar to eigenvectors in matrix diagonalization, singular vectors define characteristic directions along which the space is squeezed/extended by singular values.

- Note that in SVD, U and V matrices are unitary, i.e., correspond to pure rotations.


## SVD: matrix approximation


- U is nxn unitary, i.e., $UU^T = U^TU = I_{n \times n}$

- V is mxm unitary, i.e., $VV^T = V^TV = I_{m \times m}$

- $\Sigma$ is diagonal with elements ordered by value (importance): $\sigma_1  \ge \sigma_2 \ge \sigma_3 \ge  \dots \ge \sigma_m \ge 0$

- Economy SVD (still exact!): $$A = U\Sigma V^T = \sigma_1 u_1v_1^T + \sigma_2 u_2v_2^T + \dots + \sigma_m u_mv_m^T = \hat{U}\hat{\Sigma}V^T,$$ where $\hat{U}$ is nxm and $\hat{\Sigma}$ is mxm matrices.


:::{note} Original-slide figure pending review
The original lecture refers to `SVD2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## SVD: matrix approximation (continued)


- Since singular values $\sigma_i$ are ordered by values, we can ignore the contributions of terms with small $\sigma_i$, effectively truncating the summation at some term $r<m$

- In other words, we truncate the rank of the approximate matrix at $r$

- Such truncation gives a low-dimensionality representation of matrix A

$$A \approx \sigma_1 u_1v_1^T + \sigma_2 u_2v_2^T + \dots + \sigma_r u_rv_r^T = \tilde{U}\tilde{\Sigma}\tilde{V}^T$$


:::{note} Original-slide figure pending review
The original lecture refers to `SVD3.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Correlation matrices


- Let's start with economical (exact) SVD: $A = \hat{U}\hat{\Sigma}V^T$

- $A^TA$ and $AA^T$ are called [correlation matrices]{style="color: blue"}.

- $A^TA$ is mxm matrix: $$A^TA = V\hat{\Sigma} \hat{U}^T \hat{U} \hat{\Sigma} V^T = V \hat{\Sigma}^2 V^T \Rightarrow$$ $$(A^TA) V = V \hat{\Sigma}^2,$$ i.e., V are the eigenvectors and $\hat{\Sigma}^2$ are eigenvalues of $(A^TA)$!

- Similarly, $AA^T$ (nxn matrix): $$AA^T = \hat{U} \hat{\Sigma} V^T V \hat{\Sigma} \hat{U}^T = \hat{U} \hat{\Sigma}^2 \hat{U}^T  \Rightarrow$$ $$(AA^T)  \hat{U} =  \hat{U} \hat{\Sigma}^2,$$ i.e., $\hat{U}$ are the eigenvectors and $\hat{\Sigma}^2$ are eigenvalues of $(AA^T)$!


## Principal Component Analysis (PCA)


- PCA is a statistical technique used for dimensionality reduction.

- PCA identifies the directions of maximum variance in data, so-called [principal components]{style="color: blue"}.

- PCA involves calculating the [covariance matrix]{style="color: blue"} of the data and then performing an eigen-decomposition of this matrix to find the eigenvalues and eigenvectors.


## Principal Component Analysis (PCA) (continued)

Original matrix with data to analyze (different \"experiments\" are stored in rows): $$A_{n \times m} = \begin{pmatrix}
    \cdots x_1 \cdots \\
    \cdots x_1 \cdots \\
    \cdots  \\
    \cdots x_n \cdots \\
\end{pmatrix}$$

1.  Compute mean row: $\bar{x} = \frac{1}{n} \sum_{i=1}^n x_i$

2.  Create mean matrix $\bar{A} = \begin{pmatrix}
            1 \\ 1\\ \vdots \\1
        \end{pmatrix}
        \begin{pmatrix}
            \cdots \bar{x} \cdots
        \end{pmatrix}$

3.  Center data: $B = A - \bar{A}$

4.  [Covariance matrix]{style="color: blue"}: $C = B^T B$


## Principal Component Analysis (PCA) (continued)


1.  [Covariance matrix]{style="color: blue"}: $C = B^T B$

2.  Compute SVD on matrix B: $B = U \Sigma V^T$

3.  Eigenvalue problem for the covariance matrix: $C V = V D$, where D is a diagonal matrix with eigenvalues $\lambda_i = \sigma_i^2$

4.  [Principal component]{style="color: blue"} $T = B V = U \Sigma$, where V is also called [loading]{style="color: blue"}.


## Pseudo-inverse


- Inverse of the matrix is defined only for square matrices: $A A^{-1} = i$

- However, we often work with linear systems $Ax = b$ for non-square matrices.

- Let's use SVD to define a [pseudo-inverse]{style="color: blue"} or Moore-Penrose inverse: $$Ax = b$$ $$U\Sigma V^T x = b$$ $$V \Sigma^{-1} U^T U\Sigma V^T x = V \Sigma^{-1} U^T b$$ $$\tilde{x} = A^{\dagger} b$$ $$A^{\dagger} = V \Sigma^{-1} U^T$$

- For under-determined systems, $\tilde{x}$ gives the minimum-norm solution that satisfies $A\tilde{x} = b$

- For over-determined systems, $\tilde{x}$ gives the least squares solution, i.e., minimizes the norm $|| A\tilde{x} -b ||$

- Pseudo-inverse is used for linear regression of data.

---

*Migration source: `03_Linear_algebra/SVD.tex` from the archived Overleaf export.*
