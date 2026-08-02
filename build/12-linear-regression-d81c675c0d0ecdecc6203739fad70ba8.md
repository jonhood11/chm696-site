# Machine Learning: Linear Regression

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

After this lecture, you should be able to:

- place regression within the major categories of machine learning;
- formulate ordinary and regularized least-squares problems;
- distinguish residual norms, sum of squared errors, and root-mean-square
  error;
- explain underfitting, overfitting, and the role of regularization; and
- fit linear-in-parameter and nonlinear models with appropriate caveats.

## Machine-learning categories


- Supervised Learning

- Unsupervised Learning

- Semi-supervised Learning

- Reinforcement Learning

- Other Model Families


## Supervised Learning


:::{note}
Goal Learn a mapping from inputs $x$ to outputs $y$ using labeled data.
:::

:::{note}
Examples Predict house prices, classify images as cat/dog.\
:::

:::{note}
Models

- Linear Regression, Logistic Regression

- Support Vector Machines (SVMs)

- Decision Trees, Random Forests, Gradient Boosting

- Neural Networks
:::


## Unsupervised Learning


:::{note}
Goal Discover hidden patterns in unlabeled data.
:::

:::{note}
Examples Customer segmentation, dimensionality reduction.
:::

:::{note}
Models

- Clustering (k-means, DBSCAN, Gaussian mixture models)

- Dimensionality reduction (PCA, t-SNE, UMAP)

- Autoencoders
:::


## Semi-supervised Learning


:::{note}
Goal Use a mix of labeled + unlabeled data.
:::

:::{note}
Examples Text classification with limited labeled samples.
:::

:::{note}
Models

- Graph-based Methods

- Self-training

- Semi-supervised Neural Networks
:::


## Reinforcement Learning


:::{note}
Goal Learn policies by interacting with environments.
:::

:::{note}
Examples Game-playing agents (AlphaGo), robotics.
:::

:::{note}
Models

- Q-learning

- Policy Gradient Methods

- Deep Reinforcement Learning
:::


## Other Model Families

ML Model Families

- Linear Models

  - Assumes a linear relationship between features and target.

  - Examples: Linear regression, logistic regression, linear SVMs.

  - Pros: Simple, interpretable.

  - Cons: Limited in capturing complex relationships.

- Tree-based Models

  - Use decision rules in a tree structure.

  - Examples: Decision trees, random forests, gradient boosting (XGBoost, LightGBM, CatBoost).

  - Pros: Handle nonlinearities, work well on tabular data.

  - Cons: Less effective on high-dimensional raw data (e.g., images).

- Neural Networks / Deep Learning

  - Networks of layers that transform inputs into outputs via learned weights.

  - Examples: Feedforward networks; Convolutional neural networks (CNNs, for images); Recurrent neural networks (RNNs, for sequences); Transformers (for text, multimodal data)

  - Pros: Very flexible, state-of-the-art in vision, NLP, speech.

  - Cons: Require lots of data and computation.


## ML Model Families


- Probabilistic Models

  - Capture uncertainty and data distributions.

  - Examples: Naive Bayes, Hidden Markov models (HMMs), Gaussian processes

  - Pros: Interpretability, uncertainty quantification.

  - Cons: Scale poorly with high-dimensional data.

- Instance-based Models

  - Predict using similarities to training data.

  - Examples: k-nearest neighbors (kNN). Pros: Simple, non-parametric. Cons: Expensive for large datasets.


## ML Model Families (continued)

Regression and Model Selection

- ML $\Rightarrow$ optimization $\Rightarrow$ regression and model selection

- Curve fitting is the basic regression technique

- Polynomial and exponential fitting is analogous to solving the linear system $A\mathbf{x} = \mathbf{b}$

- If the model is unknown, optimization is used to select the best model. This results in either an

  - overdetermined optimization problem:
```{math}
\operatorname*{arg\,min}_{\mathbf x}
\left(\|A\mathbf{x}-\mathbf b\|_2^2+\lambda g(\mathbf x)\right)
```


  - underdetermined problem:
```{math}
\operatorname*{arg\,min}_{\mathbf x}g(\mathbf x)
\quad\text{subject to}\quad
\|A\mathbf x-\mathbf b\|_2\le\epsilon
```


  where $g(x)$ is [penalization]{style="color: blue"}, $\lambda$ is a [penalty parameter]{style="color: blue"}.

- Regularization is useful when a system is ill-conditioned, when coefficients
  are weakly identified, or when prior structure such as smoothness or sparsity
  is desired. It is not mandatory for every rectangular system.


## Regression and Model Selection

Regression to *nonlinear models* takes the more general form:
```{math}
\operatorname*{arg\,min}_{\mathbf x}
\left(f(A,\mathbf x,\mathbf b)+\lambda g(\mathbf x)\right)
```

```{math}
\operatorname*{arg\,min}_{\mathbf x}g(\mathbf x)
\quad\text{subject to}\quad f(A,\mathbf x,\mathbf b)\le\epsilon
```
 These problems are often solved using gradient descent.


## Regression and Model Selection (continued)

Over-fitting and under-fitting


```{figure} figures/12-linear-regression/overfitting.png
:alt: Model complexity illustrating underfitting, appropriate fit, and overfitting
:width: 80%

Underfitting, an appropriate model, and overfitting as model complexity increases.
```

## Over-fitting and under-fitting

Regression and curve fitting

- Regression attempts to estimate the relationship between variables using statistical tools.

- Generic regression:
```{math}
\mathbf{Y} = f(\mathbf{X}, \mathbf{\beta})
```
 $f$ is the regression function (or model).\
  The goal is to find the parameters $\mathbf{\beta}$.

:::{note}
Curve fitting

- data: $(x_1, y_1), \; (x_2, y_2), \; (x_3, y_3), \; \dots, \; (x_n, y_n)$

- line fit: $f(x) = \beta_1 x + \beta_2$

- This is analogous to the linear regression model: $\mathbf{Y} = f(\mathbf{A}, \mathbf{\beta}) = \beta_1\mathbf{X} + \beta_2$
:::


## Regression and curve fitting

Goodness of fit Line fit:
```{math}
f(x) = \beta_1 x + \beta_2
```
 Error of the fit $E_k$ :
```{math}
f(x_k)= y_k + E_k
```
\
Error metrics:

- Maximum Error $l_\infty$:
```{math}
E_\infty(f)=\max_{1\leq k\leq n}|f(x_k)-y_k|
```


- Mean Absolute Error $l_1$:
```{math}
E_1(f) = \frac{1}{n}\sum_{k=1}^n |f(x_k) - y_k|
```


- Least-squares Error $l_2$:
```{math}
E_2(f) = \left( \frac{1}{n}\sum_{k=1}^n |f(x_k) - y_k|^2 \right )^{1/2}
```


```{figure} figures/12-linear-regression/error_metrics.png
:alt: Comparison of common residual error metrics
:width: 80%

Different norms emphasize different features of the residual distribution.
```

## Error metrics

Least-squares fit

Least-squares fitting to linear models has critical advantages over other norms and metrics because the error can be computed analytically - recall discussions in QR and SVD decompositions.

Linear fit: $f(x) = \beta_1 x + \beta_2$\
Define the sum of squared errors
$\operatorname{SSE}=\sum_{k=1}^n|f(x_k)-y_k|^2$.
Minimizing SSE is equivalent to minimizing RMSE, but the two quantities are not
numerically identical.
Minimization conditions:
```{math}
\frac{\partial E_2}{\partial \beta_1} = 0 \Rightarrow \sum_{k=1}^n 2(\beta_1 x_k + \beta_2 - y_k)x_k = 0
```

```{math}
\frac{\partial E_2}{\partial \beta_2} = 0 \Rightarrow \sum_{k=1}^n 2(\beta_1 x_k + \beta_2 - y_k) = 0
```


This results in a 2x2 linear system:
```{math}
\begin{pmatrix}
\sum_{k=1}^n x_k^2 & \sum_{k=1}^n x_k \\
\sum_{k=1}^n x_k & n
\end{pmatrix}
\begin{pmatrix}
    \beta_1 \\
    \beta_2
\end{pmatrix} =
\begin{pmatrix}
\sum_{k=1}^n x_k y_k \\
\sum_{k=1}^n y_k
\end{pmatrix}
```


## Least-squares fit

Data linearization

Consider fitting data to the exponential function: $f(x) = y = \beta_2 \exp(\beta_1x)$.\
If minimization conditions are applied directly, the result is a 2x2 nonlinear system. While it can be solved with gradient descent or other iterative procedures, it is less straightforward.\
If every $y_i>0$, we can linearize the model by the transformation:
```{math}
Y = \ln{y}
```

```{math}
X = x
```

```{math}
\beta_3 = \ln{\beta_2}
```


Taking the natural log of the fit function:
```{math}
\ln{y} = \ln(\beta_2 \exp(\beta_1x)) = \ln\beta_2 + \ln(\exp(\beta_1 x)) = \beta_3 + \beta_1x \Rightarrow Y = \beta_1X + \beta_3
```


So, curve fit for the exponential function becomes a linear fitting problem:
```{math}
(x_i, y_i) \rightarrow (x_i, \ln y_i) = (X_i,Y_i)
```

:::{warning}
Least squares after taking logarithms minimizes errors in $\ln y$, not errors
in $y$. It is most appropriate for a multiplicative/log-normal error model and
is not equivalent to nonlinear least squares in the original units.
:::


## Data linearization

Nonlinear regression

- Polynomial and exponential curve fitting admit analytical best-fit least-squares solutions.

- However, how to fit other functions to data sets? E.g., $f(x) = \beta_1 \cos(\beta_2x + \beta_3) + \beta_4$

- General nonlinear curve fitting leads to a system of nonlinear equations.

<!-- -->

- Data set: $(x_1, y_1), \; (x_2, y_2), \; (x_3, y_3), \; \dots, \; (x_n, y_n)$

- Fitting function: $f(x) = f(x,\beta)$, with $m<n$ coefficients $\beta$.

- Sum of squared errors:
  $E(\beta)=\sum_{k=1}^n(f(x_k,\beta)-y_k)^2$.

- Error can be minimized by solving $m\times m$ system obtained from equations: $\frac{\partial E_2}{\partial \beta_j} = 0, \; j = 1,2,\dots, m.$

- This results in [nonlinear]{style="color: blue"} set of equations: $\sum_{k=1}^n (f(x_k, \beta) - y_k)\frac{\partial f}{\partial \beta_j} = 0, \; j = 1,2,\dots, m.$

- To solve such systems, we have to use *iterative schemes* with a good *initial guess*.


## Nonlinear regression

Gradient descent for nonlinear regression


```{figure} figures/12-linear-regression/gradient_decent.png
:alt: Gradient descent trajectory for a nonlinear regression objective
:width: 80%

Gradient-based fitting updates parameters in the direction of decreasing loss.
```

## Gradient descent for nonlinear regression

Over- and under-determined systems

- Consider (again) a linear system $A\mathbf{x} = \mathbf{b}$.

- The solution $\mathbf x$ contains fitted model coefficients. These
  coefficients are not leverage scores; leverage is a property of rows of the
  design matrix.

- Recall, the pseudo-inverse $A^\dagger$ provides the solution to the linear problem that gives the minimum least-squares fit ($l_2$ norm) for the overdetermined system and has the smallest $l_2$ norm for the underdetermined system.

- Now, we want to explore other possible constraints on the solution $x$.


## Over- and under-determined systems

Over-determined systems


```{figure} figures/12-linear-regression/overdetermined.png
:alt: Geometry of an overdetermined linear system
:width: 80%

An overdetermined system generally has a residual even at its least-squares solution.
```

## Over-determined systems


- The original least-squares-optimization problem:
```{math}
\hat{\mathbf{x}}
=\operatorname*{arg\,min}_{\mathbf x}\|A\mathbf{x}-\mathbf b\|_2^2
```


- Now we add a constraint on the solution:
```{math}
\hat{\mathbf{x}}
=\operatorname*{arg\,min}_{\mathbf x}
\left(
\|A\mathbf{x}-\mathbf b\|_2^2
+\lambda_1\|\mathbf x\|_1
+\lambda_2\|\mathbf x\|_2^2
\right)
```
 Parameters $\lambda_1$ and $\lambda_2$ control [penalization]{style="color: blue"} of the $l_1$ and $l_2$ norms.

- Norm $l_1$ promotes sparsity, such that many of the loadings of the solution x are zero.


## Over-determined systems (continued)

Sparsity of loadings subject to penalties using different norms


```{figure} figures/12-linear-regression/l1_norm_sparsity.png
:alt: Geometry of L1 and L2 regularization constraints
:width: 80%

The corners of an L1 constraint make sparse solutions more likely.
```

## Sparsity of loadings subject to penalties using different norms

Over-determined systems: the role of $l_1$ norm


```{figure} figures/12-linear-regression/overdetermined2.png
:alt: Effect of L1 regularization on an overdetermined solution
:width: 80%

L1 regularization can set some fitted coefficients exactly to zero.
```

## Over-determined systems: the role of $l_1$ norm

Under-determined systems


```{figure} figures/12-linear-regression/underdetermined.png
:alt: Geometry of an underdetermined linear system
:width: 80%

An underdetermined consistent system has a family of exact solutions.
```

## Under-determined systems


- For a consistent underdetermined system, the pseudoinverse solves
  $\min\|\mathbf x\|_2$ subject to $A\mathbf x=\mathbf b$.

- A regularized alternative is
  $\min(\lambda_1\|\mathbf x\|_1+\lambda_2\|\mathbf x\|_2^2)$ subject to
  $A\mathbf x=\mathbf b$.

- Norm $l_1$ promotes sparsity here as well.


```{figure} figures/12-linear-regression/underdetermined2.png
:alt: Regularized selection among underdetermined solutions
:width: 80%

A norm penalty selects one solution from an underdetermined solution set.
```

## Under-determined systems (continued)

Linear regression of a simple noisy model

- Consider synthetic data
  $y_i=x_i^2+\varepsilon_i$ with
  $\varepsilon_i\sim\mathcal N(0,\sigma^2)$.

- 100 realizations of such parabolas are shown.


```{figure} figures/12-linear-regression/parabola.png
:alt: Noisy realizations of data generated from a parabola
:width: 80%

Synthetic parabolic data with additive noise.
```

## Linear regression of a simple noisy model


- The goal is to *discover* the best model for the data given.

- We can try to frame this problem as a linear system $A\mathbf{x} = \mathbf{b}$, where A contains a polynomial of 19th degree (20 terms).


```{figure} figures/12-linear-regression/20-polynomial.png
:alt: Polynomial design matrix with twenty basis functions
:width: 80%

A high-degree polynomial basis creates a flexible but potentially unstable regression model.
```

## Linear regression of a simple noisy model (continued)

least-squares fit


```{figure} figures/12-linear-regression/parabola_pinv.png
:alt: High-degree polynomial fits obtained with a pseudoinverse
:width: 80%

Unregularized high-degree least squares can vary strongly between noise realizations.
```

- Despite the low level of added noise, the high-degree least-squares
  coefficients differ greatly among realizations.

- Thus, each noise realization produces a very different model to explain the data.

- The variability of the regression results is problematic for model selection.


## Linear regression of a simple noisy model: least-squares fit

Linear regression of a simple noisy model: different regression algorithms


```{figure} figures/12-linear-regression/parabola_different_regressions.png
:alt: Comparison of fitted parabolas from several regression and regularization methods
:width: 80%

Regression algorithms and regularizers produce different coefficient patterns and fitted curves.
```

## Linear regression of a simple noisy model: different regression algorithms

Linear regression of a simple noisy model: different regularization procedures

- \(a\) least-square regression via pseudo-inverse ($\lambda_1 = 0$, $\lambda_2 = 0$)

- \(b\) the same unregularized least-squares objective solved by QR
  ($\lambda_1 = 0$, $\lambda_2 = 0$)

- \(c\) LASSO ($\lambda_1 > 0$, $\lambda_2 = 0$)

- \(d\) LASSO with different $\lambda$ realization

- \(e\) Robust fit (weighted least-squares fit)

- \(f\) Ridge regression ($\lambda_1 = 0$, $\lambda_2 > 0$)


```{figure} figures/12-linear-regression/parabola_errors.png
:alt: Regression error versus fitting method and polynomial degree
:width: 80%

Training and prediction errors reveal the effect of model complexity and regularization.
```

- \(a\) Errors of different schemes

- (b,c) Error using least-square regression as a function of increasing degree of polynomial.

## Homework for this lecture

### Existing course project

The noisy-spectrum fitting project below is embedded from
[Project 1 ideas](../assignments/project-01.md).

:::{include} ../assignments/project-01.md
:start-after: ## Fitting noisy spectral signal
:end-before: ## Determining the best model for the spectral signal
:filename: false
:::

---

*Migration source: `04_Machine_Learning/Linear_Regression.tex` from the archived Overleaf export.*
