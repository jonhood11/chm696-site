---
kernelspec:
  name: python3
  display_name: Python 3
---

# Eigenvalues and Eigenvectors

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- compute eigenvalues and eigenspaces from the characteristic equation;
- transform vector and operator components under a basis change;
- determine whether a matrix is diagonalizable;
- use diagonalization to evaluate matrix powers and functions; and
- state the spectral properties of Hermitian and normal matrices.

## Eigenvalue equation


- A matrix transforms a vector space - rotates, squeezes, reflects, and so on.

- However, the matrix can have some characteristic vectors that remain unchanged (up to a scalar) upon matrix action. Such vectors are called the [eigenvectors]{style="color: blue"}.

- A **nonzero** vector $\mathbf x$ is an eigenvector of $\mathbf A$ when
  $\mathbf A\mathbf x=\lambda\mathbf x$. The scalar $\lambda$ is the
  corresponding eigenvalue.

- This equation is called the [eigenvalue equation]{style="color: blue"}.

- It is much simpler to work with matrices in the basis of their eigenvectors.

- So, we need to learn how to:

  - compute matrix eigenvalues and eigenvectors

  - transform the matrix to the basis of its eigenvectors

  - figure out useful properties of eigenvectors and eigenvalues


## Characteristic equation


- Let's write the eigenvalue equation in terms of the identity
```{math}
\begin{pmatrix} a & b \\ c & d \end{pmatrix} \mathbf{v} = \lambda \mathbf{v}
```
 which becomes
```{math}
\begin{pmatrix} a & b \\ c & d \end{pmatrix} \mathbf{v} = \begin{pmatrix} \lambda & 0 \\ 0 & \lambda \end{pmatrix} \mathbf{v}.
```


- Then subtract the right-hand side to get
```{math}
\begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} \mathbf{v} = 0.
```


- This matrix transforms the vector into the zero vector, effectively collapsing it. I.e., the volume (or area in the 2D case) created by this transformation is also zero. Thus, the determinant of the matrix on the left must be zero: $\det \begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = 0$

- This is the [characteristic equation]{style="color: blue"} that we need to solve for $\lambda$.

- The determinant is the [characteristic]{style="color: blue"} or [secular]{style="color: blue"} determinant of A.


## Finding eigenvalues and eigenvectors


- More generally, to find eigenvalues and eigenvectors, we write the characteristic equation:
```{math}
\det(\mathbf A-\lambda\mathbf I)=0.
```


- Solving this characteristic equation (which is a polynomial of degree N in the quantity $\lambda$) yields the eigenvalues $\lambda_i$.

- We then use the eigenvalues to solve the system of equations defined by $\text{A} \mathbf{v}_i = \lambda_i \mathbf{v}_i$, determining the eigenvector corresponding to each eigenvalue.

- Note: the eigenvectors are defined up to a constant. Typically, we will normalize them.

- Note: both the eigenvalues and eigenvectors can be complex-valued even for real matrices!


## Finding eigenvalues and eigenvectors: Examples


- Find the eigenvalues and eigenvectors for $\text{A} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$

- Find the eigenvalues and eigenvectors for $\text{A} = \begin{pmatrix} -1 & 3 \\ 0 & 2 \end{pmatrix}$

- Find the eigenvalues and eigenvectors for $\text{A} = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}$


## Change of Basis


- Let's introduce a basis $\mathbf{e}_i, \; i = 1,2,\dots N$, and a vector with components in this basis $\mathbf{x} = (x_1 \; x_2 \; \dots x_n)^T$.

- Now introduce another (new!) basis $\mathbf{e}'_i, \; i = 1,2,\dots N$. It is related to the old basis by a transformation S:
```{math}
\mathbf{e}'_j = \sum _{i=1}^N S_{ij}\mathbf{e}_i
```
.

- In other words, S is the transformation matrix associated with the change of basis.

- [Questions:]{style="color: blue"}

  - What is the representation of vector $\mathbf{x}$ in the new basis?

  - What is the representation of a linear operator (matrix) A in the new basis?


## Change of Basis (continued)


- Q1: What is the representation of vector $\mathbf{x}$ in the new basis?
```{math}
\mathbf{x} = \sum _{i=1}^N x_i \mathbf{e}_i = \sum _{j=1}^N x'_j\mathbf{e}'_j = \sum _{j=1}^N x'_j \sum _{i=1}^N  S_{ij}\mathbf{e}_i
```
.
```{math}
x_i =  \sum _{j=1}^N S_{ij} x'_j
```
 or, in matrix form: $\text{x} = \text{S} \text{x}'$

- Since the vectors $\mathbf{e}'_j$ are linearly independent, the matrix S is non-singular and so possesses an inverse. Then
```{math}
\text{x}' = \text{S}^{-1} \text{x}
```
 which relates the components of $\mathbf{x}$ in the new basis to those in the old basis.

- Note: components of $\mathbf{x}$ transform inversely to the way in which the basis vectors $\mathbf{e}_i$ themselves transform.


## Change of Basis (continued)


- Q2: What is the representation of a linear operator (matrix) A in the new basis?

- Let's write the operator equation in two basis sets:
```{math}
\text{y} = \text{A}\text{x}
```

```{math}
\text{y}' = \text{A}'\text{x}'
```


- Rewrite the first equation as:
```{math}
\text{S} \text{y}' = \text{A} \text{S} \text{x}'
```

```{math}
\text{y}'= \text{S}^{-1} \text{A} \text{S} \text{x}'
```

```{math}
\text{A}' = \text{S}^{-1} \text{A} \text{S}
```


- The last equation is an example of a [similarity transformation]{style="color: blue"}.


## Similarity transformation


- Similarity transformation: $\text{A}' = \text{S}^{-1} \text{A} \text{S}$

- Generally, we should expect that any property of the matrix A that represents some basis-independent property of the linear operator $\mathcal{A}$ will also be shared by the matrix $\text{A}'$.

- If A=I, $\text{A}'$=I.

- The value of the determinant is unchanged.

- The characteristic determinant and hence the eigenvalues of $\text{A}'$ are the same as those of A.

- The value of the trace is unchanged.

- Additionally, if transformation matrix S is unitary, then

  - $\text{A}' = \text{S}^{-1} \text{A} \text{S}  = \text{S}^\dagger \text{A} \text{S}$.

  - If the original basis $\mathbf{e}_i$ is orthonormal, the new basis is also orthonormal.

  - If A is Hermitian (anti-Hermitian) then $\text{A}'$ is also Hermitian (anti-Hermitian).

  - If A is unitary then $\text{A}'$ is unitary.


## Diagonalization of matrices


- Transforming a matrix to a diagonal form, known as [diagonalization]{style="color: blue"}, is useful because diagonal matrices are easier to work with. E.g., it is straightforward to raise a diagonal matrix to a power or apply functions of the matrix (like exponentials).

- Given a matrix A, is there a similarity transformation that creates a diagonal matrix, $\text{S}^{-1} \text{A} \text{S} = \text{D}$? If so, how do we find $S$?

- Consider again basis $\mathbf{e}_i, \; i = 1,2,\dots N$, in which operator $\mathcal{A}$ is represented by matrix A.

- Consider a new basis $\mathbf{x}^j$ given by
```{math}
\mathbf{x}^j = \sum _{i=1}^N  S_{ij}\mathbf{e}_i
```
 where $\mathbf{x}^j$ are [chosen to be the eigenvectors of the linear operator $\mathcal{A}$]{style="color: blue"}:
```{math}
\mathcal{A} \mathbf{x}^j = \lambda_j \mathbf{x}^j
```


## Diagonalization of matrices (continued)


- In the new (eigenvector) basis, $\text{A}' = \text{S}^{-1} \text{A} \text{S}$

- The element $S_{ij}$ gives the *i*th component, in the old (unprimed) basis, of the *j*th eigenvector $\text{x}^j$ of A, i.e., the columns of S are the eigenvectors of the matrix A, i.e., $S_{ij} = (\text{x}^j)_i$


**What the original figure plots.** It shows A similarity transformation into an eigenvector basis and diagonal matrix.

**What this is trying to convey.** The columns of $S$ are eigenvectors, so $S^{-1}AS$ is diagonal when those eigenvectors form a basis.

```{figure} figures/07-eigenvalues-and-eigenvectors/mat_diagonalization1.png
:alt: A similarity transformation into an eigenvector basis and diagonal matrix
:width: 70%

The columns of $S$ are eigenvectors, so $S^{-1}AS$ is diagonal when those
eigenvectors form a basis.
```

**Polished version.**

```{figure} figures/07-eigenvalues-and-eigenvectors/redraw-mat_diagonalization1.png
:alt: Polished version of A similarity transformation into an eigenvector basis and diagonal matrix
:width: 70%

The polished version preserves A similarity transformation into an eigenvector basis and diagonal matrix. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
```


```{math}
(\text{A}')_{ij} = (\text{S}^{-1} \text{A} \text{S})_{ij} = \sum_k \sum_l (\text{S}^{-1})_{ik} A_{kl} S_{lj} =
  \sum_k \sum_l (\text{S}^{-1})_{ik} A_{kl} (\text{x}^j)_{l} = \\
  \sum_k (\text{S}^{-1})_{ik} \lambda_j (\text{x}^j)_{k} =
  \sum_k \lambda_j  (\text{S}^{-1})_{ik} S_{kj} = \lambda_j \delta_{ij}
```


- So the matrix $\text{A}'$ is diagonal with the eigenvalues of A as the diagonal elements!


## Diagonalization of matrices (continued)


- Since we require S to be non-singular ($|S| \ne 0$), the N eigenvectors of A must be linearly independent and form a basis for the N-dimensional vector space.

- It may be shown that any matrix with *distinct eigenvalues* can be diagonalised by this procedure.

- If, however, a general square matrix has degenerate eigenvalues then it may, or may not, have N linearly independent eigenvectors. If it does not then it cannot be diagonalised.

- For [normal matrices]{style="color: blue"} (i.e., those that commute with their Hermitian conjugates - Hermitian, anti-Hermitian and unitary matrices), N eigenvectors are linearly independent. Moreover, when normalised, these eigenvectors form an orthonormal set.

- Matrix S formed from the orthonormal eigenvectors is unitary. This means that any normal matrix A can be diagonalised by a similarity transformation using a unitary transformation matrix S.


## Using the diagonalization


- A similarity transformation does not change the determinant of a matrix.

- The determinant of a matrix equals the product of its eigenvalues, counted
  with algebraic multiplicity:
```{math}
|\text{M}| = \lambda_1 \lambda_2 \cdots \lambda_n = \Pi_i \lambda_i
```
 The proof is simple:
```{math}
|\text{M}'| = | \text{S}^{-1} \text{M} \text{S} |  = |\text{D}| = \Pi_i \lambda_i .
```


- Show that $(\text{A}')^n =  \text{S}^{-1} \text{A}^n \text{S}$


## Trace of the matrix


- The trace equals the sum of the eigenvalues, counted with algebraic
  multiplicity:
```{math}
\text{Tr}(\text{M}) = \lambda_1 + \lambda_2 + \cdots + \lambda_n
```


- Cyclic identity of the trace:
```{math}
\text{Tr}(\mathbf{A} \mathbf{B} \mathbf{C}) = \text{Tr}(\mathbf{B} \mathbf{C} \mathbf{A}) = \text{Tr}(\mathbf{C} \mathbf{A} \mathbf{B}).
```
The trace is invariant under **cyclic** permutations. It is not generally
invariant under arbitrary reorderings.


## Orthogonal Vector Space and the Gram-Schmidt Method

Recall that a set $\{\mathbf u_i\}$ is orthogonal if
$\mathbf u_i^\dagger\mathbf u_j=0$ for $i\ne j$. It is orthonormal when
```{math}
\mathbf{u}_i^\dagger\mathbf{u}_j=\delta_{ij}.
```


If given non-orthogonal vectors, how do we make them orthogonal? Here is the Gram-Schmidt method for finding a set of orthogonal vectors:

**Solution: Gram-Schmidt Method**

1.  Step 1: Normalize $\mathbf{a}$ to get the first vector.

2.  Step 2: Subtract from $\mathbf{b}$ its component along $\mathbf{a}$, then normalize:
```{math}
\mathbf{b}' = \mathbf{b} - \frac{\mathbf{a} \cdot \mathbf{b}}{\mathbf{a} \cdot \mathbf{a}} \mathbf{a}
```


## Eigenvalues and Eigenvectors of Hermitian Matrices


- Real symmetric and complex Hermitian matrices have real eigenvalues.
  Eigenvectors associated with distinct eigenvalues are orthogonal; within a
  degenerate eigenspace, an orthonormal eigenbasis can be chosen.

- Suppose we have Hermitian $M$: $M^\dagger = M$. We find the set of eigenvectors and eigenvalues of $M$ given by $M \mathbf{v}_i = \lambda_i \mathbf{v}_i$.

- Let's take two of those eigenvectors:
```{math}
M \mathbf{v}_i = \lambda_i \mathbf{v}_i, \quad M \mathbf{v}_j = \lambda_j \mathbf{v}_j.
```


- Now let's take $M$ and multiply on the right by $\mathbf{v}_i$ and multiply by $\mathbf{v}_j^\dagger$ on the left. This gives $\mathbf{v}_j^\dagger M \mathbf{v}_i$

- We can write this in two different ways:
```{math}
\mathbf{v}_j^\dagger M \mathbf{v}_i   =  \mathbf{v}_j^\dagger (M \mathbf{v}_i ) = (M^\dagger \mathbf{v}_j )^\dagger  \mathbf{v}_i
```
using $(A b)^\dagger=b^\dagger A^\dagger$.

- If $M$ is Hermitian then we replace $M^\dagger$ on the right side with $M$, and we get
```{math}
\mathbf{v}_j^\dagger (M \mathbf{v}_i ) = (M \mathbf{v}_j )^\dagger  \mathbf{v}_i   .
```


## Eigenvalues and Eigenvectors of Hermitian Matrices (continued)


```{math}
\mathbf{v}_j^\dagger (M \mathbf{v}_i ) = (M \mathbf{v}_j )^\dagger  \mathbf{v}_i   .
```


- Now we can substitute the two eigenvalue equations, and putting both on the same side we get
```{math}
(\lambda^*_j-\lambda_i)\,\mathbf{v}_j^\dagger\mathbf{v}_i=0
```


- Consider $i = j$. Then,
```{math}
(\lambda^*_i-\lambda_i)\,\mathbf{v}_i^\dagger\mathbf{v}_i=0,
```
 which tells us $\lambda^*_i = \lambda_i$. The eigenvalues are therefore all real.

- Consider $i \ne j$. Since the eigenvalues are real, we can take away the complex conjugate for the eigenvalue:
```{math}
(\lambda_i-\lambda_j)\,\mathbf{v}_j^\dagger\mathbf{v}_i=0,
```


- Thus, if $\lambda_i\ne\lambda_j$, then
  $\mathbf{v}_j^\dagger\mathbf{v}_i=0$.

## Candidate visualizations for review

These optional figures are placed after the lecture to support later decisions
about what belongs in the teaching sequence.

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

### Eigenvectors are directions that do not turn

Most directions rotate under a matrix, but eigenvectors remain on their own
lines and are only scaled or reversed. Showing the full circle makes those
exceptional directions stand out.

```{code-cell} python
A = np.array([[1.8, 0.65], [0.65, 0.7]])
values, vectors = np.linalg.eigh(A)
theta = np.linspace(0, 2*np.pi, 500)
circle = np.vstack([np.cos(theta), np.sin(theta)])
image = A @ circle

fig, axes = plt.subplots(1, 2, figsize=(9.5, 4.4), sharex=True, sharey=True)
axes[0].plot(circle[0], circle[1], color=GRAY, linewidth=2)
axes[1].plot(image[0], image[1], color=GRAY, linewidth=2)
for j, color in zip(range(2), [GOLD, DARK_GOLD]):
    v = vectors[:,j]
    axes[0].plot([-v[0],v[0]], [-v[1],v[1]], color=color, linewidth=3,
                 label=rf"$\mathbf{{v}}_{j+1}$")
    Av = A @ v
    axes[1].plot([-Av[0],Av[0]], [-Av[1],Av[1]], color=color, linewidth=3,
                 label=rf"$A\mathbf{{v}}_{j+1}=\lambda_{j+1}\mathbf{{v}}_{j+1}$")
for ax, title in zip(axes, ["before A", "after A"]):
    ax.axhline(0, color=BLACK, linewidth=0.8)
    ax.axvline(0, color=BLACK, linewidth=0.8)
    ax.set(aspect="equal", xlim=(-2.7,2.7), ylim=(-2.3,2.3), title=title)
    ax.legend(frameon=False, fontsize=8)
fig.suptitle("Eigenvectors keep their direction under the transformation")
fig.tight_layout()
plt.show()
```

### Diagonalization as change, scale, and change back

The three stages of $A=PDP^{-1}$ separate a complicated matrix action into a
basis change, independent scaling along eigenvector coordinates, and a return
to the original basis.

```{code-cell} python
A = np.array([[2.0, 1.0], [1.0, 2.0]])
eigenvalues, P = np.linalg.eigh(A)
D = np.diag(eigenvalues)
x = np.array([1.7, 0.55])
stages = [x, P.T @ x, D @ (P.T @ x), P @ D @ (P.T @ x)]
titles = ["x", "Pᵀx\neigen-coordinates", "DPᵀx\nindependent scaling", "PDPᵀx = Ax"]

fig, axes = plt.subplots(1, 4, figsize=(12, 3.5), sharex=True, sharey=True)
for ax, vector, title in zip(axes, stages, titles):
    ax.quiver(0,0,*vector, angles="xy", scale_units="xy", scale=1,
              color=DARK_GOLD, width=0.018)
    ax.axhline(0, color=GRAY, linewidth=0.8)
    ax.axvline(0, color=GRAY, linewidth=0.8)
    ax.set(aspect="equal", xlim=(-0.7,4.0), ylim=(-1.5,3.5), title=title)
fig.suptitle("Diagonalization turns one matrix into three understandable steps")
fig.tight_layout()
plt.show()
```

### Repeated powers select the dominant eigenvector

After repeated multiplication, a generic vector aligns with the eigenvector
whose eigenvalue has the largest magnitude. This explains both matrix powers
and the power method.

```{code-cell} python
A = np.array([[1.45, 0.55], [0.55, 0.75]])
values, vectors = np.linalg.eigh(A)
dominant = vectors[:, np.argmax(np.abs(values))]
x = np.array([0.1, 1.0])
history = []
magnitudes = []
for k in range(9):
    history.append(x / np.linalg.norm(x))
    magnitudes.append(np.linalg.norm(x))
    x = A @ x
history = np.array(history)

fig, axes = plt.subplots(1, 2, figsize=(9.8, 4.2))
axes[0].plot(history[:,0], history[:,1], "o-", color=DARK_GOLD)
axes[0].plot([-dominant[0],dominant[0]], [-dominant[1],dominant[1]],
             "--", color=BLACK, label="dominant eigendirection")
for k, point in enumerate(history):
    axes[0].text(point[0]+0.02, point[1]+0.02, str(k), fontsize=8)
axes[0].set(aspect="equal", xlim=(-1.1,1.1), ylim=(-1.1,1.1),
            xlabel="normalized x component", ylabel="normalized y component",
            title="direction of Aᵏx")
axes[0].legend(frameon=False)
axes[1].semilogy(range(9), magnitudes, "o-", color=DARK_GOLD)
axes[1].set(xlabel="$k$", ylabel=r"$\|A^k\mathbf{x}\|$",
            title="magnitude grows at the dominant rate")
fig.tight_layout()
plt.show()
```

### Gram--Schmidt removes projections one at a time

The second basis vector is produced by subtracting its component along the
first. The residual is perpendicular by construction.

```{code-cell} python
v1 = np.array([2.6, 1.0])
v2 = np.array([1.7, 2.8])
q1 = v1 / np.linalg.norm(v1)
projection = (v2 @ q1) * q1
residual = v2 - projection
q2 = residual / np.linalg.norm(residual)

fig, axes = plt.subplots(1, 2, figsize=(9.5, 4.3), sharex=True, sharey=True)
for vector, color, label in [(v1, BLACK, "v₁"), (v2, DARK_GOLD, "v₂")]:
    axes[0].quiver(0,0,*vector, angles="xy", scale_units="xy", scale=1,
                   color=color, width=0.015, label=label)
axes[0].set_title("original vectors")
axes[1].quiver(0,0,*projection, angles="xy", scale_units="xy", scale=1,
               color=GRAY, width=0.012, label="projection")
axes[1].quiver(*projection,*residual, angles="xy", scale_units="xy", scale=1,
               color=GOLD, width=0.014, label="residual")
axes[1].quiver(0,0,*q1, angles="xy", scale_units="xy", scale=1,
               color=BLACK, width=0.016, label="q₁")
axes[1].quiver(0,0,*q2, angles="xy", scale_units="xy", scale=1,
               color=DARK_GOLD, width=0.016, label="q₂")
axes[1].set_title("subtract projection, then normalize")
for ax in axes:
    ax.set(aspect="equal", xlim=(-0.4,3.5), ylim=(-0.4,3.5),
           xlabel="$x$", ylabel="$y$")
    ax.legend(frameon=False, fontsize=8)
fig.tight_layout()
plt.show()
```

## Homework for this lecture

### Existing course homework

The eigenvalue, diagonalization, and Hermitian-matrix problems below are
embedded from [Homework 2](../assignments/homework-02.md).

:::{include} ../assignments/homework-02.md
:start-after: ## Eigenvalues, eigenvectors, and diagonalization
:end-before: ## Normal-mode computation
:filename: false
:::

### Existing course project

The Lanczos-algorithm project is embedded from
[Project 1 ideas](../assignments/project-01.md).

:::{include} ../assignments/project-01.md
:start-after: ## Lanczos algorithm
:end-before: ## Randomized SVD algorithm
:filename: false
:::

### ChatGPT-assisted extensions

For any of these assignments, students may use ChatGPT as a provisional
collaborator, but the submission must include the important prompts, an
independent mathematical check, at least one correction or limitation, and the
student's own conceptual explanation. ChatGPT output by itself is not evidence.

1. **Eigenvector misconception hunt.** Ask ChatGPT to generate explanations of
   eigenvalues, eigenvectors, diagonalization, and degeneracy for a novice.
   Identify three statements that are incomplete or false, then repair them
   using explicit $2\times2$ examples. At least one example should be defective
   and at least one should be Hermitian.

2. **Forecast a repeated linear process.** Choose a population-transfer,
   mixing, or coupled-amplitude matrix and ask ChatGPT to predict the behavior
   of $A^n\mathbf{x}_0$. Compute the eigendecomposition, compare the prediction
   with direct iteration, and explain which eigenvalue controls long-time
   magnitude and which eigenvector controls direction.

3. **Numerical Gram--Schmidt audit.** Have ChatGPT orthonormalize a set of
   nearly dependent vectors and report its claimed accuracy. Check
   $Q^\dagger Q$, reconstruct the original span, and compare classical Gram--Schmidt with
   QR from a numerical library. Explain why mathematically equivalent formulas
   may behave differently in finite precision.

---

*Migration source: `03_Linear_algebra/matrix_diagonalization.tex` from the archived Overleaf export.*
