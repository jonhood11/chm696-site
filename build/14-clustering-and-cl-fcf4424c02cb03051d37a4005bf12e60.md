# Machine Learning: Clustering and Classification

:::{admonition} Course-material provenance
:class: dropdown
This page was migrated from the CHM 696 course materials developed by Jonathan Hood and Lyudmila Slipchenko. Equations and examples remain under editorial review during the Fall 2026 website migration.
:::

## Learning goals

By the end of this lecture, you should be able to:

- distinguish supervised classification from unsupervised clustering;
- explain how feature construction affects a classification problem;
- formulate k-means, Gaussian-mixture, and linear-discriminant objectives; and
- identify the assumptions and limitations of each method.

## Feature selection and data mining


- Many data-mining and machine-learning problems benefit from constructing a
  lower-dimensional feature space that preserves the distinctions relevant to
  the task.

- Sometimes the feature space can be found in an unsupervised fashion by an algorithm like PCA.

- Sometimes the feature space can be explicitly constructed by expert knowledge and/or correlations among the data.


:::{figure} figures/14-clustering-and-classification/iris_dataset.png
:alt: Scatter plots and distributions of measurements in the Iris data set
:width: 90%

The Iris data set illustrates how a small collection of biological features can
separate species.
:::

Fisher iris data set: simple biological features are sufficient to show that the data has distinct, quantifiable differences between the species.


## Distinguishing images of cats and dogs


:::{figure} figures/14-clustering-and-classification/cat_dog.png
:alt: Example images from the cat and dog data set
:width: 90%

Representative cat and dog images used in the classification example.
:::

- Provided: 80 images of dogs and 80 images of cats.

- Our goal is to construct a [feature space]{style="color: blue"} where automated classification of these images can be efficiently computed.

- We will attempt to use the SVD to extract the dominant correlations among the images.


## Cats vs dogs: SVD decomposition


```python
# Extract dog and cat images.
dogdata_mat = io.loadmat(os.path.join("..", "DATA", "dogData.mat"))
catdata_mat = io.loadmat(os.path.join("..", "DATA", "catData.mat"))
dog = dogdata_mat["dog"]
cat = catdata_mat["cat"]

# Combine the images as columns, center every pixel across the images, and
# compute the SVD.
CD = np.concatenate((dog, cat), axis=1)
CD_centered = CD - CD.mean(axis=1, keepdims=True)
u, s, vT = np.linalg.svd(CD_centered, full_matrices=False)
```


## Cats vs dogs: principal components


:::{figure} figures/14-clustering-and-classification/dog_vs_cat_svd.png
:alt: First four image features obtained from an SVD of cat and dog images
:width: 90%

First four features generated from the SVD of the 160 images.
:::


## Cats vs dogs: projection on principal components


:::{figure} figures/14-clustering-and-classification/dogs_vs_cats_vectors.png
:alt: Cat and dog images projected onto principal-component coordinates
:width: 85%

The second and third component scores provide some separation between the cat
and dog images.
:::


## Wavelets: a smarter way to represent images


- Wavelets are an extension of Fourier analysis (stay tuned!)

- Wavelets provide a powerful tool for encoding and compressing images.

- SVD decomposition of the (same) images in a wavelet representation has sharper features.


:::{figure} figures/14-clustering-and-classification/dogs_vs_cats_wavelet.png
:alt: Dominant SVD features after representing cat and dog images with wavelets
:width: 90%

Dominant features obtained after transforming the images to a wavelet
representation.
:::

## Cats vs dogs: feature space


:::{figure} figures/14-clustering-and-classification/dogs_cats_histogram.png
:alt: Histograms of cat and dog scores on dominant SVD modes
:width: 85%

Distribution of dog (blue) and cat (red) scores on the first four dominant SVD
modes.
:::


:::{figure} figures/14-clustering-and-classification/dogs_vs_cats_feature_space.png
:alt: Dogs and cats projected into a two-dimensional feature space
:width: 85%

Dog (green) and cat (magenta) images projected into feature space.
:::


## Supervised versus unsupervised learning


:::{figure} figures/14-clustering-and-classification/supervised_vs_unsupervised.png
:alt: Comparison of supervised and unsupervised learning workflows
:width: 90%

Supervised methods learn from labeled examples; unsupervised methods seek
structure without training labels.
:::

[Supervised]{style="color: blue"} learning: the training data is labeled by a teacher/expert/supervisor. The model is used for prediction and classification of new data.\
[Unsupervised]{style="color: blue"} learning: no training labels are given. The goal itself may be to discover patterns in the data so that feature engineering or feature extraction can be used to build an appropriate model.


## Mathematical formalism

Domain (all possible data)
```{math}
D \subset \mathbb{R}^n
```
 Data collected in domain
```{math}
D' \subset D
```
 The goal of classification is to build a classifier labeling all data in $D$ given data from $D'$.


## Unsupervised learning

Input
```{math}
\text{data } \; \{ \mathbf{x}_j \in \mathbb{R}^n, \; j\in Z:= \{1,2,\dots. ,m\} \}
```
 Output
```{math}
\text{cluster assignments } \; \{ y_j \in \{1,\ldots,k\}, \; j\in Z\}
```


The goal of clustering is to infer useful group assignments $y_j$ from the
features without using training labels.


## Supervised learning

Input
```{math}
\text{data } \; \{ \mathbf{x}_j \in \mathbb{R}^n, \; j\in Z:= \{1,2,\dots. ,m\} \}
```

```{math}
\text{training labels } \; \{ y_j \in \mathcal{Y}, \; j\in Z\}
```


Output
```{math}
\text{predicted label } \; \hat y \in \mathcal{Y}
\quad\text{for a new input }\mathbf{x}\in D
```


The goal of supervised classification is to learn a rule from labeled training
examples and use it to predict labels for new examples. Learning from a mixture
of labeled and unlabeled training examples is called *semi-supervised learning*.


## Iris example


:::{figure} figures/14-clustering-and-classification/iris_dataset.png
:alt: Measurements and species labels in the Iris data set
:width: 90%

The Iris example has 150 labeled samples from three species.
:::

- Data: $\mathbf{x}_j$ = sepal length, sepal width, petal length, petal width.

- Labels: $\mathbf{y}_j$ = setosa, versicolor, virginica.

- Sample: $|D'|=150$ irises: 50 setosa, 50 versicolor, and 50 virginica.

- Domain: $D$ is the set of possible irises from these three species that the
  model is intended to classify.


## Cats vs dogs example


- Data: $\mathbf{x}_j$ is a $64\times64$ image represented by 4096 pixel values.

- Labels: $\mathbf{y}_j$ = dog, cat = 1, -1.

- Sample: $|D'|=160$ images: 80 dogs and 80 cats.

- Domain: $D$ is the set of cat and dog images that the model is intended to
  classify.


## Difficult cases for classification and regression


:::{figure} figures/14-clustering-and-classification/difficult_classification.png
:alt: Data configurations that are difficult to separate with simple classifiers
:width: 90%

Some data sets require nonlinear boundaries or richer feature representations.
:::

## Unsupervised learning: k-means clustering


:::{figure} figures/14-clustering-and-classification/k-means.png
:alt: Illustration of assigning points to the nearest k-means centroid
:width: 85%

The assignment step associates each observation with its nearest centroid.
:::

1.  Given initial values for k distinct means, compute the distance of each observation $\mathbf{x}_j$ to each of the k means.

2.  Label each observation as belonging to the nearest mean.

3.  Once labeling is completed, find the center-of-mass (mean) for each group of labeled points. These new means are used to start back at step 1 in the algorithm.


## Unsupervised learning: k-means clustering (continued)

This process is described by the following minimization process:
```{math}
\underset{\{C_c,\boldsymbol{\mu}_c\}_{c=1}^k}{\operatorname{argmin}}
\sum_{c=1}^{k}\sum_{\mathbf{x}_i\in C_c}
\lVert \mathbf{x}_i-\boldsymbol{\mu}_c\rVert_2^2,
```
where $C_c$ is the set of observations assigned to cluster $c$ and
$\boldsymbol{\mu}_c$ is their mean.


## Unsupervised learning: k-means clustering (continued)


:::{figure} figures/14-clustering-and-classification/k-means2.png
:alt: Successive assignment and centroid-update steps in k-means clustering
:width: 90%

K-means alternates between assigning points and updating cluster centroids.
:::

**Pros:**

- no supervision is required

- fast heuristic algorithm

**Cons:**

- favors compact, approximately spherical clusters and is sensitive to feature
  scaling and outliers

- results depend on the chosen number of clusters and can depend on the initial
  centroids because the objective is nonconvex


## Unsupervised hierarchical clustering


- [Agglomerative]{style="color: blue"}: bottom-up approach. Each data point $\mathbf{x}_j$ is its own cluster initially. The data is merged in pairs as one creates a hierarchy of clusters.

- [Divisive]{style="color: blue"}: top-down approach. All the observations $\mathbf{x}_j$ are initially part of a single giant cluster. The data is then recursively split into smaller and smaller clusters.

The results of hierarchical clustering might dramatically depend on distance metrics:

- Euclidean distance $|| \mathbf{x}_j - \mathbf{x}_k||_2$

- Squared euclidean distance $|| \mathbf{x}_j - \mathbf{x}_k||_2^2$

- Manhattan distance $|| \mathbf{x}_j - \mathbf{x}_k||_1$

- Maximum distance $|| \mathbf{x}_j - \mathbf{x}_k||_\infty$

- Mahalanobis distance $\sqrt{(\mathbf{x}_j - \mathbf{x}_k)^T C^{-1} (\mathbf{x}_j - \mathbf{x}_k) }$


## Dendrogram


:::{figure} figures/14-clustering-and-classification/dendrogram.png
:alt: Dendrogram produced by agglomerative hierarchical clustering
:width: 90%

A dendrogram records the sequence and dissimilarity levels of cluster merges.
:::

**Note:** dendrogram heights record the dissimilarity at which clusters merge,
as defined by the selected distance metric and linkage rule. They are not, in
general, pairwise distances between individual points.


## Unsupervised learning: Finite mixture models

The fundamental assumption of a finite mixture model is that the probability
density for an observation $\mathbf{x}$ is a weighted sum of component
densities:
```{math}
p(\mathbf{x}\mid\Theta)
= \sum_{c=1}^k \alpha_c\,p_c(\mathbf{x}\mid\theta_c),
\qquad
\alpha_c\geq 0,\quad \sum_{c=1}^k\alpha_c=1.
```
Here $p_c$ is the density of component $c$, $\alpha_c$ is its mixing weight,
and $k$ is the number of components.

**Objective:** Given observations $\{\mathbf{x}_j\}_{j=1}^n$, estimate the
mixing weights and component parameters.

**User input:** The number of components $k$ and the family of component
distributions.


## Gaussian mixture models (GMM)

In a Gaussian mixture model, every component is a multivariate normal
distribution characterized by a mean vector $\boldsymbol{\mu}_c$ and covariance
matrix $\boldsymbol{\Sigma}_c$:


```{math}
p(\mathbf{x}\mid\Theta)
= \sum_{c=1}^k \alpha_c\,
\mathcal{N}(\mathbf{x}\mid\boldsymbol{\mu}_c,\boldsymbol{\Sigma}_c).
```


## Maximum likelihood estimate (MLE)

The maximum-likelihood estimate chooses parameters that maximize the
log-likelihood:
```{math}
\widehat{\Theta}_{\mathrm{ML}}
=\underset{\Theta}{\operatorname{argmax}}\;\ell(\Theta),
\qquad
\ell(\Theta)=\sum_{j=1}^n\log p(\mathbf{x}_j\mid\Theta).
```
At an interior differentiable optimum, a zero gradient is a necessary
condition, but it is not by itself sufficient to identify the maximum.


## Expectation maximization (EM) algorithm


- Starting from an initial parameter estimate, the expectation step computes
  each observation's responsibility for component $c$:
```{math}
\tau_{jc}^{(t)}
= \frac{\alpha_c^{(t)}
\mathcal{N}(\mathbf{x}_j\mid\boldsymbol{\mu}_c^{(t)},\boldsymbol{\Sigma}_c^{(t)})}
{\sum_{r=1}^k\alpha_r^{(t)}
\mathcal{N}(\mathbf{x}_j\mid\boldsymbol{\mu}_r^{(t)},\boldsymbol{\Sigma}_r^{(t)})}.
```


- Update the parameters and mixture weights:
```{math}
\alpha_c^{(t+1)} =\frac{1}{n}\sum_{j=1}^n \tau_{jc}^{(t)}
```

```{math}
\boldsymbol{\mu}_c^{(t+1)}
= \frac{\sum_{j=1}^n \tau_{jc}^{(t)}\mathbf{x}_j}
{\sum_{j=1}^n \tau_{jc}^{(t)}}
```
The covariance update is
```{math}
\boldsymbol{\Sigma}_c^{(t+1)}
= \frac{\sum_{j=1}^n \tau_{jc}^{(t)}
\bigl(\mathbf{x}_j-\boldsymbol{\mu}_c^{(t+1)}\bigr)
\bigl(\mathbf{x}_j-\boldsymbol{\mu}_c^{(t+1)}\bigr)^T}
{\sum_{j=1}^n \tau_{jc}^{(t)}}.
```


## GMM application to the cat vs dog dataset


:::{figure} figures/14-clustering-and-classification/GMM_cat_dog.png
:alt: Gaussian mixture fit to cat and dog feature coordinates
:width: 85%

Gaussian-mixture fit to the second and fourth principal-component scores of the wavelet image data.
:::

## Supervised learning: Linear discriminants


:::{figure} figures/14-clustering-and-classification/cat_dog_again.png
:alt: Cat and dog observations in a two-dimensional feature space
:width: 85%

A supervised discriminant uses the known labels to choose a separating direction.
:::

Linear discriminant analysis (LDA) uses the class labels to select a projection
that separates class means relative to the spread within each class.


## Linear discriminant analysis

**The goal of LDA**: find a suitable projection that maximizes the distance between the inter-class data while minimizing the distance between intra-class data.

Between-class variance:
```{math}
S_B = (\boldsymbol{\mu}_2 - \boldsymbol{\mu}_1)
(\boldsymbol{\mu}_2 - \boldsymbol{\mu}_1)^T
```
 Within-class variance:
```{math}
S_W = \sum_{c=1}^2 \sum_{\mathbf{x}\in C_c}
(\mathbf{x} - \boldsymbol{\mu}_c)(\mathbf{x} - \boldsymbol{\mu}_c)^T
```


Objective: find a projection:
```{math}
\mathbf{w}_\star
= \underset{\mathbf{w}\neq\mathbf{0}}{\operatorname{argmax}}\,
\frac{\mathbf{w}^T S_B \mathbf{w}}
{\mathbf{w}^T S_W \mathbf{w}}.
```
This generalized Rayleigh quotient leads to
$S_B\mathbf{w}=\lambda S_W\mathbf{w}$. When $S_W$ is nonsingular, the two-class
solution is proportional to
$S_W^{-1}(\boldsymbol{\mu}_2-\boldsymbol{\mu}_1)$; singular or poorly
conditioned $S_W$ requires a pseudoinverse or regularization.


## Linear discriminant analysis: cats vs dogs


:::{figure} figures/14-clustering-and-classification/LDA_cat_dog.png
:alt: Linear and quadratic discriminant boundaries for cat and dog data
:width: 90%

Linear (LDA) and quadratic (QDA) discriminant boundaries for dog and cat feature scores.
:::

---

*Migration source: `04_Machine_Learning/Clustering.tex` from the archived Overleaf export.*
