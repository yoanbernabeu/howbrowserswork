import ExampleContainer from "@/components/example-container";
import Section from "@/components/section";
import HttpRequestResponseExample from "@/components/examples/http-request-response-example";

type SectionProps = {
    sectionId?: string;
    title?: string;
};

export default function HttpRequestAndResponse({
    sectionId = "http-request-and-response",
    title = "HTTP requests and responses",
}: SectionProps) {
    return (
        <Section id={sectionId} title={title}>
            <p>
                Once the TCP connection is established, the browser can send an
                HTTP request to the server.
            </p>
            <p>
                Click the "Go" button to watch the HTTP request travel to the
                server and the HTTP response return to the browser:
            </p>
            <ExampleContainer>
                <HttpRequestResponseExample />
            </ExampleContainer>
            <p>
                When the HTTP response arrives, the browser reads the raw HTTP
                response and starts rendering the HTML content.
            </p>
        </Section>
    );
}
