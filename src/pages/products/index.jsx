
import LikedButton from "../../components/LikedButton"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"



function Product({handleAddToCart}) {

    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState("")

    useEffect(() => {
        fetchProducts()    
    }, [])

    const fetchProducts = async () => {

        try {
            const res = await axios.get("https://dummyjson.com/products")
            setProducts(res.data.products)
            setIsLoading(false)
        } catch (error) {
            alert(error)
        }
        // fetch("https://dummyjson.com/products")
        //     .then(res => res.json())
        //     .then(data => setProducts(data.products))
        //     .then(() => setIsLoading(false))
        //     .catch(err => console.log(err));
    }
        
        console.log(products)

    const handleSearch = async (searchTerm) => {
        setQuery(searchTerm)
        
        try {
            const res = await axios.get(`https://dummyjson.com/products/search?q=${searchTerm}`)
            setProducts(res.data.products)
        } catch (error) {
            alert(error)
        }

        // fetch(`https://dummyjson.com/products/search?q=${searchTerm}`)
        //     .then(res => res.json())
        //     .then((data) => setProducts(data.products))
        //     .catch(err => console.log(err))

    }

    console.log("products", products);
    

    return (
        <>

            <section className="mx-auto max-w-7xl p-5">
                <div className="flex justify-between items-center">
                    <header className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
                        <p className="text-gray-600 mt-2">Featured high-quality products</p>
                    </header>

                    <input 
                        type="text" 
                        placeholder="search products" 
                        className="border p-3" 
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>

                {isLoading ? (<p className="text-center">loading products...</p>): ""}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

                    {products.map((value) => (

                    // {/* <!-- Product 1 --> */}
                    <div key={value.id} className="overflow-hidden rounded-2xl bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow">
                        <figure className="flex-1">
                            <img
                                src={value.images[0]}
                                alt="Wild Journey T-shirt - New model product"
                                className="w-full object-cover aspect-square"
                                loading="lazy"
                            />
                        </figure>

                        <Link className="p-4 flex-1" to={`/product/${value.id}`}>
                            <h3 className="text-lg font-semibold mt-1">{value.title}</h3>

                            <div className="mt-2 flex justify-between">
                                <span className="text-gray-700 font-bold text-xl">{value.price}</span>
                              

                                
                                <LikedButton />
                            </div>

                            <div className="mt-2 flex items-center gap-1">
                                <i data-lucide="star" className="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                                <i data-lucide="star" className="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                                <i data-lucide="star" className="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                                <i data-lucide="star" className="w-4 h-4 fill-yellow-400 text-yellow-400"></i>
                                <i data-lucide="star" className="w-4 h-4 text-gray-300"></i>
                                <span className="text-sm text-gray-500 ml-1">(4.5)</span>
                            </div>
                        </Link>

                        <button 
                            className="w-full bg-black py-4 text-white hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 font-medium"
                            onClick={() => handleAddToCart(value)}
                        >
                            <i data-lucide="shopping-cart" className="w-5 h-5"></i>
                            Add to Cart
                        </button>
                    </div>
                    ))}

                </div>
            </section>

        </>
    )
} export default Product