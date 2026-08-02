# Machine Learning: Neural Networks

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- express a feed-forward neural network as a composition of affine maps and
  activation functions;
- explain why nonlinear activations are essential for expressive deep models;
- use the chain rule to derive a simple backpropagation gradient; and
- distinguish full-batch, stochastic, and mini-batch gradient descent.

## Introduction


**What the original figure plots.** It shows schematic of a multilayer feed-forward neural network.

**What this is trying to convey.** A feed-forward network composes parameterized transformations from input to output.

:::{figure} figures/16-neural-networks/NN1.png
:alt: Schematic of a multilayer feed-forward neural network
:width: 90%

A feed-forward network composes parameterized transformations from input to output.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-NN1.png
:alt: Polished version of schematic of a multilayer feed-forward neural network
:width: 90%

The polished version preserves schematic of a multilayer feed-forward neural network. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

For training examples $(\mathbf{x}_k,\mathbf{y}_k)$, a neural network
$F(\mathbf{x};\Theta)$ is trained by minimizing a data loss plus an optional
regularization penalty:
```{math}
\widehat{\Theta}
=\underset{\Theta}{\operatorname{argmin}}\,
\left[
\frac{1}{n}\sum_{k=1}^n
\ell\!\left(F(\mathbf{x}_k;\Theta),\mathbf{y}_k\right)
+\lambda R(\Theta)
\right].
```
The parameter set $\Theta$ contains all weights and biases.


## Linear and nonlinear mappings


- Linear mapping: three weight layers
```{math}
\mathbf{x}^{(1)} = \mathbf{A}_1 \mathbf{x}
```

```{math}
\mathbf{x}^{(2)} = \mathbf{A}_2 \mathbf{x}^{(1)}
```

```{math}
\mathbf{y} = \mathbf{A}_3 \mathbf{x}^{(2)}
```

```{math}
\mathbf{y} = \mathbf{A}_3 \mathbf{A}_2 \mathbf{A}_1 \mathbf{x}
```
 General M-layer network:
```{math}
\mathbf{y} = \mathbf{A}_M \mathbf{A}_{M-1} \dots \mathbf{A}_2 \mathbf{A}_1 \mathbf{x}
```
Without nonlinear activations, all of these layers collapse to a single linear
map $\mathbf{A}_{\mathrm{eff}}=\mathbf{A}_M\cdots\mathbf{A}_1$.

- Nonlinear mapping
```{math}
\mathbf{x}^{(1)} = f_1(\mathbf{A}_1 \mathbf{x})
```

```{math}
\mathbf{x}^{(2)} = f_2 (\mathbf{A}_2 \mathbf{x}^{(1)})
```

```{math}
\mathbf{y} = f_3 (\mathbf{A}_3 \mathbf{x}^{(2)})
```
 General M-layer network:
```{math}
\mathbf{h}^{(0)}=\mathbf{x},
\qquad
\mathbf{h}^{(\ell)}
=f_\ell\!\left(\mathbf{A}_\ell\mathbf{h}^{(\ell-1)}
+\mathbf{b}_\ell\right),
\qquad
\ell=1,\ldots,M,
```
with network output $\mathbf{y}=\mathbf{h}^{(M)}$.


## A one-layer network


**What the original figure plots.** It shows one-layer classifier applied to cat and dog feature vectors.

**What this is trying to convey.** A one-layer classifier maps an input feature vector directly to a class score.

:::{figure} figures/16-neural-networks/perceptron1.png
:alt: One-layer classifier applied to cat and dog feature vectors
:width: 85%

A one-layer classifier maps an input feature vector directly to a class score.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-perceptron1.png
:alt: Polished version of one-layer classifier applied to cat and dog feature vectors
:width: 85%

The polished version preserves one-layer classifier applied to cat and dog feature vectors. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Recall cats and dogs dataset, with the feature space provided by PCA of wavelet-transformed images.\
NN output:
```{math}
y \in \{\text{dog},\text{cat}\}
\quad\text{or, equivalently,}\quad
y\in\{+1,-1\}.
```


## A one-layer network (continued)

Consider the easiest mapping: a linear mapping between the input images $\mathbf{x}_j \in \mathbb{R}^n$ and the output layer:


**What the original figure plots.** It shows matrix equation relating training inputs, weights, and labels.

**What this is trying to convey.** For a linear one-layer model, the training relation can be written as Y = A X.

:::{figure} figures/16-neural-networks/NN_eq1.png
:alt: Matrix equation relating training inputs, weights, and labels
:width: 75%

For a linear one-layer model, the training relation can be written as Y = A X.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-NN_eq1.png
:alt: Polished version of matrix equation relating training inputs, weights, and labels
:width: 75%

The polished version preserves matrix equation relating training inputs, weights, and labels. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

$\mathbf{X}$ is a dog or cat image,\
$\mathbf{Y}$ is the corresponding label.\

:::{note}
The goal is to determine the weight matrix (or row vector) $\mathbf{A}$.
:::

The simplest solution is found using the pseudo-inverse:
```{math}
\mathbf{A} = \mathbf{Y} \mathbf{X}^\dagger
```
An $\ell_1$ penalty produces a LASSO-type sparse linear classifier.


## Least-squares and LASSO solutions


**What the original figure plots.** It shows least-squares and LASSO weight patterns for a one-layer classifier.

**What this is trying to convey.** Weights learned by least squares (left) and LASSO (right).

:::{figure} figures/16-neural-networks/NN_1layer1.png
:alt: Least-squares and LASSO weight patterns for a one-layer classifier
:width: 90%

Weights learned by least squares (left) and LASSO (right).
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-NN_1layer1.png
:alt: Polished version of least-squares and LASSO weight patterns for a one-layer classifier
:width: 90%

The polished version preserves least-squares and LASSO weight patterns for a one-layer classifier. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Weightings of the matrix $\mathbf{A}$.\
**Left**: least-square regression (the pseudo-inverse); **right**: LASSO.


## Least-squares and LASSO solutions (continued)


**What the original figure plots.** It shows withheld-data classifications from least-squares and LASSO models.

**What this is trying to convey.** Predictions on withheld observations for least-squares and LASSO classifiers.

:::{figure} figures/16-neural-networks/NN_1layer2.png
:alt: Withheld-data classifications from least-squares and LASSO models
:width: 90%

Predictions on withheld observations for least-squares and LASSO classifiers.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-NN_1layer2.png
:alt: Polished version of withheld-data classifications from least-squares and LASSO models
:width: 90%

The polished version preserves withheld-data classifications from least-squares and LASSO models. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Classification of withheld data.\
(a), (b): least-square regression (the pseudo-inverse);\
(c), (d): LASSO.\
Dogs are more often misclassified than cats.


## Non-linear mapping

Nonlinear transformation
```{math}
\mathbf{y} = f (\mathbf{A}, \mathbf{x})
```
 $f(\cdot)$ is an [activation]{style="color: blue"} or [transfer]{style="color: blue"} function.

Common activation functions:

- $f(x) = x$ - linear

- $f(x) = \biggl\{ \; \begin{matrix}  0 \; \; \;  x \le 0 \\
      1 \; \; \;  x > 0
      \end{matrix}$ - binary step

- $f(x) = \frac{1}{1+\exp(-x)}$ - logistic (soft step)

- $f(x) = \tanh (x)$ - TanH

- $f(x) = \biggl\{ \; \begin{matrix}  0 \; \; \;  x \le 0 \\
      x \; \; \;  x > 0
      \end{matrix}$ - rectified linear unit (ReLU)


## Non-linear mapping: example


**What the original figure plots.** It shows training and withheld-set results for a nonlinear cat and dog classifier.

**What this is trying to convey.** A nonlinear activation improves flexibility, but withheld-set performance is the relevant generalization check.

:::{figure} figures/16-neural-networks/NN_catsdog2.png
:alt: Training and withheld-set results for a nonlinear cat and dog classifier
:width: 90%

A nonlinear activation improves flexibility, but withheld-set performance is the relevant generalization check.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-NN_catsdog2.png
:alt: Polished version of training and withheld-set results for a nonlinear cat and dog classifier
:width: 90%

The polished version preserves training and withheld-set results for a nonlinear cat and dog classifier. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

In this example, the tanh network reaches 100% training accuracy and 85%
accuracy on the withheld set. The gap is evidence of imperfect generalization;
training accuracy is not cross-validation accuracy.


## Backpropagation

The [backpropagation]{style="color: blue"} algorithm ([backprop]{style="color: blue"}) exploits the compositional nature of NNs in order to frame an optimization problem for determining the weights of the network.


**What the original figure plots.** It shows computational graph for a two-stage scalar neural network.

**What this is trying to convey.** Backpropagation applies the chain rule from the loss backward through this computational graph.

:::{figure} figures/16-neural-networks/backprop.png
:alt: Computational graph for a two-stage scalar neural network
:width: 80%

Backpropagation applies the chain rule from the loss backward through this computational graph.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-backprop.png
:alt: Polished version of computational graph for a two-stage scalar neural network
:width: 80%

The polished version preserves computational graph for a two-stage scalar neural network. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

Input-output relationship for this single node, one hidden layer network:
```{math}
y=g(z,b) = g(f(x,a), b)
```


$f(\cdot)$ and $g(\cdot)$ are activation functions,\
$a$ and $b$ are weighting constants.


## Loss function

Input-output relationship: $y=g(z,b) = g(f(x,a), b)$

For a target value $y_0$, define the squared-error loss
```{math}
E = \frac{1}{2}(y_0-y)^2.
```


- $y_0$ - correct output

- $y$ - NN approximation to the output

- $a$ and $b$ are optimized to reduce the error

The chain rule gives
```{math}
\frac{\partial E}{\partial a}
=-(y_0-y)\frac{dy}{dz}\frac{dz}{da}.
```
The derivative need not be zero during training. Backpropagation efficiently
evaluates these chain-rule derivatives; an optimizer then uses them to update
the parameters.


## Backpropagation algorithm

Backprop results in an iterative, gradient descent update rule:
```{math}
a_{k+1} = a_k - \eta \left.\frac{\partial E}{\partial a}\right|_{a_k,b_k}
```

```{math}
b_{k+1} = b_k - \eta \left.\frac{\partial E}{\partial b}\right|_{a_k,b_k}
```


$\eta>0$ is the [learning rate]{style="color: blue"}.

Backpropagation training loop:

1.  NN is specified along with a labeled training set.

2.  The initial weights of the network are set to random values (not zeros!)

3.  The training data is run through the network to produce an output $y$. The derivatives with respect to each network weight are then computed using backprop formulas.

4.  The optimizer updates the weights using the gradients and learning rate.

5.  Go to step 3, repeat until convergence.


## Example: Backpropagation for linear activation function

Consider linear activation function:
```{math}
f(\xi, \alpha) = g(\xi, \alpha) = \alpha \xi
```
 Then we have
```{math}
z = ax
```

```{math}
y = bz
```
 Gradients:
```{math}
\frac{\partial E}{\partial a} =- (y_0-y) \frac{d y}{d z} \frac{dz}{da} = -(y_0-y) \cdot b \cdot x
```

```{math}
\frac{\partial E}{\partial b} =- (y_0-y) \frac{d y}{d b} = -(y_0-y) z = -(y_0-y) \cdot a \cdot x
```


Knowing $x$, $y$, and current $a$, $b$, we can evaluate each derivative and update $a$ and $b$.


## Backpropagation (continued)

For a network with M hidden layers $z_1$ to $z_m$ and the first connection weight $a$ between $x$ and $z_1$, the gradient looks like:
```{math}
\frac{\partial E}{\partial a} =- (y_0-y) \frac{d y}{d z_m} \frac{dz_m}{dz_{m-1}} \cdots \frac{dz_2}{dz_{1}} \frac{dz_1}{da}
```
 Update step:
```{math}
\mathbf{w}_{k+1} = \mathbf{w}_k - \eta \nabla_{\mathbf{w}} E(\mathbf{w}_k),
```
 where vector $\mathbf{w}$ contains all the elements of the matrices $\mathbf{A}_j$.\
In component form, for $j$ component of vector $\mathbf{w}$:
```{math}
w_{k+1}^j = w_k^j - \eta
\left.\frac{\partial E}{\partial w^j}\right|_{\mathbf{w}_k}.
```


The cost of a dense layer is proportional to its number of weights:
$O(n_{\mathrm{in}}n_{\mathrm{out}})$ per example for a forward pass, with a
comparable backpropagation cost. It scales as $n^2$ only when both layer widths
scale as $n$.


## Gradient descent

The aim of gradient descent is to reduce the training objective as a function
of all network parameters:
```{math}
\underset{\Theta}{\operatorname{minimize}}\;E(\Theta).
```


For a NN, $\mathbf{A}_j$ are the connectivity matrices between the layers:
```{math}
f(\mathbf{x}) = f(\mathbf{x}, \mathbf{A}_1, \mathbf{A}_2, \dots, \mathbf{A}_M)
```


For a squared-error regression model, one possible objective is the mean
squared error
```{math}
E(\Theta)
=\frac{1}{n}\sum_{k=1}^n
\left\lVert F(\mathbf{x}_k;\Theta)-\mathbf{y}_k\right\rVert_2^2.
```


Gradient descent:
```{math}
\Theta_{t+1}=\Theta_t-\eta\nabla_\Theta E(\Theta_t),
```
where $\eta$ is the learning rate.


## Stochastic gradient descent

Error sum over all data:
```{math}
E(\Theta) = \frac{1}{n}\sum_{k=1}^n E_k(\Theta),
```
 where $E_k$ is the error of each data point $k$ (the whole training set includes $n$ points).
```{math}
E_k(\Theta)
=\left\lVert F(\mathbf{x}_k;\Theta)-\mathbf{y}_k\right\rVert_2^2.
```
[Stochastic gradient descent:]{style="color: blue"}
```{math}
\Theta_{t+1}=\Theta_t-\eta\nabla_\Theta E_{k_t}(\Theta_t),
```
where the example index $k_t$ is sampled at iteration $t$.


## Stochastic gradient descent (continued)

Pros:

- each update is inexpensive and can begin before evaluating the whole data set

- noisy gradients can help optimization move through flat regions and shallow
  local basins

Cons:

- the updates are noisy and usually require learning-rate scheduling and
  multiple passes; convergence to a global minimum is not guaranteed

Using a [mini-batch]{style="color: blue"} $B_t$ of several observations:
```{math}
\Theta_{t+1}
=\Theta_t-\eta\,\frac{1}{|B_t|}
\sum_{k\in B_t}\nabla_\Theta E_k(\Theta_t).
```


## Deep Convolutional NN (DCNN)


**What the original figure plots.** It shows architecture of a deep convolutional neural network.

**What this is trying to convey.** A convolutional network combines learned local filters, nonlinear activations, and later classification layers.

:::{figure} figures/16-neural-networks/DCNN.png
:alt: Architecture of a deep convolutional neural network
:width: 95%

A convolutional network combines learned local filters, nonlinear activations, and later classification layers.
:::

**Polished version.**

:::{figure} figures/16-neural-networks/redraw-DCNN.png
:alt: Polished version of architecture of a deep convolutional neural network
:width: 95%

The polished version preserves architecture of a deep convolutional neural network. The variables, geometry, and comparison are unchanged; the crop, contrast, scale, and line clarity have been standardized for the web.
:::

---

*Migration source: `04_Machine_Learning/NN1.tex` from the archived Overleaf export.*
