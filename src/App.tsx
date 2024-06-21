import { Header } from './components/header/header.component';
import {
	HeroSection,
	QuoteSection,
	ImageSection,
	WhyUsSection,
	HowItWorksSection,
	AwardsSection,
	ProductSection,
	ForHomeSection,
	ForOfficeSection,
	MilestonesSection,
	PartnershipsSection,
	MissionTeamSection,
	PressAboutUsSection,
	FrequentlyAskedQuestionsSection,
	ContactSection,
} from './sections';

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
			<ProductSection />
			<ForHomeSection />
			<ForOfficeSection />
			<MilestonesSection />
			<PartnershipsSection />
			<MissionTeamSection />
			<PressAboutUsSection />
			<FrequentlyAskedQuestionsSection />
			<ContactSection />
		</div>
	);
}

export default App;
