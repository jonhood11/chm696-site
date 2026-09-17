---
title: "Projections and Gram–Schmidt"
---

# Projections and Gram–Schmidt

## Orthogonality and projection

We have defined two real vectors to be orthogonal when their dot product is zero. For nonzero vectors, they are perpendicular. A vector is normalized when its length is one; a set is orthonormal when its vectors are mutually orthogonal and normalized.

Suppose we want to split $\mathbf b$ into a component along a nonzero vector $\mathbf a$ and a component perpendicular to it:

```{math}
\mathbf b=\mathbf b_\parallel+\mathbf b_\perp,
\qquad \mathbf b_\parallel=c\mathbf a.
```

Require the remainder to be orthogonal to $\mathbf a$:

```{math}
\mathbf a^T(\mathbf b-c\mathbf a)=0
\quad\Longrightarrow\quad
c=\frac{\mathbf a^T\mathbf b}{\mathbf a^T\mathbf a}.
```

The projection of $\mathbf b$ onto the line spanned by $\mathbf a$ is therefore

```{math}
\operatorname{proj}_{\mathbf a}\mathbf b
=\frac{\mathbf a^T\mathbf b}{\mathbf a^T\mathbf a}\mathbf a,
\qquad
\mathbf b_\perp=\mathbf b-\operatorname{proj}_{\mathbf a}\mathbf b.
```

```{figure} figures/03-linear-algebra/vector-projection.svg
:width: 65%
:alt: Vector b resolved into a projection along a and a perpendicular remainder.

The projection is the part along a; subtracting it leaves a perpendicular vector.
```

For a unit vector $\mathbf e$, the coefficient simplifies to $\mathbf e^T\mathbf b$. The scalar coefficient and the projected vector are different objects:

```{math}
c=\mathbf e^T\mathbf b,\qquad
\mathbf b_\parallel=c\mathbf e.
```

We can also write the operation as a matrix:

```{math}
\mathbf P=\frac{\mathbf a\mathbf a^T}{\mathbf a^T\mathbf a},
\qquad \mathbf b_\parallel=\mathbf P\mathbf b.
```

It satisfies $\mathbf P^T=\mathbf P$ and $\mathbf P^2=\mathbf P$: projecting twice gives the same result as projecting once.

## Building an orthonormal basis

Given independent vectors, we may want a basis for the same space whose directions are perpendicular. Gram–Schmidt constructs one by subtracting projections.

Start with $\mathbf a_1$:

```{math}
\mathbf e_1=\frac{\mathbf a_1}{\|\mathbf a_1\|}.
```

Remove the part of $\mathbf a_2$ along $\mathbf e_1$, then normalize:

```{math}
\mathbf w_2=\mathbf a_2-(\mathbf e_1^T\mathbf a_2)\mathbf e_1,
\qquad \mathbf e_2=\frac{\mathbf w_2}{\|\mathbf w_2\|}.
```

At the next step, remove both previous components. In general,

```{math}
\mathbf w_j=\mathbf a_j-\sum_{i=1}^{j-1}
(\mathbf e_i^T\mathbf a_j)\mathbf e_i,
\qquad
\mathbf e_j=\frac{\mathbf w_j}{\|\mathbf w_j\|}.
```

Why is the remainder orthogonal? For any earlier $\mathbf e_k$,

```{math}
\mathbf e_k^T\mathbf w_j
=\mathbf e_k^T\mathbf a_j
-\sum_{i<j}(\mathbf e_i^T\mathbf a_j)\delta_{ki}=0.
```

Subtracting combinations of earlier vectors does not change the space spanned by the set. If a remainder is zero, that input vector was already in the span and should be skipped rather than normalized.

The order of the input vectors can change the resulting basis. Gram–Schmidt produces an orthonormal basis, not necessarily the eigenbasis of any matrix.

### Example in four dimensions

Apply Gram–Schmidt to the vectors

```{math}
\mathbf a=(0,0,5,0)^T,\qquad
\mathbf b=(2,0,3,0)^T,\qquad
\mathbf c=(7,1,-5,3)^T.
```

Normalize the first vector, then remove its component from the second:

```{math}
\mathbf e_1=(0,0,1,0)^T,\qquad
\mathbf b'=(2,0,0,0)^T,\qquad
\mathbf e_2=(1,0,0,0)^T.
```

Remove both components from the third vector:

```{math}
\mathbf c'=\mathbf c-(\mathbf e_1^T\mathbf c)\mathbf e_1
-(\mathbf e_2^T\mathbf c)\mathbf e_2=(0,1,0,3)^T.
```

Normalizing gives $\mathbf e_3=(0,1,0,3)^T/\sqrt{10}$. These three vectors form an orthonormal basis for the span of the original vectors, not for all of four-dimensional space.

## Complex extension

The same construction works for complex vectors, with the conjugate transpose in place of the transpose. Here $\mathbf a^\dagger=(\mathbf a^*)^T$ and $\|\mathbf a\|^2=\mathbf a^\dagger\mathbf a$. The complex-vector lecture develops this inner product in more detail.

For a nonzero complex vector,

```{math}
\operatorname{proj}_{\mathbf a}\mathbf b
=\mathbf a\frac{\mathbf a^\dagger\mathbf b}{\mathbf a^\dagger\mathbf a}.
```

Thus the Gram–Schmidt step becomes

```{math}
\mathbf w_j=\mathbf a_j-\sum_{i<j}
(\mathbf e_i^\dagger\mathbf a_j)\mathbf e_i,
\qquad
\mathbf e_j=\frac{\mathbf w_j}{\sqrt{\mathbf w_j^\dagger\mathbf w_j}}.
```

For example, start with $\mathbf a=(1,i)^T$ and $\mathbf b=(1,0)^T$. Then

```{math}
\mathbf e_1=\frac1{\sqrt2}\begin{pmatrix}1\\i\end{pmatrix},
\qquad
\mathbf b'=\mathbf b-\mathbf e_1(\mathbf e_1^\dagger\mathbf b)
=\frac12\begin{pmatrix}1\\-i\end{pmatrix},
\qquad
\mathbf e_2=\frac1{\sqrt2}\begin{pmatrix}1\\-i\end{pmatrix}.
```

Their inner product is zero. Conjugating the first vector is essential for this result.

## Questions

::::{admonition} Question 1
Consider

```{math}
\mathbf a=\begin{pmatrix}1\\1\\0\end{pmatrix},
\qquad
\mathbf b=\begin{pmatrix}1\\0\\1\end{pmatrix}.
```

1. Find the projection of $\mathbf b$ onto $\mathbf a$ and the perpendicular remainder.
2. Apply Gram–Schmidt, starting with $\mathbf a$, to obtain two orthonormal vectors spanning the same plane.
3. Verify that both vectors have length one and their dot product is zero. Express $\mathbf b$ as a linear combination of your orthonormal vectors.
::::
