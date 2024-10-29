import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowDownIcon,
  Settings2,
  Wallet,
  ChevronDown,
  GalleryVerticalEnd,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SwapInterface = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 p-4">
      <div className="flex justify-end w-full max-w-md mb-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-slate-100"
        >
          <Settings2 className="h-5 w-5" />
        </Button>
      </div>

      <Card className="border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <span>Send</span>
                <Input
                  type="number"
                  className="w-[20rem] border-0 bg-slate-800 focus:ring-offset-0"
                  placeholder="Enter amount"
                  
                />
              </div>
              <Select defaultValue="eth">
                <SelectTrigger className="w-[140px] border-0 bg-slate-800 focus:ring-offset-0">
                  <div className="flex items-center gap-2">
                    <GalleryVerticalEnd className="h-5 w-5" />
                    <span>ETH</span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    <div className="flex items-center gap-2">
                      <GalleryVerticalEnd className="h-5 w-5" />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mt-7 flex items-center gap-4">
              <span>From</span>
              <Select defaultValue="eth">
                <SelectTrigger className="w-[30rem] border-0 bg-slate-800 focus:ring-offset-0">
                  <div className="flex items-center gap-2">
                    <GalleryVerticalEnd className="h-5 w-5" />
                    <span>ETH</span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    <div className="flex items-center gap-2">
                      <GalleryVerticalEnd className="h-5 w-5" />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <hr className="my-6 border-gray-200  dark:border-gray-700 lg:my-8 w-full" />


          <div className="flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <span>To</span>
                <Select defaultValue="eth">
                <SelectTrigger className="w-[20rem] border-0 bg-slate-800 focus:ring-offset-0 ml-5">
                  <div className="flex items-center gap-2">
                    <GalleryVerticalEnd className="h-5 w-5" />
                    <span>ETH</span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    <div className="flex items-center gap-2">
                      <GalleryVerticalEnd className="h-5 w-5" />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              </div>
              <Select defaultValue="eth">
                <SelectTrigger className="w-[140px] border-0 bg-slate-800 focus:ring-offset-0">
                  <div className="flex items-center gap-2">
                    <GalleryVerticalEnd className="h-5 w-5" />
                    <span>ETH</span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    <div className="flex items-center gap-2">
                      <GalleryVerticalEnd className="h-5 w-5" />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            

            <div className="mt-7 flex items-center gap-4">
              <span>Get</span>
              <Select defaultValue="eth">
                <SelectTrigger className="w-[30rem] border-0 bg-slate-800 focus:ring-offset-0 ml-2.5">
                  <div className="flex items-center gap-2">
                    <GalleryVerticalEnd className="h-5 w-5" />
                    <span>ETH</span>
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-50" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eth">
                    <div className="flex items-center gap-2">
                      <GalleryVerticalEnd className="h-5 w-5" />
                      <span>ETH</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        className="w-[35rem] max-w-md mt-4 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <Wallet className="h-5 w-10 mr-2" />
        Connect Wallet
      </Button>
    </div>
  );
};

export default SwapInterface;
