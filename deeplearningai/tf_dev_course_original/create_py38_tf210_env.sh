ENV_NAME='py38_tf210'

conda remove -n $ENV_NAME --all -y
conda create -n $ENV_NAME python=3.8 -y
eval "$(conda shell.bash hook)"
conda activate $ENV_NAME

# tf29 -> https://github.com/tensorflow/docs/blob/4cd004c/site/en/install/pip.md

conda install -c conda-forge cudatoolkit=11.2 cudnn=8.1.0 -y
ln -sf /lib/x86_64-linux-gnu/libtinfo.so.6 $CONDA_PREFIX/lib/libtinfo.so.6

LD_LIBRARY_PATH_VAL='$LD_LIBRARY_PATH:$CONDA_PREFIX/lib/'
ENV_VARS_DIR="$CONDA_PREFIX/etc/conda/activate.d"
ENV_VARS="$ENV_VARS_DIR/env_vars.sh"

mkdir -p $ENV_VARS_DIR
echo "export LD_LIBRARY_PATH=$LD_LIBRARY_PATH_VAL" > $ENV_VARS

pip install \
tensorflow==2.10 \
pandas \
matplotlib \
scipy \
gdown \
ipykernel

conda activate $ENV_NAME

printf '\n'
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"
printf "\nconda activate $ENV_NAME\n\n"
