import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
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
} from "@/components/ui/select";
import { ArrowUpDownIcon } from "lucide-react";

const SwapInterface = () => {
  return (
    <div className="h-[calc(100vh-150px)] flex flex-col items-center justify-center p-4">
      <div className="absolute w-[40rem] h-[40rem] bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="flex justify-end w-full max-w-md mb-2 relative">
        <Button
          variant="ghost"
          size="icon"
          className="text-slate-400 hover:text-slate-100"
        >
          <Settings2 className="h-5 w-5" />
        </Button>
      </div>

      <Card className="border-slate-800 bg-slate-900 backdrop-blur-sm relative">
        <CardContent className="p-6">
          <div className="flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <span>Send</span>
                <Input
                  type="number"
                  className="w-[20rem] h-[7vh] border-0 bg-slate-800 focus:ring-offset-0"
                  placeholder="Enter amount"
                />
              </div>
              <Select defaultValue="eth">
                <SelectTrigger className="w-[140px] h-[7vh] border-0 bg-slate-800 focus:ring-offset-0">
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
                <SelectTrigger className="w-[30rem] h-[7vh] border-0 bg-slate-800 focus:ring-offset-0">
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

          <div className="flex justify-center items-center">
            <ArrowUpDownIcon />
            <hr className="ml-7 border-gray-200 dark:border-gray-700 lg:my-8 w-full" />
          </div>

          <div className="flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-4">
                <span>To</span>
                <Select defaultValue="eth">
                  <SelectTrigger className="w-[20rem] h-[7vh] border-0 bg-slate-800 focus:ring-offset-0 ml-5">
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
                <SelectTrigger className="w-[140px] h-[7vh] border-0 bg-slate-800 focus:ring-offset-0">
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
                <SelectTrigger className="w-[30rem] h-[7vh] border-0 bg-slate-800 focus:ring-offset-0 ml-2.5">
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

      <Button className="w-[36.5rem] h-[8vh] mt-5 bg-gradient-to-r from-[#7371FC] to-[#A594F9] hover:from-[#7371FC] hover:to-[#A594F9] text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-violet-500/25 backdrop-blur-sm disabled:opacity-50">
        <Wallet className="h-5 w-10 mr-2" />
        Connect Wallet
      </Button>
    </div>
  );
};

export default SwapInterface;
