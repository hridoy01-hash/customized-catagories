(async function () {
    let BUSINESS_ID = "6304aa113cb8eba9248eac8d";

    const apiCall = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}` } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    let loadCatagoryItem = await apiCall(`https://api.soppiya.com/v2.1/widget/home/category`);

    async function displayTopCatagories(loadCatagoryItem) {

        for (let i = 0; i < loadCatagoryItem.length; i++) {
            const element = loadCatagoryItem[i];
            console.log("element", element);
            let imageURL = `https://www.soppiya.com/media/images/${BUSINESS_ID}/category/${element.image}`;
            const s0101_single_product = elementMaker("div", ["s0101_single_product"]);
            const s0101_text_content_wrapper = elementMaker("div", ["s0101_text_content_wrapper"]);
            s0101_single_product.appendChild(s0101_text_content_wrapper);
            const s0101_product_img_wrapper = elementMaker("div", ["s0101_product_img_wrapper"]);
            const s0101_product_name_wrapper = elementMaker("div", ["s0101_product_name_wrapper"]);
            s0101_text_content_wrapper.appendChild(s0101_product_name_wrapper);
            const s0101_product_name = elementMaker("span", ["s0101_product_name"]);
            s0101_product_name.innerText = `${element.name}`;
            s0101_product_name_wrapper.appendChild(s0101_product_name);
            const s0101_arrow_icon_wrapper = elementMaker("div", ["s0101_arrow_icon_wrapper"]);
            s0101_text_content_wrapper.appendChild(s0101_arrow_icon_wrapper);
            const s0101_arrow_icon = elementMaker("span", ["s0101_arrow_icon"]);
            s0101_arrow_icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                                            width="4.345" height="8" viewBox="0 0 4.345 8">
                                            <path id="Path_1950" data-name="Path 1950"
                                                d="M10.242,13.293,9.4,12.45l3.154-3.157L9.4,6.136l.844-.843L13.4,8.45a1.193,1.193,0,0,1,0,1.687Z"
                                                transform="translate(-9.4 -5.293)" fill="#bd8448" />
                                        </svg>
            `;
            s0101_arrow_icon_wrapper.appendChild(s0101_arrow_icon);

            const productImage = elementMaker("img", ["s0101_product_img"]);
            setAttributes(productImage, { "src": `${imageURL}` });
            s0101_product_img_wrapper.appendChild(productImage);
            s0101_single_product.appendChild(s0101_product_img_wrapper);


            document.querySelector(".s0101_catagories_all_product_wrapper").appendChild(s0101_single_product)
        }

    };
    displayTopCatagories(loadCatagoryItem)

    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) {
            console.log(err.message);
        };
    };

    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };
})();