---
title: Eigenvectors and Eigenvalues
---

# Eigenvectors and Eigenvalues

Last time we looked at how a matrix transforms vectors. Usually it changes both their length and their direction. Today we will ask whether a matrix has preferred directions along which its action becomes especially simple. These will turn out to be its eigenvector directions. If we find enough independent eigenvector directions, they form a basis.

Let's start by looking at how a matrix transforms a vector on the unit circle.


<a href="https://jonhood11.github.io/chm696-site/eigenvector-explorer/index.html" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<iframe src="https://jonhood11.github.io/chm696-site/eigenvector-explorer/index.html" title="Interactive eigenvector explorer" style="width:100%;height:760px;border:0;"></iframe>

The “Symmetric stretch” example uses

```{math}
\mathbf{M}=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
```

Keep this matrix fixed and rotate the blue vector $\mathbf{v}$ with the angle slider or by dragging its tip. The orange arrow is $\mathbf{M}\mathbf{v}$. Are there directions where the two arrows lie on the same line, so the transformation only stretches or shrinks the vector? How do their lengths compare there?

For this matrix, those directions are the two diagonals, through $(1,1)$ and $(1,-1)$. Along the first, the vector is stretched by a factor of three; along the second, it is unchanged. These are eigenvector directions, and the scale factors $3$ and $1$ are the corresponding eigenvalues.

We can now write down the condition we have been looking for:

```{math}
\mathbf{M}\mathbf{v}=\lambda\mathbf{v},
\qquad \mathbf{v}\ne\mathbf{0}.
```

A nonzero vector satisfying this equation is an eigenvector of $\mathbf{M}$, and $\lambda$ is its eigenvalue. The vector need not be unchanged: a positive eigenvalue scales it along the same direction, a negative eigenvalue also reverses it, and a zero eigenvalue sends it to the origin.

For our example, the eigenvalues are $3$ and $1$. Any nonzero multiple of an eigenvector is another eigenvector with the same eigenvalue, so it is the direction that matters, not our choice of length.

Why are these directions useful? If we can expand a vector in a basis of eigenvectors, applying the matrix simply scales each component by its eigenvalue. We will use this to simplify calculations later in the lecture.

Now let's find these directions and scale factors algebraically. For a general $2\times2$ matrix, the eigenvalue equation is

```{math}
\begin{bmatrix} a & b \\ c & d \end{bmatrix} \mathbf{v} = \lambda \mathbf{v}
```

which becomes

```{math}
\begin{bmatrix} a & b \\ c & d \end{bmatrix} \mathbf{v} = \begin{bmatrix} \lambda & 0 \\ 0 & \lambda \end{bmatrix} \mathbf{v}.
```

Then we can subtract the right-hand side to get

```{math}
\begin{bmatrix} a - \lambda & b \\ c & d - \lambda \end{bmatrix} \mathbf{v} = 0.
```

We are looking for a nonzero vector that $\mathbf M-\lambda\mathbf I$ sends to zero. This is possible only if the matrix is singular, so its determinant must vanish. We therefore obtain the characteristic equation

```{math}
(a - \lambda)(d - \lambda) - bc = 0,
```

This quadratic has two roots, $\lambda_1$ and $\lambda_2$, counting repetitions. The two roots may be distinct, or they may be the same repeated root. They may also be real or complex.

More generally, for an $N\times N$ matrix,

```{math}
\det(\mathbf M-\lambda\mathbf I)=0
```

is a polynomial of degree $N$. It therefore has $N$ roots counting repetitions when complex roots are allowed, but it may have fewer than $N$ distinct eigenvalues. For example, the identity matrix has just one distinct eigenvalue, $1$, repeated $N$ times.

Once we know a root $\lambda_n$, we find its eigenvectors by solving

```{math}
\mathbf M\mathbf v_n=\lambda_n\mathbf v_n,
\qquad\text{or equivalently}\qquad
(\mathbf M-\lambda_n\mathbf I)\mathbf v_n=\mathbf 0.
```

Any nonzero multiple of an eigenvector is another eigenvector, so the solution is not unique. We can choose its length by normalizing it, usually so that $|\mathbf v_n|^2=1$. A repeated eigenvalue may have more than one independent eigenvector—or it may not. We examine this distinction next.

(eigenvector-basis)=
### Do the eigenvectors form a basis?

For a $2\times2$ matrix, we need two linearly independent eigenvectors to form a basis. Whether we get them depends on whether the two roots of the characteristic equation are distinct or repeated.

::::{prf:theorem} Distinct eigenvalues give independent eigenvectors
If a $2\times2$ matrix has two distinct eigenvalues $\lambda_1\ne\lambda_2$, then their eigenvectors $\mathbf v_1$ and $\mathbf v_2$ are linearly independent. They are not necessarily orthogonal.
::::

::::{prf:proof}
Suppose instead that the eigenvectors point along the same direction, so $\mathbf v_2=c\mathbf v_1$ for some $c\ne0$. Then

```{math}
\mathbf M\mathbf v_2
=c\mathbf M\mathbf v_1
=c\lambda_1\mathbf v_1
=\lambda_1\mathbf v_2.
```

But $\mathbf M\mathbf v_2=\lambda_2\mathbf v_2$ as well, so $(\lambda_1-\lambda_2)\mathbf v_2=\mathbf 0$. Since $\mathbf v_2\ne\mathbf 0$, this would require $\lambda_1=\lambda_2$, contradicting our assumption.
::::

**Repeated eigenvalues.** When an eigenvalue repeats, this theorem no longer gives us the answer. We have to check how many independent eigenvectors belong to that eigenvalue. Compare

```{math}
\mathbf A=\begin{pmatrix}1&0\\0&1\end{pmatrix},
\qquad
\mathbf B=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
```

Both have characteristic polynomial $(1-\lambda)^2$, so both have the eigenvalue $1$ twice.

For $\mathbf A$, every nonzero vector satisfies $\mathbf A\mathbf v=\mathbf v$. We can choose $(1,0)^T$ and $(0,1)^T$ as two independent eigenvectors.

For $\mathbf B$, solve the eigenvector equation:

```{math}
(\mathbf B-\mathbf I)\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}x\\y\end{pmatrix}
=\begin{pmatrix}y\\0\end{pmatrix}
=\begin{pmatrix}0\\0\end{pmatrix}.
```

This requires $y=0$. Every eigenvector is a nonzero multiple of $(1,0)^T$, so there is only one independent eigenvector. Thus the same repeated root gives two independent eigenvectors for $\mathbf A$, but only one for $\mathbf B$.

The practical rule is simple: distinct eigenvalues guarantee independent eigenvectors; repeated eigenvalues must be checked by solving $(\mathbf M-\lambda\mathbf I)\mathbf v=\mathbf 0$. We will see how an eigenvector basis diagonalizes a matrix in [Similarity Transformations and Diagonalization](04b-similarity-transformations.md).

## Homework

::::{admonition} Question 1

For the matrix

```{math}
\mathbf M=
\begin{pmatrix}
2&1\\
0&3
\end{pmatrix},
```

calculate the eigenvalues and find a corresponding eigenvector for each eigenvalue. Show that the two eigenvectors are linearly independent, then calculate their dot product. Are they orthogonal? Explain why this does not contradict the theorem above.

::::

::::{admonition} Question 2

Find the eigenvalues and corresponding eigenvectors of

```{math}
\mathbf M=
\begin{pmatrix}
0&1\\
-1&0
\end{pmatrix}.
```

This is $\mathbf R(\pi/2)$ using the convention in Question 3. Are the eigenvalues and eigenvectors real or complex? Verify each eigenpair by substituting it into $\mathbf M\mathbf v=\lambda\mathbf v$.

::::

::::{admonition} Question 3

For a general angle $\theta$, calculate the eigenvalues and corresponding eigenvectors of

```{math}
\mathbf{R}[\theta]=
\begin{pmatrix}
\cos\theta&\sin\theta\\
-\sin\theta&\cos\theta
\end{pmatrix}.
```

Allow complex components in your answer and verify each eigenpair. Then select “Rotation” in the visualization above. Explain why a general rotation may show no real eigenvector directions even though the matrix has eigenvalues.

Finally, evaluate your result at $\theta=0$ and $\theta=\pi$. What are the two rotation matrices in these cases? Explain why these angles give real eigenvalues, identify those eigenvalues, and determine how many independent eigenvectors are available in each case. Why do these repeated eigenvalues still give an eigenvector basis?
::::

The rotation eigenvalues have magnitude one. We will prove this generally when we introduce unitary matrices, the complex extension of orthogonal matrices.
