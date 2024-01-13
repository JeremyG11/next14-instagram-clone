import { Metadata } from "next";
import { notFound } from "next/navigation";

import { auth } from "@/auth";
import { fetchProfile } from "@/lib/data";
import ProfileForm from "@/components/Profile/ProfileForm";

export const metadata: Metadata = {
  title: "Edit profile",
  description: "Edit profile",
};

async function EditProfile() {
  const session = await auth();
  const profile = await fetchProfile(session?.user.username!);

  if (!profile) {
    notFound();
  }

  return (
    <div className="">
      <h1 className="text-2xl font-medium">Edit profile</h1>

      <ProfileForm profile={profile} />
    </div>
  );
}

export default EditProfile;
