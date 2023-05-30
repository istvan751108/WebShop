package org.example.model.productbyid;
public class ProductById {
    private Long id;
    private int catId;
    private String title;
    private String productCode;
    private String image;
    private int price;
    private String sku;
    private String description;
    private int stock;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public int getCatId() { return catId; }
    public void setCatId(int catId) { this.catId = catId; }


    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String productCode() { return productCode; }
    public void setProductCode(String productCode) { this.productCode = productCode; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public String getSku() { return sku; }
    public void setSku(String productCode) { this.sku = sku; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    @Override
    public String toString() { return "Product [id=" + id + ",catId=" + catId + ", title=" + title + ",productCode=" + productCode + ",image=" + image + ",price=" + price + ",sku=" + sku + ",description=" + description + ",stock=" + stock + "]";
    }

}
