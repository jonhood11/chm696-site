# Machine Learning: Support Vector Machines

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- explain the maximum-margin principle behind a linear support vector machine;
- distinguish hard-margin and soft-margin classification;
- describe how kernels permit nonlinear decision boundaries; and
- contrast the geometry of an SVM with the recursive splits of a decision tree.

## Supervised learning: Support vector machines (SVM)


**What the original figure plots.** It shows separating hyperplane, margins, and support vectors for a linear SVM.

**What this is trying to convey.** A linear SVM selects a separating hyperplane by maximizing the margin to the nearest training points.

:::{figure} figures/15-support-vector-machines/SVM1.png
:alt: Separating hyperplane, margins, and support vectors for a linear SVM
:width: 85%

A linear SVM selects a separating hyperplane by maximizing the margin to the nearest training points.
:::

**Polished version.**

:::{figure} figures/15-support-vector-machines/redraw-SVM1.png
:alt: Polished version of separating hyperplane, margins, and support vectors for a linear SVM
:width: 85%

The polished version preserves separating hyperplane, margins, and support vectors for a linear SVM. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

The key idea of a linear SVM is to construct a decision hyperplane
```{math}
\mathbf{w}^T\mathbf{x}+b =0.
```
The vector $\mathbf{w}$ is normal to the hyperplane and $b$ is an intercept.
For separable training data, the SVM chooses the separating hyperplane with the
largest geometric margin. A soft-margin SVM permits violations while
penalizing them.


## Linear SVM

For training pairs $(\mathbf{x}_j,y_j)$ with $y_j\in\{-1,+1\}$, the predicted
class is
```{math}
\widehat y(\mathbf{x})
=\operatorname{sign}\!\left(\mathbf{w}^T\mathbf{x}+b\right).
```

The signed functional margin of example $j$ is
```{math}
y_j\left(\mathbf{w}^T\mathbf{x}_j+b\right).
```
It is positive for a correctly classified point and negative for a
misclassified point.

The zero-one loss records classification error,
```{math}
\ell_{0/1}(y_j,\widehat y_j)
=
\begin{cases}
0, & y_j=\widehat y_j,\\
1, & y_j\neq\widehat y_j,
\end{cases}
```
but its discreteness makes direct optimization difficult.


## Linear SVM (continued)

For linearly separable data, the hard-margin primal problem is
```{math}
\underset{\mathbf{w},b}{\operatorname{minimize}}
\quad \frac{1}{2}\lVert\mathbf{w}\rVert_2^2
\qquad\text{subject to}\qquad
y_j(\mathbf{w}^T\mathbf{x}_j+b)\geq1
\quad (j=1,\ldots,m).
```
Because the margin width is $2/\lVert\mathbf{w}\rVert_2$, minimizing the norm
maximizes the margin under this normalization.

For overlapping classes, the soft-margin objective uses the convex hinge loss
$H(z)=\max(0,1-z)$:
```{math}
\underset{\mathbf{w},b}{\operatorname{minimize}}
\quad
\frac{1}{2}\lVert\mathbf{w}\rVert_2^2
+C\sum_{j=1}^m
\max\!\left[0,1-y_j(\mathbf{w}^T\mathbf{x}_j+b)\right].
```
The hyperparameter $C>0$ controls the tradeoff between a wide margin and
training-set violations. Hinge loss is a convex surrogate; it penalizes points
inside the margin as well as misclassified points.


## Nonlinear SVM

When a linear boundary is inadequate, we may map the input into a feature
space:
```{math}
\mathbf{x} \mapsto \Phi(\mathbf{x})
```
and learn a hyperplane there,
```{math}
f(\mathbf{x}) = \mathbf{w}^T \Phi(\mathbf{x})+b.
```
This can produce a nonlinear decision boundary in the original input space.


## Nonlinear SVM: example


**What the original figure plots.** It shows nonlinear feature map that makes circularly arranged classes linearly separable.

**What this is trying to convey.** A nonlinear feature map can turn a nonlinear boundary in input space into a hyperplane in feature space.

:::{figure} figures/15-support-vector-machines/SVM.png
:alt: Nonlinear feature map that makes circularly arranged classes linearly separable
:width: 90%

A nonlinear feature map can turn a nonlinear boundary in input space into a hyperplane in feature space.
:::

**Polished version.**

:::{figure} figures/15-support-vector-machines/redraw-SVM.png
:alt: Polished version of nonlinear feature map that makes circularly arranged classes linearly separable
:width: 90%

The polished version preserves nonlinear feature map that makes circularly arranged classes linearly separable. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Enriching the space:
```{math}
(x_1,x_2) \mapsto (z_1, z_2, z_3) := (x_1,x_2, x_1^2 + x_2^2)
```


## Kernel methods for SVM

Explicitly constructing a high-dimensional feature vector may be expensive.
The *kernel trick* works with feature-space inner products instead. At the
optimum, the normal vector has the representation
```{math}
\mathbf{w}
=\sum_{j=1}^m\alpha_j y_j\Phi(\mathbf{x}_j),
```
so the decision function becomes
```{math}
f(\mathbf{x})
=\sum_{j=1}^m\alpha_j y_j
K(\mathbf{x}_j,\mathbf{x})+b,
```
where
```{math}
K(\mathbf{x}_j, \mathbf{x}) = \Phi(\mathbf{x}_j) \cdot \Phi(\mathbf{x})
```
is the kernel. The soft-margin dual problem is
```{math}
\underset{\boldsymbol{\alpha}}{\operatorname{maximize}}
\quad
\sum_{j=1}^m\alpha_j
-\frac{1}{2}\sum_{i=1}^m\sum_{j=1}^m
\alpha_i\alpha_j y_i y_j K(\mathbf{x}_i,\mathbf{x}_j)
```
subject to
```{math}
0\leq\alpha_j\leq C,
\qquad
\sum_{j=1}^m\alpha_jy_j=0.
```
Only observations with $\alpha_j>0$ contribute to the decision function; these
are the support vectors.


## Kernel functions

A valid kernel computes an inner product in some feature space without requiring
that feature map to be constructed explicitly. Some kernels correspond to
finite-dimensional feature spaces and others to infinite-dimensional ones.

Commonly used kernel functions:

- Radial basis function (RBF):
  $K(\mathbf{x}_j,\mathbf{x})=\exp[-\gamma
  \lVert\mathbf{x}_j-\mathbf{x}\rVert_2^2]$, with $\gamma>0$

- Polynomial kernel:
  $K(\mathbf{x}_j,\mathbf{x})=(\gamma\mathbf{x}_j^T\mathbf{x}+r)^N$
  for parameters that make the kernel positive semidefinite


## Classification trees

The decision tree is a hierarchical construct that seeks optimal ways to split the data to provide robust classification and regression.

**Pros**:

- interpretable results that can be graphically displayed, making them easy to interpret even for non-experts

- can accommodate numerical and categorical predictors, although an
  implementation must define how candidate categorical splits are encoded

- requires little feature scaling and can capture nonlinear interactions

**Limitations:**

- individual trees can be unstable and prone to overfitting;
- axis-aligned splits may approximate smooth boundaries inefficiently; and
- predictive performance is often improved by ensembles, at the cost of some
  interpretability.


## Classification trees (continued)


```{math}
\text{data } \; \{ \mathbf{x}_j \in \mathbb{R}^n, \; j\in Z:= \{1,2,\dots. ,m\} \}
```

```{math}
\text{labels } \; \{ y_j \in \mathcal{Y}, \; j\in Z\}
```


**Algorithm**:

1. For each feature, scan candidate thresholds (or categorical partitions).

2. Select the feature and split that give the largest reduction in a chosen
   node-impurity measure, such as Gini impurity or entropy.

3. Repeat the procedure recursively for the resulting child nodes.

Growing until every leaf is pure or contains one observation generally
overfits. Practical trees stop using depth, sample-count, or impurity criteria,
or grow a larger tree and prune it using validation data.


## Classification trees: iris example


**What the original figure plots.** It shows candidate feature thresholds for an Iris classification tree.

**What this is trying to convey.** The tree selects a feature and threshold that produce the best reduction in node impurity.

:::{figure} figures/15-support-vector-machines/tree1.png
:alt: Candidate feature thresholds for an Iris classification tree
:width: 90%

The tree selects a feature and threshold that produce the best reduction in node impurity.
:::

**Polished version.**

:::{figure} figures/15-support-vector-machines/redraw-tree1.png
:alt: Polished version of candidate feature thresholds for an Iris classification tree
:width: 90%

The polished version preserves candidate feature thresholds for an Iris classification tree. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Each variable $x_1$ through $x_4$ is scanned over to determine the best split of data which retains the best correct classification of the labeled data in the split. The variable $x_3$ = 2.35 provides the first split in the data for building a classification tree. This is followed by a second split at $x_4$ = 1.75 and a third split at $x_3$ = 4.95.


## Classification trees: iris example (continued)


**What the original figure plots.** It shows decision-tree partition of the Iris feature space.

**What this is trying to convey.** Successive tree splits partition the Iris feature space into class-prediction regions.

:::{figure} figures/15-support-vector-machines/tree2.png
:alt: Decision-tree partition of the Iris feature space
:width: 85%

Successive tree splits partition the Iris feature space into class-prediction regions.
:::

**Polished version.**

:::{figure} figures/15-support-vector-machines/redraw-tree2.png
:alt: Polished version of decision-tree partition of the Iris feature space
:width: 85%

The polished version preserves decision-tree partition of the Iris feature space. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

## Classification trees: cats vs dogs example


**What the original figure plots.** It shows classification tree for the cat and dog feature example.

**What this is trying to convey.** A tree classifies the cat and dog example through a sequence of feature-threshold decisions.

:::{figure} figures/15-support-vector-machines/tree3.png
:alt: Classification tree for the cat and dog feature example
:width: 85%

A tree classifies the cat and dog example through a sequence of feature-threshold decisions.
:::

**Polished version.**

:::{figure} figures/15-support-vector-machines/redraw-tree3.png
:alt: Polished version of classification tree for the cat and dog feature example
:width: 85%

The polished version preserves classification tree for the cat and dog feature example. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

---

*Migration source: `04_Machine_Learning/Clustering2.tex` from the archived Overleaf export.*
