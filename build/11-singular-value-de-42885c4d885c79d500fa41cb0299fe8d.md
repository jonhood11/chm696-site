---
kernelspec:
  name: python3
  display_name: Python 3
---

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

## PCA figures from Jonathan's original notes

The following reproducible figures were generated from the Python examples in
Jonathan's original long-form PCA chapter.

:::{figure} figures/11-singular-value-decomposition/example_covariance.png
:alt: Scatter plots with uncorrelated and strongly correlated variables
:width: 90%

Uncorrelated and strongly correlated two-variable samples.
:::

:::{figure} figures/11-singular-value-decomposition/example_regression.png
:alt: Regression lines over uncorrelated and strongly correlated samples
:width: 90%

Linear regression applied to the two covariance examples.
:::

:::{figure} figures/11-singular-value-decomposition/example_heatmaps.png
:alt: Covariance-matrix heatmaps for uncorrelated and strongly correlated data
:width: 90%

Covariance matrices for the two synthetic data sets.
:::

:::{figure} figures/11-singular-value-decomposition/example_histograms.png
:alt: Histograms of the four Iris measurements grouped by species
:width: 90%

Feature distributions in the Iris data set.
:::

:::{figure} figures/11-singular-value-decomposition/example_explained_variance.png
:alt: Individual and cumulative explained-variance ratios for Iris principal components
:width: 85%

Individual and cumulative explained variance of the Iris principal components.
:::

:::{figure} figures/11-singular-value-decomposition/example_pca_visualization.png
:alt: Iris observations projected onto their first two principal components
:width: 85%

Manual PCA projection of the Iris observations.
:::

:::{figure} figures/11-singular-value-decomposition/example_sklearn_pca.png
:alt: Scikit-learn PCA projection of Iris observations
:width: 85%

The corresponding projection computed with scikit-learn.
:::


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

## Candidate visualizations for review

These optional figures are collected after the lecture so their value can be
judged without changing the current presentation.

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

### SVD as rotate, stretch, and rotate

The factorization $A=U\Sigma V^T$ becomes a sequence of visible operations.
$V^T$ selects orthogonal input directions, $\Sigma$ scales them, and $U$
orients the result in the output space.

```{code-cell} python
A = np.array([[1.5, 1.0], [0.25, 0.9]])
U, singular_values, VT = np.linalg.svd(A)
Sigma = np.diag(singular_values)
t = np.linspace(0,2*np.pi,500)
circle = np.vstack([np.cos(t),np.sin(t)])
stages = [circle, VT @ circle, Sigma @ VT @ circle, U @ Sigma @ VT @ circle]
titles = ["input circle", "Vᵀ: rotate coordinates", "Σ: stretch axes", "U: rotate output"]

fig, axes = plt.subplots(1,4,figsize=(12,3.5),sharex=True,sharey=True)
for ax, points, title in zip(axes, stages, titles):
    ax.plot(points[0],points[1],color=DARK_GOLD,linewidth=2.5)
    ax.axhline(0,color=GRAY,linewidth=0.8)
    ax.axvline(0,color=GRAY,linewidth=0.8)
    ax.set(aspect="equal",xlim=(-2.5,2.5),ylim=(-2.5,2.5),title=title)
fig.suptitle("Every matrix transformation separates into three SVD steps")
fig.tight_layout()
plt.show()
```

### Singular spectrum and retained information

Individual singular values identify important directions; the cumulative
energy curve shows how many are needed to represent a chosen fraction of the
matrix.

```{code-cell} python
singular_values = np.array([12.0, 6.3, 2.8, 1.1, 0.42, 0.16, 0.05])
energy = np.cumsum(singular_values**2) / np.sum(singular_values**2)
k95 = np.searchsorted(energy,0.95)+1

fig, axes = plt.subplots(1,2,figsize=(9.5,4.0))
axes[0].semilogy(range(1,len(singular_values)+1),singular_values,"o-",
                 color=DARK_GOLD)
axes[0].axvline(k95,color=GRAY,linestyle="--")
axes[0].set(xlabel="component k",ylabel="singular value σₖ",title="singular-value spectrum")
axes[1].plot(range(1,len(energy)+1),100*energy,"o-",color=BLACK)
axes[1].axhline(95,color=DARK_GOLD,linestyle="--",label="95% threshold")
axes[1].axvline(k95,color=GRAY,linestyle="--")
axes[1].set(xlabel="number of retained components",ylabel="cumulative energy (%)",
            ylim=(0,103),title=f"{k95} components retain at least 95%")
axes[1].legend(frameon=False)
fig.tight_layout()
plt.show()
```

### Low-rank approximation reveals structure before detail

A synthetic two-dimensional signal is reconstructed with increasing rank.
Large-scale structure appears first; smaller singular values add detail and
eventually noise.

```{code-cell} python
rng = np.random.default_rng(7)
y,x = np.mgrid[-1:1:70j,-1.2:1.2:90j]
signal = (1.2*np.exp(-((x+0.5)**2/0.18 + (y-0.2)**2/0.28))
          -0.85*np.exp(-((x-0.45)**2/0.12 + (y+0.25)**2/0.18))
          +0.35*np.sin(2.5*x)*np.cos(2*y))
matrix = signal + 0.12*rng.normal(size=signal.shape)
U,s,VT = np.linalg.svd(matrix,full_matrices=False)
ranks = [1,2,5,20]

fig, axes = plt.subplots(1,4,figsize=(12,3.1))
limit = np.max(np.abs(matrix))
for ax, rank in zip(axes,ranks):
    approximation = (U[:,:rank]*s[:rank]) @ VT[:rank]
    ax.imshow(approximation,cmap="PuOr",vmin=-limit,vmax=limit,origin="lower")
    error = np.linalg.norm(matrix-approximation)/np.linalg.norm(matrix)
    ax.set(xticks=[],yticks=[],title=f"rank {rank}\nrelative error {error:.2f}")
fig.suptitle("Truncated SVD adds information in descending order of importance")
fig.tight_layout()
plt.show()
```

### PCA as projection onto the dominant data direction

Centering and applying SVD finds the axis with maximum variance. Orthogonal
segments show exactly what information is discarded when the data are reduced
from two dimensions to one.

```{code-cell} python
rng = np.random.default_rng(12)
latent = rng.normal(size=55)
data = np.c_[1.6*latent + 0.35*rng.normal(size=55),
             0.8*latent + 0.42*rng.normal(size=55)]
centered = data-data.mean(axis=0)
_,_,VT = np.linalg.svd(centered,full_matrices=False)
pc1 = VT[0]
scores = centered @ pc1
projection = np.outer(scores,pc1)

fig,ax = plt.subplots(figsize=(6.4,5.1))
for point,projected in zip(centered,projection):
    ax.plot([point[0],projected[0]],[point[1],projected[1]],color=GOLD,alpha=0.45)
ax.scatter(centered[:,0],centered[:,1],color=GRAY,s=24,label="centered data")
ax.scatter(projection[:,0],projection[:,1],color=DARK_GOLD,s=22,label="1D representation")
axis_line = np.linspace(-3.2,3.2,2)[:,None]*pc1
ax.plot(axis_line[:,0],axis_line[:,1],color=BLACK,linewidth=2,label="first principal component")
ax.set(aspect="equal",xlabel="$x_1$",ylabel="$x_2$",
       title="PCA keeps projections and discards perpendicular residuals")
ax.legend(frameon=False)
plt.show()
```

### Small singular values amplify noise in the pseudoinverse

The pseudoinverse divides each data component by its singular value. A tiny
measurement error along a weakly constrained direction can therefore dominate
the recovered solution.

```{code-cell} python
sigma = np.array([1.0,0.18,0.02])
b_clean = np.array([1.0,0.18,0.02])
noise = np.array([0.0,0.0,0.015])
x_clean = b_clean/sigma
x_noisy = (b_clean+noise)/sigma

index = np.arange(3)
fig,axes = plt.subplots(1,2,figsize=(9.5,4.1))
axes[0].bar(index-0.17,b_clean,width=0.34,color=GRAY,label="clean b")
axes[0].bar(index+0.17,b_clean+noise,width=0.34,color=GOLD,label="b + small noise")
axes[0].set(xticks=index,xticklabels=["u₁","u₂","u₃"],ylabel="data coefficient",
            title="noise is small in data space")
axes[1].bar(index-0.17,x_clean,width=0.34,color=BLACK,label="clean solution")
axes[1].bar(index+0.17,x_noisy,width=0.34,color=DARK_GOLD,label="noisy solution")
axes[1].set(xticks=index,xticklabels=["v₁","v₂","v₃"],ylabel="solution coefficient",
            title="division by σ₃ = 0.02 amplifies it")
for ax in axes:
    ax.legend(frameon=False,fontsize=8)
fig.suptitle("Pseudoinverse sensitivity is controlled by the smallest singular value")
fig.tight_layout()
plt.show()
```

## Homework for this lecture

### Existing course project

The randomized-SVD project below is embedded from the canonical
[Project 1 ideas](../assignments/project-01.md) file.

:::{include} ../assignments/project-01.md
:start-after: ## Randomized SVD algorithm
:end-before: ## Simplex optimization algorithm
:filename: false
:::

### ChatGPT-assisted extensions

For any of these assignments, students may use ChatGPT as a provisional
collaborator, but the submission must include the important prompts, an
independent mathematical check, at least one correction or limitation, and the
student's own conceptual explanation. ChatGPT output by itself is not evidence.

1. **Low-rank compression with a scientific criterion.** Ask ChatGPT to help
   compress an image, spectrum collection, or synthetic data matrix using
   truncated SVD. Compare several ranks, but choose a final rank from a stated
   error or information criterion rather than appearance alone. Explain what
   mathematical structure each retained singular triplet represents.

2. **Pseudoinverse under adversarial noise.** Construct a matrix with one small
   singular value and let ChatGPT solve $A\mathbf x\approx\mathbf b$ confidently.
   Add controlled noise along different left-singular-vector directions,
   measure the solution error, and compare the ordinary pseudoinverse with a
   truncated or damped alternative. Explain the bias--stability tradeoff.

3. **PCA interpretation audit.** Give ChatGPT a centered chemical dataset and
   ask it to interpret the first two principal components. Verify the scores,
   loadings, and explained variance; repeat after rescaling one variable; and
   identify any causal or chemical claim not supported by the linear algebra.
   Discuss sign ambiguity and why high variance is not automatically high
   scientific importance.

---

*Migration source: `03_Linear_algebra/SVD.tex` from the archived Overleaf export.*
