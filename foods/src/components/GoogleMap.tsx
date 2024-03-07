import { GoogleMapsEmbed } from '@next/third-parties/google'

export default function GoogleMaps() {
  return (
    // <GoogleMapsEmbed
    //   apiKey="XYZ"
    //   height={500}
    //   width="100%"
    //   mode="place"
    //   q="Brooklyn+Bridge,New+York,NY"
    // />
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106094.86511888819!2d-118.2385153278588!3d33.800323311584506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cae84099d759%3A0xa1003afac42a8faa!2z0JvQvtC90LMg0JHQuNGHLCDQmtCw0LvQuNGE0L7RgNC90LgsINCQ0LzQtdGA0LjQutC40LnQvSDQndGN0LPQtNGB0Y3QvSDQo9C70YE!5e0!3m2!1smn!2smn!4v1707274243828!5m2!1smn!2smn"
      width="100%"
      height="616"
      loading="lazy"
    ></iframe>
  )
}