"use client";

import { z } from "zod";
import { toast } from "sonner";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Error from "@/components/Error";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import useMount from "@/hooks/useMount";
import { createPost } from "@/lib/actions";
import { CreatePost } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/customs/dialog";
import { useUploadThing } from "@/lib/uploadthing";
import { FileUploader } from "@/components/shared/FileUploader";

function CreatePage() {
  const pathname = usePathname();
  const isCreatePage = pathname === "/dashboard/create";
  const router = useRouter();
  const mount = useMount();

  const [files, setFiles] = useState<File[]>([]);

  console.log(files);
  const form = useForm<z.infer<typeof CreatePost>>({
    resolver: zodResolver(CreatePost),
    defaultValues: {
      caption: "",
      fileUrl: undefined,
    },
  });
  const { startUpload } = useUploadThing("imageUploader");

  const fileUrl = form.watch("fileUrl");

  if (!mount) return null;

  const onSubmit = async (values: z.infer<typeof CreatePost>) => {
    let uploadedImageUrl = values.fileUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }
    const res = await createPost({ ...values, fileUrl: uploadedImageUrl });
    console.log(res);
    if (res) {
      return toast.error(<Error res={res} />);
    }
  };

  return (
    <div className="rounded-3xl border-noneb bg-transparent">
      <Dialog
        open={isCreatePage}
        onOpenChange={(open) => !open && router.back()}
      >
        <DialogContent className="!rounded-xl bg-white dark:text-white dark:bg-zinc-900 text-gray-700">
          <DialogHeader className="border-b-[0.1px] border-white p-3  !mx-0">
            <DialogTitle className="text-center text-base font-bold">
              Create new post
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 p-3 flex flex-col justify-center min-h-96"
            >
              {!!fileUrl ? (
                <div className="h-96 md:h-80 overflow-hidden rounded-md">
                  <AspectRatio ratio={1 / 1} className="relative h-full">
                    <Image
                      src={fileUrl}
                      alt="Post preview"
                      fill
                      className="rounded-md object-cover"
                    />
                  </AspectRatio>
                </div>
              ) : (
                <FormField
                  control={form.control}
                  name="fileUrl"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FileUploader
                        onFieldChange={field.onChange}
                        imageUrl={fileUrl}
                        setFiles={setFiles}
                        isSubmitting={form.formState.isSubmitting}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {!!fileUrl && (
                <div className=" py-2 px-3 flex items-end ">
                  <FormField
                    control={form.control}
                    name="caption"
                    render={({ field }) => (
                      <FormItem className=" w-full">
                        <FormLabel htmlFor="caption">Caption</FormLabel>
                        <FormControl>
                          <Input
                            type="caption"
                            id="caption"
                            placeholder="Write a caption... !outline-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="bg-blue-500 hover:bg-blue-600 w-32 ml-4 p-2 mt-4 text-white rounded-md"
                  >
                    create
                  </button>
                </div>
              )}
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreatePage;
