---
title: "Linear Algebra: Vectors and Transformations"
---

# Linear Algebra: Vectors and Transformations

## Vectors

Consider a vector in 3-dimensional space, such as

```{math}
\mathbf{v} = \begin{bmatrix} v_x \\ v_y \\ v_z \end{bmatrix}.
```

We can represent this vector visually as an arrow in the $xyz$-plane, starting from the origin and pointing to the coordinates $(v_x, v_y, v_z)$. In general, a vector provides both a direction and a magnitude, and we can extend this concept to higher dimensions.

The magnitude or length of a vector is

```{math}
|\mathbf{v}| = \sqrt{v_x^2 + v_y^2 + v_z^2}.
```

More generally, for a vector in $n$-dimensional space, $\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{bmatrix}$, the magnitude is given by

```{math}
|\mathbf{v}| = \sqrt{\sum_{i=1}^n v_i^2}.
```

Vectors add component by component: $\mathbf{v}_3=\mathbf{v}_1+\mathbf{v}_2$. Geometrically, we can place the tail of $\mathbf{v}_2$ at the tip of $\mathbf{v}_1$; the sum runs from the original starting point to the final tip.

```{figure} figures/03-linear-algebra/vector-addition.png
:width: 85%
:alt: Vectors v1 and v2 start at the origin. Dashed translated copies complete a parallelogram, with v3=v1+v2 along its diagonal.

The diagonal is $\mathbf{v}_3=\mathbf{v}_1+\mathbf{v}_2$. The dashed arrows are translated copies of the original vectors. Following either pair of edges reaches the same endpoint, so $\mathbf{v}_1+\mathbf{v}_2=\mathbf{v}_2+\mathbf{v}_1$.
```

#### Linear independence

Two vectors $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent if there are no scalars $c_1$ and $c_2$, not both zero, such that

```{math}
c_1 \mathbf{v}_1 + c_2 \mathbf{v}_2 = \mathbf{0}.
```

If such scalars exist, the vectors are *linearly dependent*.

Geometrically, this is just saying that the vectors $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent if they do not lie along the same line. This means we cannot express one as a multiple of the other.

#### Inner product or dot product

We will now define an operation that takes two vectors and returns a scalar. More generally it is called an inner product but in the context of real vectors it is often called a dot product. Given two vectors $\mathbf{v}$ and $\mathbf{w}$, their dot product is defined as

```{math}
\mathbf{v} \cdot \mathbf{w} = \sum_{i=1}^n v_i w_i.
```

Alternatively, the dot product can also be written in terms of the magnitudes of $\mathbf{A}$ and $\mathbf{B}$ and the angle $\theta$ between them:

```{math}
\mathbf{v} \cdot \mathbf{w} = |\mathbf{v}| |\mathbf{w}| \cos \theta.
```

When the two vectors are parallel, then $\mathbf{v} \cdot \mathbf{w} = |A||B|$. However if the two vectors are orthogonal, then $\mathbf{v} \cdot \mathbf{w} = 0$.

The projection of $\mathbf{b}$ onto $\mathbf{a}$ is given by

```{math}
\text{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2} \mathbf{a}.
```

This formula represents the component of $\mathbf{b}$ in the direction of $\mathbf{a}$, effectively "projecting\" $\mathbf{b}$ onto the line defined by $\mathbf{a}$.

## Cross Product

The dot product is called an *inner product* because it combines two vectors and returns a scalar. In contrast, the *cross product* takes two vectors and produces a new vector perpendicular to both in three-dimensional space. Given vectors $\mathbf{a}$ and $\mathbf{b}$, their cross product is:

```{math}
\mathbf{a} \times \mathbf{b} = \mathbf{c},
```

where $\mathbf{c}$ has magnitude $|\mathbf{c}| = |\mathbf{a}| |\mathbf{b}| \sin \theta$ and is oriented according to the right-hand rule. This vector is orthogonal to the plane defined by $\mathbf{a}$ and $\mathbf{b}$, with its magnitude representing the area of the parallelogram they form.

```{figure} figures/03-linear-algebra/cross-product-3d.png
:width: 85%
:alt: Three-dimensional diagram of a=(2,0,0) and b=(1,2,0) spanning a horizontal parallelogram, with c=a cross b=(0,0,4) pointing upward, perpendicular to both.

For $\mathbf{a}=(2,0,0)$ and $\mathbf{b}=(1,2,0)$, the cross product is $\mathbf{c}=(0,0,4)$. Its direction is perpendicular to the shaded plane, and its length, $4$, equals the area of the parallelogram. Reversing the order gives $\mathbf{b}\times\mathbf{a}=-\mathbf{c}$, pointing downward.
```

The cross product can also be expressed using the *Levi-Civita symbol* $\epsilon_{ijk}$, which takes the values:

```{math}
\epsilon_{ijk} = \begin{cases}
+1 & \text{if } (i, j, k) \text{ is an even permutation of } (1, 2, 3), \\
-1 & \text{if } (i, j, k) \text{ is an odd permutation of } (1, 2, 3), \\
0 & \text{if any two indices are the same}.
\end{cases}
```

Using the Levi-Civita symbol, the $i$-th component of the cross product $\mathbf{a} \times \mathbf{b}$ is:

```{math}
(\mathbf{a} \times \mathbf{b})_i = \sum_{j=1}^3 \sum_{k=1}^3 \epsilon_{ijk} A_j B_k.
```

This summation, using the Einstein summation convention, provides a compact and general way to express the cross product in terms of components. Expanding this for each component, we obtain:

```{math}
\mathbf{a} \times \mathbf{b} = \begin{bmatrix} A_y B_z - A_z B_y \\ A_z B_x - A_x B_z \\ A_x B_y - A_y B_x \end{bmatrix}.
```

## The Matrix

A matrix represents a general linear transformation once we have chosen a basis. We can think of it as acting on the whole vector space, sending each vector $\mathbf{a}$ to a new vector $\mathbf{a}'$:

```{math}
\mathbf{M} \, \mathbf{a} = \mathbf{a}'.
```

Linearity means that this transformation preserves addition and scalar multiplication:

```{math}
\mathbf{M}(\mathbf{a} + \mathbf{b}) = \mathbf{M} \mathbf{a} + \mathbf{M} \mathbf{b}, \quad \mathbf{M}(k\mathbf{a}) = k\mathbf{M}\mathbf{a}.
```

```{figure} figures/03-linear-algebra/matrix-linearity.png
:width: 100%
:alt: Before and after a shear M. Vectors a and b add to the diagonal c; their transformed vectors a prime and b prime add to c prime, the transformed diagonal. Corresponding vectors have matching colors.

Here $M=\begin{pmatrix}1&0.7\\0&1\end{pmatrix}$ shears the plane horizontally. On the left, $\mathbf{c}=\mathbf{a}+\mathbf{b}$. On the right, the transformed parallelogram still closes: $\mathbf{c}'=\mathbf{a}'+\mathbf{b}'$. Adding first and then transforming gives the same result as transforming first and then adding. Both panels use the same scale.
```

The most general form of a linear transformation is denoted by

```{math}
\sum_j M_{ij} a_j = a'_i,
```

where each component $a'_i$ of the new vector $\mathbf{a}'$ can depend linearly on every component $a_j$ of the input vector $\mathbf{a}$. This form is general because it allows each output component to be a linear combination of all input components.

We can visualize this transformation with 2D vectors, where $\mathbf{M}$ acts on a vector to produce a new vector. However, we can also think about how the matrix $\mathbf{M}$ transforms every vector in the space.

This provides a visual way to represent a matrix: by observing how it transforms all vectors in a space. While it might seem unusual that the most general linear transformation in 2D is represented by just 4 numbers, remember that we've constrained the transformation to be linear.

Enter any $2\times2$ matrix below and move the slider to see where each grid point goes. The points follow $\mathbf{v}(t)=(1-t)\mathbf{v}+tM\mathbf{v}$, from the original grid at $t=0$ to its transformed image at $t=1$.

<a href="/chm696-site/matrix-explorer/index.html" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<iframe src="/chm696-site/matrix-explorer/index.html" title="Interactive matrix transformation of a grid" style="width:100%;height:720px;border:0;"></iframe>

The identity matrix $\mathbf{I}$ is defined as:

```{math}
I_{ij} = \delta_{ij} = 
\begin{cases}
1 & \text{if } i = j, \\
0 & \text{if } i \neq j.
\end{cases}
```

In 2D, for example:

```{math}
\mathbf{I} = \begin{pmatrix}
1 & 0 \\
0 & 1
\end{pmatrix}.
```

## Matrix Multiplication

Now that we have defined a transformation $\mathbf{M}$, we can explore what it means to transform a vector multiple times. For example, consider the expression

```{math}
\mathbf{A} ( \mathbf{B} \,\, \mathbf{v} ) =   ( \mathbf{A} \mathbf{B} ) \mathbf{v}  ,
```

where $\mathbf{A}$ and $\mathbf{B}$ are matrices and $\mathbf{a}$ is a vector. In index notation, this becomes

```{math}
(\mathbf{A} \,\, \mathbf{B}\, \, \mathbf{v} )_i = \sum_j A_{ij} \left( \sum_k B_{jk} v_k \right) =   \sum_k  \left( \sum_j A_{ij}   B_{jk}  \right) \,  v_k      .
```

Expanding this notation leads us to the definition of matrix multiplication in component form:

```{math}
(\mathbf{A} \mathbf{B})_{ik} = \sum_j A_{ij} B_{jk}.
```

This formula allows us to multiply two matrices by taking the sum of products of corresponding entries.

Matrix multiplication satisfies several important properties:

- Associativity: $(\mathbf{A}\mathbf{B})\mathbf{C} = \mathbf{A}(\mathbf{B}\mathbf{C})$. This means that the order of operations does not affect the result when multiplying multiple matrices.

- Distributivity: $\mathbf{A}(\mathbf{B} + \mathbf{C}) = \mathbf{A}\mathbf{B} + \mathbf{A}\mathbf{C}$. Matrix multiplication distributes over matrix addition.

However, matrix multiplication has a crucial property that distinguishes it from multiplication of numbers:

- Non-commutativity: In general, $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$. This means that the order of multiplication matters for matrices.

## Inverse of a Matrix

The inverse of a matrix $\mathbf{M}$, denoted as $\mathbf{M}^{-1}$, satisfies the equation:

```{math}
\mathbf{M} \mathbf{M}^{-1} =\mathbf{M}^{-1} \mathbf{M}=  \mathbf{I}.
```

Does an inverse always exist? For a number, we can undo $y=mx$ when $m\ne 0$. For a square matrix, we need to be able to recover a unique input from each output. If the transformation collapses different vectors onto the same output, we cannot undo it. Such a matrix is called *singular*. We will see how the determinant tests this shortly.

For two invertible matrices $\mathbf{A}$ and $\mathbf{B}$, the inverse of their product is given by:

```{math}
(\mathbf{A} \mathbf{B})^{-1} = \mathbf{B}^{-1} \mathbf{A}^{-1}.
```

## Functions of Matrices

Now we can ask what it means to take a function of a matrix $f(\mathbf{A})$. For example, what does it mean to take $e^{\mathbf{A}}$? We define this operation using the Taylor series expansion for the exponential function:

```{math}
e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots
```

Extending this series to matrices, we define:

```{math}
e^{\mathbf{A}} = \mathbf{I} + \mathbf{A} + \frac{\mathbf{A}^2}{2!} + \frac{\mathbf{A}^3}{3!} + \cdots,
```

where $\mathbf{I}$ is the identity matrix, and powers of $\mathbf{A}$ are computed by matrix multiplication.

However, when dealing with matrices, we must be cautious because matrices generally do not commute, meaning $\mathbf{A}\mathbf{B} \neq \mathbf{B}\mathbf{A}$ in general. This non-commutativity introduces important differences from the scalar case. For instance, while for real numbers $e^a e^b = e^{a+b}$, this property does not hold for matrices. Specifically, for matrices $\mathbf{A}$ and $\mathbf{B}$,

```{math}
e^{\mathbf{A}} e^{\mathbf{B}} \neq e^{\mathbf{A} + \mathbf{B}},
```

unless $\mathbf{A}$ and $\mathbf{B}$ commute (i.e., $\mathbf{A}\mathbf{B} = \mathbf{B}\mathbf{A}$).

To see why this happens, we can examine the Taylor series expansions of $e^{\mathbf{A}}$ and $e^{\mathbf{B}}$ individually. The product $e^{\mathbf{A}} e^{\mathbf{B}}$ expands as:

```{math}
e^{\mathbf{A}} e^{\mathbf{B}} = \left( \mathbf{I} + \mathbf{A} + \frac{\mathbf{A}^2}{2!} + \frac{\mathbf{A}^3}{3!} + \cdots \right) \left( \mathbf{I} + \mathbf{B} + \frac{\mathbf{B}^2}{2!} + \frac{\mathbf{B}^3}{3!} + \cdots \right).
```

Expanding this product term by term, we get:

```{math}
e^{\mathbf{A}} e^{\mathbf{B}} = \mathbf{I} + (\mathbf{A} + \mathbf{B}) + \frac{\mathbf{A}^2 + 2 \mathbf{A}\mathbf{B}  + \mathbf{B}^2}{2!} + \cdots
```

In contrast, the series for $e^{\mathbf{A} + \mathbf{B}}$ is:

```{math}
e^{\mathbf{A} + \mathbf{B}} = \mathbf{I} + (\mathbf{A} + \mathbf{B}) + \frac{\mathbf{A}^2 + \mathbf{A}\mathbf{B} + \mathbf{B}\mathbf{A} + \mathbf{B}^2}{2!} + \cdots
```

These are the same unless $\mathbf{A}$ and $\mathbf{B}$ commute (i.e., $\mathbf{A}\mathbf{B} = \mathbf{B}\mathbf{A}$). Therefore, in general,

```{math}
e^{\mathbf{A}} e^{\mathbf{B}} \neq e^{\mathbf{A} + \mathbf{B}}.
```

This highlights how non-commutativity affects matrix exponentials, resulting in different outcomes compared to scalar exponentials.

## Transpose

The transpose $\mathbf{M}^T$ is obtained by interchanging the rows and columns of $\mathbf{M}$, so $(M^T)_{ij}=M_{ji}$.

The transpose of a product of matrices satisfies:

```{math}
(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T \mathbf{A}^T.
```

More generally, for multiple matrices:

```{math}
(\mathbf{A}\mathbf{B}\mathbf{C})^T = \mathbf{C}^T \mathbf{B}^T \mathbf{A}^T.
```

We can also write the dot product of two vectors using the transpose:

```{math}
\mathbf{v} \cdot \mathbf{v} =  \mathbf{v}^T \mathbf{v}
```

## Orthogonal Transformations and Rotations

Many important transformations like rotations fall under a specific class of transformations called orthogonal transformations. An orthogonal transformation preserves the length of vectors. If $\mathbf{b} = \mathbf{M}\, \mathbf{a}$, the transformation $\mathbf{M}$ is orthogonal if:

```{math}
|\mathbf{a}|^2= |\mathbf{b}|^2
```

Substituting the expression for $\mathbf{b}$ and using the transpose rule gives

```{math}
\mathbf{b}^T \mathbf{b} = ( \mathbf{M}\mathbf{a} )^T (\mathbf{M}\mathbf{a}) 
=   \mathbf{a}^T \,\, (  \mathbf{M}^T \mathbf{M} ) \,\,   \mathbf{a}
```

In order for the length to be unchanged we see then that $\mathbf{M}$ must satisfy

```{math}
\mathbf{M}^T \mathbf{M} = \mathbf{I},
```

or equivalently

```{math}
\mathbf{M}^{-1} = \mathbf{M}^T.
```

Orthogonal matrices have the property that their transpose is equal to their inverse.

A classic example of an orthogonal matrix is the 2D rotation matrix:

```{math}
R(\theta) = \begin{pmatrix}
\cos \theta & \sin \theta \\
-\sin \theta & \cos \theta
\end{pmatrix}.
```

The inverse of this matrix is simply the rotation by the negative angle:

```{math}
R^{-1}(\theta) = R(-\theta).
```

Furthermore, we can confirm that this matrix is orthogonal:

```{math}
R^T(\theta) R(\theta) = \mathbf{I},
```

Thus, $R(\theta)$ is an orthogonal matrix that preserves the length of vectors.

With the sign convention used here, a positive $\theta$ rotates vectors clockwise in fixed $x,y$ coordinates.

```{figure} figures/03-linear-algebra/rotation-option-1-vector.png
:width: 75%
:alt: A vector and its clockwise-rotated image end on the same circle, with an arc marking a 55 degree rotation.

A single vector rotates through $55^\circ$. Both endpoints lie on the same circle because the vector's length is unchanged.
```

## Determinant

Now that we have a visualization of a transformation, we can ask about how a unit box transforms to the new space. For example it could be rotation or stretch or skew. An important property is the area of new unit box after the transformation. This new area is called the determinant. The determinant is a scalar value that can be computed from the elements of a square matrix

For a $2 \times 2$ matrix:

```{math}
\mathbf{A} = \begin{bmatrix} a & b \\ c & d \end{bmatrix},
```

the determinant is:

```{math}
\det(\mathbf{A}) = ad - bc.
```

For a $3 \times 3$ matrix:

```{math}
\mathbf{A} = \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix},
```

the determinant is:

```{math}
\det(\mathbf{A}) = a(ei - fh) - b(di - fg) + c(dh - eg).
```

The determinant represents the scaling factor for area in 2D (or volume in higher dimensions) under the linear transformation defined by the matrix. If $\det(\mathbf{A}) = 0$, the transformation squashes the space into a lower dimension, indicating that $\mathbf{A}$ is singular (non-invertible).

If $\det(M) = 0$, the area collapses to zero, indicating that the transformation is singular and maps the plane onto a line or a point.

#### Cofactor Expansion

For larger matrices, just use a computer. But sometimes it is useful to know how you would calculate it for when it is zero. For an $n \times n$ matrix $\mathbf{A} = [A_{ij}]$, the determinant, denoted $\det(\mathbf{A})$ or $|\mathbf{A}|$, can be defined using cofactor expansion along any row or column. For simplicity, let's use the first row:

```{math}
\det(\mathbf{A}) = \sum_{j=1}^n (-1)^{1+j} A_{1j} \det(\mathbf{A}_{1j}),
```

where: $A_{1j}$ is the element in the first row and $j$-th column, $\mathbf{A}_{1j}$ is the $(n-1) \times (n-1)$ submatrix obtained by removing the first row and $j$-th column from $\mathbf{A}$, $(-1)^{1+j}$ is the sign factor that alternates for each term in the expansion.

This process can be repeated recursively, breaking down the determinant calculation of $\mathbf{A}$ into determinants of smaller matrices until reaching $1 \times 1$ determinants.

### Properties of Determinants

For an orthogonal matrix, $\mathbf{M}^{-1}=\mathbf{M}^T$. Since $|\mathbf{M}|\,|\mathbf{M}^{-1}|=1$ and a matrix and its transpose have the same determinant,

```{math}
|\mathbf{M}|^2=1 \quad\Rightarrow\quad |\mathbf{M}|=\pm1.
```

Orthogonal matrices with determinant $+1$ represent proper rotations; those with determinant $-1$ reverse orientation and include reflections. For the rotation matrix introduced above,

```{math}
|R(\theta)|=\cos^2\theta+\sin^2\theta=1.
```

A square matrix $\mathbf{M}$ has an inverse if and only if $\det(\mathbf{M})\ne 0$. If $\det(\mathbf{M})=0$, the transformation collapses at least one direction, so different input vectors can have the same output. The matrix is singular and cannot be inverted.

The determinant satisfies several important properties that provide additional insight and simplify calculations:

- $\det(\mathbf{I}) = 1$.

- $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A}) \det(\mathbf{B})$.

- $\det(\mathbf{A}^T) = \det(\mathbf{A})$

- For an invertible matrix $\mathbf{A}$:

  ```{math}
  \det(\mathbf{A}^{-1}) = \dfrac{1}{\det(\mathbf{A})}.
  ```

There are also several operations you can do a matrix that leaves its determinant unchanged:

- Swapping two rows or columns changes the sign of the determinant.

- Multiplying a row or column by a scalar $k$ multiplies the determinant by $k$.

- Adding a multiple of one row to another row does not change the determinant.

```{figure} figures/03-linear-algebra/determinant-area.png
:width: 100%
:alt: A unit square spanned by i and j maps to a parallelogram spanned by Mi and Mj. The original area is one and the transformed area is two, the absolute determinant.

The columns of $M=\begin{pmatrix}1.5&0.5\\0.5&1.5\end{pmatrix}$ give the transformed unit vectors. They span a parallelogram with area $|\det M|=2$. Both panels use the same scale. The determinant's magnitude gives the area; its sign records whether orientation is preserved or reversed.
```

## Questions

::::{admonition} Question 1

Given vectors $\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}$, compute the projection of $\mathbf{b}$ onto $\mathbf{a}$.

::::

::::{admonition} Question 2

Consider the following matrices. Compute their determinant and explain the effect on the area of a unit square under the transformation defined by $M$.

1.  $M = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

2.  $R = \begin{pmatrix} \cos(\theta) & \sin(\theta) \\ -\sin(\theta) & \cos(\theta) \end{pmatrix}$

::::

::::{admonition} Question 3

Let $\mathbf{D} = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$ and $\mathbf{E} = \begin{pmatrix} 1 & 0 \\ 5 & 2 \end{pmatrix}$.

- \(a\) Calculate $\det(\mathbf{D})$ and $\det(\mathbf{E})$.

- \(b\) Find $\det(\mathbf{D} \mathbf{E})$ by directly calculating the product $\mathbf{D} \mathbf{E}$ and then finding its determinant.

- \(c\) Verify that $\det(\mathbf{D} \mathbf{E}) = \det(\mathbf{D}) \cdot \det(\mathbf{E})$, illustrating the property $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A}) \det(\mathbf{B})$.

::::

::::{admonition} Question 4

$\mathbf{A}$ is a $2 \times 2$ matrix with $\det(\mathbf{A}) = 5$. What is $\det(3\mathbf{A})$ and $\det(\mathbf{A}^{-1})$ and $\det(\mathbf{A}^T)   ?$

::::

::::{admonition} Question 5

Prove this: $(\mathbf{A} \mathbf{B})^{-1} = \mathbf{B}^{-1} \mathbf{A}^{-1}$. Hint: Try showing that $(\mathbf{A} \mathbf{B})^{-1}  (\mathbf{A} \mathbf{B}) = \mathbf{1}$ and prove that the relation works.

::::

::::{admonition} Question 6

```{math}
(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T\mathbf{A}^T.
```

Prove this. If you want to take a shot at it go for it. You would use component form and use $A_{ij}^T = A_{ji}$. Feel free to also use a LLM.

::::
