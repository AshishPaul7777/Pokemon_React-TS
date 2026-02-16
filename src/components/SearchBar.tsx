interface Props {
    value: string
    onChange: (value: string) => void
  }
  
  export const SearchBar = ({ value, onChange }: Props) => {
    return (
      <div className="pokemon-search">
        <input
          type="text"
          placeholder="search Pokemon"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    )
  }