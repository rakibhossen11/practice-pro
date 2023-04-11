export const productData = async() => {
    const res = await fetch('product.json')
    const data = await res.json()

    return data;
}