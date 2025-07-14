import './LocationTagsMobile.css'

export interface LocationTagsMobileProps {
    tags: Array<string>
}

export const LocationTagsMobile = (props: LocationTagsMobileProps) => {
    return (
        <div className='tags-location-mobile'>
            {props.tags.map(tag => { return (
                <a href={`#${tag}`}>#{tag}</a>
            )})}
        </div>
    );
}