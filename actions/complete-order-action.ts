"use server"
import { revalidatePath } from "next/cache"
import { prisma } from "@/src/lib/prisma"

export async function completeOrder (formData: FormData) {

    const orderId = Number(formData.get('order_id'))
    try {
        await prisma.order.update({
            where:{
                id: orderId
            },
            data:{
                status: true,
                orderReadyAt: new Date(Date.now())
            }
        })
        revalidatePath('/admin/orders')
        
    } catch (error) {
        
    }
    
}