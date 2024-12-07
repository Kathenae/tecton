import { Command, CommandGroup, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { ChevronsUpDown } from "lucide-react"

interface DataSelectProps<T extends object> {
    data: T[]
    value?: string
    placeholder?: string
    disabled?: boolean
    emptyLabel?: string,
    onEmptyClicked?: () => void,
    onChange?: (value: string) => void
    dataKey: (item: T) => string | number
    dataLabel: (item: T) => string | number
    dataSearchKey: (item: T) => string
    onSelected: (item: T) => void
}

export default function DataSelect<T extends object>({ data, value, placeholder, disabled, emptyLabel, onEmptyClicked, onChange, dataKey, dataLabel, dataSearchKey, onSelected }: DataSelectProps<T>) {
    const [open, setOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState(value ?? '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.currentTarget.value)
        if (onChange) {
            onChange(e.currentTarget.value)
        }
    }

    const handleSelect = (item: T) => {
        onSelected(item)
        setOpen(false)
    }

    return (
        <div className="w-full relative">
            <Input
                className="pr-8"
                onFocus={() => setOpen(true)}
                onBlur={() => setTimeout(() => setOpen(false), 350)}
                type="text" placeholder={placeholder ?? ''}
                value={value ?? searchQuery}
                onChange={handleChange}
                disabled={disabled}
            />
            <ChevronsUpDown className="h-4 w-4 absolute text-muted-foreground top-[0.65rem] right-3" />
            <div className={cn("absolute top-9 z-10 w-full", !open && 'hidden')}>
                <Command className="shadow-lg rounded-md rounded-t-none border" >
                    <CommandInput value={value ?? searchQuery} className="hidden" />
                    <CommandList>
                        <CommandEmpty onClick={() => onEmptyClicked && onEmptyClicked()}>
                            {emptyLabel ?? 'No results found.'}
                        </CommandEmpty>
                        <CommandGroup>
                            {data.map((item) => (
                                <CommandItem
                                    key={dataKey(item)}
                                    value={dataSearchKey(item)}
                                    onSelect={() => handleSelect(item)}
                                >
                                    {dataLabel(item)}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </div>
    )
}