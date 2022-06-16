const PENDING = "pending"
const RESOLVED = "resolved"
const REJECTED = "rejected"
const SETTLED = [RESOLVED, REJECTED]

type ResolveFn<T> = (value: T) => void
type RejectFn = (reason?: any) => void

type ResolvedCallback<T> = (value: any) => void

type Executor<T> =  (resolve: ResolveFn<T>, reject: RejectFn) => void

class Promise<T = any> {
  status = PENDING
  data: T = undefined;
  onResolvedCallbacks = []  // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
  onRejectedCallbacks = []

  constructor(executor:  Executor<T>) {

    const resolve: ResolveFn<T> = value => {

      if (this.status !== PENDING) {
        return;
      }

      this.status = RESOLVED
      this.data = value
      setTimeout(() => {}, 0)


    }
  }

}
