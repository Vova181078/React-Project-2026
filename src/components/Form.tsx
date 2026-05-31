import type { FC } from "react";

interface Props {
    value: string;
    onChange: (value: string) => void;
}

const SearchForm: FC<Props> = ({ value, onChange }) => {

    return (
        <div>

            <input
                type="text" placeholder="Search movie..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

        </div>
    );
};

export default SearchForm;