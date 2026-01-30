import { prisma } from '../config/database';

export class ProjectService {
  static async createProject(
    userId: string,
    data: { name: string; description?: string }
  ) {
    return prisma.project.create({
      data: {
        name: data.name,
        description: data.description || null,
        userId: userId, // Simplificado: usamos directamente el userId
      },
    });
  }

  static async getProjectById(projectId: string, userId: string) {
    return prisma.project.findFirst({
      where: {
        id: projectId,
        userId,
      },
    });
  }

  static async getUserProjects(userId: string) {
    return prisma.project.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' }
    });
  }

  // MÉTODO QUE FALTABA
  static async updateProject(projectId: string, userId: string, data: { name?: string; description?: string }) {
    // Primero verificamos propiedad
    const exists = await prisma.project.findFirst({ where: { id: projectId, userId } });
    if (!exists) throw new Error('Project not found');

    return prisma.project.update({
      where: { id: projectId },
      data,
    });
  }

  static async deleteProject(projectId: string, userId: string) {
    // Usamos delete para que falle si no existe o deleteMany para seguridad
    const result = await prisma.project.deleteMany({
      where: { id: projectId, userId },
    });
    
    if (result.count === 0) throw new Error('Project not found');
    return result;
  }
}