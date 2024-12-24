import { Stamp } from "./icons";

const StampedImage = ({
	src,
	alt,
	stampfill,
	className,
}: {
	src: string;
	alt: string;
	stampfill?: string;
	className?: string;
}) => {
	return (
		<div className="relative">
			<img src={src} alt={alt} className={`${className} object-cover`} />
			<Stamp className="absolute -bottom-3 -right-3 size-16" fill={stampfill} />
		</div>
	);
};

export default StampedImage;
