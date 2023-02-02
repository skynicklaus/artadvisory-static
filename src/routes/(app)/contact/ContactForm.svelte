<script lang="ts">
	import 'iconify-icon';
</script>

<div class="mb-10 w-full bg-black/20 py-10 px-6 lg:px-12">
	<div class="text-center text-3xl font-bold text-gray-50">
		<h1>Get In Touch</h1>
	</div>
	<div class="font-spartan mt-3 text-center text-xl text-gray-50">
		<h3>Artadvisory Sdn. Bhd.</h3>
	</div>
	<div class="mt-14 grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
		<div class="">
			<div class="text-center">
				<iconify-icon icon="material-symbols:mail-outline" width="32" style="color: #F9FAFB;" />
			</div>
			<div class="font-spartan text-center text-gray-50">
				<p>support@artadvisory.art</p>
			</div>
		</div>
		<div class="font-spartan text-center text-gray-50">
			<div class="text-center">
				<iconify-icon icon="mdi:address-marker-outline" width="32" style="color: #F9FAFB;" />
			</div>
			<div class="font-spartan text-center text-gray-50">
				<p>88, Jalan Khaw Sim Bee</p>
			</div>
		</div>
		<div class="">
			<div class="text-center">
				<iconify-icon icon="eva:phone-call-outline" width="32" style="color: #F9FAFB;" />
			</div>
			<div class="font-spartan text-center text-gray-50">
				<p>011-5557 7789</p>
			</div>
		</div>
	</div>
	<form action="https://formsubmit.co/support@artadvisory.art" method="POST">
		<div class="grid grid-cols-1 gap-5 pt-20 lg:grid-cols-2 lg:gap-32">
			<div class="flex flex-col gap-5">
				<div class="">
					<label class="flex flex-col gap-1 lg:gap-3">
						<p class="text-sm text-gray-50 lg:text-lg">Your Name</p>
						<input
							class="w-full rounded-lg bg-transparent py-2 px-3 text-gray-50 outline outline-1 outline-gray-50/30 focus:outline-custom-primary-1 lg:py-4"
							name="name"
							type="text"
						/>
					</label>
				</div>
				<div class="">
					<label class="flex flex-col gap-1 lg:gap-3">
						<p class="text-sm text-gray-50 lg:text-lg">Email</p>
						<input
							class="w-full rounded-lg bg-transparent py-2 px-3 text-gray-50 outline outline-1 outline-gray-50/30 focus:outline-custom-primary-1 lg:py-4"
							name="email"
							type="text"
						/>
					</label>
				</div>
				<div class="">
					<label class="flex flex-col gap-1 lg:gap-3">
						<p class="text-sm text-gray-50 lg:text-lg">Phone No.</p>
						<input
							class="w-full rounded-lg bg-transparent py-2 px-3 text-gray-50 outline outline-1 outline-gray-50/30 focus:outline-custom-primary-1 lg:py-4"
							name="phone"
							type="text"
						/>
					</label>
				</div>
			</div>
			<div class="">
				<label class="flex flex-col gap-1 lg:h-full lg:gap-3">
					<p class="text-sm text-gray-50 lg:text-lg">Message</p>
					<textarea
						class="h-48 w-full resize-none rounded-lg bg-transparent py-2 px-3 text-gray-50 outline outline-1 outline-gray-50/30 focus:outline-custom-primary-1 lg:h-full lg:py-4"
						name="message"
					/>
				</label>
			</div>
		</div>
		<div class="mt-8 flex items-center justify-center lg:mt-12">
			<button
				class="font-spartan rounded bg-gradient-to-br from-custom-primary-1 to-custom-primary-2 py-4 px-8 lg:px-12"
				type="submit">Send Message</button
			>
		</div>
	</form>
</div>

<style>
	.font-spartan {
		font-family: 'League Spartan';
	}
</style>
