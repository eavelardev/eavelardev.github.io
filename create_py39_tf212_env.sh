ENV_NAME='mldev'

conda remove -n $ENV_NAME --all -y
conda create -n $ENV_NAME python=3.9 -y
eval "$(conda shell.bash hook)"
conda activate $ENV_NAME

# tf212 -> https://github.com/tensorflow/docs/blob/master/site/en/install/pip.md

conda install -c nvidia cuda-nvcc=11.8 -y
conda install -c conda-forge cudatoolkit=11.8.0 -y
pip install nvidia-cudnn-cu11==8.6.0.163
ln -sf /lib/x86_64-linux-gnu/libtinfo.so.6 $CONDA_PREFIX/lib/libtinfo.so.6

CUDNN_PATH_VAL='$(dirname $(python -c "import nvidia.cudnn;print(nvidia.cudnn.__file__)"))'
LD_LIBRARY_PATH_VAL='$LD_LIBRARY_PATH:$CONDA_PREFIX/lib/:$CUDNN_PATH/lib:/usr/lib/wsl/lib'
ENV_VARS_DIR="$CONDA_PREFIX/etc/conda/activate.d"
ENV_VARS="$ENV_VARS_DIR/env_vars.sh"

mkdir -p $ENV_VARS_DIR
echo "CUDNN_PATH=$CUDNN_PATH_VAL" >> $ENV_VARS
echo "export LD_LIBRARY_PATH=$LD_LIBRARY_PATH_VAL" >> $ENV_VARS
echo 'export XLA_FLAGS=--xla_gpu_cuda_data_dir=$CONDA_PREFIX' >> $ENV_VARS

pip install \
'grpcio-status<1.49' \
'jupyter-book==0.13.2' \
tensorflow-data-validation \
apache-beam[interactive] \
python-snappy \
db-dtypes \
tqdm \
kfp \
scikit-learn \
seaborn \
tensorflow-datasets \
google-cloud-aiplatform \
opencv-python \
beautifulsoup4 \
sewar \
ghp-import \
yattag \
tabulate

conda activate $ENV_NAME

printf '\n'
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
printf '\n'
