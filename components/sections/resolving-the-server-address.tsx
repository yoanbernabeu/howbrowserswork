import ExampleContainer from "../example-container";
import ResolveServerAddressExample from "../examples/resolve-server-address-example";
import Section from "../section";
import Highlight from "../highlight";

export default function ResolvingTheServerAddress() {
    return (
        <Section title="Resolving the server address">
            <p>
                Browsers can&apos;t send requests to names like{" "}
                <Highlight variant="slate">example.com</Highlight>.
            </p>
            <p>
                Computers talk to IP addresses, so the browser first asks the
                DNS system to resolve the domain name into an IP address before
                it can connect to the server and send the HTTP request.
            </p>
            <p>
                Type a domain name in the input and press <kbd>Enter</kbd> to
                resolve it into an IP address:
            </p>
            <ExampleContainer>
                <ResolveServerAddressExample />
            </ExampleContainer>
        </Section>
    );
}
