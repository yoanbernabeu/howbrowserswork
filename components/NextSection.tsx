import ExampleContainer from "./example-container";
import Section from "./section";

export default function NextSection() {
    return (
        <Section title="Next Section">
            <p>A temporary section to prototype and write faster.</p>
            <ExampleContainer>
                <div>Example</div>
            </ExampleContainer>
        </Section>
    );
}
