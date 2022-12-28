import Image from "next/image";
import puppies from "../../public/ten-reasons-why-you-shouldnt-get-a-puppy.jpeg";

export default function ImageBlock({className, ...restProps}) {
	return (
		<figure
			className={`wp-block-image${className ? " " + className : ""}`}
			{...restProps}
		>
			<Image src={puppies} alt="Six husky puppies posed for a portrait" />
			<figcaption>Adopt a pet</figcaption>
		</figure>
	);
}