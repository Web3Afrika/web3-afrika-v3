import "odometer/themes/odometer-theme-default.css";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
const Odometer = lazy(() => import("react-odometerjs"));

const CountUp = ({ limit, format }: { limit: number; format: string }) => {
	const [value, setValue] = useState(0);
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.5 },
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (isVisible) {
			const timeoutId = setTimeout(() => setValue(limit), 200);
			return () => clearTimeout(timeoutId);
		}
	}, [isVisible]);

	return (
		<div ref={ref}>
			{isVisible ? (
				<Suspense fallback={<div>{value}</div>}>
					<Odometer value={value} format={format} />
				</Suspense>
			) : (
				<div>{value}</div>
			)}
		</div>
	);
};

export default CountUp;
