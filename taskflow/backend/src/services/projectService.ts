import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const ProjectService = {
  async getUserProjects(userId: string) {
    return await prisma.project.findMany({ where: { userId } });
  },
  async createProject(userId: string, data: any) {
    return await prisma.project.create({ data: { ...data, userId } });
  },
  async deleteProject(id: string, userId: string) {
    return await prisma.project.deleteMany({ where: { id, userId } });
  },

  async getProjectById(id: string, userId: string) {
    return await prisma.project.findFirst({
      where: { id, userId }
    });
  },
  async updateProject(id: string, userId: string, data: any) {
    return await prisma.project.update({
      where: { id, userId }, // Prisma 6 permite esto si el id es único
      data: data
    });
  }
};