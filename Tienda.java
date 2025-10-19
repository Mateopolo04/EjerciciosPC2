import java.util.Scanner;
public class Tienda {
    public static void main(String[] args) {
        
        final double IVA = 0.19;
        double subtotal = 0;
        boolean continuar = true;

        Scanner input = new Scanner(System.in);

        while (continuar) {
            System.out.print("Ingrese el precio del producto: ");
            double precio = input.nextDouble();

            while (precio <= 0) {
                System.out.println(" Error: el precio debe ser un número positivo.");
                System.out.print("Ingrese nuevamente el precio: ");
                precio = input.nextDouble();
            }

            System.out.print("Ingrese la cantidad de unidades: ");
            int cantidad = input.nextInt();

            while (cantidad <= 0) {
                System.out.println(" Error: la cantidad debe ser un número positivo.");
                System.out.print("Ingrese nuevamente la cantidad: ");
                cantidad = input.nextInt();
            }

            double totalParcial = precio * cantidad;
            System.out.printf(" Total parcial del producto: $%.2f%n", totalParcial);

            subtotal += totalParcial;

            System.out.print("¿Desea ingresar otro producto? (s/n): ");
            String respuesta = input.next();

            if (!respuesta.equalsIgnoreCase("s")) {
                continuar = false;
            }
        }

        double valorIVA = subtotal * IVA;
        double totalPagar = subtotal + valorIVA;

        System.out.println("\n RESUMEN DE COMPRA");
        System.out.println("------------------------------");
        System.out.printf("Subtotal: $%.2f%n", subtotal);
        System.out.printf("IVA (19%%): $%.2f%n", valorIVA);
        System.out.printf("Total a pagar: $%.2f%n", totalPagar);

        input.close();
    }
}