import Image from "next/image";
import puppies from "../../public/ten-reasons-why-you-shouldnt-get-a-puppy.jpeg";

export default function ImageBlock({caption, className, ...restProps}) {
	return (
		<figure
			className={`wp-block-image${className ? " " + className : ""}`}
			{...restProps}
		>
			<Image
				src={puppies}
				alt="Six husky puppies posed for a portrait"
				priority
			/>
			<figcaption
				dangerouslySetInnerHTML={{ __html: caption ? caption : "Adopt a pet" }}
			/>
		</figure>
	);
}