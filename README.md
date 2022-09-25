# PandaGo-product-card

Este es un paquete de pruebas de despliegue en NPM.

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'pandago-product-card'
```

```
  <ProductCard
    product={product}
    initialValues={{
      count: 4,
      maxCount: 10,
    }}
  >
    {({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
      <>
        <ProductImage />
        <ProductTitle />
        <ProductButtons />
      </>
    )}
  </ProductCard>
```