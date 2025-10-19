import java.util.ArrayList;
import java.util.Scanner;
class Libro {
    String titulo;
    String autor;
    int añoPublicacion;
    String isbn;

    public Libro(String titulo, String autor, int añoPublicacion, String isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.añoPublicacion = añoPublicacion;
        this.isbn = isbn;
    }
    public String toString() {
        return "Título: " + titulo + "\n" +
                "Autor: " + autor + "\n" +
                "Año de publicación: " + añoPublicacion + "\n" +
                "ISBN: " + isbn + "\n----------------------------";
    }
}

public class Libros {
    static Scanner input = new Scanner(System.in);
    static ArrayList<Libro> listaLibros = new ArrayList<>();

    public static void main(String[] args) {
        int opcion;
        do {
            System.out.println("\n===== MENÚ DE LIBROS =====");
            System.out.println("1. Agregar libro");
            System.out.println("2. Listar libros");
            System.out.println("3. Buscar libro por título o autor");
            System.out.println("4. Salir");
            System.out.print("Seleccione una opción: ");
            opcion = input.nextInt();
            input.nextLine();

            switch (opcion) {
                case 1:
                    agregarLibro();
                    break;
                case 2:
                    listarLibros();
                    break;
                case 3:
                    buscarLibro();
                    break;
                case 4:
                    System.out.println("Saliendo del programa...");
                    break;
                default:
                    System.out.println("Opción inválida. Intente nuevamente.");
            }
        } while (opcion != 4);
    }

    public static void agregarLibro() {
        System.out.print("Ingrese el título del libro: ");
        String titulo = input.nextLine();

        System.out.print("Ingrese el autor del libro: ");
        String autor = input.nextLine();

        System.out.print("Ingrese el año de publicación: ");
        int anio = input.nextInt();
        input.nextLine();

        while (anio <= 0) {
            System.out.println("Error: el año debe ser positivo.");
            System.out.print("Ingrese nuevamente el año de publicación: ");
            anio = input.nextInt();
            input.nextLine();
        }

        System.out.print("Ingrese el ISBN: ");
        String isbn = input.nextLine();

        Libro nuevoLibro = new Libro(titulo, autor, anio, isbn);
        listaLibros.add(nuevoLibro);
        System.out.println("Libro agregado correctamente.");
    }

    public static void listarLibros() {
        if (listaLibros.isEmpty()) {
            System.out.println("No hay libros registrados.");
            return;
        }

        System.out.println("\n===== LISTA DE LIBROS =====");
        for (Libro libro : listaLibros) {
            System.out.println(libro.toString());
        }
    }

    public static void buscarLibro() {
        if (listaLibros.isEmpty()) {
            System.out.println("No hay libros registrados.");
            return;
        }

        System.out.print("Ingrese el título o autor a buscar: ");
        String busqueda = input.nextLine().toLowerCase();

        boolean encontrado = false;
        System.out.println("\nResultados de la búsqueda:");
        System.out.println("----------------------------");

        for (Libro libro : listaLibros) {
            if (libro.titulo.toLowerCase().contains(busqueda) ||
                libro.autor.toLowerCase().contains(busqueda)) {
                System.out.println(libro.toString());
                encontrado = true;
            }
        }

        if (!encontrado) {
            System.out.println("No se encontraron libros que coincidan con la búsqueda.");
        }
    }
}
