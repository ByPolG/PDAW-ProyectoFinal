using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

public class ProductosModel : PageModel
{
    // Simulación de datos de productos
    public List<Producto> Productos { get; set; } = new List<Producto>
    {
        new Producto { Id = 1, Nombre = "MSI GeForce RTX 3080 Ti", Codigo = "ROP0000074", Precio = 1927.13, Imagen = "assets/img/productos/componentes/tarjeta.png" },
        new Producto { Id = 2, Nombre = "Intel Procesador Core i9-12900KS", Codigo = "JUG0000005", Precio = 539.90, Imagen = "assets/img/productos/componentes/procesador.png" },
        new Producto { Id = 3, Nombre = "Samsung 870 QVO 1 TB", Codigo = "BPY4UND", Precio = 70.86, Imagen = "assets/img/productos/componentes/disco.png" },
        new Producto { Id = 4, Nombre = "Razer Naga Trinity", Codigo = "DDMB7U70GR", Precio = 84.14, Imagen = "assets/img/productos/perifericos/raton.png" },
        new Producto { Id = 5, Nombre = "Razer BlackWidow V4 Pro", Codigo = "HDB04", Precio = 269.99, Imagen = "assets/img/productos/perifericos/teclado.png" },
        new Producto { Id = 6, Nombre = "Razer Kraken V3 Pro", Codigo = "ROP0000023", Precio = 198.98, Imagen = "assets/img/productos/perifericos/cascos.png" },
        new Producto { Id = 7, Nombre = "Dell Alienware m15 R2 Negro", Codigo = "AP-D794-011", Precio = 3908.92, Imagen = "assets/img/productos/ordenadores/alien.png" },
        new Producto { Id = 8, Nombre = "Acer Chromebook 314 CB314-2HT", Codigo = "HTD-TSH023-1", Precio = 299.00, Imagen = "assets/img/productos/ordenadores/acer.png" },
        new Producto { Id = 9, Nombre = "ASUS VivoBook 15 F1500EA-EJ3100", Codigo = "HPDMT", Precio = 369.00, Imagen = "assets/img/productos/ordenadores/asus.png" }
    };

    public void OnGet()
    {
        // No se requiere lógica adicional para esta página
    }
}

public class Producto
{
    public int Id { get; set; }
    public string Nombre { get; set; }
    public string Codigo { get; set; }
    public double Precio { get; set; }
    public string Imagen { get; set; }
}
