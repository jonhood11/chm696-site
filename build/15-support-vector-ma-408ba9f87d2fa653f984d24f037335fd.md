# Machine Learning: Support Vector Machines

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Supervised learning: Support vector machines (SVM)


:::{note} Original-slide figure pending review
The original lecture refers to `SVM1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

The key idea of the linear SVM method is to construct a hyperplane 
$$
\mathbf{w}\cdot\mathbf{x}+b =0
$$
 The hyperplane is parameterized with vector $\mathbf{w}$ and constant $b$.\
**Objectives:**\
1. to optimize a decision line that makes the fewest labeling errors for the data,\
2. to optimize the largest margin between the data.


## Linear SVM

Linear hyperplane for separation 
$$
\mathbf{w}\cdot\mathbf{x}+b =0
$$


Given classification labels $\mathbf{y}_j \in \{\pm 1\}$, 
$$
\mathbf{y}_j ( \mathbf{w}\cdot\mathbf{x}+b ) = \text{sign}(\mathbf{w}\cdot\mathbf{x}+b) = \biggl\{ \begin{matrix}
    +1  \text{  magenta ball} \\
    -1  \text{  green ball}
    \end{matrix}
$$


We define a loss function 
$$
l(\mathbf{y}_j, \bar{\mathbf{y}}_j) = l(\mathbf{y}_j, \text{sign}(\mathbf{w}\cdot\mathbf{x}+b)) = \biggl\{ \begin{matrix}
    0  \; \text{ if } \mathbf{y}_j = \text{sign}(\mathbf{w}\cdot\mathbf{x}+b) \\
    +1 \; \text{ if } \mathbf{y}_j \ne \text{sign}(\mathbf{w}\cdot\mathbf{x}+b)
    \end{matrix}
$$


Simply speaking, 
$$
l(\mathbf{y}_j, \bar{\mathbf{y}}_j) = \biggl\{ \begin{matrix}
    0  \; \text{ if data is correctly labeled}  \\
    +1 \; \text{ if if data is incorrectly labeled}
    \end{matrix}
$$


## Linear SVM (continued)

**Objectives:**\
1. to minimize a loss function,\
2. to make the margin as large as possible\
Linear SVM optimization problem: 
$$
\text{argmin}_{\mathbf{w}, b} \sum_{j=1}^m l(\mathbf{y}_j, \bar{\mathbf{y}}_j) + 1/2 ||\mathbf{w}||^2  \; \text{subject to } \; \text{min}_j |\mathbf{x}_j \cdot \mathbf{w} | = 1
$$


However, this optimization problem is hard to work with because of the discrete nature of the loss function (0 or 1).\
Solution: use Hinge loss function $H(z) = \text{max}(0,1-z)$, which counts the number of errors in a linear way: 
$$
\text{argmin}_{\mathbf{w}, b} \sum_{j=1}^m H(\mathbf{y}_j, \bar{\mathbf{y}}_j) + 1/2 ||\mathbf{w}||^2  \; \text{subject to } \; \text{min}_j |\mathbf{x}_j \cdot \mathbf{w} | = 1
$$


## Nonlinear SVM

We already saw that linear classifiers are of limited value.\
To circumvent this problem, the SVM maps the data into a nonlinear, higher-dimensional space: 
$$
\mathbf{x} \mapsto \Phi(\mathbf{x})
$$
 $\Phi(\mathbf{x})$ is the new *observable* of the data.\
SVM then learns the hyperplanes that optimally split the data in a new space: 
$$
f(\mathbf{x}) = \mathbf{w}\cdot \Phi(\mathbf{x})+b,
$$
 with corresponding labels $\mathbf{y}_j \in \{\pm 1\}$ for each point $f(\mathbf{x}_j)$.\
The ability of SVM to embed in higher-dimensional nonlinear spaces makes it one of the most successful machine learning algorithms developed.


## Nonlinear SVM: example


:::{note} Original-slide figure pending review
The original lecture refers to `SVM.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

Enriching the space: 
$$
(x_1,x_2) \mapsto (z_1, z_2, z_3) := (x_1,x_2, x_1^2 + x_2^2)
$$


## Kernel methods for SVM

**Problem**: The SVM method of building nonlinear classifiers by enriching in higher dimensions leads to a computationally intractable optimization.\
**Solution**: the kernal trick\
We represent the $\mathbf{w}$ vector as a combination of nonlinear observable functions with weights $\alpha_j$: 
$$
\mathbf{w} = \sum_{j=1}^m \alpha_j \Phi(\mathbf{x}_j)
$$


This results in: 
$$
f(\mathbf{x}) = \sum_{j=1}^m \alpha_j \Phi(\mathbf{x}_j) \cdot \Phi(\mathbf{x})+b
$$


The kernel function is defined as: 
$$
K(\mathbf{x}_j, \mathbf{x}) = \Phi(\mathbf{x}_j) \cdot \Phi(\mathbf{x})
$$


Then the optimization problem becomes: 
$$
\text{argmin}_{\mathbf{\alpha}, b} \sum_{j=1}^m H(\mathbf{y}_j, \bar{\mathbf{y}}_j) + 1/2 ||\sum_{j=1}^m \alpha_j \Phi(\mathbf{x}_j) ||^2  \; \text{subject to }
\text{min}_j |\mathbf{x}_j \cdot \mathbf{w} | = 1
$$


## Kernel functions

Effectively, the kernel function $K(\mathbf{x}_j, \mathbf{x})$ allows us to represent Taylor series expansions of a large (infinite) number of observables in a compact way.

Commonly used kernel functions:

- Radial basis functions (RBF): $K(\mathbf{x}_j, \mathbf{x}) = \exp(-\gamma ||\mathbf{x}_j - \mathbf{x}||^2 )$

- Polynomial kernel: $K(\mathbf{x}_j, \mathbf{x}) = (\mathbf{x}_j \cdot \mathbf{x} +1)^N$


## Classification trees

The decision tree is a hierarchical construct that seeks optimal ways to split the data to provide robust classification and regression.

**Pros**:

- interpretable results that can be graphically displayed, making them easy to interpret even for non-experts

- can handle numerical or categorical data equally well

- can be statistically validated so that the reliability of the model can be assessed

- perform well with large data sets

- The algorithms mirror human decision-making, making them more interpretable and useful.


## Classification trees (continued)


$$
\text{data } \; \{ \mathbf{x}_j \in \mathbb{R}^n, \; j\in Z:= \{1,2,\dots. ,m\} \}
$$
 
$$
\text{labels } \; \{ \mathbf{y}_j \in \{\pm 1 \}, \; j\in Z' \subset Z\}
$$


**Algorithm**:

1.  Scan through each component (feature) of vector $\mathbf{x}_j$ to find the value $x_j$ that gives the best labeling prediction for $\mathbf{y}_j$

2.  Compare the prediction accuracy for each split on the feature $x_j$. The feature giving the best segmentation of the data is selected as the split for the tree.

3.  With the two new branches of the tree created, this process is repeated on each branch.

The algorithm terminates once each individual data point is a unique cluster, aka *leaf*, on a new branch of the tree.


## Classification trees: iris example


:::{note} Original-slide figure pending review
The original lecture refers to `tree1.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

Each variable $x_1$ through $x_4$ is scanned over to determine the best split of data which retains the best correct classification of the labeled data in the split. The variable $x_3$ = 2.35 provides the first split in the data for building a classification tree. This is followed by a second split at $x_4$ = 1.75 and a third split at $x_3$ = 4.95.


## Classification trees: iris example (continued)


:::{note} Original-slide figure pending review
The original lecture refers to `tree2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Classification trees: cats vs dogs example


:::{note} Original-slide figure pending review
The original lecture refers to `tree3.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

---

*Migration source: `04_Machine_Learning/Clustering2.tex` from the archived Overleaf export.*
