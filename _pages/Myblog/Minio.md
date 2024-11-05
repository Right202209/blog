---
title: "minio"
tags:
    - utility
    - giscus
date: "2024-08-24"
thumbnail: "https://i.ibb.co/V9j2Qsg/sample.webp"
bookmark: true
---

## **Minio**

![img](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/9c1239a901464470b5a1192ffcdf8679~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=AsBZ6VwLwhmOtq%2FOsPUpcBZxY7k%3D) Github [github.com/minio/minio](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fminio%2Fminio)

官网 [MinIO | 用于AI的S3 & Kubernetes原生对象存储](https://link.juejin.cn?target=https%3A%2F%2Fwww.minio.org.cn%2F)

## **部署与安装**

### **Docker安装**

运行以下命令以使用临时数据卷将 MinIO 的最新稳定映像作为容器运行：

```bash
bash 代码解读复制代码docker pull minio/minio  
docker run -d -p 9000:9000 --name=minio --restart=always -e "MINIO_ROOT_USER=minioadmin" -e "MINIO_ROOT_PASSWORD=minioadmin" -v /home/data:/data -v /home/config:/root/.minio  minio/minio server /data --console-address ":9000" --address ":9090"
css 代码解读复制代码 -d 后台运行容器
 --name 为容器名称
 --restart docker重启或者开启时自动启动镜像
 -p 端口映射，宿主机端口:容器端口 访问9010，映射到9000端口
 -e 设置Minio的ACCESS_KEY和SECRET_KEY
 -v 挂载  宿主机目录:容器内目录。
```

MinIO 部署开始使用凭据 `minioadmin:minioadmin`。您可以使用 MinIO 控制台测试部署，这是一个嵌入式 内置于 MinIO 服务器的对象浏览器。将主机上运行的 Web 浏览器指向 [http://127.0.0.1:9000](https://link.juejin.cn?target=http%3A%2F%2F127.0.0.1%3A9000) 并使用 根凭据。您可以使用浏览器来创建桶、上传对象以及浏览 MinIO 服务器的内容。

### **Linux安装**

使用以下命令在运行 64 位 Intel/AMD 架构的 Linux 主机上运行独立的 MinIO 服务器。将`/data` 替换为您希望 MinIO 存储数据的驱动器或目录的路径。

```bash
bash 代码解读复制代码wget http://dl.minio.org.cn/server/minio/release/linux-amd64/minio
chmod +x minio
./minio server /data
```

将`/data` 替换为您希望 MinIO 存储数据的驱动器或目录的路径。

### **Windows**

[服务端下载](https://link.juejin.cn?target=https%3A%2F%2Fdl.minio.io%2Fserver%2Fminio%2Frelease%2Fwindows-amd64%2Fminio.exe)

[客户端下载](https://link.juejin.cn?target=https%3A%2F%2Fdl.minio.io%2Fclient%2Fmc%2Frelease%2Fwindows-amd64%2Fmc.exe)

使用以下命令在 Windows 主机上运行独立的 MinIO 服务器。将 “**C:\**" 替换为您希望 MinIO 存储数据的驱动器或目录的路径。您必须将终端或 powershell 目录更改为 `minio.exe` 可执行文件的位置，*或*将该目录的路径添加到系统 `$PATH` 中：

```vbscript
vbscript

 代码解读
复制代码minio.exe server C:\
```

MinIO 部署开始使用默认的 root 凭据 `minioadmin:minioadmin`。您可以使用 MinIO 控制台测试部署，这是一个内置在 MinIO 服务器中的基于 Web 的嵌入式对象浏览器。将主机上运行的 Web 浏览器指向 [http://127.0.0.1:9000](https://link.juejin.cn?target=http%3A%2F%2F127.0.0.1%3A9000) 并使用 root 凭据登录。您可以使用浏览器来创建桶、上传对象以及浏览 MinIO 服务器的内容。

## **使用**

#### 使用命令行工具

MinIO 提供了命令行工具 mc，可以方便地管理 MinIO 服务器。你可以使用 mc 命令来创建、删除、上传、下载文件等操作。

列出存储桶

```bash
bash

 代码解读
复制代码mc ls <alias>
```

这会列出指定 MinIO 服务器上的所有存储桶。

创建存储桶

```xml
xml

 代码解读
复制代码mc mb <alias>/<bucket_name>
```

这会在指定 MinIO 服务器上创建一个新的存储桶。

上传文件

```xml
xml

 代码解读
复制代码mc cp <file_path> <alias>/<bucket_name>
```

这会将本地文件上传到指定的 MinIO 存储桶中。

下载文件

```xml
xml

 代码解读
复制代码mc cp <alias>/<bucket_name>/<file_name> <local_file_path>
```

这会将 MinIO 存储桶中的文件下载到本地。

复制对象

```bash
bash

 代码解读
复制代码mc cp <source> <target>
```

这会复制对象从一个位置到另一个位置，可以是存储桶内的对象或不同存储桶间的对象。

移动对象

```bash
bash

 代码解读
复制代码mc mv <source> <target>
```

这会移动对象从一个位置到另一个位置，与复制不同的是，移动后源位置的对象将被删除。

删除对象

```xml
xml

 代码解读
复制代码mc rm <alias>/<bucket_name>/<object_name>
```

这会删除指定的对象。

删除存储桶

```xml
xml

 代码解读
复制代码mc rb <alias>/<bucket_name>
```

这会删除指定的存储桶及其中的所有对象。

#### **WEBUI**

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/313ec38167ba4b06b05b53cde791b6c0~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=oKTwvRCbTYFfyr2pNYtRl%2FmyWrk%3D)

![%$L1VFAWT7_IJ8{GZ5.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/900aba0c17534d6fb69f8526b84c7956~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=JIQ%2FaZo2NtgiFsWzLV%2FqihG8Ezk%3D)

![~8_$MRKTDNGVX8F{M9AMY.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/083766564ed147a194671db848ff0208~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=2hpm%2FYEKMPCkkfdO5gCDblrGJ6Q%3D)

#### 新建用户及ACCESS_KEY

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/ced7cbc90b2e4b1882695ad0ecb1edf7~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=TRd9dPdlx40oFQ3N0OS2Qa4XWMo%3D)

![0VK)0E{MM93KO@FF6BE5XH.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/7d13ce58bdf442908bb27761823e3c93~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=7VX2xfj6LtATV%2F7NBAPmmu%2BNyyQ%3D)

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/211ca808fe6d4bf6a99394bfecf28939~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=r1YgcD4a1BMk6nMaHpUoD5wf4pU%3D)

![image.png](https://p6-xtjj-sign.byteimg.com/tos-cn-i-73owjymdk6/2fc820498ec749bd92e42b4a2360109b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg6Zi_55m9NjMwNQ==:q75.awebp?rk3s=f64ab15b&x-expires=1725092752&x-signature=XNghdPKIUCsAd4x9st0rAFZGrUA%3D)

标签：

[笔记]()



作者：阿白6305
链接：https://juejin.cn/post/7406160036538892303
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。