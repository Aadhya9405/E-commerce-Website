const products = [
  { id: 1, name: "Men's Denim Jacket", price: 2500, category: "men", img: "https://img.joomcdn.net/be054036ed99c5e60bf9a9a0b929404319b43d4d_original.jpeg",},
  { id: 2, name: "Women's Summer Dress", price: 4800, category: "women", img: "https://images.meesho.com/images/products/455310675/zgmqt_512.webp?width=512" },
  { id: 3, name: "Kids Sneakers", price: 1500, category: "kids", img: "https://5.imimg.com/data5/ECOM/Default/2024/8/444278625/JN/PJ/AA/146821774/1620375821029-500x500.jpg" },
  { id: 4, name: "Leather Handbag", price: 5200, category: "bags", img: "https://tiimg.tistatic.com/fp/1/008/003/ladies-plain-brown-leather-handbag-732.jpg" },
  { id: 5, name: "Men's Formal Shoes", price: 2800, category: "men", img: "https://hitz.co.in/cdn/shop/files/S_54-BLACK.jpg?v=1755619136" },
  { id: 6, name: "Women's Heels", price: 2600, category: "women", img: "https://images-static.nykaa.com/media/catalog/product/4/0/4010444EL-JS-W-23BLACK_1.jpg?tr=w-500" },
  { id: 7, name: "Men's Casual Pants", price: 5500, category: "men", img: "https://m.media-amazon.com/images/I/51ROK8iRSyL._UY1000_.jpg" },
  { id: 8, name: "Kids T-Shirt", price: 1000, category: "kids", img: "https://www.wisholize.com/cdn/shop/products/Kids-1_fac658b3-ab25-4f3f-a31a-7f21daaf2954.jpg?v=1600250887" },
  { id: 9, name: "Travel Backpack", price: 2000, category: "bags", img: "https://carrypro.in/cdn/shop/files/White1_1.jpg?v=1711703956&width=1080" },
  { id: 10, name: "Men's Indian Wear", price: 6500, category: "men", img: "https://fashionsuggest.in/wp-content/uploads/ranveer-simgh-sharwani.jpg" },
  { id: 11, name: "Men's Casual Shirt", price: 2450, category: "men", img: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg" },
  { id: 12, name: "Women's Indian Wear", price: 8000, category: "women", img: "https://imgmediagumlet.lbb.in/media/2022/09/63231bef6a824c7ba8072024_1663245295876.jpg" },
  { id: 13, name: "Kids Indian Wear", price: 4500, category: "kids", img: "https://assets0.mirraw.com/images/13305964/image_zoom.jpeg?1749202419" },
  { id: 14, name: "Men's shoes", price: 3500, category: "men", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/7/d/4/6-195-40-asteroid-black-original-imah7byzffjfevkg.jpeg?q=90" },
  { id: 15, name: "Women's shoes", price: 4500, category: "women", img: "https://m.media-amazon.com/images/I/61GpeUi6WjL._UY1000_.jpg" },
  { id: 16, name: "Sling bag", price: 1500, category: "bags", img: "https://freecultr.com/cdn/shop/files/sling-bag_01.jpg?v=1696589814" },
  { id: 17, name: "Women's Casual Shirt", price: 3400, category: "women", img: "https://www.atun.in/wp-content/uploads/2023/02/Black-2-570x760.jpg" },
  { id: 18, name: "Women's jeans", price: 5800, category: "women", img: "https://offduty.in/cdn/shop/files/retrowashflarejeans_1080x.webp?v=1760166682" },
  { id: 19, name: "Kids T-shirt", price: 1000, category: "kids", img: "https://www.anthrilo.com/cdn/shop/files/AN46284_1_600x.jpg?v=1755769438" },
  { id: 20, name: "Kids Indian Wear", price: 5000, category: "kids", img: "https://i.etsystatic.com/31924165/r/il/b1a061/6769645137/il_fullxfull.6769645137_cc3h.jpg" },
  { id: 21, name: "Kids Shoes", price: 3700, category: "kids", img: "https://img.joomcdn.net/d75d2cc279682f10798600ec6d1da5aa17ec4585_original.jpeg" },
  { id: 22, name: "Tote bag", price: 6000, category: "bags", img: "https://assets.ajio.com/medias/sys_master/root/20240718/NiZR/6698324a1d763220fada8364/-473Wx593H-700202528-black-MODEL2.jpg" },
  { id: 23, name: "Mini bag", price: 2400, category: "bags", img: "https://www.thesparklestory.in/cdn/shop/files/17105861199074e58c38615d2c38fcf1d642da9de6_thumbnail_900x_c5b7c63d-906d-41ea-bf8b-3901f677497b_800x.jpg?v=1718608271" },
  { id: 24, name: "Belt bag", price: 4800, category: "bags", img: "https://m.media-amazon.com/images/S/mms-media-storage-prod/final/BrandPosts/brandPosts/f944eecf-f482-40b8-b5e3-0ebab9223987/99060d99-e63f-4a65-9be0-b878b4b183ee/media._SL480_.jpeg" } 
];

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("resultsContainer");
const suggestionBox = document.getElementById("suggestionBox");
const categoryBtns = document.querySelectorAll(".category");
const tags = document.querySelectorAll(".tag");

function renderResults(filtered) {
  resultsContainer.innerHTML = "";

  if (filtered.length === 0) {
    resultsContainer.innerHTML = "<p>No results found 😔</p>";
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.id = item.name.toLowerCase().replace(/\s/g, "-");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <h4>${item.name}</h4>
      <p>${item.price}</p>
      <a href="#">View</a>
    `;
    resultsContainer.appendChild(card);
  });
}

function searchProducts() {
  const query = searchInput.value.toLowerCase();
  const activeCategory = document.querySelector(".category.active").dataset.category;
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) &&
    (activeCategory === "all" || p.category === activeCategory)
  );
  renderResults(filtered);
}

// Auto-complete Suggestions
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  suggestionBox.innerHTML = "";
  if (!value) {
    suggestionBox.style.display = "none";
    return;
  }

  const matches = products.filter(p => p.name.toLowerCase().includes(value));
  if (matches.length > 0) {
    suggestionBox.style.display = "block";
    matches.forEach(m => {
      const li = document.createElement("li");
      li.innerHTML = `<img src="${m.img}" alt=""> ${m.name}`;
      li.addEventListener("click", () => {
        searchInput.value = m.name;
        suggestionBox.style.display = "none";
        searchProducts();
        const target = document.getElementById(m.name.toLowerCase().replace(/\s/g, "-"));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      suggestionBox.appendChild(li);
    });
  } else {
    suggestionBox.style.display = "none";
  }
});

searchBtn.addEventListener("click", searchProducts);

tags.forEach(tag => {
  tag.addEventListener("click", () => {
    searchInput.value = tag.textContent;
    searchProducts();
  });
});

categoryBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    searchProducts();
  });
});