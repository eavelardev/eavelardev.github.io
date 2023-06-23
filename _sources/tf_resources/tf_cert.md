# TensorFlow Developer Certificate

**Web:** : [www.tensorflow.org/certificate](https://www.tensorflow.org/certificate)

Candidate Handbook

[TF_Certificate_Candidate_Handbook.pdf](https://www.tensorflow.org/extras/cert/TF_Certificate_Candidate_Handbook.pdf)

Last Updated: August 12, 2021

[Setting_Up_TF_Developer_Certificate_Exam.pdf](https://www.tensorflow.org/extras/cert/Setting_Up_TF_Developer_Certificate_Exam.pdf)

Last Updated: Jan 5 2023

Practice training TensorFlow models
* [Image classification](https://www.tensorflow.org/tutorials/images/classification)
* [Word embeddings](https://www.tensorflow.org/text/guide/word_embeddings)

## Skills checklist

### (1) TensorFlow developer skills

- [x] Know how to program in Python, resolve Python issues, and compile and run Python programs
in PyCharm.

- [x] Know how to find information about TensorFlow APIs, including how to find guides and API
references on tensorflow.org.

- [x] Know how to debug, investigate, and solve error messages from the TensorFlow API.

- [x] Know how to search beyond tensorflow.org, as and when necessary, to solve your TensorFlow
questions.

- [x] Know how to create ML models using TensorFlow where the model size is reasonable for the
problem being solved.

```python
inputs = layers.Input(shape=(...))
x = ...(inputs)

model = tf.keras.Model(inputs, x)
```

- [x Know how to save ML models and check the model file size.

```python
model.save('my_model.h5')
```

- [x] Understand the compatibility discrepancies between different versions of TensorFlow

### (2) Building and training neural network models using TensorFlow 2.x

- [x] Use TensorFlow 2.x.

- [x] Build, compile and train machine learning (ML) models using TensorFlow.

Huber loss is less sensitive to outliers in data than squared-error loss.
Huber Loss minimize sensitivity to outliers.
Huber is used for time series.

```python
model.compile(optimizer=<>,
              loss=<>,
              metrics=['<>'])

history = model.fit(x, y)
history = model.fit(dataset, epochs=<>, steps_per_epoch=<>)

loss, accuracy = model.evaluate(x, y)
loss, accuracy = model.evaluate(dataset)
```

- [x] Preprocess data to get it ready for use in a model.

```python
x_train, x_test = x_train.astype('float32'), x_test.astype('float32')
x_train, x_test = x_train / 255.0, x_test / 255.0

# or

layers.Rescaling(1/255, input_shape=(img_width, img_height, 3))

def reshape_and_normalize(images):
    images = np.expand_dims(images, axis=-1) # for Conv
    images = images / 255.
    return images

# Time Series
train_mean = train_df.mean()
train_std = train_df.std()
train_df = (train_df - train_mean) / train_std

val_df = (val_df - train_mean) / train_std
test_df = (test_df - train_mean) / train_std
df_std = (df - train_mean) / train_std

wv = df['wv (m/s)']
wv[wv == -9999.0] = 0.0
```

- [x] Use models to predict results.

```python
predictions = model.predict(x)

predictions = tf.nn.sigmoid(predictions)
predictions = tf.where(predictions < 0.5, 0, 1)

predictions = tf.nn.softmax(predictions)
predictions = [class_names[np.argmax(prediction) for prediction in predictions]]
```

- [x] Build sequential models with multiple layers.

```python
model = tf.keras.Sequential([
    layers.<>(..., input_shape=<>),
    layers.<>(...)
])
```

- [x] Build and train models for binary classification.

```python
# 2 classes
layers.Dense(1) # Output
model.compile(optimizer=<>,
              loss=losses.BinaryCrossentropy(from_logits=True),
              metrics=['<>'])
```

- [x] Build and train models for multi-class categorization.

```python
# n classes
layers.Dense(n) # Output
model.compile(optimizer=<>,
                loss=losses.SparseCategoricalCrossentropy(from_logits=True),
                loss=losses.CategoricalCrossentropy(from_logits=True),
                metrics=['<>'])
```

- [x] Plot loss and accuracy of a trained model.

```python
    acc = history.history['accuracy']
    val_acc = history.history['val_accuracy']

    loss = history.history['loss']
    val_loss = history.history['val_loss']

    plt.figure(figsize=(8, 8))
    
    plt.subplot(1, 2, 1)
    plt.plot(acc, label='Training Accuracy')
    plt.plot(val_acc, label='Validation Accuracy')
    plt.legend(loc='lower right')
    plt.title('Training y Validation Accuracy')

    plt.subplot(1, 2, 2)
    plt.plot(loss, label='Training loss')
    plt.plot(val_loss, label='Validation loss')
    plt.legend(loc='upper right')
    plt.title('Trainind and Validation Loss')
````

- [x] Identify strategies to prevent overfitting, including augmentation and dropout.

- [x] Use pretrained models (transfer learning).

```python
base_model = tf.keras.applications.MobileNetV2(input_shape=(...),
                                               include_top=False)

preprocess_input = tf.keras.applications.mobilenet_v2.preprocess_input

inputs = layers.Input(shape=(...))
# x = data_augmentation(inputs)
x = preprocess_input(inputs)
x = base_model(x, training=False)
x = layers.GlobalAveragePooling2D()(x)
# x = layers.Dropout(0.2)(x)
outputs = layers.Dense(1)(x)
model = tf.keras.Model(inputs=inputs, outputs=outputs)

base_model.trainable = True

fine_tune_at = 100

for layer in base_model.layers[:fine_tune_at]:
    layer.trainable = False
```

- [x] Extract features from pre-trained models

- [x] Ensure that inputs to a model are in the correct shape.

- [x] Ensure that you can match test data to the input shape of a neural network.

- [x] Ensure you can match output data of a neural network to specified input shape for test data.

```python
def export_model(model):
    model = tf.keras.Sequential([model, keras.layers.Activation('softmax')])
    model.compile(optimizer='adam', 
                    loss=keras.losses.SparseCategoricalCrossentropy(from_logits=False),
                    metrics=['accuracy'])
    return model
```

- [x] Understand batch loading of data

- [x] Use callbacks to trigger the end of training cycles.

```python
class myCallback(tf.keras.callbacks.Callback):
    def on_epoch_end(self, epoch, logs={}):
        if(logs['accuracy'] > <>):
            print("\nReached 99.9% accuracy so cancelling training!")
            self.model.stop_training = True

callbacks = myCallback()

callbacks = [
    keras.callbacks.EarlyStopping(monitor="val_loss", patience=5),
    keras.callbacks.ModelCheckpoint("tfmodel.h5", save_best_only=True)
]

model.fit(..., callbacks=[callbacks])

model = tf.keras.models.load_model("tfmodel.h5")
```

- [x] Use datasets from different sources

```python
dataset_url = 'https://storage.googleapis.com/mledu-datasets/cats_and_dogs_filtered.zip'
dataset_file = tf.keras.utils.get_file('cat_and_dogs.zip', origin=dataset_url, extract=True)
data_path = os.path.join(os.path.dirname(dataset_file), 'cats_and_dogs_filtered')

train_dir = os.path.join(data_path, 'train')
...

train_dataset = tf.keras.utils.image_dataset_from_directory(
    train_dir,
    ...
```

- [x] Use datasets in different formats, including json and csv.

```python
df = pd.read_csv(csv_path)

def parse_data_from_file(filename):

    sentences = []
    labels = []

    with open(filename, 'r') as csvfile:
        reader = csv.reader(csvfile)
        next(reader)

        for row in reader:
            sentences.append(row[1])
            labels.append(row[0])

    return sentences, labels
```

- [x] Use datasets from `tf.data.datasets`.

```python
(x_train, y_train), (x_test, y_test) = tf.keras.datasets.cifar10.load_data()

ds = tfds.load('mnist', split='train', shuffle_files=True)
```

### (3) Image classification

- [x] Define Convolutional neural networks with `Conv2D` and `pooling layers`.

```python
    layers.Conv2D(32, 3, activation='relu', input_shape=(28, 28, 1)),
    layers.MaxPooling2D(),
    ...
    layers.Flatten(),
    layers.Dense(512, activation='relu'),
```

- [x] Build and train models to process real-world image datasets.

- [x] Understand how to use convolutions to improve your neural network.

- [x] Use real-world images in different shapes and sizes..

- [x] Use `image augmentation` to prevent overfitting.

```python
data_augmentation = tf.keras.Sequential([
    layers.RandomFlip('horizontal'),
    layers.RandomZoom(0.2),
    layers.RandomRotation(0.2)
])

inputs = layers.Input(shape=<>)
x = data_augmentation(inputs)
x = preprocess_input(x)
...
````

- [x] Use `ImageDataGenerator`

```python
train_datagen = ImageDataGenerator(rescale=1/255)

train_generator = train_datagen.flow_from_directory(directory=base_dir,
                                                    target_size=(150, 150),
                                                    batch_size=10,
                                                    class_mode='binary')

train_dataset = tf.keras.utils.image_dataset_from_directory(
    base_dir,
    label_mode='binary',
    batch_size=10,
    image_size=(150, 150)
).cache().prefetch(tf.data.AUTOTUNE)
```

- [x] Understand how ImageDataGenerator labels images based on the directory structure.

### (4) Natural language processing (NLP)

- [x] Build natural language processing systems using TensorFlow.

- [x] Prepare text to use in TensorFlow models

```python
def custom_standardization(input_data):
    text = tf.strings.lower(input_data)
    text = tf.strings.regex_replace(text, '<br />', ' ')
    text = tf.strings.regex_replace(text, '[%s]' % re.escape(string.punctuation), ' ')
    # Remove non-ASCII characters
    text = tf.strings.regex_replace(text, r'[^\x00-\x7F]+', ' ')
    for word in stopwords:
        text = tf.strings.regex_replace(text, rf'\b{word}\b', '')
    return text
```

- [x] Build models that identify the category of a piece of text using `binary categorization`

- [x] Build models that identify the category of a piece of text using `multi-class categorization`

- [x] Use `word embeddings` in your TensorFlow model.

- [x] Use `LSTMs` in your model to classify text for either `binary` or `multi-class categorization`.

- [x] Add `RNN` and `GRU` layers to your model.

- [x] Use `RNNS`, `LSTMs`, `GRUs` and `CNNs` in models that work with text.

- [x] Train `LSTMs` on existing text to `generate text` (such as songs and poetry)

### (5) Time series, sequences and predictions

- [x] `Train`, `tune` and use `time series`, `sequence` and `prediction models`.

- [x] Train models to predict values for both `univariate` and `multivariate time series`.

- [x] `Prepare data` for `time series` learning.

- [x] Understand `Mean Absolute Error (MAE)` and how it can be used to evaluate accuracy of
sequence models

- [x] Use `RNNs` and `CNNs` for `time series`, `sequence` and `forecasting models`.

- [x]  Identify when to use `trailing` versus `centred windows`.

- [x] Use `TensorFlow for forecasting`.

- [x] `Prepare features` and `labels`.

```python
ds = ds.map(lambda w: (w[:-1], w[-1]))

delay = None
data = df[:-delay]
targets = temperature[delay:],

train_dataset = tf.keras.utils.timeseries_dataset_from_array(
    data, targets, sequence_length,
```

- [x] Identify and compensate for `sequence bias`.

You should put a number equal or greater than the total number of elements for better shuffling

```python
dataset = dataset.shuffle(buffer_size=10)
```

- [x] `Adjust the learning rate dynamically` in `time series`, `sequence` and `prediction models`.
