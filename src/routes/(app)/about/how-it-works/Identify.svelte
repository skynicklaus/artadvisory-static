<script lang="ts">
	import Christies from '$lib/images/Christies.webp';
</script>

<div class="container mx-auto px-4 pt-20 pb-10 md:px-12 lg:px-12 lg:pt-28 lg:pb-10">
	<div class="lg:flex">
		<div class="flex-half flex flex-col gap-4 lg:justify-center lg:pr-14">
			<div
				class="text-3xl font-bold text-gray-50 sm:mx-auto sm:w-2/3 sm:text-center lg:mx-0 lg:w-4/6 lg:text-left"
			>
				<h1>Find the artists who are gaining traction.</h1>
			</div>
			<div class="text-gray-50 sm:mx-auto sm:w-2/3 sm:text-center lg:mx-0 lg:w-auto lg:text-left">
				<p>
					To determine which artist markets are expanding swiftly and have the most alluring past
					price appreciation rates, we analyse a proprietary data set.
				</p>
			</div>
		</div>
		<div class="flex-half mx-auto mt-12 max-w-sm sm:max-w-md lg:mt-0">
			<div
				class="relative z-20 after:absolute after:top-0 after:-z-10 after:mt-3 after:-ml-3 after:h-full after:w-full after:rounded-md after:bg-[#292728] sm:ml-6 sm:before:absolute sm:before:-z-20 sm:before:-ml-24 sm:before:h-20 sm:before:w-20 sm:before:rounded-full sm:before:bg-custom-primary-1/60 sm:after:mt-12 sm:after:-ml-12 xl:mb-14 xl:before:-ml-32 xl:before:mt-12 xl:after:-ml-24 xl:after:mt-20"
			>
				<div
					class="relative before:absolute before:right-0 before:-mt-3 before:-mr-3 before:h-8 before:w-8 before:rounded-md before:bg-custom-primary-1/30 sm:before:-mt-7 sm:before:-mr-7 sm:before:h-16 sm:before:w-16 sm:after:absolute sm:after:bottom-0 sm:after:right-0 sm:after:-z-20 sm:after:-mr-5 sm:after:-mb-12 sm:after:h-20 sm:after:w-20 sm:after:rounded-full sm:after:bg-custom-primary-1/60"
				>
					<img class="aspect-43 rounded-md" src={Christies} alt="Christies" />
				</div>
			</div>
		</div>
	</div>
</div>
