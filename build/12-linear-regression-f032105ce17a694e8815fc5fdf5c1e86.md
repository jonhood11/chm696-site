# Machine Learning: Linear Regression

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Machine Learning: Main Categories


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

  - overdetermined optimization problem: $$\text{argmin}(||A\mathbf{x} -\mathbf{b} ||_2 + \lambda g(\mathbf{x}))$$

  - underdetermined problem: $$\text{argmin}\; g(\mathbf{x}) \text{  subject to  } ||A\mathbf{x} -\mathbf{b}||_2  \le \epsilon$$

  where $g(x)$ is [penalization]{style="color: blue"}, $\lambda$ is a [penalty parameter]{style="color: blue"}.

- For over- and under-determined linear systems, a choice of constraint or penalty, also known as [regularization]{style="color: blue"}, must be made.


## Regression and Model Selection

Regression to *nonlinear models* takes the more general form: $$\text{argmin}(f(A,\mathbf{x},b) + \lambda g(\mathbf{x})) \; \text{or}$$ $$\text{argmin}\; g(\mathbf{x}) \text{  subject to  } f(A,\mathbf{x},b) \le \epsilon$$ These problems are often solved using gradient descent.


## Regression and Model Selection (continued)

Over-fitting and under-fitting


:::{note} Original-slide figure pending review
The original lecture refers to `overfitting.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Over-fitting and under-fitting

Regression and curve fitting

- Regression attempts to estimate the relationship between variables using statistical tools.

- Generic regression: $$\mathbf{Y} = f(\mathbf{X}, \mathbf{\beta})$$ $f$ is the regression function (or model).\
  The goal is to find the parameters $\mathbf{\beta}$.

:::{note}
Curve fitting

- data: $(x_1, y_1), \; (x_2, y_2), \; (x_3, y_3), \; \dots, \; (x_n, y_n)$

- line fit: $f(x) = \beta_1 x + \beta_2$

- This is analogous to the linear regression model: $\mathbf{Y} = f(\mathbf{A}, \mathbf{\beta}) = \beta_1\mathbf{X} + \beta_2$
:::


## Regression and curve fitting

Goodness of fit Line fit: $$f(x) = \beta_1 x + \beta_2$$ Error of the fit $E_k$ : $$f(x_k)= y_k + E_k$$\
Error metrics:

- Maximum Error $l_\infty$: $$E_\infty(f) = \text{max}_{1<k<n}|f(x_k) - y_k|$$

- Mean Absolute Error $l_1$: $$E_1(f) = \frac{1}{n}\sum_{k=1}^n |f(x_k) - y_k|$$

- Least-squares Error $l_2$: $$E_2(f) = \left( \frac{1}{n}\sum_{k=1}^n |f(x_k) - y_k|^2 \right )^{1/2}$$


## Goodness of fit

Error metrics $E_\infty(f) = \text{max}_{1<k<n}|f(x_k) - y_k|$\
$E_1(f) = \frac{1}{n}\sum_{k=1}^n |f(x_k) - y_k|$\
$E_2(f) = \left( \frac{1}{n}\sum_{k=1}^n |f(x_k) - y_k|^2 \right )^{1/2}$


:::{note} Original-slide figure pending review
The original lecture refers to `error_metrics.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Error metrics

Least-squares fit

Least-squares fitting to linear models has critical advantages over other norms and metrics because the error can be computed analytically - recall discussions in QR and SVD decompositions.

Linear fit: $f(x) = \beta_1 x + \beta_2$\
Function to minimize: $E_2(f) = \sum_{k=1}^n |f(x_k) - y_k|^2 = \sum_{k=1}^n |\beta_1 x_k + \beta_2 - y_k|^2$\
Minimization conditions: $$\frac{\partial E_2}{\partial \beta_1} = 0 \Rightarrow \sum_{k=1}^n 2(\beta_1 x_k + \beta_2 - y_k)x_k = 0$$ $$\frac{\partial E_2}{\partial \beta_2} = 0 \Rightarrow \sum_{k=1}^n 2(\beta_1 x_k + \beta_2 - y_k) = 0$$

This results in a 2x2 linear system: $$\begin{pmatrix}
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
\end{pmatrix}$$


## Least-squares fit

Data linearization

Consider fitting data to the exponential function: $f(x) = y = \beta_2 \exp(\beta_1x)$.\
If minimization conditions are applied directly, the result is a 2x2 nonlinear system. While it can be solved with gradient descent or other iterative procedures, it is less straightforward.\
Instead, we can [linearize]{style="color: blue"} the fit function by transformation: $$Y = \ln{y}$$ $$X = x$$ $$\beta_3 = \ln{\beta_2}$$

Taking the natural log of the fit function: $$\ln{y} = \ln(\beta_2 \exp(\beta_1x)) = \ln\beta_2 + \ln(\exp(\beta_1 x)) = \beta_3 + \beta_1x \Rightarrow Y = \beta_1X + \beta_3$$

So, curve fit for the exponential function becomes a linear fitting problem: $$(x_i, y_i) \rightarrow (x_i, \ln y_i) = (X_i,Y_i)$$


## Data linearization

Nonlinear regression

- Polynomial and exponential curve fitting admit analytical best-fit least-squares solutions.

- However, how to fit other functions to data sets? E.g., $f(x) = \beta_1 \cos(\beta_2x + \beta_3) + \beta_4$

- General nonlinear curve fitting leads to a system of nonlinear equations.

<!-- -->

- Data set: $(x_1, y_1), \; (x_2, y_2), \; (x_3, y_3), \; \dots, \; (x_n, y_n)$

- Fitting function: $f(x) = f(x,\beta)$, with $m<n$ coefficients $\beta$.

- Root-mean square error: $E_2(\beta) = \sum_{k=1}^n (f(x_k, \beta) - y_k)^2$

- Error can be minimized by solving $m\times m$ system obtained from equations: $\frac{\partial E_2}{\partial \beta_j} = 0, \; j = 1,2,\dots, m.$

- This results in [nonlinear]{style="color: blue"} set of equations: $\sum_{k=1}^n (f(x_k, \beta) - y_k)\frac{\partial f}{\partial \beta_j} = 0, \; j = 1,2,\dots, m.$

- To solve such systems, we have to use *iterative schemes* with a good *initial guess*.


## Nonlinear regression

Gradient decent for non-linear regression


:::{note} Original-slide figure pending review
The original lecture refers to `gradient_decent.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Gradient decent for non-linear regression

Over- and under-determined systems

- Consider (again) a linear system $A\mathbf{x} = \mathbf{b}$.

- Solution $\mathbf{x}$ contains the [loadings]{style="color: blue"} or [leverage scores]{style="color: blue"} that relate the relationship between the input data A and outcome data **b**.

- Recall, the pseudo-inverse $A^\dagger$ provides the solution to the linear problem that gives the minimum least-squares fit ($l_2$ norm) for the overdetermined system and has the smallest $l_2$ norm for the underdetermined system.

- Now, we want to explore other possible constraints on the solution $x$.


## Over- and under-determined systems

Over-determined systems


:::{note} Original-slide figure pending review
The original lecture refers to `overdetermined.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Over-determined systems


- The original least-squares-optimization problem: $$\hat{\mathbf{x}} = \text{argmin} ||A\mathbf{x}- \mathbf{b}||_2$$

- Now we add a constraint on the solution: $$\hat{\mathbf{x}} = \text{argmin} ||A\mathbf{x}- \mathbf{b}||_2 + \lambda_1||x||_1 + \lambda_2 ||x||_2$$ Parameters $\lambda_1$ and $\lambda_2$ control [penalization]{style="color: blue"} of the $l_1$ and $l_2$ norms.

- Norm $l_1$ promotes sparsity, such that many of the loadings of the solution x are zero.


## Over-determined systems (continued)

Sparsity of loadings subject to penalties using different norms


:::{note} Original-slide figure pending review
The original lecture refers to `l1_norm_sparsity.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Sparsity of loadings subject to penalties using different norms

Over-determined systems: the role of $l_1$ norm


:::{note} Original-slide figure pending review
The original lecture refers to `overdetermined2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Over-determined systems: the role of $l_1$ norm

Under-determined systems


:::{note} Original-slide figure pending review
The original lecture refers to `underdetermined.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Under-determined systems


- Pseudo-inverse gives the following solution: $\text{min}||\mathbf{x}||_2 \text{   subject to   } A\mathbf{x} = \mathbf{b}$

- A more general constraint solution: $\text{min}(\lambda_1 ||\mathbf{x}||_1 + \lambda_2 ||\mathbf{x}||_2 ) \text{   subject to   } A\mathbf{x} = \mathbf{b}$

- Norm $l_1$ promotes sparsity here as well.


:::{note} Original-slide figure pending review
The original lecture refers to `underdetermined2.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Under-determined systems (continued)

Linear regression of a simple noisy model

- Consider a simple model system set (a parabola with added noise): $f(x) = x^2 + N(0, \sigma)$

- 100 realizations of such parabolas are shown.


:::{note} Original-slide figure pending review
The original lecture refers to `parabola.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Linear regression of a simple noisy model


- The goal is to *discover* the best model for the data given.

- We can try to frame this problem as a linear system $A\mathbf{x} = \mathbf{b}$, where A contains a polynomial of 19th degree (20 terms).


:::{note} Original-slide figure pending review
The original lecture refers to `20-polynomial.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Linear regression of a simple noisy model (continued)

least-squares fit


:::{note} Original-slide figure pending review
The original lecture refers to `parabola_pinv.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

- Despite the low-level of noise added, the loadings found by the least-squares-fit are significantly different from one another!

- Thus, each noise realization produces a very different model to explain the data.

- The variability of the regression results is problematic for model selection.


## Linear regression of a simple noisy model: least-squares fit

Linear regression of a simple noisy model: different regression algorithms


:::{note} Original-slide figure pending review
The original lecture refers to `parabola_different_regressions.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

## Linear regression of a simple noisy model: different regression algorithms

Linear regression of a simple noisy model: different regularization procedures

- \(a\) least-square regression via pseudo-inverse ($\lambda_1 = 0$, $\lambda_2 = 0$)

- \(b\) QR algorithm ($\lambda_1 = 0$, $\lambda_2 = 0$)

- \(c\) LASSO ($\lambda_1 > 0$, $\lambda_2 = 0$)

- \(d\) LASSO with different $\lambda$ realization

- \(e\) Robust fit (weighted least-squares fit)

- \(f\) Ridge regression ($\lambda_1 = 0$, $\lambda_2 > 0$)


:::{note} Original-slide figure pending review
The original lecture refers to `parabola_errors.png`. The file is preserved in the private Overleaf archive and will be redrawn or published after its reuse rights are verified.
:::

- \(a\) Errors of different schemes

- (b,c) Error using least-square regression as a function of increasing degree of polynomial.

---

*Migration source: `04_Machine_Learning/Linear_Regression.tex` from the archived Overleaf export.*
