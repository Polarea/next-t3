import { z } from "zod";
import { createTRPCRouter, publicProcedure} from "~/server/api/trpc";

export const instructorRouter = createTRPCRouter({
  getAll: publicProcedure
    .query(async ({ctx}) => {
      return (await ctx.db.instructor.findMany({select: {id: true, name: true, qualifications:true}}));
    }),
  add: publicProcedure
  .input(z.object({ name: z.string() }))
  .mutation(async ({ctx, input}) => {
    return ctx.db.instructor.create({
      data : {
        name: input.name,
      }
    });
  })
  });

  /* create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return post ?? null;
  }), */
