"use client";

import FollowButton from "@/components/FollowButton";
import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export default function DeveloperCard() {
  return (
    <div className="flex w-full items-start justify-center mt-12">
      <Card className="mt-10 w-[400px]">
        <CardHeader className="relative flex h-[100px] flex-col justify-end overflow-visible bg-gradient-to-br from-indigo-300 via-Cyan-300 to-blue-400">
          <Avatar className="h-20 w-20 translate-y-12" src="/avatar.jpg" />
        </CardHeader>
        <CardBody>
          <div className="pb-4 pt-6">
            <p className="text-large font-medium">雍征彼/Zhengbi Yong</p>
            <p className="max-w-[90%] text-small text-default-400">
              @zhengbi-yong
            </p>
            <div className="flex gap-2 pb-1 pt-2">
              <Chip variant="flat">自动化</Chip>
              <Chip variant="flat">Robotics</Chip>
              <Chip variant="flat">人工智能</Chip>
              <Chip variant="flat">深度学习</Chip>
            </div>
            <p className="py-2 text-small text-foreground">
              本科：清华大学 | 硕士：北京理工大学
            </p>
            <div className="w-full text-center mt-4 flex justify-evenly">
              <FollowButton
                name="Twitter/X"
                href="https://twitter.com/weijunext/"
              ></FollowButton>
              <FollowButton
                name="Github"
                href="https://github.com/weijunext/"
              ></FollowButton>
              <FollowButton
                name="掘金"
                href="https://juejin.cn/user/26044008768029"
              ></FollowButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
