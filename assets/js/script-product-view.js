// script-product-view.js
// Full, self-contained, robust version for product-view.html

const products = [
  { id: 1, name: "Men's Denim Jacket", price: 2500, category: "men", img: "https://img.joomcdn.net/be054036ed99c5e60bf9a9a0b929404319b43d4d_original.jpeg", desc: "Classic blue denim jacket for a stylish everyday look.", relatedImgs: [
      "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/12288606/2021/8/19/3c2f6483-02c4-4856-9922-fc508c28eb161629350919130-Roadster-Men-Blue-Washed-Denim-Jacket-9061629350918422-1.jpg",
      "https://campussutra.com/cdn/shop/files/JKDENIMP02_M_PLN_NBU_1_80a9e6ee-5622-456b-82f5-a2fb3e18f9f8.jpg?v=1728974706",
      "https://www.dennislingo.com/cdn/shop/products/DLMDJS006-WH_7_edebfac7-3610-4e86-b949-a48d7e227ee1.jpg?v=1678539067"
    ] },
  { id: 2, name: "Women's Summer Dress", price: 4800, category: "women", img: "https://images.meesho.com/images/products/455310675/zgmqt_512.webp?width=512", desc: "A beautiful light-weight floral summer dress perfect for sunny days.", relatedImgs: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_W4ggZVuuSG5vl6wXc8q7Iypk-GdykVce7A&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_W4ggZVuuSG5vl6wXc8q7Iypk-GdykVce7A&s",
      "https://m.media-amazon.com/images/I/6174L7XP7aL._UY350_.jpg",
      "https://img.ltwebstatic.com/images3_pi/2024/02/26/6d/1708942901f84f547203e2ef82c9ebbdc6a89dc169_thumbnail_720x.jpg"
    ] },
  { id: 3, name: "Kids Sneakers", price: 1500, category: "kids", img: "https://5.imimg.com/data5/ECOM/Default/2024/8/444278625/JN/PJ/AA/146821774/1620375821029-500x500.jpg", desc: "Comfortable and durable sneakers for active little feet.", relatedImgs: ["https://cdn.media.amplience.net/i/scvl/151911_370492_1?fmt=auto&w=640",
    "https://5.imimg.com/data5/SELLER/Default/2022/10/OH/GZ/AK/110005553/jondan-500x500.jpeg",
    "https://babymoo.in/cdn/shop/files/C447-2-32-S1_1.jpg?v=1746810408&width=2000"
  ] },
  { id: 4, name: "Leather Handbag", price: 5200, category: "bags", img: "https://tiimg.tistatic.com/fp/1/008/003/ladies-plain-brown-leather-handbag-732.jpg", desc: "Elegant brown leather handbag for daily use or outings.", relatedImgs: [
    "https://assets.ajio.com/medias/sys_master/root/20231028/6ECY/653cae77ddf77915195ff69d/-473Wx593H-465618157-tan-MODEL.jpg",
    "https://theleatherchef.in/cdn/shop/files/MS1.jpg?v=1688630033&width=1920",
    "https://eske.in/cdn/shop/articles/The_Epitome_of_Luxury_Unveiling_the_World_of_Designer_Leather_Handbags_for_Women_1200x1200.png?v=1716534382"
  ] },
  { id: 5, name: "Men's Formal Shoes", price: 2800, category: "men", img: "https://hitz.co.in/cdn/shop/files/S_54-BLACK.jpg?v=1755619136", desc: "Polished shoes to complete your professional look.", relatedImgs: [
    "https://i.etsystatic.com/33447572/r/il/6e83b9/6330899083/il_570xN.6330899083_k9bb.jpg",
    "https://www.bxxyshoe.in/cdn/shop/files/MG_9106copy_a0e09d91-8c8c-4a54-afa1-ed954b399ee5.jpg?v=1710396911",
    "https://egoss.in/cdn/shop/files/Untitleddesign_31.png?v=1753878441&width=1080"
  ] },
  { id: 6, name: "Women's Heels", price: 2600, category: "women", img: "https://images-static.nykaa.com/media/catalog/product/4/0/4010444EL-JS-W-23BLACK_1.jpg?tr=w-500", desc: "Chic and comfortable heels for parties or formal events.", relatedImgs: [
    "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/25203652/2024/9/2/6bcff64b-60f3-4e99-8c47-da049641e8c81725276257511-Denill-Pointed-Toe-Block-Heel-Pumps-3911725276256991-1.jpg",
    "https://www.tresmode.com/cdn/shop/files/the-boem-beige-women-s-dress-block-heel-sandals-tresmode-tresmode-1.jpg?v=1755689441",
    "https://tiimg.tistatic.com/fp/1/009/155/strappy-black-high-heel-893.jpg"
  ] },
  { id: 7, name: "Men's Casual Pants", price: 5500, category: "men", img: "https://m.media-amazon.com/images/I/51ROK8iRSyL._UY1000_.jpg", desc: "Soft cotton pants that blend comfort with smart style.", relatedImgs: [
    "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/8881403/2024/6/7/0416848e-a95a-4015-b01f-eb0814ed05a81717734143808-DENNISON-Men-Grey-Smart-Tapered-Fit-Casual-Trousers-93617177-1.jpg",
    "https://thecollectionindia.com/cdn/shop/files/8901256588547-0_6.jpg?v=1755075301",
    "https://images.bewakoof.com/t540/men-s-brown-oversized-cargo-trousers-609760-1702539340-3.jpg"
  ] },
  { id: 8, name: "Kids T-Shirt", price: 1000, category: "kids", img: "https://www.wisholize.com/cdn/shop/products/Kids-1_fac658b3-ab25-4f3f-a31a-7f21daaf2954.jpg?v=1600250887", desc: "Bright and fun T-shirt made from soft, breathable fabric.", relatedImgs: [
    "https://m.media-amazon.com/images/I/71JuFXr1tDL._UY1100_.jpg",
    "https://images.meesho.com/images/products/145867809/gh93d_512.webp?width=512",
    "https://fastcolors.in/cdn/shop/files/80017-NAVY_b36053bb-d885-48f7-84c4-1804c167b5eb.jpg?v=1751898123&width=2048"
  ] },
  { id: 9, name: "Travel Backpack", price: 2000, category: "bags", img: "https://carrypro.in/cdn/shop/files/White1_1.jpg?v=1711703956&width=1080", desc: "Spacious and lightweight backpack for travel or college.", relatedImgs: [
    "https://m.media-amazon.com/images/I/81KnzZDfpYL._UY1100_.jpg",
    "https://rukminim2.flixcart.com/image/480/640/xif0q/backpack/p/b/u/6-7-travel-backpack-for-men-women-luggage-backpack-with-laptop-original-imagvfydftwx5qja.jpeg?q=90",
    "https://e7.pngegg.com/pngimages/692/91/png-clipart-blue-and-grey-hiking-backpack-sleeping-bag-backpacking-hiking-backpack-background-blue-luggage-bags-thumbnail.png"
  ] },
  { id: 10, name: "Men's Indian Wear", price: 6500, category: "men", img: "https://fashionsuggest.in/wp-content/uploads/ranveer-simgh-sharwani.jpg", desc: "Traditional sherwani perfect for weddings and functions.", relatedImgs: [
    "https://i.pinimg.com/736x/75/59/fd/7559fd05d781abb5e8405d2c08358988.jpg",
    "https://i.pinimg.com/550x/c5/ac/6a/c5ac6ac2975575ddbe4822be11ae3881.jpg",
    "https://assets.panashindia.com/media/catalog/product/cache/1/small_image/269x377/9df78eab33525d08d6e5fb8d27136e95/7/4/740mw12-rk2077.jpg"
  ] },
  { id: 11, name: "Men's Casual Shirt", price: 2450, category: "men", img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg", desc: "Printed casual shirt to keep your weekend style fresh.", relatedImgs: [
    "https://fastcolors.in/cdn/shop/files/40040-OE_BLACK_FRONT_93c157c4-62eb-489d-b314-1a742b75cefc.jpg?v=1751897997&width=2048",
    "https://img4.dhresource.com/webp/m/0x0/f3/albu/ys/h/08/8fff955c-6ace-4467-baba-d38034d06168.jpg",
    "https://5.imimg.com/data5/OR/KQ/MY-46472413/men-casual-t-shirts.jpg"
  ] },
  { id: 12, name: "Women's Indian Wear", price: 8000, category: "women", img: "https://imgmediagumlet.lbb.in/media/2022/09/63231bef6a824c7ba8072024_1663245295876.jpg", desc: "Beautiful ethnic outfit for festive or wedding occasions.", relatedImgs: [
    "https://i.pinimg.com/474x/93/80/bb/9380bbe4c17de1f37ea4c297f92b9dab.jpg",
    "https://assets.panashindia.com/media/catalog/product/cache/1/small_image/269x377/9df78eab33525d08d6e5fb8d27136e95/3/6/3616sl01-7216-a.jpg",
    "https://www.wholesalesalwar.com/blog/wp-content/uploads/2021/10/anarkali-suit-in-blue.jpg"
  ] },
  { id: 13, name: "Kids Indian Wear", price: 4500, category: "kids", img: "https://assets0.mirraw.com/images/13305964/image_zoom.jpeg?1749202419", desc: "Adorable traditional outfit for festivals and family events.", relatedImgs: [
    "https://www.okboss.co.in/assets/img/product/boys%20white%20kurta%20with%20blue%20jacket%20set.jpg",
    "https://suvidhafashion.com/cdn/shop/files/1909.jpg?v=1734347291&width=600",
    "https://www.jiomart.com/images/product/original/rvfait4ajo/ahhaaaa-kids-indian-ethnic-festive-and-party-wear-full-sequin-embroidery-mirror-work-kurta-pajama-set-for-baby-boys-product-images-rvfait4ajo-5-202308112207.jpg?im=Resize=(500,630)"
  ] },
  { id: 14, name: "Men's shoes", price: 3500, category: "men", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/7/d/4/6-195-40-asteroid-black-original-imah7byzffjfevkg.jpeg?q=90", desc: "Trendy and durable footwear for all-day comfort.", relatedImgs: [
    "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&fm=jpg&q=60&w=3000",
    "https://assets.ajio.com/medias/sys_master/root/20241014/7QcV/670ceb8a260f9c41e87615f4/-473Wx593H-467240079-white-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20240919/Jh0i/66eb55a9260f9c41e81219d4/-473Wx593H-700440895-black-MODEL.jpg"
  ] },
  { id: 15, name: "Women's shoes", price: 4500, category: "women", img: "https://m.media-amazon.com/images/I/61GpeUi6WjL._UY1000_.jpg", desc: "Stylish pair that adds charm to every outfit.", relatedImgs: [
    "https://m.media-amazon.com/images/I/61tVHfp0y7L._UY1000_.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20240419/mfG5/6621f9f705ac7d77bb185e31/-473Wx593H-466923165-pink-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20241203/joSk/674f1fca0f47f80c87d02439/-473Wx593H-700868715-aqua-MODEL.jpg"
  ] },
  { id: 16, name: "Sling bag", price: 1500, category: "bags", img: "https://freecultr.com/cdn/shop/files/sling-bag_01.jpg?v=1696589814", desc: "Compact and trendy bag to carry your essentials in style.", relatedImgs: [
    "https://fotocentreindia.com/wp-content/uploads/Vanguard-Veo-Metro-S7L-Shoulder-Bag-Cream-Online-Buy-in-India_1-800x800.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOLJDKgXUaO4o3lDDhrYPMgZcpQ6wSNcoFDQ&s",
    "https://media.landmarkshops.in/cdn-cgi/image/h=1125,w=1125,q=85,fit=cover/lifestyle/1000015248962-1000015248961_01-2100.jpg"
  ] },
  { id: 17, name: "Women's Casual Shirt", price: 3400, category: "women", img: "https://www.atun.in/wp-content/uploads/2023/02/Black-2-570x760.jpg", desc: "Smart and versatile shirt for casual outings.", relatedImgs: [
    "https://m.media-amazon.com/images/I/61c9waX9KwL._UY1100_.jpg",
    "https://m.media-amazon.com/images/I/81uHVT+CZlL._UY350_.jpg",
    "https://d1flfk77wl2xk4.cloudfront.net/Assets/43/035/XXL_p0203703543.jpg"
  ] },
  { id: 18, name: "Women's jeans", price: 5800, category: "women", img: "https://offduty.in/cdn/shop/files/retrowashflarejeans_1080x.webp?v=1760166682", desc: "High-quality denim jeans with a modern flattering fit.", relatedImgs: [
    "https://www.wrangler.in/blogs/_next/image?url=https%3A%2F%2Fstatic.aceomni.cmsaceturtle.com%2Fprod%2Fproduct-image%2Faceomni%2FWrangler%2FMonobrand%2FWWJN001221%2FWWJN001221_1.jpg&w=3840&q=75",
    "https://m.media-amazon.com/images/I/818HsSgYAWL._UY1100_.jpg",
    "https://5.imimg.com/data5/SELLER/Default/2021/7/DE/FT/OF/1179011/women-cargo-pants.jpg"
  ] },
  { id: 19, name: "Kids T-shirt", price: 1000, category: "kids", img: "https://www.anthrilo.com/cdn/shop/files/AN46284_1_600x.jpg?v=1755769438", desc: "Cute and comfy T-shirt perfect for everyday play.", relatedImgs: [
    "https://www.printmate.in/media/catalog/product/5/_/5_9_2.png",
    "https://5.imimg.com/data5/SELLER/Default/2022/9/DL/KE/JK/10910014/2059-a-blue-500x500.jpg",
    "https://images.meesho.com/images/products/451564910/zfkb1_512.webp?width=512"
  ] },
  { id: 20, name: "Kids Indian Wear", price: 5000, category: "kids", img: "https://i.etsystatic.com/31924165/r/il/b1a061/6769645137/il_fullxfull.6769645137_cc3h.jpg", desc: "Festive ethnic wear designed for comfort and cuteness.", relatedImgs: [
    "https://i.pinimg.com/236x/d9/84/c2/d984c2b2cfab37550d49427db02ec82f.jpg",
    "https://images.cbazaar.com/images/muslin-printed-kids-girls-dresses-and-gown-kdgsun4002-u.jpg",
    "https://www.fayonkids.com/cdn/shop/files/manufactured-by-fayon-kids-noida-u-p-off-white-thread-lehenga-for-girls-41697834008832.png?v=1756715037&width=533"
  ] },
  { id: 21, name: "Kids Shoes", price: 3700, category: "kids", img: "https://img.joomcdn.net/d75d2cc279682f10798600ec6d1da5aa17ec4585_original.jpeg", desc: "Lightweight shoes designed for style and easy movement.", relatedImgs: [
    "https://media.istockphoto.com/id/522628236/photo/little-girl-sneakers-shoes.jpg?s=612x612&w=0&k=20&c=JT7FEcRZNzOaAwDoFldcp5iymPU8hJ8Yt-WFvKZpcvw=",
    "https://thumbs.dreamstime.com/b/cute-pink-kids-fashion-sneakers-stylish-children-s-shoes-velcro-strap-blue-background-new-footwear-concept-395120400.jpg",
    "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/27104470/2024/1/20/6f0b588b-2473-4bcf-b647-1feea0f8c82c1705756241080KATSUnisexKidsPrintedSneakers1.jpg"
  ] },
  { id: 22, name: "Tote bag", price: 6000, category: "bags", img: "https://assets.ajio.com/medias/sys_master/root/20240718/NiZR/6698324a1d763220fada8364/-473Wx593H-700202528-black-MODEL2.jpg", desc: "Spacious tote bag ideal for shopping or work essentials.", relatedImgs: [
    "https://nestasia.in/cdn/shop/products/DSC1516.jpg?v=1668844869&width=600",
    "https://hrd-live.cdn.scayle.cloud/images/af10e47144c9135b531d7d5117a28860.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
    "https://milansbags.in/wp-content/uploads/2024/10/031.jpg"
  ] },
  { id: 23, name: "Mini bag", price: 2400, category: "bags", img: "https://www.thesparklestory.in/cdn/shop/files/17105861199074e58c38615d2c38fcf1d642da9de6_thumbnail_900x_c5b7c63d-906d-41ea-bf8b-3901f677497b_800x.jpg?v=1718608271", desc: "Cute mini bag for quick outings and minimal style.", relatedImgs: [
    "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1722445232/476433_DTDHD_6705_001_059_0000_Light-gg-marmont-mini-bag.jpg",
    "https://theboomerangstore.com/cdn/shop/files/butterfly-flap-mini-bag-95-PUR-2.webp?v=1749130946",
    "https://rukminim2.flixcart.com/image/480/640/xif0q/backpack/g/u/x/5-mini-backpack-girls-cute-small-backpack-purse-women-travel-original-imah5p7cyypg9zxh.jpeg?q=90"
  ] },
  { id: 24, name: "Belt bag", price: 4800, category: "bags", img: "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/f944eecf-f482-40b8-b5e3-0ebab9223987/99060d99-e63f-4a65-9be0-b878b4b183ee/media._SL480_.jpeg", desc: "Handy belt bag for keeping your essentials close and secure.", relatedImgs: [
    "https://d2csxpduxe849s.cloudfront.net/media/BBD46EA3-F7E7-441D-8663C747FAEA082D/A7E80619-F291-449E-BAF80E21B4113A7E/A9CAD9FF-F42D-44C8-AE6D0DB89FF42436/webimage-0F83B3ED-F131-4EB3-B251BECF2AFA9259.png",
    "https://imfitindia.com/cdn/shop/products/41hdZtLVOkL_600x600.jpg?v=1641641685",
    "https://image.made-in-china.com/202f0j00cCtWsgoaYKqT/Running-Belt-Fanny-Pack-Waist-Bag-with-Foldable-Water-Bottle-Holder.webp"
  ] },
];

// Get selectedProduct ID from localStorage
const productId = localStorage.getItem("selectedProduct");
console.log("Product ID (localStorage):", productId);

const product = products.find(p => p.id == productId);
console.log("Found product:", product);

const productDetail = document.getElementById("productDetail");
const relatedContainer = document.getElementById("relatedProducts");

if (!productDetail || !relatedContainer) {
  console.error("Missing DOM elements: productDetail or relatedProducts not found.");
}

// Render product details or show error message
if (product) {
  productDetail.innerHTML = `
    <div class="col-md-6 text-center">
      <img src="${product.img}" class="img-fluid rounded shadow" alt="${escapeHtml(product.name)}" style="max-height:450px; object-fit:cover;">
    </div>
    <div class="col-md-6">
      <h2 class="fw-bold mb-3">${escapeHtml(product.name)}</h2>
      <h4 class="text-primary mb-3">₹${product.price}</h4>
      <p>${escapeHtml(product.desc || "")}</p>
      <div class="mb-3">
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star text-warning"></i>
        <i class="fa fa-star-half-stroke text-warning"></i>
        <i class="fa-regular fa-star text-warning"></i>
        <span class="ms-2">(4.5/5)</span>
      </div>
      <button id="addToCartBtn" class="btn btn-primary px-4 py-2">Add to Cart</button>
    </div>
  `;
} else {
  productDetail.innerHTML = `<p class="text-center mt-5">No product selected or product not found.</p>`;
}

// ---------------------- Related images logic ----------------------
// If product.relatedImgs exists and has images, show those (your Google images).
// Otherwise fallback to showing other items from same category.
if (product && product.relatedImgs && product.relatedImgs.length > 0) {
  relatedContainer.innerHTML = product.relatedImgs.map((imgUrl, index) => `
    <div class="col-md-3">
      <div class="card related-custom-img" style="cursor:pointer;">
        <img src="${imgUrl}" class="card-img-top related-img" data-imgindex="${index}" alt="${escapeHtml(product.name)} - related ${index+1}">
      </div>
    </div>
  `).join('');
} else if (product) {
  // fallback: show up to 4 items from same category (excluding current)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  relatedContainer.innerHTML = related.map(r => `
    <div class="col-md-3">
      <div class="card" onclick="viewProduct(${r.id})" style="cursor:pointer;">
        <img src="${r.img}" class="card-img-top" alt="${escapeHtml(r.name)}">
        <div class="card-body text-center">
          <h6>${escapeHtml(r.name)}</h6>
          <p class="price">₹${r.price}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// Add event listeners for related custom images (open in modal)
document.addEventListener("click", function(e) {
  const target = e.target;
  // if clicked element has class 'related-img' -> open modal with that image
  if (target && target.classList && target.classList.contains("related-img")) {
    const src = target.getAttribute("src");
    openImageModal(src);
  }
});

// ---------------------- Modal functionality ----------------------
function openImageModal(src) {
  const modalImg = document.getElementById("modalImage");
  const modal = new bootstrap.Modal(document.getElementById("imageModal"));
  if (modalImg) modalImg.src = src;
  modal.show();
}

// viewProduct used when clicking related product cards that are actual products
function viewProduct(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "product-view.html";
}

// ---------------------- Theme toggle (same as other pages) ----------------------
const themeToggle = document.getElementById("themeToggle");
let darkMode = localStorage.getItem("darkMode");

function enableDarkMode() {
  document.body.classList.add("dark-theme");
  localStorage.setItem("darkMode", "enabled");
  if (themeToggle) themeToggle.textContent = "☀️";
}
function disableDarkMode() {
  document.body.classList.remove("dark-theme");
  localStorage.setItem("darkMode", null);
  if (themeToggle) themeToggle.textContent = "🌙";
}
if (darkMode === "enabled") enableDarkMode();
if (themeToggle) themeToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  darkMode !== "enabled" ? enableDarkMode() : disableDarkMode();
});

// ---------------------- Helpers ----------------------
function escapeHtml(str) {
  if (!str && str !== 0) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
// ✅ Add to Cart functionality
const addToCartBtn = document.querySelector("#addToCartBtn");

addToCartBtn.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productInCart = cart.find(item => item.id === product.id);

  if (productInCart) {
    productInCart.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
});
