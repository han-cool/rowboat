'use client';

import { useFormStatus } from "react-dom";
import { Button, ButtonProps } from "@heroui/react";

export function FormStatusButton({
    props
}: {
    props: ButtonProps;
}) {
    const { pending } = useFormStatus();

    return <Button {...props} isLoading={pending} />;
}