# Create mongodb database with startup script

```yaml
apiVersion: kubedb.com/v1alpha1
kind: MongoDB
metadata:
  name: mgo1
  namespace: demo
spec:
  version: 3.4
  doNotPause: true
  storage:
    storageClassName: "standard"
    accessModes:
    - ReadWriteOnce
    resources:
      requests:
        storage: 50Mi
  init:
    scriptSource:
      gitRepo:
        repository: "https://github.com/kubedb/mongodb-init-script.git"
        directory: .
```
