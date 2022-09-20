
window.onload = (event) => {

    setTimeout(function () {
        const s0000_company_brands_wrapper_id = document.getElementById("s0000_company_brands_wrapper_id");
        const s0000_company_logo = elementMaker("div", ["s0000_company_logo"]);
        s0000_company_brands_wrapper_id.appendChild(s0000_company_logo);
        const s0000_thumb_img = elementMaker("div", ["s0000_thumb_img"]);
        s0000_company_logo.appendChild(s0000_thumb_img);
        const s0000_company_logo_img = elementMaker("img", ["s0000_company_logo"]);
        s0000_company_logo_img.style.width = `100%`
        setAttributes(s0000_company_logo_img, { "src": `https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/a39b93122419745.60d9b859cc3ff.jpg` });
        s0000_thumb_img.appendChild(s0000_company_logo_img);

        console.log("s0000_company_brands_wrapper_id", s0000_company_brands_wrapper_id);

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
    }, 1200);
};

/* 
        const s0000_special_category_nav_list_id = document.getElementById("s0000_special_category_nav_list_id");
        const s0000_category_nav_item = elementMaker("li", ["s0000_category_nav_item"]);
        s0000_special_category_nav_list_id.appendChild(s0000_category_nav_item);
        const s0000_category_nav_link_wrapper = elementMaker("div", ["s0000_category_nav_link_wrapper"]);
        s0000_category_nav_item.appendChild(s0000_category_nav_link_wrapper);
        const s0000_category_nav_link = elementMaker("span", ["s0000_category_nav_link"]);
        s0000_category_nav_link.textContent = `External Item`;
        s0000_category_nav_link_wrapper.appendChild(s0000_category_nav_link);
*/