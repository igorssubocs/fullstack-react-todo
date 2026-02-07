import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/Footer"
import AppRoutes from "./routes/AppRouter";

export default function App() {
	return (
		<Router>
			<div className="grid min-h-screen grid-rows-[auto_1fr_auto] w-full bg-gray-100 text-gray-700">
				<Header />

				<main className="container mx-auto grid items-start py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 gap-10">
					<AppRoutes />
				</main>

				<Footer />
			</div>
		</Router>
	);
}