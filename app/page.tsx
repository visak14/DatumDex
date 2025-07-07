"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Check, Search, Shield, Upload } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col min-h-screen">
      <section className=" py-20 md:py-28 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className=" container px-4 md:px-6 mx-auto ">
          <div className="  flex flex-col items-center space-y-4 text-center">
            <div className=" space-y-2">
              <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Intelligent Receipt Scanning
              </h1>
              <p className=" mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Scan, analyze , and organize your receipts with AI-powered
                precison. Save time and gain insights from your expenses like
                never before.
              </p>
            </div>
            <div className=" space-x-4">
              <Link href="/receipts">
                <Button className=" bg-blue-600 hover:bg-blue-700">
                  Get Started <ArrowRight className=" ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className=" mt-12 flex justify-center ">
          <div className=" relative w-full  max-w-3xl rounded-lg border border-gray-200 bg-white shadow-lg overflow-hidden dark:border-gray-800 dark:bg-gray-950">
            <div className=" p-5 md:p-8 relative">
              <p> PDF dropzone goes here....</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className=" py-16 md:py-24">
        <div className=" container px-4 md:px-6 mx-auto">
          <div className=" flex flex-col items-center space-y-4 justify-center text-center">
            <div className=" space-y-2">
              <h2 className=" text-3xl font-bold tracking-tighter md:text-4xl">
                {" "}
                Powerful Features
              </h2>
              <p className=" max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our AI-powered receipt scanning tool offers a range of features
                to help you manage your expenses efficiently.
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className=" flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                <div className=" p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className=" text-xl font-bold ">Easy Uploads</h3>
                <p>
                  Drag and drop you PDF receipts for instant scanniing and
                  processing{" "}
                </p>
              </div>

              <div className=" flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                <div className=" p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <Search className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className=" text-xl font-bold ">AI Analysis</h3>
                <p>
                  Automatically extract and categorize expense data with
                  intelligent ai{" "}
                </p>
              </div>

              <div className=" flex flex-col items-center space-y-2 border border-gray-200 rounded-lg p-6 dark:border-gray-800">
                <div className=" p-3 rounded-full bg-blue-100 dark:bg-blue-900">
                  <BarChart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className=" text-xl font-bold ">AI Analysis</h3>
                <p>
                  {" "}
                  Generate reports and gain valuable insights from your spending
                  pattern{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-16 md:py-24  bg-gray-50 dark:bg-gray-900">
        <div className=" container px-4 md:px-6 mx-auto">
          <div className=" flex flex-col items-center justify-center space-y-4 text-center">
            <div className=" space-y-2">
              <h2 className=" text-3xl font-bold tracking-tighter md:text-4xl">
                Simple Pricing
              </h2>

              <p className=" max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Choose the plan that works best for your needs.
              </p>
            </div>
          </div>

          <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            <div className=" flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-950 dark:border-gray-800">
              <div className=" space-y-2">
                <h3 className=" text-2xl font-bold"> Free</h3>
                <p className=" text-gray-500 dark:text-gray-400">
                  {" "}
                  Free tier all to try!
                </p>
              </div>
              <div className=" mt-4">
                <p className=" text-4xl font-bold">$0</p>
                <p className=" text-gray-500 dark:text-gray-400">/month</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>2 scans per month</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Basic data Extraction</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>7-day history</span>
                </li>
              </ul>
              <div>
                <Link href="/manage-plan">
                  <Button className=" w-full " variant="outline">
                    Sign Up free
                  </Button>
                </Link>
              </div>
            </div>


                <div className=" flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-950 dark:border-gray-800">
              <div className=" space-y-2">
                <h3 className=" text-2xl font-bold"> Starter</h3>
                <p className=" text-gray-500 dark:text-gray-400">
                  A taste of expensing googness!
                </p>
              </div>
              <div className=" mt-4">
                <p className=" text-4xl font-bold">$4.99</p>
                <p className=" text-gray-500 dark:text-gray-400">/month</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>50 scans per month</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Enhanced data Extraction</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>30-day history</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Basic export options</span>
                </li>
              </ul>
              <div>
                <Link href="/manage-plan">
                  <Button className=" w-full " variant="outline">
                    Choose plan
                  </Button>
                </Link>
              </div>
            </div>



               <div className=" flex flex-col p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-950 dark:border-gray-800">
              <div className=" space-y-2">
                <h3 className=" text-2xl font-bold"> Pro</h3>
                <p className=" text-gray-500 dark:text-gray-400">
                  Pro features for pro users
                </p>
              </div>
              <div className=" mt-4">
                <p className=" text-4xl font-bold">$9.99</p>
                <p className=" text-gray-500 dark:text-gray-400">/month</p>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>300 scans per month</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Advanced AI data Extraction</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>AI summaries</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Expense categories and tags</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Advace export options</span>
                </li>

                <li className=" flex items-center">
                  <Check className=" text-green-500 h-5 w-5 mr-2" />
                  <span>Unlimited hostory</span>
                </li>
              </ul>
              <div className=" mt-6">
                <Link href="/manage-plan">
                  <Button className=" w-full bg-blue-600 hover:bg-blue-700 " >
                    Get started
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

<section className=" py-16 md:py-24">
  <div className=" container px-4 md:px-6 mx-auto">
    <div className=" text-center max-w-3xl mx-auto space-y-4">
      <div className=" space-y-2">
        <h2 className=" text-3xl font-bold tracking-tighter md:text-4xl">
            Start Scanning Receipts Today
        </h2>
        <p className=" text-gray-500 md:text-xl dark:text-gray-400">
               Join thousands of users who save time and gain insights from their receipts
        </p>
      </div>
    </div>
  </div>
</section>


<footer className=" border-t border-gray-200 dark:border-gray-800">
    <div className="container px-4 md:px-6 mx-auto py-8">
      <div className=" flex flex-col md:flex-row items-center justify-between ">
        <div className=" flex items-center space-x-1">
          <Shield className=" h-6 w-6 text-blue-600"/>
          <span className=" text-xl font-semibold">DatumDex</span>
        </div>
        <div className=" mt-4 md:mt-0">
          <p className=" text-sm text-gray-500 dark:text-gray-400">DatumDex. The smarter way to track your money</p>
        </div>
      </div>
    </div>
</footer>

    </div>
  );
}
