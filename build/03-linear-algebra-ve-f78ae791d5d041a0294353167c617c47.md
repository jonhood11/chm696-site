---
title: "Linear Algebra: Vectors and Transformations"
---

# Linear Algebra: Vectors and Transformations

## Vectors

Consider a vector in 3-dimensional space, such as

```{math}
\mathbf{v} = \begin{bmatrix} v_x \\ v_y \\ v_z \end{bmatrix}.
```

We can represent this vector visually as an arrow in $xyz$-space, starting from the origin and pointing to the coordinates $(v_x, v_y, v_z)$. In general, a vector provides both a direction and a magnitude, and we can extend this concept to higher dimensions.

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

If such scalars exist, the vectors are linearly dependent.

Geometrically, this is just saying that the vectors $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent if they do not lie along the same line. This means we cannot express one as a multiple of the other.

#### Inner product or dot product

We will now define an operation that takes two vectors and returns a scalar. More generally it is called an inner product but in the context of real vectors it is often called a dot product. Given two vectors $\mathbf{v}$ and $\mathbf{w}$, their dot product is defined as

```{math}
\mathbf{v} \cdot \mathbf{w} = \sum_{i=1}^n v_i w_i.
```

Alternatively, the dot product can also be written in terms of the magnitudes of $\mathbf{v}$ and $\mathbf{w}$ and the angle $\theta$ between them:

```{math}
\mathbf{v} \cdot \mathbf{w} = |\mathbf{v}| |\mathbf{w}| \cos \theta.
```

When the two vectors point in the same direction, $\mathbf{v}\cdot\mathbf{w}=|\mathbf{v}||\mathbf{w}|$. If they point in opposite directions, the result is $-|\mathbf{v}||\mathbf{w}|$.

Two real vectors are called orthogonal if their dot product is zero:

```{math}
\mathbf v\cdot\mathbf w=0.
```

For nonzero vectors, this means they are perpendicular: $\theta=\pi/2$. For example, $(1,1)^T$ and $(1,-1)^T$ are orthogonal because their dot product is $1-1=0$.

The projection of $\mathbf{b}$ onto $\mathbf{a}$ is given by

```{math}
\text{proj}_{\mathbf{a}} \mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2} \mathbf{a}.
```

For $\mathbf{a}\ne\mathbf{0}$, this is the part of $\mathbf{b}$ along $\mathbf{a}$. The remaining vector is perpendicular to $\mathbf{a}$.

```{figure} figures/03-linear-algebra/vector-projection.svg
:width: 65%
:alt: Vector b projects perpendicularly onto the line along a. The projection runs from the origin to the foot of the perpendicular; a right-angle marker shows the perpendicular remainder.

Drop a perpendicular from the tip of $\mathbf{b}$ to the line along $\mathbf{a}$. The green arrow is $\mathrm{proj}_{\mathbf{a}}\mathbf{b}$.
```

## Cross Product

The dot product is called an inner product because it combines two vectors and returns a scalar. In contrast, the cross product takes two vectors and produces a new vector perpendicular to both in three-dimensional space. Given vectors $\mathbf{a}$ and $\mathbf{b}$, their cross product is:

```{math}
\mathbf{a} \times \mathbf{b} = \mathbf{c},
```

where $\mathbf{c}$ has magnitude $|\mathbf{c}| = |\mathbf{a}| |\mathbf{b}| \sin \theta$ and is oriented according to the right-hand rule. This vector is orthogonal to the plane defined by $\mathbf{a}$ and $\mathbf{b}$, with its magnitude representing the area of the parallelogram they form.

```{figure} figures/03-linear-algebra/cross-product-3d.png
:width: 85%
:alt: Three-dimensional diagram of a=(2,0,0) and b=(1,2,0) spanning a horizontal parallelogram, with c=a cross b=(0,0,4) pointing upward, perpendicular to both.

For $\mathbf{a}=(2,0,0)$ and $\mathbf{b}=(1,2,0)$, the cross product is $\mathbf{c}=(0,0,4)$. Its direction is perpendicular to the shaded plane, and its length, $4$, equals the area of the parallelogram. Reversing the order gives $\mathbf{b}\times\mathbf{a}=-\mathbf{c}$, pointing downward.
```

The cross product can also be expressed using the Levi-Civita symbol $\epsilon_{ijk}$, which takes the values:

```{math}
\epsilon_{ijk} = \begin{cases}
+1 & \text{if } (i, j, k) \text{ is an even permutation of } (1, 2, 3), \\
-1 & \text{if } (i, j, k) \text{ is an odd permutation of } (1, 2, 3), \\
0 & \text{if any two indices are the same}.
\end{cases}
```

Using the Levi-Civita symbol, the $i$-th component of the cross product $\mathbf{a} \times \mathbf{b}$ is:

```{math}
(\mathbf{a} \times \mathbf{b})_i = \sum_{j=1}^3 \sum_{k=1}^3 \epsilon_{ijk} a_j b_k.
```

This summation, using the Einstein summation convention, provides a compact and general way to express the cross product in terms of components. Expanding this for each component, we obtain:

```{math}
\mathbf{a} \times \mathbf{b} = \begin{bmatrix} a_y b_z - a_z b_y \\ a_z b_x - a_x b_z \\ a_x b_y - a_y b_x \end{bmatrix}.
```

## The Matrix

A matrix represents a general linear transformation once we have chosen a basis. We can think of it as acting on the whole vector space, sending each vector $\mathbf{a}$ to a new vector $\mathbf{a}'$:

```{math}
\mathbf{M} \, \mathbf{a} = \mathbf{a}'.
```

In two dimensions, we write the matrix and its action as

```{math}
\mathbf{M}=\begin{pmatrix}M_{11}&M_{12}\\M_{21}&M_{22}\end{pmatrix},
\qquad
\begin{pmatrix}a'_1\\a'_2\end{pmatrix}
=
\begin{pmatrix}
M_{11}a_1+M_{12}a_2\\
M_{21}a_1+M_{22}a_2
\end{pmatrix}.
```

Each row tells us how to calculate one output component. In any dimension, the same rule is

```{math}
a'_i=\sum_j M_{ij}a_j.
```

Thus $M_{ij}$ is the coefficient multiplying input component $a_j$ in output component $a'_i$. Once a basis is chosen, every linear transformation can be written this way.

Linearity means that this transformation preserves addition and scalar multiplication:

```{math}
\mathbf{M}(\mathbf{a} + \mathbf{b}) = \mathbf{M} \mathbf{a} + \mathbf{M} \mathbf{b}, \quad \mathbf{M}(k\mathbf{a}) = k\mathbf{M}\mathbf{a}.
```

```{figure} figures/03-linear-algebra/matrix-linearity.png
:width: 100%
:alt: Before and after a shear M. Vectors a and b add to the diagonal c; their transformed vectors a prime and b prime add to c prime, the transformed diagonal. Corresponding vectors have matching colors.

Here $M=\begin{pmatrix}1&0.7\\0&1\end{pmatrix}$ shears the plane horizontally. On the left, $\mathbf{c}=\mathbf{a}+\mathbf{b}$. On the right, the transformed parallelogram still closes: $\mathbf{c}'=\mathbf{a}'+\mathbf{b}'$. Adding first and then transforming gives the same result as transforming first and then adding. Both panels use the same scale.
```

We can visualize this transformation with 2D vectors, where $\mathbf{M}$ acts on a vector to produce a new vector. However, we can also think about how the matrix $\mathbf{M}$ transforms every vector in the space.

This provides a visual way to represent a matrix: by observing how it transforms all vectors in a space. While it might seem unusual that the most general linear transformation in 2D is represented by just 4 numbers, remember that we've constrained the transformation to be linear.

Enter any $2\times2$ matrix below and move the slider to see where each grid point goes. The points follow $\mathbf{v}(t)=(1-t)\mathbf{v}+tM\mathbf{v}$, from the original grid at $t=0$ to its transformed image at $t=1$.

<a href="https://jonhood11.github.io/chm696-site/matrix-explorer/index.html" target="_blank" rel="noopener noreferrer">Open in new tab ↗</a>

<iframe src="https://jonhood11.github.io/chm696-site/matrix-explorer/index.html" title="Interactive matrix transformation of a grid" style="width:100%;height:720px;border:0;"></iframe>

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

For example, let $\mathbf{R}[\pi/2]$ rotate a vector clockwise by $90^\circ$, and let $\mathbf{S}$ stretch its $x$ component by a factor of two:

```{math}
\mathbf{R}[\pi/2]=\begin{pmatrix}0&1\\-1&0\end{pmatrix},
\qquad
\mathbf{S}=\begin{pmatrix}2&0\\0&1\end{pmatrix},
\qquad
\mathbf{v}=\begin{pmatrix}1\\0\end{pmatrix}.
```

Rotating first sends $\mathbf{v}$ to $(0,-1)^T$. The horizontal stretch then leaves it unchanged. Reversing the order stretches $\mathbf{v}$ to $(2,0)^T$ before rotating it:

```{math}
\mathbf{S}\mathbf{R}[\pi/2]\mathbf{v}
=\begin{pmatrix}0\\-1\end{pmatrix},
\qquad
\mathbf{R}[\pi/2]\mathbf{S}\mathbf{v}
=\begin{pmatrix}0\\-2\end{pmatrix}.
```

The outputs differ, so $\mathbf{S}\mathbf{R}[\pi/2]\ne\mathbf{R}[\pi/2]\mathbf{S}$. In a product, the matrix on the right acts first.

## Inverse of a Matrix

The inverse of a matrix $\mathbf{M}$, denoted as $\mathbf{M}^{-1}$, satisfies the equation:

```{math}
\mathbf{M} \mathbf{M}^{-1} =\mathbf{M}^{-1} \mathbf{M}=  \mathbf{I}.
```

If $\mathbf{M}\mathbf{a}=\mathbf{a}'$, applying $\mathbf{M}^{-1}$ takes $\mathbf{a}'$ back to $\mathbf{a}$.

```{figure} figures/03-linear-algebra/matrix-inverse.svg
:width: 85%
:alt: Three coordinate panels show a=(1,1), its transformed image a prime=(2,1) under a shear M, and the original a restored by M inverse.

For $M=\begin{pmatrix}1&1\\0&1\end{pmatrix}$, the inverse $M^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix}$ undoes the shear.
```

Does an inverse always exist? For a number, we can undo $y=mx$ when $m\ne 0$. For a square matrix, we need to be able to recover a unique input from each output. If the transformation collapses different vectors onto the same output, we cannot undo it. Such a matrix is called singular. We will see how the determinant tests this shortly.

Solving a system of linear equations,

```{math}
\mathbf{M}\mathbf{x}=\mathbf{b},
```

asks which input $\mathbf{x}$ produces the specified output $\mathbf{b}$. If $\mathbf{M}$ is invertible, there is exactly one solution: $\mathbf{x}=\mathbf{M}^{-1}\mathbf{b}$.

If $\mathbf{M}$ is singular, there may be no solution or infinitely many. For example, $\mathbf{M}=\begin{pmatrix}1&0\\0&0\end{pmatrix}$ sends $(x,y)^T$ to $(x,0)^T$. The output $(1,0)^T$ comes from every input $(1,y)^T$, while the output $(1,1)^T$ is impossible.

For two invertible matrices $\mathbf{A}$ and $\mathbf{B}$, the inverse of their product is given by:

```{math}
(\mathbf{A} \mathbf{B})^{-1} = \mathbf{B}^{-1} \mathbf{A}^{-1}.
```

## Transpose

The transpose $\mathbf{M}^T$ is obtained by interchanging the rows and columns of $\mathbf{M}$, so $(M^T)_{ij}=M_{ji}$.

The transpose of a product of matrices satisfies:

```{math}
(\mathbf{A}\mathbf{B})^T = \mathbf{B}^T \mathbf{A}^T.
```

(transpose-product-proof)=
::::{prf:proof} Transpose of a product
For compatible matrices $\mathbf A$ and $\mathbf B$, compare the $(i,j)$ entries:

```{math}
\bigl[(\mathbf A\mathbf B)^T\bigr]_{ij}
=(\mathbf A\mathbf B)_{ji}
=\sum_k A_{jk}B_{ki}
=\sum_k (B^T)_{ik}(A^T)_{kj}
=(\mathbf B^T\mathbf A^T)_{ij}.
```

The entries agree, so the matrices are equal. The order reverses because rows become columns.
::::

More generally, for multiple matrices:

```{math}
(\mathbf{A}\mathbf{B}\mathbf{C})^T = \mathbf{C}^T \mathbf{B}^T \mathbf{A}^T.
```

We can also write the dot product of two vectors using the transpose:

```{math}
\mathbf{v} \cdot \mathbf{v} =  \mathbf{v}^T \mathbf{v}
```

## Orthogonal Transformations and Rotations

Many important transformations like rotations fall under a specific class of transformations called orthogonal transformations. An orthogonal transformation preserves the length of every vector. If $\mathbf{b} = \mathbf{M}\, \mathbf{a}$, the transformation $\mathbf{M}$ is orthogonal if the following holds for every real vector $\mathbf{a}$:

```{math}
|\mathbf{a}|^2= |\mathbf{b}|^2
```

For a real vector, its squared length is the row vector $\mathbf{a}^T$ multiplied by the column vector $\mathbf{a}$. In two dimensions,

```{math}
|\mathbf{a}|^2=\mathbf{a}^T\mathbf{a}
=\begin{bmatrix}a_x&a_y\end{bmatrix}
\begin{bmatrix}a_x\\a_y\end{bmatrix}
=a_x^2+a_y^2.
```

In $n$ dimensions, the same product gives $\mathbf{a}^T\mathbf{a}=\sum_{i=1}^n a_i^2$.

Substituting the expression for $\mathbf{b}$ and using the transpose rule gives

```{math}
\mathbf{b}^T \mathbf{b} = ( \mathbf{M}\mathbf{a} )^T (\mathbf{M}\mathbf{a}) 
=   \mathbf{a}^T \,\, (  \mathbf{M}^T \mathbf{M} ) \,\,   \mathbf{a}
```

For the length to be unchanged for every vector, $\mathbf{M}$ must satisfy

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
\mathbf{R}[\theta] = \begin{pmatrix}
\cos \theta & \sin \theta \\
-\sin \theta & \cos \theta
\end{pmatrix}.
```

The inverse of this matrix is simply the rotation by the negative angle:

```{math}
\mathbf{R}^{-1}[\theta] = \mathbf{R}[-\theta].
```

Furthermore, we can confirm that this matrix is orthogonal:

```{math}
\mathbf{R}^T[\theta] \mathbf{R}[\theta] = \mathbf{I},
```

Thus, $\mathbf{R}[\theta]$ is an orthogonal matrix that preserves the length of vectors.

With the sign convention used here, a positive $\theta$ rotates vectors clockwise in fixed $x,y$ coordinates.

```{figure} figures/03-linear-algebra/rotation-option-1-vector.png
:width: 75%
:alt: A vector and its clockwise-rotated image end on the same circle, with an arc marking a 55 degree rotation.

A single vector rotates through $55^\circ$. Both endpoints lie on the same circle because the vector's length is unchanged.
```

## Determinant

We have seen how a matrix moves vectors. Now let's look at what happens to the area between them. Start with the unit square on the left, whose edges are the unit vectors $\hat{\mathbf{i}}$ and $\hat{\mathbf{j}}$.

```{figure} figures/03-linear-algebra/determinant-area.png
:width: 100%
:alt: A unit square spanned by i and j maps to a parallelogram spanned by Mi and Mj. The original area is one and the transformed area is two, the absolute determinant.

The columns of $M=\begin{pmatrix}1.5&0.5\\0.5&1.5\end{pmatrix}$ give the transformed unit vectors. They span a parallelogram with area $|\det M|=2$. Both panels use the same scale. The determinant's magnitude gives the area; its sign records whether orientation is preserved or reversed.
```

Applying $\mathbf{M}$ sends these edges to $\mathbf{M}\hat{\mathbf{i}}$ and $\mathbf{M}\hat{\mathbf{j}}$, the two columns of the matrix. The square becomes the parallelogram on the right. Its opposite corner is the sum of the transformed edges because the transformation is linear.

Here the original area is $1$ and the new area is $2$: the transformation doubles areas. In general, the area scale factor is $|\det\mathbf{M}|$. The determinant also has a sign, which records whether the transformation preserves or reverses orientation. For this example,

```{math}
\det\mathbf{M}=(1.5)(1.5)-(0.5)(0.5)=2.
```

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

The identity matrix leaves the unit volume unchanged, so $\det(\mathbf I)=1$.

::::{prf:theorem} Determinant of a product
For real square matrices $\mathbf A$ and $\mathbf B$ of the same size,

```{math}
\det(\mathbf A\mathbf B)=\det(\mathbf A)\det(\mathbf B).
```
::::

::::{prf:proof}
For real matrices, we can use the geometric meaning of the determinant. Applying $\mathbf A\mathbf B$ means applying $\mathbf B$ first, then $\mathbf A$. The first transformation scales volume by $|\det(\mathbf B)|$, and the second scales the resulting volume by $|\det(\mathbf A)|$. These factors multiply. The orientation signs multiply too: two reversals restore the original orientation. Thus the signed volume factor is $\det(\mathbf A)\det(\mathbf B)$.

If either transformation is singular, the composition also has rank less than the dimension, so its volume and determinant are zero. The identity therefore holds in this case as well.
::::

::::{prf:theorem} Determinant of a transpose
For any square matrix $\mathbf A$,

```{math}
\det(\mathbf A^T)=\det(\mathbf A).
```
::::

::::{prf:proof}
Transposition exchanges rows and columns. Expand $\det(\mathbf A^T)$ along its first row and $\det(\mathbf A)$ along its first column. The entries and cofactor signs match, and each minor in the first expansion is the transpose of the corresponding minor in the second.

For a $1\times1$ matrix the result is immediate. If it holds for matrices of size $(n-1)\times(n-1)$, those paired minors have equal determinants, so the two expansions agree for size $n\times n$. This proves the result by induction.
::::

::::{prf:theorem} Determinant of an inverse
For an invertible square matrix $\mathbf A$,

```{math}
\det(\mathbf A^{-1})=\frac{1}{\det(\mathbf A)}.
```
::::

::::{prf:proof}
Since $\mathbf A\mathbf A^{-1}=\mathbf I$, the product identity gives

```{math}
\det(\mathbf A)\det(\mathbf A^{-1})=\det(\mathbf I)=1.
```

Dividing by the nonzero determinant of $\mathbf A$ gives the result.
::::

For an orthogonal matrix, $\mathbf{M}^{-1}=\mathbf{M}^T$. Since $|\mathbf{M}|\,|\mathbf{M}^{-1}|=1$ and a matrix and its transpose have the same determinant,

```{math}
|\mathbf{M}|^2=1 \quad\Rightarrow\quad |\mathbf{M}|=\pm1.
```

Orthogonal matrices with determinant $+1$ represent proper rotations; those with determinant $-1$ reverse orientation and include reflections. For the rotation matrix introduced above,

```{math}
|\mathbf{R}[\theta]|=\cos^2\theta+\sin^2\theta=1.
```

A square matrix $\mathbf{M}$ has an inverse if and only if $\det(\mathbf{M})\ne 0$. If $\det(\mathbf{M})=0$, the transformation collapses at least one direction, so different input vectors can have the same output. The matrix is singular and cannot be inverted.

Row and column operations affect the determinant as follows:

- Swapping two rows or columns changes the sign of the determinant.

- Multiplying a row or column by a scalar $k$ multiplies the determinant by $k$.

- Adding a multiple of one row to another row does not change the determinant.


## Questions

::::{admonition} Question 1

Given vectors $\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix} 5 \\ 2 \end{pmatrix}$, compute the projection of $\mathbf{b}$ onto $\mathbf{a}$.

::::

::::{admonition} Question 2

Consider the following matrices. Compute their determinant and explain the effect on the area of a unit square under the transformation defined by $M$.

1.  $M = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$.

2.  $\mathbf{R}[\theta] = \begin{pmatrix} \cos(\theta) & \sin(\theta) \\ -\sin(\theta) & \cos(\theta) \end{pmatrix}$

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
