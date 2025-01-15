'use server'
import {  signOut } from '../../../auth'
// import { revalidatePath } from 'next/cache'


export async function signOutUser() {
    await signOut()
}

export async function registerUser(formData: FormData) {
    
}
