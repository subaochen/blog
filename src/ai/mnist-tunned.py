
# coding: utf-8

# In[1]:


import tensorflow as tf
import numpy as np


# 导入数据

# In[2]:


from tensorflow.examples.tutorials.mnist import input_data
mnist = input_data.read_data_sets("MNIST_data/",one_hot=True)
print(mnist.train.images.shape,mnist.validation.images.shape,mnist.test.images.shape)


# 创建占位符

# In[3]:


x = tf.placeholder(tf.float32,[None,784],name="X")
y = tf.placeholder(tf.float32,[None,10],name="Y")
print(x.shape,y.shape)


# 创建变量
# w: [784,10]
# b: [10]

# In[4]:


W = tf.Variable(tf.random_normal([784,10]),name="W")
#W = tf.Variable(tf.zeros([784,10]),name="W")
#W = tf.Variable(tf.ones([784,10]),name="W")
b = tf.Variable(tf.zeros([10]),name="b")


# 前向计算[10]

# In[5]:


forward = tf.matmul(x,W) + b
print(forward.shape)


# softmax分类[10]

# In[6]:


pred = tf.nn.softmax(forward)
print(pred.shape)


# 定义损失函数：交叉熵

# In[7]:


loss_function = tf.reduce_mean(-tf.reduce_sum(y*tf.log(pred),reduction_indices=1))


# 定义训练超参数

# In[8]:


train_epochs = 50
batch_size = 100
total_batch = int(mnist.train.num_examples/batch_size)
display_step = 1
learning_rate = 0.01


# 选择优化器

# In[9]:


optimizer = tf.train.GradientDescentOptimizer(learning_rate).minimize(loss_function)


# 定义准确率

# In[10]:


correct_prediction = tf.equal(tf.argmax(y,1), tf.argmax(pred,1))
accuray = tf.reduce_mean(tf.cast(correct_prediction,tf.float32))


# 全局初始化

# In[11]:


sess = tf.Session()
init = tf.global_variables_initializer()
sess.run(init)


# 训练

# In[12]:


for epoch in range(train_epochs):
    for batch in range(total_batch):
        xs, ys = mnist.train.next_batch(batch_size)
        sess.run(optimizer, feed_dict={x:xs, y:ys})

    # 使用验证集检验每个批次的训练成果
    # 验证集没有分批次
    loss,acc = sess.run([loss_function,accuray],feed_dict={
        x:mnist.validation.images,y:mnist.validation.labels
    })
    # 打印训练结果
    if (epoch+1) % display_step == 0:
        print("train epoch:",(epoch + 1),"Loss:",loss,"Accuracy:",acc)
    print(sess.run(W),sess.run(b))

print("Train finished!")


# 使用验证数据集验证训练结果

# In[13]:


acc_validation = sess.run([accuray],feed_dict={x:mnist.validation.images,y:mnist.validation.labels})
print("valication accuracy:",acc_validation)


# 使用测试数据集验证训练结果

# In[14]:


test_validation = sess.run([accuray],feed_dict={x:mnist.test.images,y:mnist.test.labels})
print("test accuracy:",test_validation)
