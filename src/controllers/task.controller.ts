import { Request, Response } from "express";
import { HttpCode } from "../core/constants";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const createTask = async( req:Request, res:Response) =>{
	try {
        const { title,status } = req.body;
        const task = await prisma.task.create({
            data: {
                title,
                status
            }
        });
        res.status(HttpCode.CREATED).json({
            success: true,
            message: 'Task created successfully',
            data: task
        });
	} catch (error) {
		console.log(error);
		res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
			succes: false,
			message: 'Error occured'
		});
	}
}
export const getAllTasks = async( req:Request, res:Response) =>{
	try {
		const listOfTasks = await prisma.task.findMany({});
		res.status(HttpCode.OK).json({
			success: true,
            message: 'Tasks fetched successfully',
			data: listOfTasks
		});
	} catch (error) {
		console.log(error);
		res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
			succes: false,
			message: 'Error occured'
		});
	}
}

export const editTask = async( req:Request, res:Response) =>{
    try {
        
    } catch (error) {
        res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
            message: "Error creating task",
            error: error.message,
        });
    }
}

export const deleteTask = async( req:Request, res:Response) =>{
    try {
        
    } catch (error) {
        res.status(HttpCode.INTERNAL_SERVER_ERROR).json({
            message: "Error creating task",
            error: error.message,
        });
    }
}