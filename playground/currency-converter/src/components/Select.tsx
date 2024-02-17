interface SelectProps {
    options: string[] | number[],
    onChange: (value: string) => void
}

export default function Select({options, onChange}: SelectProps) {
    
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            {options.map(option => (
                <option value={option} key={option}>{option}</option>
            ))}
        </select>
    );
}