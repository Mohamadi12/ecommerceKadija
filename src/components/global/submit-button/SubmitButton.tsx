"use client";

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

export function SubmitButton({
  buttonText = "Create Product",
  className = "",
}) {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center ${className}`}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        buttonText
      )}
    </Button>
  );
}

export function ShoppingBagButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full mt-5">
      {pending ? (
        <>
          <Loader2 className="mr-4 h-5 w-5 animate-spin" />
          Please Wait
        </>
      ) : (
        <>
          <ShoppingBag className="mr-4 h-5 w-5" />
          Add to Cart
        </>
      )}
    </Button>
  );
}
