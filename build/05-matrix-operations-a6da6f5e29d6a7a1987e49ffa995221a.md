---
kernelspec:
  name: python3
  display_name: Python 3
---

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

## Candidate visualizations for review

These figures are optional candidates placed after the lecture for later
evaluation.

```{code-cell} python
:tags: [hide-input]
import math
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon

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

### Matrix exponential as accumulated rotation

For the rotation generator $J$, the exact exponential produces a rotation.
Successive Taylor truncations show how a function of a matrix is constructed
from powers of that matrix.

```{code-cell} python
J = np.array([[0.0, -1.0], [1.0, 0.0]])
theta = 1.15
v = np.array([1.0, 0.0])

def matrix_exp_series(matrix, scale, order):
    result = np.eye(matrix.shape[0])
    power = np.eye(matrix.shape[0])
    for k in range(1, order + 1):
        power = power @ (scale * matrix) / k
        result = result + power
    return result

orders = [1, 2, 4, 8]
approximations = np.array([matrix_exp_series(J, theta, order) @ v for order in orders])
exact = np.array([np.cos(theta), np.sin(theta)])
t = np.linspace(0, 2*np.pi, 400)

fig, ax = plt.subplots(figsize=(6.2, 5.3))
ax.plot(np.cos(t), np.sin(t), color=GRAY, linewidth=1.5)
ax.scatter(approximations[:,0], approximations[:,1], s=65, color=GOLD,
           edgecolor=BLACK, zorder=3)
for point, order in zip(approximations, orders):
    ax.text(point[0] + 0.06, point[1] + 0.05, f"order {order}")
ax.quiver(0, 0, *exact, angles="xy", scale_units="xy", scale=1,
          color=DARK_GOLD, width=0.015, label="exact exponential")
ax.set(aspect="equal", xlim=(-0.3,1.35), ylim=(-0.25,1.35),
       xlabel="$x$", ylabel="$y$",
       title=r"Taylor powers approach $e^{\theta J}\mathbf{e}_1$")
ax.legend(frameon=False)
plt.show()
```

### Determinant as signed area scaling

The transformed unit square makes the magnitude and sign of the determinant
visible: area changes by $|\det A|$, while a negative sign reverses orientation.

```{code-cell} python
square = np.array([[0,0], [1,0], [1,1], [0,1]])
matrices = [np.array([[1.5, 0.6], [0.2, 1.1]]),
            np.array([[-1.2, 0.4], [0.1, 0.9]])]

fig, axes = plt.subplots(1, 2, figsize=(9.5, 4.4), sharex=True, sharey=True)
for ax, A in zip(axes, matrices):
    transformed = square @ A.T
    ax.add_patch(Polygon(transformed, closed=True, facecolor=GOLD,
                         edgecolor=DARK_GOLD, linewidth=2, alpha=0.6))
    for number, point in enumerate(transformed):
        ax.text(point[0], point[1], str(number), ha="center", va="center",
                bbox={"facecolor": "white", "edgecolor": "none", "alpha": 0.75})
    det = np.linalg.det(A)
    ax.axhline(0, color=GRAY, linewidth=0.8)
    ax.axvline(0, color=GRAY, linewidth=0.8)
    ax.set(aspect="equal", xlim=(-1.8,2.4), ylim=(-0.5,2.0),
           xlabel="$x$", ylabel="$y$",
           title=rf"$\det A={det:.2f}$: area scale $={abs(det):.2f}$")
fig.suptitle("Vertex labels reveal whether orientation is preserved")
fig.tight_layout()
plt.show()
```

### Rank as surviving output dimensions

Sending the same unit circle through matrices of rank two, one, and zero shows
rank as the number of independent output directions.

```{code-cell} python
t = np.linspace(0, 2*np.pi, 500)
circle = np.vstack([np.cos(t), np.sin(t)])
rank_examples = [
    (np.array([[1.4,0.5],[0.2,0.8]]), "rank 2: area survives"),
    (np.array([[1.0,0.7],[0.5,0.35]]), "rank 1: collapsed to a line"),
    (np.zeros((2,2)), "rank 0: collapsed to a point"),
]
fig, axes = plt.subplots(1, 3, figsize=(11, 3.8), sharex=True, sharey=True)
for ax, (A, title) in zip(axes, rank_examples):
    image = A @ circle
    ax.plot(image[0], image[1], color=DARK_GOLD, linewidth=2.5)
    ax.scatter(image[0,::35], image[1,::35], color=BLACK, s=12)
    ax.axhline(0, color=GRAY, linewidth=0.8)
    ax.axvline(0, color=GRAY, linewidth=0.8)
    ax.set(aspect="equal", xlim=(-2,2), ylim=(-1.5,1.5), title=title)
fig.suptitle("Rank counts independent directions in the image of a matrix")
fig.tight_layout()
plt.show()
```

### Hermitian and anti-Hermitian decomposition

Entrywise heat maps show how an arbitrary complex matrix splits into two
structured pieces whose sum reconstructs the original matrix.

```{code-cell} python
A = np.array([[1+0.4j, 2-1j, -0.5+0.2j],
              [0.3+1.4j, -1+0.1j, 1.2-0.8j],
              [0.7-0.5j, 0.2+0.9j, 2-0.3j]])
H = (A + A.conj().T) / 2
K = (A - A.conj().T) / 2
pieces = [(A, "A"), (H, "Hermitian part H"), (K, "anti-Hermitian part K")]

fig, axes = plt.subplots(2, 3, figsize=(10, 6.1))
limit = max(np.max(np.abs(piece)) for piece, _ in pieces)
for column, (piece, title) in enumerate(pieces):
    for row, (values, label) in enumerate([(piece.real, "real"), (piece.imag, "imaginary")]):
        image = axes[row, column].imshow(values, cmap="PuOr", vmin=-limit, vmax=limit)
        axes[row, column].set(xticks=range(3), yticks=range(3),
                              title=f"{title}: {label}")
        for i in range(3):
            for j in range(3):
                axes[row, column].text(j, i, f"{values[i,j]:.1f}",
                                       ha="center", va="center", fontsize=8)
fig.suptitle(r"Every complex matrix satisfies $A=H+K$")
fig.colorbar(image, ax=axes, shrink=0.72, label="matrix entry")
plt.show()
```

## ChatGPT-assisted homework and project ideas

For any of these assignments, students may use ChatGPT as a provisional
collaborator, but the submission must include the important prompts, an
independent mathematical check, at least one correction or limitation, and the
student's own conceptual explanation. ChatGPT output by itself is not evidence.

1. **Matrix-exponential myth test.** Ask ChatGPT whether
   $e^Ae^B=e^{A+B}$ and collect its stated conditions. Construct one commuting
   and one noncommuting pair, compare both sides using a power series or Python,
   and explain exactly where scalar intuition fails. Include a physical
   interpretation using two successive linear evolutions.

2. **Determinant-and-rank forensic report.** Give ChatGPT several matrices that
   stretch, reflect, flatten, or nearly flatten a region. Before calculating,
   ask it to predict determinant sign, determinant magnitude, rank, and
   invertibility from the geometry. Test the predictions and write a correction
   connecting each algebraic quantity to what happens to area or volume.

3. **Construct an observable from a messy matrix.** Have ChatGPT generate a
   nonsymmetric complex matrix, then split it into Hermitian and anti-Hermitian
   parts. Verify the adjoint relations, eigenvalue behavior, and reconstruction.
   Use a normalized complex vector to compare expectation values and explain
   why Hermitian structure matters for physical observables.

---

*Migration source: `03_Linear_algebra/Matrices2.tex` from the archived Overleaf export.*
