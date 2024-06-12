import { Header } from './components/header/header.component';
import { HeroSection, QuoteSection, ImageSection, WhyUsSection, HowItWorksSection, AwardsSection } from './sections';

function App() {
	return (
		<div>
			<Header />
			<HeroSection />
			<QuoteSection />
			<ImageSection />
			<WhyUsSection />
			<HowItWorksSection />
			<AwardsSection />
		</div>
	);
}

export default App;
