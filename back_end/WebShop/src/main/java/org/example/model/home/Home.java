package org.example.model.home;
public class Home {
    private Long id;
    private String code;
    private String status;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getCode() { return code; }
    public void setCode(String code) { this.code = code; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    @Override
    public String toString() { return "Home [id=" + id + ", code=" + code + ", status=" + status + "]";
    }

}
