# \ReservationAPI

All URIs are relative to */rsv/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeReservationLocators**](ReservationAPI.md#ChangeReservationLocators) | **Put** /hotels/{hotelId}/reservations/{reservationId}/guestLocators/{locatorId} | Change Reservation Guest Locators
[**DeleteCancellationPolicy**](ReservationAPI.md#DeleteCancellationPolicy) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/cancellationPolicies | Delete a Cancellation policy
[**DeleteDepositPolicy**](ReservationAPI.md#DeleteDepositPolicy) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/depositPolicies | Delete deposit policy
[**DeleteECoupons**](ReservationAPI.md#DeleteECoupons) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/eCoupons | Delete Reservation ECoupons
[**DeleteGuestMessages**](ReservationAPI.md#DeleteGuestMessages) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/guestMessages/{guestMessageId} | Delete guest messages
[**DeleteMasterAccount**](ReservationAPI.md#DeleteMasterAccount) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/masterAccount | Cancel Master Account
[**DeletePaymentMethods**](ReservationAPI.md#DeletePaymentMethods) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods | Delete a payment method 
[**DeletePreCheckInReservation**](ReservationAPI.md#DeletePreCheckInReservation) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/preCheckIn | Revert a PreCheckIn Reservation
[**DeleteRefundTickets**](ReservationAPI.md#DeleteRefundTickets) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/tickets/refund | Refund Reservation tickets
[**DeleteReservationAttachment**](ReservationAPI.md#DeleteReservationAttachment) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/attachments/{attachmentId} | Delete Reservation attachments
[**DeleteReservationCertificate**](ReservationAPI.md#DeleteReservationCertificate) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/certificates | Detach Certificate
[**DeleteReservationLinks**](ReservationAPI.md#DeleteReservationLinks) | **Delete** /hotels/{hotelId}/reservations/linkedReservations/{reservationId} | Remove Reservation Links
[**DeleteReservationLinksByChain**](ReservationAPI.md#DeleteReservationLinksByChain) | **Delete** /reservations/linkedReservations/{reservationId} | Remove Reservation Links By Chain
[**DeleteReservationLinksByExtId**](ReservationAPI.md#DeleteReservationLinksByExtId) | **Delete** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/linkedReservations/{reservationExternalId} | Remove Reservation Links
[**DeleteReservationLocators**](ReservationAPI.md#DeleteReservationLocators) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/guestLocators/{locatorId} | Remove Reservation Locators
[**DeleteReservationLock**](ReservationAPI.md#DeleteReservationLock) | **Delete** /hotels/{hotelId}/locks/{lockHandle} | Release Reservation Lock
[**DeleteReservationMembership**](ReservationAPI.md#DeleteReservationMembership) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/memberships | Delete a Reservation membership
[**DeleteReservationPackage**](ReservationAPI.md#DeleteReservationPackage) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/packages | Delete a package from a Reservation
[**DeleteReservationPreference**](ReservationAPI.md#DeleteReservationPreference) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/preferences/{preferenceCode} | Delete a Reservation Preference
[**DeleteReservedInventoryItems**](ReservationAPI.md#DeleteReservedInventoryItems) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/inventoryItems | Delete Reserved Inventory Items
[**DeleteRoutingInstructions**](ReservationAPI.md#DeleteRoutingInstructions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions | Delete routing instructions
[**DeleteSellMessageConfig**](ReservationAPI.md#DeleteSellMessageConfig) | **Delete** /hotels/{hotelId}/sellMessages/config | Delete sell message
[**DeleteSellMessageConfigByChain**](ReservationAPI.md#DeleteSellMessageConfigByChain) | **Delete** /sellMessages/config | Delete sell message by chain
[**DeleteShareReservation**](ReservationAPI.md#DeleteShareReservation) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/shares | Separate share Reservations
[**DeleteShareReservationByExtId**](ReservationAPI.md#DeleteShareReservationByExtId) | **Delete** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/shares | Separate share Reservations
[**DeleteTickets**](ReservationAPI.md#DeleteTickets) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/tickets | Delete tickets
[**DeleteTransactionDiversions**](ReservationAPI.md#DeleteTransactionDiversions) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/transactionDiversions | Delete Transaction Diversions 
[**DeleteUpsell**](ReservationAPI.md#DeleteUpsell) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/upsell | Delete a Reservation Upsell
[**GetAlertNotices**](ReservationAPI.md#GetAlertNotices) | **Get** /hotels/{hotelId}/reservations/{reservationId}/alerts | Fetch Alert Notices
[**GetAwardUpgrades**](ReservationAPI.md#GetAwardUpgrades) | **Get** /hotels/{hotelId}/awardUpgrades | Get Award Upgrades
[**GetAwards**](ReservationAPI.md#GetAwards) | **Get** /hotels/{hotelId}/awards | Fetch Awards
[**GetCallHistory**](ReservationAPI.md#GetCallHistory) | **Get** /hotels/{hotelId}/reservations/{reservationId}/calls | Get the Reservation Call History
[**GetCallStatistics**](ReservationAPI.md#GetCallStatistics) | **Get** /calls/statistics | Get call statistics
[**GetCancellationHistory**](ReservationAPI.md#GetCancellationHistory) | **Get** /hotels/{hotelId}/reservations/{reservationId}/cancellationHistory | Get cancellation history
[**GetConfirmationLetters**](ReservationAPI.md#GetConfirmationLetters) | **Get** /hotels/{hotelId}/confirmationLetters | Fetch Confirmation Letters
[**GetECoupons**](ReservationAPI.md#GetECoupons) | **Get** /hotels/{hotelId}/reservations/{reservationId}/eCoupons | Get Reservation Ecoupons
[**GetExternalSystemDeliveryHistory**](ReservationAPI.md#GetExternalSystemDeliveryHistory) | **Get** /hotels/{hotelId}/fetchExternalSystemDeliveryHistory | Get External system delivery history
[**GetExternalSystemReservations**](ReservationAPI.md#GetExternalSystemReservations) | **Get** /externalSystems/{extSystemCode}/reservations | Get Reservations for a hotel
[**GetFutureReservationsOrBlocks**](ReservationAPI.md#GetFutureReservationsOrBlocks) | **Get** /profiles/{profileId}/reservations | Get Future Reservations on a profile
[**GetGuestMessages**](ReservationAPI.md#GetGuestMessages) | **Get** /hotels/{hotelId}/guestMessages | Get guest messages
[**GetHotelReservations**](ReservationAPI.md#GetHotelReservations) | **Get** /hotels/{hotelId}/reservations | Get and search for reservations in a hotel
[**GetLinkedReservations**](ReservationAPI.md#GetLinkedReservations) | **Get** /hotels/{hotelId}/reservations/{reservationId}/linked | Get linked Reservations 
[**GetLinkedReservationsSummary**](ReservationAPI.md#GetLinkedReservationsSummary) | **Get** /hotels/{hotelId}/reservations/{reservationId}/linkedSummary | Get Reservation summary for linked Reservation
[**GetPackage**](ReservationAPI.md#GetPackage) | **Get** /hotels/{hotelId}/reservations/{reservationId}/packages | Get Package
[**GetPaymentMethods**](ReservationAPI.md#GetPaymentMethods) | **Get** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods | Get a payment method 
[**GetPreArrivalMemberReservations**](ReservationAPI.md#GetPreArrivalMemberReservations) | **Get** /hotels/{hotelId}/preArrivalMembersReservations | Get preArrival Member Reservations
[**GetPreConfiguredRoutingInstructions**](ReservationAPI.md#GetPreConfiguredRoutingInstructions) | **Get** /hotels/{hotelId}/preConfiguredRoutingInstructions | Get pre-Configured Routing Instructions
[**GetRateInfo**](ReservationAPI.md#GetRateInfo) | **Get** /hotels/{hotelId}/reservations/rateInfo | Get rate information
[**GetRecentlyAccessedReservations**](ReservationAPI.md#GetRecentlyAccessedReservations) | **Get** /recentlyAccessedReservations | Get recently accessed Reservations
[**GetReprintTickets**](ReservationAPI.md#GetReprintTickets) | **Get** /hotels/{hotelId}/reservations/{reservationId}/tickets/reprint | Reprints Reservation tickets
[**GetReservation**](ReservationAPI.md#GetReservation) | **Get** /hotels/{hotelId}/reservations/{reservationId} | Get reservation by ID
[**GetReservationActivityLog**](ReservationAPI.md#GetReservationActivityLog) | **Get** /hotels/{hotelId}/reservations/activityLog | Fetch reservation activity log
[**GetReservationAttachments**](ReservationAPI.md#GetReservationAttachments) | **Get** /hotels/{hotelId}/reservations/{reservationId}/attachments | Get Reservation attachments
[**GetReservationByExtId**](ReservationAPI.md#GetReservationByExtId) | **Get** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId} | Get reservation by external ID
[**GetReservationExcludedPreferences**](ReservationAPI.md#GetReservationExcludedPreferences) | **Get** /hotels/{hotelId}/reservations/{reservationId}/excludedPreferences | Fetch Reservation excluded preferences
[**GetReservationIndicators**](ReservationAPI.md#GetReservationIndicators) | **Get** /reservations/indicators | Get Reservation indicators
[**GetReservationLocators**](ReservationAPI.md#GetReservationLocators) | **Get** /hotels/{hotelId}/reservations/{reservationId}/guestLocators | Fetch Reservation Guest Locator
[**GetReservationPolicies**](ReservationAPI.md#GetReservationPolicies) | **Get** /hotels/{hotelId}/reservations/{reservationId}/policies | Get reservation cancel and deposit policies
[**GetReservationPreference**](ReservationAPI.md#GetReservationPreference) | **Get** /hotels/{hotelId}/reservations/{reservationId}/preferences | Get Reservation Preferences
[**GetReservationUpsellInfo**](ReservationAPI.md#GetReservationUpsellInfo) | **Get** /hotels/{hotelId}/reservations/{reservationId}/upsell | Get available Upsell offers
[**GetReservations**](ReservationAPI.md#GetReservations) | **Get** /reservations | Get Reservations for a hotel
[**GetReservationsSummary**](ReservationAPI.md#GetReservationsSummary) | **Get** /hotels/{hotelId}/reservations/summary | Get brief summary for Reservations
[**GetReservationsToShareByProfileId**](ReservationAPI.md#GetReservationsToShareByProfileId) | **Get** /hotels/{hotelId}/profiles/{profileIdtoShare}/share | Get Reservations to share 
[**GetReservationsToShareByReservationId**](ReservationAPI.md#GetReservationsToShareByReservationId) | **Get** /hotels/{hotelId}/reservations/{reservationIdtoShare}/share | Get Reservations to share by Reservation id
[**GetReservedInventoryItems**](ReservationAPI.md#GetReservedInventoryItems) | **Get** /hotels/{hotelId}/reservations/{reservationId}/inventoryItems | Get Reserved Inventory Items 
[**GetRoomCalendar**](ReservationAPI.md#GetRoomCalendar) | **Get** /hotels/{hotelId}/roomCalendar | Get the room calendar
[**GetRoutingInstructions**](ReservationAPI.md#GetRoutingInstructions) | **Get** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions | Get routing instructions
[**GetScript**](ReservationAPI.md#GetScript) | **Get** /hotels/{hotelId}/script | Get a script
[**GetSellMessageConfig**](ReservationAPI.md#GetSellMessageConfig) | **Get** /hotels/{hotelId}/sellMessages/config | Get sell messages 
[**GetSellMessageConfigByChain**](ReservationAPI.md#GetSellMessageConfigByChain) | **Get** /sellMessages/config | Get sell messages by chain
[**GetSellMessages**](ReservationAPI.md#GetSellMessages) | **Get** /sellMessages | Get sell messages
[**GetShareReservations**](ReservationAPI.md#GetShareReservations) | **Get** /hotels/{hotelId}/reservations/{reservationId}/shares | Get share Reservations
[**GetShareReservationsByExtId**](ReservationAPI.md#GetShareReservationsByExtId) | **Get** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/shares | Get share Reservations
[**GetTickets**](ReservationAPI.md#GetTickets) | **Get** /hotels/{hotelId}/reservations/{reservationId}/tickets | Get tickets
[**GetTicketsInquiry**](ReservationAPI.md#GetTicketsInquiry) | **Get** /hotels/{hotelId}/reservations/{reservationId}/tickets/inquiry | Inquiry for Reservation tickets
[**GetTracesByReservation**](ReservationAPI.md#GetTracesByReservation) | **Get** /hotels/{hotelId}/reservations/{reservationId}/traces | Get traces for a Reservation
[**GetTracesByRoom**](ReservationAPI.md#GetTracesByRoom) | **Get** /hotels/{hotelId}/rooms/{roomId}/traces | Get traces for a Room
[**GetTransactionDiversions**](ReservationAPI.md#GetTransactionDiversions) | **Get** /hotels/{hotelId}/reservations/{reservationId}/transactionDiversions | Get Transaction Diversions 
[**GetUpgradeEligibilityReservations**](ReservationAPI.md#GetUpgradeEligibilityReservations) | **Get** /hotels/{hotelId}/upgradeEligibleReservations | Fetch Reservations Eligible for an Upgrade
[**MergeReservations**](ReservationAPI.md#MergeReservations) | **Put** /hotels/{hotelId}/reservations/{reservationId}/mergeReservations | Merge multiple Reservations
[**PostBreakReservationLock**](ReservationAPI.md#PostBreakReservationLock) | **Post** /hotels/{hotelId}/reservations/{reservationId}/locks/break | Break Reservation lock
[**PostBulkReservationAlerts**](ReservationAPI.md#PostBulkReservationAlerts) | **Post** /hotels/{hotelId}/reservations/alerts | Create Bulk Reservation Alerts
[**PostCall**](ReservationAPI.md#PostCall) | **Post** /calls | Register calls
[**PostCancelReservation**](ReservationAPI.md#PostCancelReservation) | **Post** /hotels/{hotelId}/reservations/{reservationId}/cancellations | Cancel Reservation by ID
[**PostCancelReservationByExtId**](ReservationAPI.md#PostCancelReservationByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/cancellations | Cancel Reservation by ID
[**PostCancelReservations**](ReservationAPI.md#PostCancelReservations) | **Post** /hotels/{hotelId}/reservations/cancellations | Cancel Reservations 
[**PostCancelShareReservation**](ReservationAPI.md#PostCancelShareReservation) | **Post** /hotels/{hotelId}/reservations/reservationCancellations | Cancel reservations
[**PostCancellationPolicy**](ReservationAPI.md#PostCancellationPolicy) | **Post** /hotels/{hotelId}/reservations/{reservationId}/cancellationPolicies | Create a Cancellation policy
[**PostCombineShareReservations**](ReservationAPI.md#PostCombineShareReservations) | **Post** /hotels/{hotelId}/reservations/{reservationId}/shares | Combine Share Reservations
[**PostCombineShareReservationsByExtId**](ReservationAPI.md#PostCombineShareReservationsByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/shares | Combine Share Reservations
[**PostConfirmationLetters**](ReservationAPI.md#PostConfirmationLetters) | **Post** /hotels/{hotelId}/confirmationLetters | Create the confirmation letters
[**PostDepositPolicy**](ReservationAPI.md#PostDepositPolicy) | **Post** /hotels/{hotelId}/reservations/{reservationId}/depositPolicies | Create deposit policy
[**PostECoupons**](ReservationAPI.md#PostECoupons) | **Post** /hotels/{hotelId}/reservations/{reservationId}/eCoupons | Create Reservation ECoupon
[**PostGuestMessages**](ReservationAPI.md#PostGuestMessages) | **Post** /hotels/{hotelId}/reservations/{reservationId}/guestMessages | Create guest messages
[**PostIssueTickets**](ReservationAPI.md#PostIssueTickets) | **Post** /hotels/{hotelId}/reservations/{reservationId}/tickets/issue | Issue Reservation tickets
[**PostMasterAccount**](ReservationAPI.md#PostMasterAccount) | **Post** /hotels/{hotelId}/reservations/{reservationId}/masterAccount | Create a Master Account
[**PostPaymentMethods**](ReservationAPI.md#PostPaymentMethods) | **Post** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods | Create a payment method 
[**PostPreCheckInReservation**](ReservationAPI.md#PostPreCheckInReservation) | **Post** /hotels/{hotelId}/reservations/{reservationId}/preCheckIn | Pre-Checkin a Reservation
[**PostReservation**](ReservationAPI.md#PostReservation) | **Post** /hotels/{hotelId}/reservations | Create Reservation
[**PostReservationByBlock**](ReservationAPI.md#PostReservationByBlock) | **Post** /hotels/{hotelId}/blocks/{blockId}/reservations | Create Reservation for a Block
[**PostReservationCertificate**](ReservationAPI.md#PostReservationCertificate) | **Post** /hotels/{hotelId}/reservations/{reservationId}/certificates | Attach Certificate
[**PostReservationCopy**](ReservationAPI.md#PostReservationCopy) | **Post** /hotels/{hotelId}/reservations/{reservationId}/copy | Copy a Reservation
[**PostReservationLinks**](ReservationAPI.md#PostReservationLinks) | **Post** /hotels/{hotelId}/reservations/linkedReservations/{reservationId} | Link Reservations
[**PostReservationLinksByChain**](ReservationAPI.md#PostReservationLinksByChain) | **Post** /reservations/linkedReservations/{reservationId} | Link Reservations By Chain
[**PostReservationLinksByExtId**](ReservationAPI.md#PostReservationLinksByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/linkedReservations/{reservationExternalId} | Link Reservations
[**PostReservationLocators**](ReservationAPI.md#PostReservationLocators) | **Post** /hotels/{hotelId}/reservations/{reservationId}/guestLocators | Create Reservation Guest Locator
[**PostReservationMembership**](ReservationAPI.md#PostReservationMembership) | **Post** /hotels/{hotelId}/reservations/{reservationId}/memberships | Create a Reservation membership
[**PostReservationPackage**](ReservationAPI.md#PostReservationPackage) | **Post** /hotels/{hotelId}/reservations/{reservationId}/packages | Add a package to a Reservation
[**PostReservationPreference**](ReservationAPI.md#PostReservationPreference) | **Post** /hotels/{hotelId}/reservations/{reservationId}/preferences | Add a preference to a Reservation
[**PostReserveInventoryItems**](ReservationAPI.md#PostReserveInventoryItems) | **Post** /hotels/{hotelId}/reservations/{reservationId}/inventoryItems | Reserve Reservation inventory items
[**PostReverseDepositPolicy**](ReservationAPI.md#PostReverseDepositPolicy) | **Post** /hotels/{hotelId}/reservations/{reservationId}/reverseDepositPolicy/{policyId} | Reverse a deposit policy
[**PostRoutingInstructions**](ReservationAPI.md#PostRoutingInstructions) | **Post** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions | Create routing instructions for a reservation
[**PostRoutingInstructionsByExtId**](ReservationAPI.md#PostRoutingInstructionsByExtId) | **Post** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/routingInstructions | Create routing instructions
[**PostSellMessageConfig**](ReservationAPI.md#PostSellMessageConfig) | **Post** /hotels/{hotelId}/sellMessages/config | Create sell message
[**PostSellMessageConfigByChain**](ReservationAPI.md#PostSellMessageConfigByChain) | **Post** /sellMessages/config | Create sell message by chain
[**PostTickets**](ReservationAPI.md#PostTickets) | **Post** /hotels/{hotelId}/reservations/{reservationId}/tickets | Create tickets
[**PostTransactionDiversions**](ReservationAPI.md#PostTransactionDiversions) | **Post** /hotels/{hotelId}/reservations/{reservationId}/transactionDiversions | Create Transaction Diversions 
[**PostTurnawayReservation**](ReservationAPI.md#PostTurnawayReservation) | **Post** /hotels/{hotelId}/turnaways | Register Turnaway
[**PostUpsellReservation**](ReservationAPI.md#PostUpsellReservation) | **Post** /hotels/{hotelId}/reservations/{reservationId}/upsell | Upsell a Reservation
[**PutAcquireReservationLock**](ReservationAPI.md#PutAcquireReservationLock) | **Put** /hotels/{hotelId}/reservations/{reservationId}/locks | Acquire Reservation Lock
[**PutBreakShareValidations**](ReservationAPI.md#PutBreakShareValidations) | **Put** /hotels/{hotelId}/reservations/{reservationId}/breakshares/action/validate | Validate before breaking a share Reservation
[**PutCancellationPolicy**](ReservationAPI.md#PutCancellationPolicy) | **Put** /hotels/{hotelId}/cancellationPolicies | Change a Cancellation policy
[**PutCombineShareValidations**](ReservationAPI.md#PutCombineShareValidations) | **Put** /hotels/{hotelId}/reservations/{reservationId}/combineshares/action/validate | Combine Share Validations
[**PutComputeCancellationPolicies**](ReservationAPI.md#PutComputeCancellationPolicies) | **Put** /hotels/{hotelId}/reservations/{reservationId}/cancellationPolicies | Compute the cancellation policies
[**PutComputeDepositPolicies**](ReservationAPI.md#PutComputeDepositPolicies) | **Put** /hotels/{hotelId}/reservations/{reservationId}/depositPolicies | Computes the deposit policies
[**PutDepositPolicy**](ReservationAPI.md#PutDepositPolicy) | **Put** /hotels/{hotelId}/depositPolicies | Change deposit policy
[**PutECoupons**](ReservationAPI.md#PutECoupons) | **Put** /hotels/{hotelId}/reservations/{reservationId}/eCoupons | Change Reservation Ecoupon
[**PutGuestMessages**](ReservationAPI.md#PutGuestMessages) | **Put** /hotels/{hotelId}/reservations/{reservationId}/guestMessages/{guestMessageId} | Change guest Message  
[**PutMasterAccount**](ReservationAPI.md#PutMasterAccount) | **Put** /hotels/{hotelId}/reservations/{reservationId}/masterAccount | Change a Master Account
[**PutPaymentMethods**](ReservationAPI.md#PutPaymentMethods) | **Put** /hotels/{hotelId}/reservations/{reservationId}/paymentMethods | Change a payment method 
[**PutReinstateReservation**](ReservationAPI.md#PutReinstateReservation) | **Put** /hotels/{hotelId}/reservations/{reservationId}/cancellations | Reinstate a Reservation
[**PutReinstateReservationByExtId**](ReservationAPI.md#PutReinstateReservationByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/cancellations | Reinstate a Reservation
[**PutReservation**](ReservationAPI.md#PutReservation) | **Put** /hotels/{hotelId}/reservations/{reservationId} | Update Reservation by ID
[**PutReservationByExtId**](ReservationAPI.md#PutReservationByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId} | Update Reservation by ID
[**PutReservationDailyRateDetailValidation**](ReservationAPI.md#PutReservationDailyRateDetailValidation) | **Put** /hotels/{hotelId}/reservations/{reservationId}/dailyRates/action/validate | Validate daily rate details change
[**PutReservationHeaderValidation**](ReservationAPI.md#PutReservationHeaderValidation) | **Put** /hotels/{hotelId}/reservations/{reservationId}/header/action/validate | Validate Reservation header change
[**PutReservationHotelMove**](ReservationAPI.md#PutReservationHotelMove) | **Put** /hotels/{hotelId}/reservations/{reservationId}/move | Move the Reservation 
[**PutReservationLock**](ReservationAPI.md#PutReservationLock) | **Put** /hotels/{hotelId}/locks/{lockHandle} | Extend Reservation Lock
[**PutReservationPackage**](ReservationAPI.md#PutReservationPackage) | **Put** /hotels/{hotelId}/reservations/{reservationId}/packages | Update a package on a Reservation
[**PutReservationPreference**](ReservationAPI.md#PutReservationPreference) | **Put** /hotels/{hotelId}/reservations/{reservationId}/preferences/{preferenceCode} | Change a Reservation Preference
[**PutReservationsUpgradeEligibility**](ReservationAPI.md#PutReservationsUpgradeEligibility) | **Put** /hotels/{hotelId}/reservations/{reservationId}/upgradeEligibleReservations | Set Upgrade Eligibility for Reservations
[**PutReservedInventoryItems**](ReservationAPI.md#PutReservedInventoryItems) | **Put** /hotels/{hotelId}/reservations/{reservationId}/inventoryItems | Change reserved Inventory Items 
[**PutResvGuestMessages**](ReservationAPI.md#PutResvGuestMessages) | **Put** /hotels/{hotelId}/reservations/{reservationId}/guestMessages | Change Reservation Guest Messages
[**PutRoutingInstructions**](ReservationAPI.md#PutRoutingInstructions) | **Put** /hotels/{hotelId}/reservations/{reservationId}/routingInstructions | Change routing instructions
[**PutRoutingInstructionsByExtId**](ReservationAPI.md#PutRoutingInstructionsByExtId) | **Put** /hotels/{hotelId}/externalSystems/{externalSystemCode}/reservations/{reservationExternalId}/routingInstructions | Change routing instructions
[**PutSellMessageConfig**](ReservationAPI.md#PutSellMessageConfig) | **Put** /hotels/{hotelId}/sellMessages/config | Change sell message
[**PutSellMessageConfigByChain**](ReservationAPI.md#PutSellMessageConfigByChain) | **Put** /sellMessages/config | Change sell message by chain
[**PutShareRateAmount**](ReservationAPI.md#PutShareRateAmount) | **Put** /hotels/{hotelId}/reservations/{reservationId}/shareRateAmount | Change Share Rate Amount
[**PutSharingGuests**](ReservationAPI.md#PutSharingGuests) | **Put** /hotels/{hotelId}/reservations/{reservationId}/sharedGuestCount | Change Sharing Guests
[**PutSplitMultiRoomReservation**](ReservationAPI.md#PutSplitMultiRoomReservation) | **Put** /reservations/{reservationId}/split | Split multi room Reservation
[**PutTickets**](ReservationAPI.md#PutTickets) | **Put** /hotels/{hotelId}/reservations/{reservationId}/tickets | Change tickets
[**PutTransactionDiversions**](ReservationAPI.md#PutTransactionDiversions) | **Put** /hotels/{hotelId}/reservations/{reservationId}/transactionDiversions | Change Transaction Diversions 
[**PutValidateOverlappingStay**](ReservationAPI.md#PutValidateOverlappingStay) | **Put** /hotels/{hotelId}/reservations/{reservationId}/stay/action/validate | Check overlapping stay
[**PutValidateOverlappingStays**](ReservationAPI.md#PutValidateOverlappingStays) | **Put** /hotels/{hotelId}/stay/action/validate | Check overlapping stay
[**PutValidateReservationChanges**](ReservationAPI.md#PutValidateReservationChanges) | **Put** /hotels/{hotelId}/reservations/validations | Validate Reservation Change
[**ValidateRateInfo**](ReservationAPI.md#ValidateRateInfo) | **Put** /hotels/{hotelId}/rateInfoValidation | Validate rate information



## ChangeReservationLocators

> ReservationLocatorsStatus ChangeReservationLocators(ctx, locatorId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLocatorsInfo(reservationLocatorsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Reservation Guest Locators



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    locatorId := "locatorId_example" // string | 
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationLocatorsInfo := *openapiclient.NewReservationLocatorsInfo() // ReservationLocatorsInfo | Request object for changing hotel Notes for hotels.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.ChangeReservationLocators(context.Background(), locatorId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLocatorsInfo(reservationLocatorsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.ChangeReservationLocators``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeReservationLocators`: ReservationLocatorsStatus
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.ChangeReservationLocators`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**locatorId** | **string** |  | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeReservationLocatorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationLocatorsInfo** | [**ReservationLocatorsInfo**](ReservationLocatorsInfo.md) | Request object for changing hotel Notes for hotels. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationLocatorsStatus**](ReservationLocatorsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteCancellationPolicy

> Status DeleteCancellationPolicy(ctx, reservationId, hotelId).PolicyId(policyId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Cancellation policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    policyId := "policyId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteCancellationPolicy(context.Background(), reservationId, hotelId).PolicyId(policyId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **policyId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteDepositPolicy

> Status DeleteDepositPolicy(ctx, reservationId, hotelId).PolicyId(policyId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    policyId := "policyId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteDepositPolicy(context.Background(), reservationId, hotelId).PolicyId(policyId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **policyId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteECoupons

> Status DeleteECoupons(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponId(eCouponId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Reservation ECoupons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCouponId := "eCouponId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteECoupons(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponId(eCouponId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteECoupons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteECoupons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteECoupons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteECouponsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCouponId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteGuestMessages

> Status DeleteGuestMessages(ctx, guestMessageId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete guest messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    guestMessageId := "guestMessageId_example" // string | Guest Message Id
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteGuestMessages(context.Background(), guestMessageId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGuestMessages`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestMessageId** | **string** | Guest Message Id | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMasterAccount

> Status DeleteMasterAccount(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel Master Account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteMasterAccount(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteMasterAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMasterAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteMasterAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMasterAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeletePaymentMethods

> Status DeletePaymentMethods(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a payment method 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeletePaymentMethods(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeletePaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePaymentMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeletePaymentMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeletePreCheckInReservation

> Status DeletePreCheckInReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ResvIDExtension(resvIDExtension).ArrivalTime(arrivalTime).RoomNumber(roomNumber).GuestPreferredCurrency(guestPreferredCurrency).AllowMobileViewFolio(allowMobileViewFolio).PaymentMethodDescription(paymentMethodDescription).PaymentMethodFolioView(paymentMethodFolioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).CardIdIDExtension(cardIdIDExtension).CardIdIDContext(cardIdIDContext).CardIdType(cardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).AuthorizedAmountCurrencyCode(authorizedAmountCurrencyCode).ApprovalAmountNeeded(approvalAmountNeeded).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).AuthorizationRuleCode(authorizationRuleCode).AuthorizationRuleAmount(authorizationRuleAmount).AuthorizationRuleCurrencyCode(authorizationRuleCurrencyCode).AuthorizationRulePercent(authorizationRulePercent).EmailFolio(emailFolio).EmailFolioID(emailFolioID).EmailFolioIDExtension(emailFolioIDExtension).EmailFolioIDContext(emailFolioIDContext).EmailFolioIDType(emailFolioIDType).EmailFolioCreateDateTime(emailFolioCreateDateTime).EmailFolioCreatorID(emailFolioCreatorID).EmailFolioEmailAddress(emailFolioEmailAddress).EmailFolioEmailFormat(emailFolioEmailFormat).EmailFolioLastModifierID(emailFolioLastModifierID).EmailFolioLastModifyDateTime(emailFolioLastModifyDateTime).EmailFolioOrderSequence(emailFolioOrderSequence).EmailFolioPrimaryInd(emailFolioPrimaryInd).EmailFolioPurgeDate(emailFolioPurgeDate).EmailFolioType(emailFolioType).EmailFolioTypeDescription(emailFolioTypeDescription).ArrivalCarrierCode(arrivalCarrierCode).ArrivalDateTime(arrivalDateTime).ArrivalStationCode(arrivalStationCode).ArrivalTransportCode(arrivalTransportCode).ArrivalTransportationReqd(arrivalTransportationReqd).ArrivalType(arrivalType).ArrivalComments(arrivalComments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Revert a PreCheckIn Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    resvIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    arrivalTime := time.Now() // string | The time at which the guest arrives at the hotel. (optional)
    roomNumber := "roomNumber_example" // string | Room Number to be assigned to the reservation. (optional)
    guestPreferredCurrency := "guestPreferredCurrency_example" // string | Currency code preferred by guest. (optional)
    allowMobileViewFolio := true // bool | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. (optional)
    paymentMethodDescription := []string{"Inner_example"} // []string |  (optional)
    paymentMethodFolioView := []int32{int32(123)} // []int32 |  (optional)
    paymentMethod := []string{"Inner_example"} // []string |  (optional)
    attachCreditCardToProfile := true // bool | Attach the credit card to profile. (optional)
    cardHolderName := "cardHolderName_example" // string |  (optional)
    cardNumber := "cardNumber_example" // string |  (optional)
    cardNumberLast4Digits := "cardNumberLast4Digits_example" // string |  (optional)
    cardNumberMasked := "cardNumberMasked_example" // string |  (optional)
    cardOrToken := "cardOrToken_example" // string | Simple type for indicating if credit card number is tokenized. (optional)
    cardType := "cardType_example" // string | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. (optional)
    expirationDate := time.Now() // string | Expiration date of the credit card (optional)
    expirationDateExpired := true // bool |  (optional)
    expirationDateMasked := "expirationDateMasked_example" // string | Masked Expiration date of the credit card (optional)
    processing := "processing_example" // string |  (optional)
    swiped := true // bool |  (optional)
    userDefinedCardType := "userDefinedCardType_example" // string | Indicates the user defined credit card type if credit card type from a defined list is not provided (optional)
    cardId := "cardId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cardIdIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    cardIdIDContext := "cardIdIDContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    cardIdType := "cardIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    currentAuthorizedAmount := float32(8.14) // float32 | A monetary amount. (optional)
    authorizedAmountCurrencyCode := "authorizedAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    approvalAmountNeeded := float32(8.14) // float32 | A monetary amount. (optional)
    approvalAmountCurrencyCode := "approvalAmountCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    balanceAmount := float32(8.14) // float32 | A monetary amount. (optional)
    balanceCurrencyCode := "balanceCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    authorizationRuleCode := int32(56) // int32 | The authorization rule code. (optional)
    authorizationRuleAmount := float32(8.14) // float32 | A monetary amount. (optional)
    authorizationRuleCurrencyCode := "authorizationRuleCurrencyCode_example" // string | Provides a currency code to reflect the currency in which an amount may be expressed. (optional)
    authorizationRulePercent := float32(8.14) // float32 | A percentage value if the authorization rule is percentage based. (optional)
    emailFolio := true // bool |  (optional)
    emailFolioID := "emailFolioID_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    emailFolioIDExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    emailFolioIDContext := "emailFolioIDContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    emailFolioIDType := "emailFolioIDType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    emailFolioCreateDateTime := time.Now() // string | Time stamp of the creation. (optional)
    emailFolioCreatorID := "emailFolioCreatorID_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    emailFolioEmailAddress := "emailFolioEmailAddress_example" // string | Defines the e-mail address. (optional)
    emailFolioEmailFormat := "emailFolioEmailFormat_example" // string | Supported Email format. (optional)
    emailFolioLastModifierID := "emailFolioLastModifierID_example" // string | Identifies the last software system or person to modify a record. (optional)
    emailFolioLastModifyDateTime := time.Now() // string | Time stamp of last modification. (optional)
    emailFolioOrderSequence := float32(8.14) // float32 | Display Order sequence. (optional)
    emailFolioPrimaryInd := true // bool | When true, indicates a primary information. (optional)
    emailFolioPurgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    emailFolioType := "emailFolioType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    emailFolioTypeDescription := "emailFolioTypeDescription_example" // string | Describes the Type code (optional)
    arrivalCarrierCode := "arrivalCarrierCode_example" // string |  (optional)
    arrivalDateTime := time.Now() // string |  (optional)
    arrivalStationCode := "arrivalStationCode_example" // string |  (optional)
    arrivalTransportCode := "arrivalTransportCode_example" // string |  (optional)
    arrivalTransportationReqd := true // bool |  (optional)
    arrivalType := "arrivalType_example" // string |  (optional)
    arrivalComments := "arrivalComments_example" // string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeletePreCheckInReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ResvIDExtension(resvIDExtension).ArrivalTime(arrivalTime).RoomNumber(roomNumber).GuestPreferredCurrency(guestPreferredCurrency).AllowMobileViewFolio(allowMobileViewFolio).PaymentMethodDescription(paymentMethodDescription).PaymentMethodFolioView(paymentMethodFolioView).PaymentMethod(paymentMethod).AttachCreditCardToProfile(attachCreditCardToProfile).CardHolderName(cardHolderName).CardNumber(cardNumber).CardNumberLast4Digits(cardNumberLast4Digits).CardNumberMasked(cardNumberMasked).CardOrToken(cardOrToken).CardType(cardType).ExpirationDate(expirationDate).ExpirationDateExpired(expirationDateExpired).ExpirationDateMasked(expirationDateMasked).Processing(processing).Swiped(swiped).UserDefinedCardType(userDefinedCardType).CardId(cardId).CardIdIDExtension(cardIdIDExtension).CardIdIDContext(cardIdIDContext).CardIdType(cardIdType).CurrentAuthorizedAmount(currentAuthorizedAmount).AuthorizedAmountCurrencyCode(authorizedAmountCurrencyCode).ApprovalAmountNeeded(approvalAmountNeeded).ApprovalAmountCurrencyCode(approvalAmountCurrencyCode).BalanceAmount(balanceAmount).BalanceCurrencyCode(balanceCurrencyCode).AuthorizationRuleCode(authorizationRuleCode).AuthorizationRuleAmount(authorizationRuleAmount).AuthorizationRuleCurrencyCode(authorizationRuleCurrencyCode).AuthorizationRulePercent(authorizationRulePercent).EmailFolio(emailFolio).EmailFolioID(emailFolioID).EmailFolioIDExtension(emailFolioIDExtension).EmailFolioIDContext(emailFolioIDContext).EmailFolioIDType(emailFolioIDType).EmailFolioCreateDateTime(emailFolioCreateDateTime).EmailFolioCreatorID(emailFolioCreatorID).EmailFolioEmailAddress(emailFolioEmailAddress).EmailFolioEmailFormat(emailFolioEmailFormat).EmailFolioLastModifierID(emailFolioLastModifierID).EmailFolioLastModifyDateTime(emailFolioLastModifyDateTime).EmailFolioOrderSequence(emailFolioOrderSequence).EmailFolioPrimaryInd(emailFolioPrimaryInd).EmailFolioPurgeDate(emailFolioPurgeDate).EmailFolioType(emailFolioType).EmailFolioTypeDescription(emailFolioTypeDescription).ArrivalCarrierCode(arrivalCarrierCode).ArrivalDateTime(arrivalDateTime).ArrivalStationCode(arrivalStationCode).ArrivalTransportCode(arrivalTransportCode).ArrivalTransportationReqd(arrivalTransportationReqd).ArrivalType(arrivalType).ArrivalComments(arrivalComments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeletePreCheckInReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePreCheckInReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeletePreCheckInReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePreCheckInReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **resvIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **arrivalTime** | **string** | The time at which the guest arrives at the hotel. | 
 **roomNumber** | **string** | Room Number to be assigned to the reservation. | 
 **guestPreferredCurrency** | **string** | Currency code preferred by guest. | 
 **allowMobileViewFolio** | **bool** | Attribute AllowMobileViewFolio is set to true when the reservation is eligible for viewing folio using mobile device. | 
 **paymentMethodDescription** | **[]string** |  | 
 **paymentMethodFolioView** | **[]int32** |  | 
 **paymentMethod** | **[]string** |  | 
 **attachCreditCardToProfile** | **bool** | Attach the credit card to profile. | 
 **cardHolderName** | **string** |  | 
 **cardNumber** | **string** |  | 
 **cardNumberLast4Digits** | **string** |  | 
 **cardNumberMasked** | **string** |  | 
 **cardOrToken** | **string** | Simple type for indicating if credit card number is tokenized. | 
 **cardType** | **string** | This is required for Credit Card Payment Methods. This indicates the type of Credit Card associated with this payment method. | 
 **expirationDate** | **string** | Expiration date of the credit card | 
 **expirationDateExpired** | **bool** |  | 
 **expirationDateMasked** | **string** | Masked Expiration date of the credit card | 
 **processing** | **string** |  | 
 **swiped** | **bool** |  | 
 **userDefinedCardType** | **string** | Indicates the user defined credit card type if credit card type from a defined list is not provided | 
 **cardId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cardIdIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **cardIdIDContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **cardIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **currentAuthorizedAmount** | **float32** | A monetary amount. | 
 **authorizedAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **approvalAmountNeeded** | **float32** | A monetary amount. | 
 **approvalAmountCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **balanceAmount** | **float32** | A monetary amount. | 
 **balanceCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **authorizationRuleCode** | **int32** | The authorization rule code. | 
 **authorizationRuleAmount** | **float32** | A monetary amount. | 
 **authorizationRuleCurrencyCode** | **string** | Provides a currency code to reflect the currency in which an amount may be expressed. | 
 **authorizationRulePercent** | **float32** | A percentage value if the authorization rule is percentage based. | 
 **emailFolio** | **bool** |  | 
 **emailFolioID** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **emailFolioIDExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **emailFolioIDContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **emailFolioIDType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **emailFolioCreateDateTime** | **string** | Time stamp of the creation. | 
 **emailFolioCreatorID** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **emailFolioEmailAddress** | **string** | Defines the e-mail address. | 
 **emailFolioEmailFormat** | **string** | Supported Email format. | 
 **emailFolioLastModifierID** | **string** | Identifies the last software system or person to modify a record. | 
 **emailFolioLastModifyDateTime** | **string** | Time stamp of last modification. | 
 **emailFolioOrderSequence** | **float32** | Display Order sequence. | 
 **emailFolioPrimaryInd** | **bool** | When true, indicates a primary information. | 
 **emailFolioPurgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **emailFolioType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **emailFolioTypeDescription** | **string** | Describes the Type code | 
 **arrivalCarrierCode** | **string** |  | 
 **arrivalDateTime** | **string** |  | 
 **arrivalStationCode** | **string** |  | 
 **arrivalTransportCode** | **string** |  | 
 **arrivalTransportationReqd** | **bool** |  | 
 **arrivalType** | **string** |  | 
 **arrivalComments** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRefundTickets

> Status DeleteRefundTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Refund Reservation tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteRefundTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteRefundTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRefundTickets`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteRefundTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRefundTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationAttachment

> Status DeleteReservationAttachment(ctx, attachmentId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Reservation attachments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    attachmentId := "attachmentId_example" // string | Unique Id of the attachment to be deleted.
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationAttachment(context.Background(), attachmentId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationAttachment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attachmentId** | **string** | Unique Id of the attachment to be deleted. | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationCertificate

> Status DeleteReservationCertificate(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Detach Certificate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationCertificate(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationCertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationCertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationCertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationLinks

> Status DeleteReservationLinks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Reservation Links



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationLinks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationLinks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationLinks`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationLinks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationLinksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationLinksByChain

> Status DeleteReservationLinksByChain(ctx, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Reservation Links By Chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationLinksByChain(context.Background(), reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationLinksByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationLinksByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationLinksByChain`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationLinksByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationLinksByExtId

> Status DeleteReservationLinksByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Reservation Links



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationLinksByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationLinksByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationLinksByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationLinksByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationLinksByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationLocators

> Status DeleteReservationLocators(ctx, locatorId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Remove Reservation Locators



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    locatorId := "locatorId_example" // string | 
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationLocators(context.Background(), locatorId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationLocators``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationLocators`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationLocators`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**locatorId** | **string** |  | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationLocatorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationLock

> Status DeleteReservationLock(ctx, lockHandle, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Release Reservation Lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    lockHandle := "lockHandle_example" // string | Lock handle of the lock to be released.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationLock(context.Background(), lockHandle, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationLock`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**lockHandle** | **string** | Lock handle of the lock to be released. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationMembership

> Status DeleteReservationMembership(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Reservation membership



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationMembership(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationMembership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationMembership`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationMembership`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationPackage

> Status DeleteReservationPackage(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a package from a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationPackage(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationPackage`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservationPreference

> Status DeleteReservationPreference(ctx, preferenceCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Reservation Preference



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    preferenceCode := "preferenceCode_example" // string | Preference Code
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservationPreference(context.Background(), preferenceCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservationPreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservationPreference`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservationPreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**preferenceCode** | **string** | Preference Code | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservationPreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteReservedInventoryItems

> Status DeleteReservedInventoryItems(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Reserved Inventory Items



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteReservedInventoryItems(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteReservedInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteReservedInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteReservedInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteReservedInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteRoutingInstructions

> Status DeleteRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSellMessageConfig

> Status DeleteSellMessageConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete sell message



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteSellMessageConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteSellMessageConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSellMessageConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteSellMessageConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSellMessageConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteSellMessageConfigByChain

> Status DeleteSellMessageConfigByChain(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfigId(sellMessageConfigId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete sell message by chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sellMessageConfigId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteSellMessageConfigByChain(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfigId(sellMessageConfigId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteSellMessageConfigByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteSellMessageConfigByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteSellMessageConfigByChain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSellMessageConfigByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sellMessageConfigId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteShareReservation

> Status DeleteShareReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideInventoryCheck(overrideInventoryCheck).OverrideMaxOccupancyCheck(overrideMaxOccupancyCheck).OverrideRateAvailabilityCheck(overrideRateAvailabilityCheck).ReturnShareReservations(returnShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Separate share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overrideInventoryCheck := true // bool | Indicate to Override the Room Inventory Check if applicable. (optional)
    overrideMaxOccupancyCheck := true // bool | Indicate to Override the check on Maximum Room Occupancy if applicable. (optional)
    overrideRateAvailabilityCheck := true // bool | Indicate to Override the check on Maximum Room Occupancy if applicable. (optional)
    returnShareReservations := true // bool | After the break share operation, return the new list of Sharer Reservations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteShareReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideInventoryCheck(overrideInventoryCheck).OverrideMaxOccupancyCheck(overrideMaxOccupancyCheck).OverrideRateAvailabilityCheck(overrideRateAvailabilityCheck).ReturnShareReservations(returnShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteShareReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteShareReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteShareReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteShareReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overrideInventoryCheck** | **bool** | Indicate to Override the Room Inventory Check if applicable. | 
 **overrideMaxOccupancyCheck** | **bool** | Indicate to Override the check on Maximum Room Occupancy if applicable. | 
 **overrideRateAvailabilityCheck** | **bool** | Indicate to Override the check on Maximum Room Occupancy if applicable. | 
 **returnShareReservations** | **bool** | After the break share operation, return the new list of Sharer Reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteShareReservationByExtId

> Status DeleteShareReservationByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideInventoryCheck(overrideInventoryCheck).OverrideMaxOccupancyCheck(overrideMaxOccupancyCheck).OverrideRateAvailabilityCheck(overrideRateAvailabilityCheck).ReturnShareReservations(returnShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Separate share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overrideInventoryCheck := true // bool | Indicate to Override the Room Inventory Check if applicable. (optional)
    overrideMaxOccupancyCheck := true // bool | Indicate to Override the check on Maximum Room Occupancy if applicable. (optional)
    overrideRateAvailabilityCheck := true // bool | Indicate to Override the check on Maximum Room Occupancy if applicable. (optional)
    returnShareReservations := true // bool | After the break share operation, return the new list of Sharer Reservations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteShareReservationByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverrideInventoryCheck(overrideInventoryCheck).OverrideMaxOccupancyCheck(overrideMaxOccupancyCheck).OverrideRateAvailabilityCheck(overrideRateAvailabilityCheck).ReturnShareReservations(returnShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteShareReservationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteShareReservationByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteShareReservationByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteShareReservationByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overrideInventoryCheck** | **bool** | Indicate to Override the Room Inventory Check if applicable. | 
 **overrideMaxOccupancyCheck** | **bool** | Indicate to Override the check on Maximum Room Occupancy if applicable. | 
 **overrideRateAvailabilityCheck** | **bool** | Indicate to Override the check on Maximum Room Occupancy if applicable. | 
 **returnShareReservations** | **bool** | After the break share operation, return the new list of Sharer Reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTickets

> Status DeleteTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTickets`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteTransactionDiversions

> Status DeleteTransactionDiversions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Transaction Diversions 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteTransactionDiversions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteTransactionDiversions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTransactionDiversions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteTransactionDiversions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransactionDiversionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteUpsell

> Status DeleteUpsell(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Reservation Upsell



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.DeleteUpsell(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.DeleteUpsell``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteUpsell`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.DeleteUpsell`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUpsellRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAlertNotices

> Alerts GetAlertNotices(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertArea(alertArea).WelcomeOffer(welcomeOffer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Alert Notices



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    alertArea := "alertArea_example" // string |  (optional)
    welcomeOffer := true // bool | Determines whether to fetch Global Alert Notices or Welcome Offer Alert Notice. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetAlertNotices(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AlertArea(alertArea).WelcomeOffer(welcomeOffer).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetAlertNotices``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAlertNotices`: Alerts
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetAlertNotices`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAlertNoticesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **alertArea** | **string** |  | 
 **welcomeOffer** | **bool** | Determines whether to fetch Global Alert Notices or Welcome Offer Alert Notice. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Alerts**](Alerts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAwardUpgrades

> AwardUpgrades GetAwardUpgrades(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).IdContext(idContext).ProfileIdType(profileIdType).MembershipType(membershipType).MembershipCardNo(membershipCardNo).MembershipPoints(membershipPoints).Id(id).ReservationTimeSpanStartDate(reservationTimeSpanStartDate).ReservationTimeSpanEndDate(reservationTimeSpanEndDate).ReservationTimeSpanDuration(reservationTimeSpanDuration).NumberOfRooms(numberOfRooms).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Award Upgrades



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipType := "membershipType_example" // string | The type of the membership. (optional)
    membershipCardNo := "membershipCardNo_example" // string | The card number associated with this membership. (optional)
    membershipPoints := int32(56) // int32 | Current membership points available for this guest. (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationTimeSpanStartDate := time.Now() // string |  (optional)
    reservationTimeSpanEndDate := time.Now() // string |  (optional)
    reservationTimeSpanDuration := "reservationTimeSpanDuration_example" // string |  (optional)
    numberOfRooms := int32(56) // int32 | The number of rooms. (optional)
    roomType := "roomType_example" // string | Room type associated with the reservation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetAwardUpgrades(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).IdContext(idContext).ProfileIdType(profileIdType).MembershipType(membershipType).MembershipCardNo(membershipCardNo).MembershipPoints(membershipPoints).Id(id).ReservationTimeSpanStartDate(reservationTimeSpanStartDate).ReservationTimeSpanEndDate(reservationTimeSpanEndDate).ReservationTimeSpanDuration(reservationTimeSpanDuration).NumberOfRooms(numberOfRooms).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetAwardUpgrades``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAwardUpgrades`: AwardUpgrades
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetAwardUpgrades`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAwardUpgradesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipType** | **string** | The type of the membership. | 
 **membershipCardNo** | **string** | The card number associated with this membership. | 
 **membershipPoints** | **int32** | Current membership points available for this guest. | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationTimeSpanStartDate** | **string** |  | 
 **reservationTimeSpanEndDate** | **string** |  | 
 **reservationTimeSpanDuration** | **string** |  | 
 **numberOfRooms** | **int32** | The number of rooms. | 
 **roomType** | **string** | Room type associated with the reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AwardUpgrades**](AwardUpgrades.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAwards

> ReservationAwards GetAwards(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Awards



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetAwards(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetAwards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAwards`: ReservationAwards
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetAwards`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAwardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationAwards**](ReservationAwards.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCallHistory

> CallHistory GetCallHistory(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the Reservation Call History



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetCallHistory(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetCallHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCallHistory`: CallHistory
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetCallHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCallHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CallHistory**](CallHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCallStatistics

> CallStatistics GetCallStatistics(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).End(end).Start(start).Domain(domain).AppUserName(appUserName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get call statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    domain := "domain_example" // string |  (optional)
    appUserName := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetCallStatistics(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).End(end).Start(start).Domain(domain).AppUserName(appUserName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetCallStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCallStatistics`: CallStatistics
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetCallStatistics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCallStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **domain** | **string** |  | 
 **appUserName** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CallStatistics**](CallStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCancellationHistory

> CancellationHistory GetCancellationHistory(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelName(hotelName).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayDuration(roomStayDuration).RoomClass(roomClass).RoomType(roomType).NumberOfRooms(numberOfRooms).RoomId(roomId).RatePlanCode(ratePlanCode).ReservationBlockHotelId(reservationBlockHotelId).ReservationBlockId(reservationBlockId).ReservationBlockIdType(reservationBlockIdType).BlockName(blockName).BookingChannelCode(bookingChannelCode).LinkCode(linkCode).OnHold(onHold).MembershipAccountId(membershipAccountId).MembershipBonusCode(membershipBonusCode).MembershipLevel(membershipLevel).MembershipId(membershipId).LastStayDate(lastStayDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get cancellation history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelName := "hotelName_example" // string |  (optional)
    roomStayStartDate := time.Now() // string |  (optional)
    roomStayEndDate := time.Now() // string |  (optional)
    roomStayDuration := "roomStayDuration_example" // string |  (optional)
    roomClass := "roomClass_example" // string | Room class code (optional)
    roomType := "roomType_example" // string | Room type code (optional)
    numberOfRooms := int32(56) // int32 | Room Id (optional)
    roomId := "roomId_example" // string | Room Id (optional)
    ratePlanCode := "ratePlanCode_example" // string | Rate plan code (optional)
    reservationBlockHotelId := "reservationBlockHotelId_example" // string | This is the HotelCode of the Block. (optional)
    reservationBlockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationBlockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    bookingChannelCode := "bookingChannelCode_example" // string | Booking channel code (optional)
    linkCode := "linkCode_example" // string | Party code (optional)
    onHold := true // bool | Guarantee Code. (optional)
    membershipAccountId := "membershipAccountId_example" // string | The account identification number for this particular member in this particular program. (optional)
    membershipBonusCode := "membershipBonusCode_example" // string | The code or name of the bonus program. BonusCode can be used to indicate the level of membership (Gold Club, Platinum member, etc.) (optional)
    membershipLevel := "membershipLevel_example" // string | The code or name of the membership level and indicates the level of membership (Gold Club, Platinum member, etc.). This is same as the BonusCode. (optional)
    membershipId := float32(8.14) // float32 | Membership ID (Unique ID from the memberships table). (optional)
    lastStayDate := time.Now() // string | Guest's last stay date. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetCancellationHistory(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelName(hotelName).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayDuration(roomStayDuration).RoomClass(roomClass).RoomType(roomType).NumberOfRooms(numberOfRooms).RoomId(roomId).RatePlanCode(ratePlanCode).ReservationBlockHotelId(reservationBlockHotelId).ReservationBlockId(reservationBlockId).ReservationBlockIdType(reservationBlockIdType).BlockName(blockName).BookingChannelCode(bookingChannelCode).LinkCode(linkCode).OnHold(onHold).MembershipAccountId(membershipAccountId).MembershipBonusCode(membershipBonusCode).MembershipLevel(membershipLevel).MembershipId(membershipId).LastStayDate(lastStayDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetCancellationHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCancellationHistory`: CancellationHistory
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetCancellationHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCancellationHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelName** | **string** |  | 
 **roomStayStartDate** | **string** |  | 
 **roomStayEndDate** | **string** |  | 
 **roomStayDuration** | **string** |  | 
 **roomClass** | **string** | Room class code | 
 **roomType** | **string** | Room type code | 
 **numberOfRooms** | **int32** | Room Id | 
 **roomId** | **string** | Room Id | 
 **ratePlanCode** | **string** | Rate plan code | 
 **reservationBlockHotelId** | **string** | This is the HotelCode of the Block. | 
 **reservationBlockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationBlockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **bookingChannelCode** | **string** | Booking channel code | 
 **linkCode** | **string** | Party code | 
 **onHold** | **bool** | Guarantee Code. | 
 **membershipAccountId** | **string** | The account identification number for this particular member in this particular program. | 
 **membershipBonusCode** | **string** | The code or name of the bonus program. BonusCode can be used to indicate the level of membership (Gold Club, Platinum member, etc.) | 
 **membershipLevel** | **string** | The code or name of the membership level and indicates the level of membership (Gold Club, Platinum member, etc.). This is same as the BonusCode. | 
 **membershipId** | **float32** | Membership ID (Unique ID from the memberships table). | 
 **lastStayDate** | **string** | Guest&#39;s last stay date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancellationHistory**](CancellationHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConfirmationLetters

> ReservationConfirmationLetters GetConfirmationLetters(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NotAttached(notAttached).Pending(pending).Sent(sent).CreatedOnEndDate(createdOnEndDate).CreatedOnStartDate(createdOnStartDate).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).LetterStyleId(letterStyleId).LetterStyle(letterStyle).LetterStyleIdType(letterStyleIdType).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).MembershipId(membershipId).MembershipLevelCode(membershipLevelCode).MembershipTypeCode(membershipTypeCode).Surname(surname).GivenName(givenName).BlockHotelId(blockHotelId).BlockId(blockId).BlockIdType(blockIdType).BlockName(blockName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Confirmation Letters



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    notAttached := true // bool | If true then the fetch result will include the reservations that do not have a letter attached to them. (optional)
    pending := true // bool | If true then the result will include only the pending confirmation letters. (optional)
    sent := true // bool | If true then the result will include only the confirmation letters that have been sent to the guest. (optional)
    createdOnEndDate := time.Now() // string | The ending value of the date range. (optional)
    createdOnStartDate := time.Now() // string | The starting value of the date range. (optional)
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    letterStyleId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    letterStyle := []string{"Inner_example"} // []string | Name of the confirmation letter style. (optional)
    letterStyleIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipId := "membershipId_example" // string | Membership ID criteria. (optional)
    membershipLevelCode := []string{"Inner_example"} // []string |  (optional)
    membershipTypeCode := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    blockHotelId := "blockHotelId_example" // string | This is the HotelCode of the Block. (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetConfirmationLetters(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).NotAttached(notAttached).Pending(pending).Sent(sent).CreatedOnEndDate(createdOnEndDate).CreatedOnStartDate(createdOnStartDate).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).LetterStyleId(letterStyleId).LetterStyle(letterStyle).LetterStyleIdType(letterStyleIdType).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).MembershipId(membershipId).MembershipLevelCode(membershipLevelCode).MembershipTypeCode(membershipTypeCode).Surname(surname).GivenName(givenName).BlockHotelId(blockHotelId).BlockId(blockId).BlockIdType(blockIdType).BlockName(blockName).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetConfirmationLetters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetConfirmationLetters`: ReservationConfirmationLetters
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetConfirmationLetters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetConfirmationLettersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **notAttached** | **bool** | If true then the fetch result will include the reservations that do not have a letter attached to them. | 
 **pending** | **bool** | If true then the result will include only the pending confirmation letters. | 
 **sent** | **bool** | If true then the result will include only the confirmation letters that have been sent to the guest. | 
 **createdOnEndDate** | **string** | The ending value of the date range. | 
 **createdOnStartDate** | **string** | The starting value of the date range. | 
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **letterStyleId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **letterStyle** | **[]string** | Name of the confirmation letter style. | 
 **letterStyleIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipId** | **string** | Membership ID criteria. | 
 **membershipLevelCode** | **[]string** |  | 
 **membershipTypeCode** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **blockHotelId** | **string** | This is the HotelCode of the Block. | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationConfirmationLetters**](ReservationConfirmationLetters.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetECoupons

> ECoupons GetECoupons(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Ecoupons



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetECoupons(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetECoupons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetECoupons`: ECoupons
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetECoupons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetECouponsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ECoupons**](ECoupons.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalSystemDeliveryHistory

> DeliveryHistoryLog GetExternalSystemDeliveryHistory(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get External system delivery history



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetExternalSystemDeliveryHistory(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetExternalSystemDeliveryHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalSystemDeliveryHistory`: DeliveryHistoryLog
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetExternalSystemDeliveryHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalSystemDeliveryHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DeliveryHistoryLog**](DeliveryHistoryLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalSystemReservations

> ReservationsDetails GetExternalSystemReservations(ctx, extSystemCode).ExternalReferenceList(externalReferenceList).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).ExcludeRoomFeatures(excludeRoomFeatures).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    externalReferenceList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    recentlyAccessed := true // bool | Mark this reservation as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    hotelIds := []string{"Inner_example"} // []string | List of Hotels to support searches with multiple resorts for which traces are to be fetched. (optional)
    text := "text_example" // string | Free form text field for searching all reservation fields (optional)
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    departureEndDate := time.Now() // string | The ending value of the date range. (optional)
    departureStartDate := time.Now() // string | The starting value of the date range. (optional)
    expectedArrivalStartTime := time.Now() // string | The ending value of the time span. (optional)
    expectedArrivalEndTime := time.Now() // string | The starting value of the time span. (optional)
    expectedReturnEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // string | The starting value of the time span. (optional)
    companyNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership ID criteria. (optional)
    membershipLevels := []string{"Inner_example"} // []string |  (optional)
    membershipTypes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. (optional)
    paymentMethod := "paymentMethod_example" // string | Fetches the reservation having method of payment supplied here. (optional)
    discountApplied := true // bool | Fetches the reservation for which discount is applied (optional) (default to false)
    user := []string{"Inner_example"} // []string |  (optional)
    createdBy := "createdBy_example" // string | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. (optional)
    cancelledByList := []string{"Inner_example"} // []string | Fetches reservations cancelled by list of users. (optional)
    cancelledOn := time.Now() // string | Fetches the reservations which are cancelled on a specific date. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    excludeBlockReservations := true // bool | If true the search result will exclude the blocks reservations. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    blockIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockCodes := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    customReference := "customReference_example" // string | Custom reference (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderBy := []string{"OrderBy_example"} // []string |  (optional)
    sortOrder := []string{"SortOrder_example"} // []string |  (optional) (default to ["Asc"])
    roomAssignedOnly := true // bool | Indicator to query reservations which have a room number assigned. (optional)
    roomUnassignedOnly := true // bool | Indicator to query reservations which does not have a room number assigned. (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomFeatures := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    roomSmokingPreference := "roomSmokingPreference_example" // string | Preference value for display purposes. (optional)
    roomFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    housekeepingRoomStatuses := []string{"HousekeepingRoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomRangeFrom := "roomRangeFrom_example" // string |  (optional)
    roomRangeTo := "roomRangeTo_example" // string |  (optional)
    communication := "communication_example" // string | Filter by the last digits of a reservation's phone number. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowPreRegistration := true // bool | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. (optional)
    hasDepositBalance := true // bool | Indicates that only reservations with deposit balance should be expected from the result. (optional)
    hasOpenBalance := true // bool | Indicates that only reservations with open balance should be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    includeScheduledCheckOut := true // bool | Criteria that indicates whether to scheduled checkouts or not. (optional)
    linkedOnly := true // bool | Indicates that only linked reservations should be expected from the result. (optional)
    unlinkedOnly := true // bool | Indicates that only unlinked reservations should be expected from the result. (optional)
    actualArrivals := true // bool | Indicates if reservations which have already arrived on the Search Date is required. (optional)
    actualDepartures := true // bool | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. (optional)
    complimentaryReservations := true // bool | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    dayOfArrivalCancels := true // bool | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. (optional)
    dayUse := true // bool | Indicates if reservations which are day use reservation on the Search Date, is required. (optional)
    earlyDepartures := true // bool | Indicates if reservations which checked out early on the Search Date, is required. (optional)
    expectedArrivals := true // bool | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. (optional)
    expectedDepartures := true // bool | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. (optional)
    extendedStays := true // bool | Indicates if reservations which have extended their stays on the Search Date, is required. (optional)
    houseUseReservations := true // bool | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    stayovers := true // bool | Indicates if reservations which are StayOvers on the Search Date, is required. (optional)
    stayDate := time.Now() // string | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. (optional)
    roomRoutingId := "roomRoutingId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludePseudoRoomReservations := true // bool | Indicates to exclude Pseudo room reservations. (optional)
    excludeReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludeVIPStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    excludeSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeAdvanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    excludeRoomFeatures := []string{"Inner_example"} // []string | Exclude the reservation(s) with provided room features from the search result. (optional)
    playerId := "playerId_example" // string | Player ID associated to the reservation. (optional)
    gamingBalanceFrom := float32(8.14) // float32 | Balance from. (optional)
    gamingBalanceTo := float32(8.14) // float32 | Balance to. (optional)
    compAccountingBalanceFrom := float32(8.14) // float32 | Comp Balance From (optional)
    compAccountingBalanceTo := float32(8.14) // float32 | Comp Balance To (optional)
    searchTypes := []string{"SearchTypes_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatuses := []string{"ReservationStatuses_example"} // []string | Reservation status type for reservations search. (optional)
    transportationCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    roomReadyStatuses := []string{"RoomReadyStatuses_example"} // []string | Enum to denote the Status of Readiness messages sent to Guest Devices. (optional)
    checkoutMessageReceived := true // bool | Fetches the reservations for which Checkout Message is received. (optional)
    optedForCommunication := true // bool | Fetches the reservations for which reservation communication has been opted. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetExternalSystemReservations(context.Background(), extSystemCode).ExternalReferenceList(externalReferenceList).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).ExcludeRoomFeatures(excludeRoomFeatures).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetExternalSystemReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalSystemReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetExternalSystemReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalSystemReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **externalReferenceList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **recentlyAccessed** | **bool** | Mark this reservation as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **hotelIds** | **[]string** | List of Hotels to support searches with multiple resorts for which traces are to be fetched. | 
 **text** | **string** | Free form text field for searching all reservation fields | 
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **departureEndDate** | **string** | The ending value of the date range. | 
 **departureStartDate** | **string** | The starting value of the date range. | 
 **expectedArrivalStartTime** | **string** | The ending value of the time span. | 
 **expectedArrivalEndTime** | **string** | The starting value of the time span. | 
 **expectedReturnEndTime** | **string** | The ending value of the time span. | 
 **expectedReturnStartTime** | **string** | The starting value of the time span. | 
 **companyNames** | **[]string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipCardNumber** | **string** | Membership ID criteria. | 
 **membershipLevels** | **[]string** |  | 
 **membershipTypes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipCodes** | **[]string** | VIP status of the customer. | 
 **guaranteeCode** | **string** | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. | 
 **paymentMethod** | **string** | Fetches the reservation having method of payment supplied here. | 
 **discountApplied** | **bool** | Fetches the reservation for which discount is applied | [default to false]
 **user** | **[]string** |  | 
 **createdBy** | **string** | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. | 
 **cancelledByList** | **[]string** | Fetches reservations cancelled by list of users. | 
 **cancelledOn** | **string** | Fetches the reservations which are cancelled on a specific date. | 
 **ratePlanCodes** | **[]string** |  | 
 **sourceCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **excludeBlockReservations** | **bool** | If true the search result will exclude the blocks reservations. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **blockIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockCodes** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **customReference** | **string** | Custom reference | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderBy** | **[]string** |  | 
 **sortOrder** | **[]string** |  | [default to [&quot;Asc&quot;]]
 **roomAssignedOnly** | **bool** | Indicator to query reservations which have a room number assigned. | 
 **roomUnassignedOnly** | **bool** | Indicator to query reservations which does not have a room number assigned. | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **roomFeatures** | **[]string** | A code representing a room feature. | 
 **roomSpecials** | **[]string** | Preference value for display purposes. | 
 **roomSmokingPreference** | **string** | Preference value for display purposes. | 
 **roomFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **housekeepingRoomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomClasses** | **[]string** |  | 
 **roomRangeFrom** | **string** |  | 
 **roomRangeTo** | **string** |  | 
 **communication** | **string** | Filter by the last digits of a reservation&#39;s phone number. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowPreRegistration** | **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | 
 **hasDepositBalance** | **bool** | Indicates that only reservations with deposit balance should be expected from the result. | 
 **hasOpenBalance** | **bool** | Indicates that only reservations with open balance should be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **includeScheduledCheckOut** | **bool** | Criteria that indicates whether to scheduled checkouts or not. | 
 **linkedOnly** | **bool** | Indicates that only linked reservations should be expected from the result. | 
 **unlinkedOnly** | **bool** | Indicates that only unlinked reservations should be expected from the result. | 
 **actualArrivals** | **bool** | Indicates if reservations which have already arrived on the Search Date is required. | 
 **actualDepartures** | **bool** | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. | 
 **complimentaryReservations** | **bool** | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **dayOfArrivalCancels** | **bool** | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. | 
 **dayUse** | **bool** | Indicates if reservations which are day use reservation on the Search Date, is required. | 
 **earlyDepartures** | **bool** | Indicates if reservations which checked out early on the Search Date, is required. | 
 **expectedArrivals** | **bool** | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. | 
 **expectedDepartures** | **bool** | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. | 
 **extendedStays** | **bool** | Indicates if reservations which have extended their stays on the Search Date, is required. | 
 **houseUseReservations** | **bool** | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **stayovers** | **bool** | Indicates if reservations which are StayOvers on the Search Date, is required. | 
 **stayDate** | **string** | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. | 
 **roomRoutingId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludePseudoRoomReservations** | **bool** | Indicates to exclude Pseudo room reservations. | 
 **excludeReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludeVIPStatusCodes** | **[]string** | VIP status of the customer. | 
 **excludeSpecials** | **[]string** | Preference value for display purposes. | 
 **excludeFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **excludeAdvanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **excludeRoomFeatures** | **[]string** | Exclude the reservation(s) with provided room features from the search result. | 
 **playerId** | **string** | Player ID associated to the reservation. | 
 **gamingBalanceFrom** | **float32** | Balance from. | 
 **gamingBalanceTo** | **float32** | Balance to. | 
 **compAccountingBalanceFrom** | **float32** | Comp Balance From | 
 **compAccountingBalanceTo** | **float32** | Comp Balance To | 
 **searchTypes** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatuses** | **[]string** | Reservation status type for reservations search. | 
 **transportationCodes** | **[]string** | Codes to be searched. | 
 **roomReadyStatuses** | **[]string** | Enum to denote the Status of Readiness messages sent to Guest Devices. | 
 **checkoutMessageReceived** | **bool** | Fetches the reservations for which Checkout Message is received. | 
 **optedForCommunication** | **bool** | Fetches the reservations for which reservation communication has been opted. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDetails**](ReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFutureReservationsOrBlocks

> FutureReservationsOrBlocksDetails GetFutureReservationsOrBlocks(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Future Reservations on a profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetFutureReservationsOrBlocks(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetFutureReservationsOrBlocks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFutureReservationsOrBlocks`: FutureReservationsOrBlocksDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetFutureReservationsOrBlocks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFutureReservationsOrBlocksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FutureReservationsOrBlocksDetails**](FutureReservationsOrBlocksDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestMessages

> GuestMessages GetGuestMessages(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ReservationId(reservationId).RetrieveDeliveredMessages(retrieveDeliveredMessages).Room(room).TravelAgent(travelAgent).Company(company).Group(group).Source(source).ReservationStatus(reservationStatus).RetrieveUndeliveredMessages(retrieveUndeliveredMessages).RetrievePrintedMessages(retrievePrintedMessages).RetrieveTextedMessages(retrieveTextedMessages).BlockName(blockName).RecipientName(recipientName).ConfirmationNo(confirmationNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get guest messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    retrieveDeliveredMessages := true // bool | Flag that specified if Delivered Guest Messages will also be retrieved. (optional)
    room := "room_example" // string | Room number attached to the reservation. (optional)
    travelAgent := "travelAgent_example" // string | Lookup guest messages with this Travel agent name. (optional)
    company := "company_example" // string | Lookup guest messages with the Company name. (optional)
    group := "group_example" // string | Lookup guest messages with the Travel agent name. (optional)
    source := "source_example" // string | Lookup guest messages with the Source name. (optional)
    reservationStatus := "reservationStatus_example" // string | Represents Reservation search type Player Snapshot. (optional)
    retrieveUndeliveredMessages := true // bool | Flag that specified if Undelivered Guest Messages will also be retrieved. (optional)
    retrievePrintedMessages := true // bool | Flag that specified if Printed Guest Messages will also be retrieved. (optional)
    retrieveTextedMessages := true // bool | Flag that specified if Texted Guest Messages will also be retrieved. (optional)
    blockName := "blockName_example" // string | Lookup messages using Block name. (optional)
    recipientName := "recipientName_example" // string | Lookup guest messages with the recipient name. (optional)
    confirmationNo := "confirmationNo_example" // string | Lookup guest messages using reservation confirmation no. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetGuestMessages(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ReservationId(reservationId).RetrieveDeliveredMessages(retrieveDeliveredMessages).Room(room).TravelAgent(travelAgent).Company(company).Group(group).Source(source).ReservationStatus(reservationStatus).RetrieveUndeliveredMessages(retrieveUndeliveredMessages).RetrievePrintedMessages(retrievePrintedMessages).RetrieveTextedMessages(retrieveTextedMessages).BlockName(blockName).RecipientName(recipientName).ConfirmationNo(confirmationNo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestMessages`: GuestMessages
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **retrieveDeliveredMessages** | **bool** | Flag that specified if Delivered Guest Messages will also be retrieved. | 
 **room** | **string** | Room number attached to the reservation. | 
 **travelAgent** | **string** | Lookup guest messages with this Travel agent name. | 
 **company** | **string** | Lookup guest messages with the Company name. | 
 **group** | **string** | Lookup guest messages with the Travel agent name. | 
 **source** | **string** | Lookup guest messages with the Source name. | 
 **reservationStatus** | **string** | Represents Reservation search type Player Snapshot. | 
 **retrieveUndeliveredMessages** | **bool** | Flag that specified if Undelivered Guest Messages will also be retrieved. | 
 **retrievePrintedMessages** | **bool** | Flag that specified if Printed Guest Messages will also be retrieved. | 
 **retrieveTextedMessages** | **bool** | Flag that specified if Texted Guest Messages will also be retrieved. | 
 **blockName** | **string** | Lookup messages using Block name. | 
 **recipientName** | **string** | Lookup guest messages with the recipient name. | 
 **confirmationNo** | **string** | Lookup guest messages using reservation confirmation no. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestMessages**](GuestMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetHotelReservations

> ReservationsDetails GetHotelReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).KeyTrack2(keyTrack2).Discrepancy(discrepancy).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).StayOnStartDate(stayOnStartDate).CreatedOnStartDate(createdOnStartDate).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).DepositDueEndDate(depositDueEndDate).DepositDueStartDate(depositDueStartDate).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).SourceNames(sourceNames).TravelAgentNames(travelAgentNames).GroupNames(groupNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileId(profileId).CommissionPaid(commissionPaid).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).FromName(fromName).ToName(toName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockCriteriaHotelCode(blockCriteriaHotelCode).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowedReservationActions(allowedReservationActions).AllowPreRegistration(allowPreRegistration).ExcludeNoPost(excludeNoPost).ExcludePMRooms(excludePMRooms).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).PeriodicFolio(periodicFolio).FolioSettlementTypes(folioSettlementTypes).DefaultDays(defaultDays).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).ExcludeRoomFeatures(excludeRoomFeatures).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).SwapShiftRoomReservationId(swapShiftRoomReservationId).RoomSmokingPreferences(roomSmokingPreferences).RoomFeaturePreferences(roomFeaturePreferences).RoomsFloorPreferences(roomsFloorPreferences).ContactNames(contactNames).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get and search for reservations in a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    keyTrack2 := "keyTrack2_example" // string | keyTrack2 is an id which is either generated by the PMS or provided by the door lock system and which is associated to the reservation. With the keyTrack2 value a reservation can be identified. (optional)
    discrepancy := "discrepancy_example" // string |  (optional)
    recentlyAccessed := true // bool | Mark this reservation as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    text := "text_example" // string | Free form text field for searching all reservation fields (optional)
    reservationIdList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    confirmationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cancellationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to ["External"])
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    departureEndDate := time.Now() // string | The ending value of the date range. (optional)
    departureStartDate := time.Now() // string | The starting value of the date range. (optional)
    stayOnStartDate := time.Now() // string | The starting value of the date range. (optional)
    createdOnStartDate := time.Now() // string | Fetches reservations which are created on the given property business date. (optional)
    expectedArrivalEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedArrivalStartTime := time.Now() // string | The starting value of the time span. (optional)
    depositDueEndDate := time.Now() // string | The ending value of the date range. (optional)
    depositDueStartDate := time.Now() // string | The starting value of the date range. (optional)
    expectedReturnEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // string | The starting value of the time span. (optional)
    companyNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    sourceNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    groupNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    commissionPaid := true // bool | Commission Paid criteria (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership ID criteria. (optional)
    membershipLevels := []string{"Inner_example"} // []string |  (optional)
    membershipTypes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    fromName := "fromName_example" // string | Given name, first name or names (optional)
    toName := "toName_example" // string | Given name, first name or names (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. (optional)
    paymentMethod := "paymentMethod_example" // string | Fetches the reservation having method of payment supplied here. (optional)
    discountApplied := true // bool | Fetches the reservation for which discount is applied (optional) (default to false)
    user := []string{"Inner_example"} // []string |  (optional)
    createdBy := "createdBy_example" // string | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. (optional)
    cancelledByList := []string{"Inner_example"} // []string | Fetches reservations cancelled by list of users. (optional)
    cancelledOn := time.Now() // string | Fetches reservations which are cancelled on the given property business date. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    excludeBlockReservations := true // bool | If true the search result will exclude the blocks reservations. (optional)
    blockCriteriaHotelCode := "blockCriteriaHotelCode_example" // string | The Hotel Code of the Block. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    blockIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockCodes := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    customReference := "customReference_example" // string | Custom reference (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderBy := []string{"OrderBy_example"} // []string |  (optional)
    sortOrder := []string{"SortOrder_example"} // []string |  (optional) (default to ["Asc"])
    roomAssignedOnly := true // bool | Indicator to query reservations which have a room number assigned. (optional)
    roomUnassignedOnly := true // bool | Indicator to query reservations which does not have a room number assigned. (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomFeatures := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    roomSmokingPreference := "roomSmokingPreference_example" // string | Preference value for display purposes. (optional)
    roomFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    housekeepingRoomStatuses := []string{"HousekeepingRoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomRangeFrom := "roomRangeFrom_example" // string |  (optional)
    roomRangeTo := "roomRangeTo_example" // string |  (optional)
    communication := "communication_example" // string | Filter by the last digits of a reservation's phone number. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowedReservationActions := []string{"AllowedReservationActions_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    allowPreRegistration := true // bool | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. (optional)
    excludeNoPost := true // bool | Indicates that reservations with No Post flag should not be expected from the result. (optional)
    excludePMRooms := true // bool | Indicates that reservations with PM room type should not be expected from the result. (optional)
    hasDepositBalance := true // bool | Indicates that only reservations with deposit balance should be expected from the result. (optional)
    hasOpenBalance := true // bool | Indicates that only reservations with open balance should be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    includeScheduledCheckOut := true // bool | Criteria that indicates whether to scheduled checkouts or not. (optional)
    linkedOnly := true // bool | Indicates that only linked reservations should be expected from the result. (optional)
    unlinkedOnly := true // bool | Indicates that only unlinked reservations should be expected from the result. (optional)
    actualArrivals := true // bool | Indicates if reservations which have already arrived on the Search Date is required. (optional)
    actualDepartures := true // bool | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. (optional)
    complimentaryReservations := true // bool | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    dayOfArrivalCancels := true // bool | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. (optional)
    dayUse := true // bool | Indicates if reservations which are day use reservation on the Search Date, is required. (optional)
    earlyDepartures := true // bool | Indicates if reservations which checked out early on the Search Date, is required. (optional)
    expectedArrivals := true // bool | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. (optional)
    expectedDepartures := true // bool | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. (optional)
    extendedStays := true // bool | Indicates if reservations which have extended their stays on the Search Date, is required. (optional)
    houseUseReservations := true // bool | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    stayovers := true // bool | Indicates if reservations which are StayOvers on the Search Date, is required. (optional)
    stayDate := time.Now() // string | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. (optional)
    roomRoutingId := "roomRoutingId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    periodicFolio := "periodicFolio_example" // string | Periodic folio type. (optional)
    folioSettlementTypes := "folioSettlementTypes_example" // string | Comma-delimited list of Folio Settlement Type codes. (optional)
    defaultDays := true // bool | Use the Number of Days For Settlement, defined for the Reservation. (optional)
    excludePseudoRoomReservations := true // bool | Indicates to exclude Pseudo room reservations. (optional)
    excludeReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludeVIPStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    excludeSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeAdvanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    excludeRoomFeatures := []string{"Inner_example"} // []string | Exclude the reservation(s) with provided room features from the search result. (optional)
    playerId := "playerId_example" // string | Player ID associated to the reservation. (optional)
    gamingBalanceFrom := float32(8.14) // float32 | Balance from. (optional)
    gamingBalanceTo := float32(8.14) // float32 | Balance to. (optional)
    compAccountingBalanceFrom := float32(8.14) // float32 | Comp Balance From (optional)
    compAccountingBalanceTo := float32(8.14) // float32 | Comp Balance To (optional)
    searchTypes := []string{"SearchTypes_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatuses := []string{"ReservationStatuses_example"} // []string | Reservation status type for reservations search. (optional)
    transportationCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    roomReadyStatuses := []string{"RoomReadyStatuses_example"} // []string | Enum to denote the Status of Readiness messages sent to Guest Devices. (optional)
    checkoutMessageReceived := true // bool | Fetches the reservations for which Checkout Message is received. (optional)
    optedForCommunication := true // bool | Fetches the reservations for which reservation communication has been opted. (optional)
    swapShiftRoomReservationId := "swapShiftRoomReservationId_example" // string | Fetches the reservations for which this reservation room can be shifted or swapped. (optional)
    roomSmokingPreferences := []string{"Inner_example"} // []string | The smoking preferences of rooms to be fetched. (optional)
    roomFeaturePreferences := []string{"Inner_example"} // []string | The room features of the rooms. Fetches reservations with rooms that have same room features. It has to be used in conjunction with roomType, arrivalStartDate, and arrivalEndDate. (optional)
    roomsFloorPreferences := []string{"Inner_example"} // []string | The floor of the rooms. Fetches reservations with rooms that are on the same floor. It has to be used in conjunction with roomType, arrivalStartDate, and arrivalEndDate. (optional)
    contactNames := []string{"Inner_example"} // []string | Name of Contact Profile associated with Reservation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetHotelReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).KeyTrack2(keyTrack2).Discrepancy(discrepancy).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).StayOnStartDate(stayOnStartDate).CreatedOnStartDate(createdOnStartDate).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedArrivalStartTime(expectedArrivalStartTime).DepositDueEndDate(depositDueEndDate).DepositDueStartDate(depositDueStartDate).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).SourceNames(sourceNames).TravelAgentNames(travelAgentNames).GroupNames(groupNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileId(profileId).CommissionPaid(commissionPaid).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).FromName(fromName).ToName(toName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockCriteriaHotelCode(blockCriteriaHotelCode).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowedReservationActions(allowedReservationActions).AllowPreRegistration(allowPreRegistration).ExcludeNoPost(excludeNoPost).ExcludePMRooms(excludePMRooms).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).PeriodicFolio(periodicFolio).FolioSettlementTypes(folioSettlementTypes).DefaultDays(defaultDays).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).ExcludeRoomFeatures(excludeRoomFeatures).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).SwapShiftRoomReservationId(swapShiftRoomReservationId).RoomSmokingPreferences(roomSmokingPreferences).RoomFeaturePreferences(roomFeaturePreferences).RoomsFloorPreferences(roomsFloorPreferences).ContactNames(contactNames).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetHotelReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetHotelReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **keyTrack2** | **string** | keyTrack2 is an id which is either generated by the PMS or provided by the door lock system and which is associated to the reservation. With the keyTrack2 value a reservation can be identified. | 
 **discrepancy** | **string** |  | 
 **recentlyAccessed** | **bool** | Mark this reservation as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **text** | **string** | Free form text field for searching all reservation fields | 
 **reservationIdList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **confirmationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cancellationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to [&quot;External&quot;]]
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **departureEndDate** | **string** | The ending value of the date range. | 
 **departureStartDate** | **string** | The starting value of the date range. | 
 **stayOnStartDate** | **string** | The starting value of the date range. | 
 **createdOnStartDate** | **string** | Fetches reservations which are created on the given property business date. | 
 **expectedArrivalEndTime** | **string** | The ending value of the time span. | 
 **expectedArrivalStartTime** | **string** | The starting value of the time span. | 
 **depositDueEndDate** | **string** | The ending value of the date range. | 
 **depositDueStartDate** | **string** | The starting value of the date range. | 
 **expectedReturnEndTime** | **string** | The ending value of the time span. | 
 **expectedReturnStartTime** | **string** | The starting value of the time span. | 
 **companyNames** | **[]string** | Attached profile name | 
 **sourceNames** | **[]string** | Attached profile name | 
 **travelAgentNames** | **[]string** | Attached profile name | 
 **groupNames** | **[]string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. API expects CompanyName Query parameter along with the ID to obtain correct results. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **commissionPaid** | **bool** | Commission Paid criteria | 
 **membershipCardNumber** | **string** | Membership ID criteria. | 
 **membershipLevels** | **[]string** |  | 
 **membershipTypes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **fromName** | **string** | Given name, first name or names | 
 **toName** | **string** | Given name, first name or names | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipCodes** | **[]string** | VIP status of the customer. | 
 **guaranteeCode** | **string** | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. | 
 **paymentMethod** | **string** | Fetches the reservation having method of payment supplied here. | 
 **discountApplied** | **bool** | Fetches the reservation for which discount is applied | [default to false]
 **user** | **[]string** |  | 
 **createdBy** | **string** | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. | 
 **cancelledByList** | **[]string** | Fetches reservations cancelled by list of users. | 
 **cancelledOn** | **string** | Fetches reservations which are cancelled on the given property business date. | 
 **ratePlanCodes** | **[]string** |  | 
 **sourceCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **excludeBlockReservations** | **bool** | If true the search result will exclude the blocks reservations. | 
 **blockCriteriaHotelCode** | **string** | The Hotel Code of the Block. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **blockIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockCodes** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **customReference** | **string** | Custom reference | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderBy** | **[]string** |  | 
 **sortOrder** | **[]string** |  | [default to [&quot;Asc&quot;]]
 **roomAssignedOnly** | **bool** | Indicator to query reservations which have a room number assigned. | 
 **roomUnassignedOnly** | **bool** | Indicator to query reservations which does not have a room number assigned. | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **roomFeatures** | **[]string** | A code representing a room feature. | 
 **roomSpecials** | **[]string** | Preference value for display purposes. | 
 **roomSmokingPreference** | **string** | Preference value for display purposes. | 
 **roomFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **housekeepingRoomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomClasses** | **[]string** |  | 
 **roomRangeFrom** | **string** |  | 
 **roomRangeTo** | **string** |  | 
 **communication** | **string** | Filter by the last digits of a reservation&#39;s phone number. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowedReservationActions** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **allowPreRegistration** | **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | 
 **excludeNoPost** | **bool** | Indicates that reservations with No Post flag should not be expected from the result. | 
 **excludePMRooms** | **bool** | Indicates that reservations with PM room type should not be expected from the result. | 
 **hasDepositBalance** | **bool** | Indicates that only reservations with deposit balance should be expected from the result. | 
 **hasOpenBalance** | **bool** | Indicates that only reservations with open balance should be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **includeScheduledCheckOut** | **bool** | Criteria that indicates whether to scheduled checkouts or not. | 
 **linkedOnly** | **bool** | Indicates that only linked reservations should be expected from the result. | 
 **unlinkedOnly** | **bool** | Indicates that only unlinked reservations should be expected from the result. | 
 **actualArrivals** | **bool** | Indicates if reservations which have already arrived on the Search Date is required. | 
 **actualDepartures** | **bool** | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. | 
 **complimentaryReservations** | **bool** | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **dayOfArrivalCancels** | **bool** | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. | 
 **dayUse** | **bool** | Indicates if reservations which are day use reservation on the Search Date, is required. | 
 **earlyDepartures** | **bool** | Indicates if reservations which checked out early on the Search Date, is required. | 
 **expectedArrivals** | **bool** | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. | 
 **expectedDepartures** | **bool** | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. | 
 **extendedStays** | **bool** | Indicates if reservations which have extended their stays on the Search Date, is required. | 
 **houseUseReservations** | **bool** | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **stayovers** | **bool** | Indicates if reservations which are StayOvers on the Search Date, is required. | 
 **stayDate** | **string** | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. | 
 **roomRoutingId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **periodicFolio** | **string** | Periodic folio type. | 
 **folioSettlementTypes** | **string** | Comma-delimited list of Folio Settlement Type codes. | 
 **defaultDays** | **bool** | Use the Number of Days For Settlement, defined for the Reservation. | 
 **excludePseudoRoomReservations** | **bool** | Indicates to exclude Pseudo room reservations. | 
 **excludeReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludeVIPStatusCodes** | **[]string** | VIP status of the customer. | 
 **excludeSpecials** | **[]string** | Preference value for display purposes. | 
 **excludeFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **excludeAdvanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **excludeRoomFeatures** | **[]string** | Exclude the reservation(s) with provided room features from the search result. | 
 **playerId** | **string** | Player ID associated to the reservation. | 
 **gamingBalanceFrom** | **float32** | Balance from. | 
 **gamingBalanceTo** | **float32** | Balance to. | 
 **compAccountingBalanceFrom** | **float32** | Comp Balance From | 
 **compAccountingBalanceTo** | **float32** | Comp Balance To | 
 **searchTypes** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatuses** | **[]string** | Reservation status type for reservations search. | 
 **transportationCodes** | **[]string** | Codes to be searched. | 
 **roomReadyStatuses** | **[]string** | Enum to denote the Status of Readiness messages sent to Guest Devices. | 
 **checkoutMessageReceived** | **bool** | Fetches the reservations for which Checkout Message is received. | 
 **optedForCommunication** | **bool** | Fetches the reservations for which reservation communication has been opted. | 
 **swapShiftRoomReservationId** | **string** | Fetches the reservations for which this reservation room can be shifted or swapped. | 
 **roomSmokingPreferences** | **[]string** | The smoking preferences of rooms to be fetched. | 
 **roomFeaturePreferences** | **[]string** | The room features of the rooms. Fetches reservations with rooms that have same room features. It has to be used in conjunction with roomType, arrivalStartDate, and arrivalEndDate. | 
 **roomsFloorPreferences** | **[]string** | The floor of the rooms. Fetches reservations with rooms that are on the same floor. It has to be used in conjunction with roomType, arrivalStartDate, and arrivalEndDate. | 
 **contactNames** | **[]string** | Name of Contact Profile associated with Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDetails**](ReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLinkedReservations

> LinkedHotelReservations GetLinkedReservations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdditionalReservationId(additionalReservationId).AdditionalReservationIdType(additionalReservationIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get linked Reservations 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    additionalReservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    additionalReservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetLinkedReservations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdditionalReservationId(additionalReservationId).AdditionalReservationIdType(additionalReservationIdType).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetLinkedReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLinkedReservations`: LinkedHotelReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetLinkedReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLinkedReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **additionalReservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **additionalReservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LinkedHotelReservations**](LinkedHotelReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLinkedReservationsSummary

> LinkedReservationsInfo GetLinkedReservationsSummary(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdditionalReservationId(additionalReservationId).AdditionalReservationIdType(additionalReservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation summary for linked Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    additionalReservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    additionalReservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetLinkedReservationsSummary(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdditionalReservationId(additionalReservationId).AdditionalReservationIdType(additionalReservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetLinkedReservationsSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLinkedReservationsSummary`: LinkedReservationsInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetLinkedReservationsSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLinkedReservationsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **additionalReservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **additionalReservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LinkedReservationsInfo**](LinkedReservationsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPackage

> Packages GetPackage(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostingRhythm(postingRhythm).ProductCode(productCode).RatePlanCode(ratePlanCode).ReservationTimeSpanStartDate(reservationTimeSpanStartDate).ReservationTimeSpanEndDate(reservationTimeSpanEndDate).PackageTimeSpanStartDate(packageTimeSpanStartDate).PackageTimeSpanEndDate(packageTimeSpanEndDate).PackageQuantity(packageQuantity).PackageExcludedQuantity(packageExcludedQuantity).ReservationAdults(reservationAdults).ReservationChildren(reservationChildren).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Package



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    postingRhythm := "postingRhythm_example" // string |  (optional)
    productCode := "productCode_example" // string |  (optional)
    ratePlanCode := "ratePlanCode_example" // string |  (optional)
    reservationTimeSpanStartDate := time.Now() // string |  (optional)
    reservationTimeSpanEndDate := time.Now() // string |  (optional)
    packageTimeSpanStartDate := time.Now() // string |  (optional)
    packageTimeSpanEndDate := time.Now() // string |  (optional)
    packageQuantity := int32(56) // int32 |  (optional)
    packageExcludedQuantity := int32(56) // int32 |  (optional)
    reservationAdults := int32(56) // int32 | Defines the number of Adults. (optional)
    reservationChildren := int32(56) // int32 | Defines the number of Children. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for package instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetPackage(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PostingRhythm(postingRhythm).ProductCode(productCode).RatePlanCode(ratePlanCode).ReservationTimeSpanStartDate(reservationTimeSpanStartDate).ReservationTimeSpanEndDate(reservationTimeSpanEndDate).PackageTimeSpanStartDate(packageTimeSpanStartDate).PackageTimeSpanEndDate(packageTimeSpanEndDate).PackageQuantity(packageQuantity).PackageExcludedQuantity(packageExcludedQuantity).ReservationAdults(reservationAdults).ReservationChildren(reservationChildren).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPackage`: Packages
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **postingRhythm** | **string** |  | 
 **productCode** | **string** |  | 
 **ratePlanCode** | **string** |  | 
 **reservationTimeSpanStartDate** | **string** |  | 
 **reservationTimeSpanEndDate** | **string** |  | 
 **packageTimeSpanStartDate** | **string** |  | 
 **packageTimeSpanEndDate** | **string** |  | 
 **packageQuantity** | **int32** |  | 
 **packageExcludedQuantity** | **int32** |  | 
 **reservationAdults** | **int32** | Defines the number of Adults. | 
 **reservationChildren** | **int32** | Defines the number of Children. | 
 **fetchInstructions** | **[]string** | Simple type for package instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Packages**](Packages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPaymentMethods

> ReservationPaymentMethods GetPaymentMethods(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeAmounts(includeAmounts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a payment method 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeAmounts := true // bool | Flag to notify the operation to also retrieve the outstanding balance, current authorized amount and amount needed to be approved for each folio. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetPaymentMethods(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeAmounts(includeAmounts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPaymentMethods`: ReservationPaymentMethods
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetPaymentMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeAmounts** | **bool** | Flag to notify the operation to also retrieve the outstanding balance, current authorized amount and amount needed to be approved for each folio. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPaymentMethods**](ReservationPaymentMethods.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPreArrivalMemberReservations

> PreArrivalMemberReservationsDetails GetPreArrivalMemberReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).End(end).Start(start).MembershipType(membershipType).ExternalReferenceType(externalReferenceType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get preArrival Member Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    membershipType := "membershipType_example" // string | Membership Type. (optional)
    externalReferenceType := "externalReferenceType_example" // string | Type of the desired reservation external confirmation number. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetPreArrivalMemberReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).End(end).Start(start).MembershipType(membershipType).ExternalReferenceType(externalReferenceType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetPreArrivalMemberReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPreArrivalMemberReservations`: PreArrivalMemberReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetPreArrivalMemberReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPreArrivalMemberReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **membershipType** | **string** | Membership Type. | 
 **externalReferenceType** | **string** | Type of the desired reservation external confirmation number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PreArrivalMemberReservationsDetails**](PreArrivalMemberReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPreConfiguredRoutingInstructions

> PreConfiguredRoutingInstructions GetPreConfiguredRoutingInstructions(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateCode(rateCode).PromotionCodes(promotionCodes).GuestName(guestName).GuestIds(guestIds).CompanyName(companyName).CompanyIds(companyIds).GroupName(groupName).GroupIds(groupIds).TravelAgentName(travelAgentName).TravelAgentIds(travelAgentIds).SourceName(sourceName).SourceIds(sourceIds).ContactName(contactName).ContactIds(contactIds).BillingContactName(billingContactName).BillingContactIds(billingContactIds).AddresseeName(addresseeName).AddresseeIds(addresseeIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get pre-Configured Routing Instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateCode := "rateCode_example" // string |  (optional)
    promotionCodes := []string{"Inner_example"} // []string | Promotion Code for ComplimentaryRouting (optional)
    guestName := "guestName_example" // string | Attached profile name (optional)
    guestIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyName := "companyName_example" // string | Attached profile name (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupName := "groupName_example" // string | Attached profile name (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    travelAgentName := "travelAgentName_example" // string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceName := "sourceName_example" // string | Attached profile name (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactName := "contactName_example" // string | Attached profile name (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    billingContactName := "billingContactName_example" // string | Attached profile name (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    addresseeName := "addresseeName_example" // string | Attached profile name (optional)
    addresseeIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetPreConfiguredRoutingInstructions(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateCode(rateCode).PromotionCodes(promotionCodes).GuestName(guestName).GuestIds(guestIds).CompanyName(companyName).CompanyIds(companyIds).GroupName(groupName).GroupIds(groupIds).TravelAgentName(travelAgentName).TravelAgentIds(travelAgentIds).SourceName(sourceName).SourceIds(sourceIds).ContactName(contactName).ContactIds(contactIds).BillingContactName(billingContactName).BillingContactIds(billingContactIds).AddresseeName(addresseeName).AddresseeIds(addresseeIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetPreConfiguredRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPreConfiguredRoutingInstructions`: PreConfiguredRoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetPreConfiguredRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPreConfiguredRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateCode** | **string** |  | 
 **promotionCodes** | **[]string** | Promotion Code for ComplimentaryRouting | 
 **guestName** | **string** | Attached profile name | 
 **guestIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyName** | **string** | Attached profile name | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupName** | **string** | Attached profile name | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **travelAgentName** | **string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceName** | **string** | Attached profile name | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactName** | **string** | Attached profile name | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **billingContactName** | **string** | Attached profile name | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **addresseeName** | **string** | Attached profile name | 
 **addresseeIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PreConfiguredRoutingInstructions**](PreConfiguredRoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRateInfo

> RateInfo GetRateInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyCode(currencyCode).SummaryInfo(summaryInfo).CriteriaStartDate(criteriaStartDate).CriteriaEndDate(criteriaEndDate).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).DetailDate(detailDate).BlockId(blockId).BlockIdType(blockIdType).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).RatePlanCode(ratePlanCode).EffectiveRateEnd(effectiveRateEnd).EffectiveRateStart(effectiveRateStart).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get rate information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    currencyCode := "currencyCode_example" // string | The code specifying a monetary unit. Use ISO 4217, three alpha code. (optional)
    summaryInfo := true // bool | Flag to indicate if summary information is required. (optional)
    criteriaStartDate := time.Now() // string |  (optional)
    criteriaEndDate := time.Now() // string |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    detailDate := time.Now() // string | This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    effectiveRateEnd := []string{time.Now()} // []string | The ending value of the date range. (optional)
    effectiveRateStart := []string{time.Now()} // []string | The starting value of the date range. (optional)
    roomType := "roomType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetRateInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CurrencyCode(currencyCode).SummaryInfo(summaryInfo).CriteriaStartDate(criteriaStartDate).CriteriaEndDate(criteriaEndDate).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).DetailDate(detailDate).BlockId(blockId).BlockIdType(blockIdType).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).RatePlanCode(ratePlanCode).EffectiveRateEnd(effectiveRateEnd).EffectiveRateStart(effectiveRateStart).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetRateInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRateInfo`: RateInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetRateInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRateInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **currencyCode** | **string** | The code specifying a monetary unit. Use ISO 4217, three alpha code. | 
 **summaryInfo** | **bool** | Flag to indicate if summary information is required. | 
 **criteriaStartDate** | **string** |  | 
 **criteriaEndDate** | **string** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **detailDate** | **string** | This field is only required when the criteria is meant for a detailed results. The date for the rate detail is needed. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ratePlanCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **effectiveRateEnd** | **[]string** | The ending value of the date range. | 
 **effectiveRateStart** | **[]string** | The starting value of the date range. | 
 **roomType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateInfo**](RateInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRecentlyAccessedReservations

> RecentlyAccessedReservations GetRecentlyAccessedReservations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get recently accessed Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetRecentlyAccessedReservations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetRecentlyAccessedReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecentlyAccessedReservations`: RecentlyAccessedReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetRecentlyAccessedReservations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentlyAccessedReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RecentlyAccessedReservations**](RecentlyAccessedReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReprintTickets

> Tickets GetReprintTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketId(ticketId).TicketIdType(ticketIdType).PackageCode(packageCode).ReservationProductId(reservationProductId).ReservationProductIdType(reservationProductIdType).TicketNumberId(ticketNumberId).TicketNumberIdType(ticketNumberIdType).TicketIssueDate(ticketIssueDate).TicketConsumptionDate(ticketConsumptionDate).TicketRateCode(ticketRateCode).TicketStatus(ticketStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reprints Reservation tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ticketId := "ticketId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ticketIdType := "ticketIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    packageCode := []string{"Inner_example"} // []string | Package Code. (optional)
    reservationProductId := "reservationProductId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationProductIdType := "reservationProductIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ticketNumberId := "ticketNumberId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ticketNumberIdType := "ticketNumberIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ticketIssueDate := []string{time.Now()} // []string | Tickets issue date. (optional)
    ticketConsumptionDate := []string{time.Now()} // []string | Tickets comsumption date. (optional)
    ticketRateCode := []string{"Inner_example"} // []string | The Rate Code to which tickets belong to. (optional)
    ticketStatus := []string{"Inner_example"} // []string | The Status Code for outbound WS call. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReprintTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketId(ticketId).TicketIdType(ticketIdType).PackageCode(packageCode).ReservationProductId(reservationProductId).ReservationProductIdType(reservationProductIdType).TicketNumberId(ticketNumberId).TicketNumberIdType(ticketNumberIdType).TicketIssueDate(ticketIssueDate).TicketConsumptionDate(ticketConsumptionDate).TicketRateCode(ticketRateCode).TicketStatus(ticketStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReprintTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReprintTickets`: Tickets
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReprintTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReprintTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ticketId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ticketIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **packageCode** | **[]string** | Package Code. | 
 **reservationProductId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationProductIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ticketNumberId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ticketNumberIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ticketIssueDate** | **[]string** | Tickets issue date. | 
 **ticketConsumptionDate** | **[]string** | Tickets comsumption date. | 
 **ticketRateCode** | **[]string** | The Rate Code to which tickets belong to. | 
 **ticketStatus** | **[]string** | The Status Code for outbound WS call. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Tickets**](Tickets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservation

> Reservation GetReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).AllowedActions(allowedActions).MarkAsRecentlyAccessed(markAsRecentlyAccessed).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowedActions := []string{"AllowedActions_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    markAsRecentlyAccessed := true // bool | Marks the reservation as recently accessed. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).AllowedActions(allowedActions).MarkAsRecentlyAccessed(markAsRecentlyAccessed).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservation`: Reservation
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowedActions** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **markAsRecentlyAccessed** | **bool** | Marks the reservation as recently accessed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationActivityLog

> ActivityLog GetReservationActivityLog(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIdsUserId(userByIdsUserId).UserForIdsUserId(userForIdsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch reservation activity log



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    parameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    fromDate := time.Now() // string | Search from date for the user activity log. (optional)
    toDate := time.Now() // string | Search to date for the user activity log. (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    userByIdsUserId := []int32{int32(123)} // []int32 |  (optional)
    userForIdsUserId := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationActivityLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIdsUserId(userByIdsUserId).UserForIdsUserId(userForIdsUserId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationActivityLog`: ActivityLog
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **fromDate** | **string** | Search from date for the user activity log. | 
 **toDate** | **string** | Search to date for the user activity log. | 
 **searchText** | **string** | Search text for the user activity log. | 
 **userByIdsUserId** | **[]int32** |  | 
 **userForIdsUserId** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityLog**](ActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationAttachments

> ReservationAttachments GetReservationAttachments(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WebRegistrationCard(webRegistrationCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation attachments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    webRegistrationCard := true // bool | Indicator to retrieve e-Signed registration card attachments. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationAttachments(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).WebRegistrationCard(webRegistrationCard).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationAttachments`: ReservationAttachments
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationAttachments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationAttachmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **webRegistrationCard** | **bool** | Indicator to retrieve e-Signed registration card attachments. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationAttachments**](ReservationAttachments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationByExtId

> Reservation GetReservationByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).AllowedActions(allowedActions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation by external ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation Id.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on external reservation Id.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowedActions := []string{"AllowedActions_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).AllowedActions(allowedActions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationByExtId`: Reservation
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation Id. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on external reservation Id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowedActions** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Reservation**](Reservation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationExcludedPreferences

> ReservationExcludedPreferences GetReservationExcludedPreferences(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreferenceType(preferenceType).PreferenceCode(preferenceCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Reservation excluded preferences



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    preferenceType := "preferenceType_example" // string | The preference type for which the excluded preference search will be performed. (optional)
    preferenceCode := "preferenceCode_example" // string | The preference code for which the excluded preference search will be performed. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationExcludedPreferences(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreferenceType(preferenceType).PreferenceCode(preferenceCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationExcludedPreferences``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationExcludedPreferences`: ReservationExcludedPreferences
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationExcludedPreferences`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationExcludedPreferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preferenceType** | **string** | The preference type for which the excluded preference search will be performed. | 
 **preferenceCode** | **string** | The preference code for which the excluded preference search will be performed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationExcludedPreferences**](ReservationExcludedPreferences.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationIndicators

> CheckReservationsDetails GetReservationIndicators(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).CheckInstructions(checkInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation indicators



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    checkInstructions := []string{"CheckInstructions_example"} // []string | Simple type that corresponds to check reservation instructions. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationIndicators(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationId(reservationId).CheckInstructions(checkInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationIndicators``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationIndicators`: CheckReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationIndicators`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationIndicatorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **checkInstructions** | **[]string** | Simple type that corresponds to check reservation instructions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CheckReservationsDetails**](CheckReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationLocators

> ReservationLocators GetReservationLocators(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Reservation Guest Locator



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationLocators(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationLocators``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationLocators`: ReservationLocators
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationLocators`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationLocatorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationLocators**](ReservationLocators.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationPolicies

> ReservationPolicies GetReservationPolicies(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchDepositPolicies(fetchDepositPolicies).FetchCancellationPolicies(fetchCancellationPolicies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation cancel and deposit policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchDepositPolicies := true // bool | A flag which instructs whether the deposit policies needs to be fetched. (optional)
    fetchCancellationPolicies := true // bool | A flag which instructs whether the cancel policies needs to be fetched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationPolicies(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchDepositPolicies(fetchDepositPolicies).FetchCancellationPolicies(fetchCancellationPolicies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationPolicies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationPolicies`: ReservationPolicies
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationPolicies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchDepositPolicies** | **bool** | A flag which instructs whether the deposit policies needs to be fetched. | 
 **fetchCancellationPolicies** | **bool** | A flag which instructs whether the cancel policies needs to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPolicies**](ReservationPolicies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationPreference

> ReservationPreference GetReservationPreference(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreferenceTypeCode(preferenceTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservation Preferences



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    preferenceTypeCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationPreference(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreferenceTypeCode(preferenceTypeCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationPreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationPreference`: ReservationPreference
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationPreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationPreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preferenceTypeCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPreference**](ReservationPreference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationUpsellInfo

> ReservationUpsellInfo GetReservationUpsellInfo(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get available Upsell offers



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationUpsellInfo(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationUpsellInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationUpsellInfo`: ReservationUpsellInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationUpsellInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationUpsellInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationUpsellInfo**](ReservationUpsellInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservations

> ReservationsDetails GetReservations(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).SourceNames(sourceNames).TravelAgentNames(travelAgentNames).GroupNames(groupNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowedReservationActions(allowedReservationActions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).ExcludeRoomFeatures(excludeRoomFeatures).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).CreatedOn(createdOn).StayOn(stayOn).ContactNames(contactNames).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations for a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    recentlyAccessed := true // bool | Mark this reservation as recently accessed. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | Represents Reservation search type Player Snapshot. (optional)
    hotelIds := []string{"Inner_example"} // []string | List of Hotels to support searches with multiple resorts for which traces are to be fetched. (optional)
    text := "text_example" // string | Free form text field for searching all reservation fields (optional)
    reservationIdList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    confirmationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    cancellationNumberList := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to ["External"])
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    departureEndDate := time.Now() // string | The ending value of the date range. (optional)
    departureStartDate := time.Now() // string | The starting value of the date range. (optional)
    expectedArrivalStartTime := time.Now() // string | The ending value of the time span. (optional)
    expectedArrivalEndTime := time.Now() // string | The starting value of the time span. (optional)
    expectedReturnEndTime := time.Now() // string | The ending value of the time span. (optional)
    expectedReturnStartTime := time.Now() // string | The starting value of the time span. (optional)
    companyNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    sourceNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    groupNames := []string{"Inner_example"} // []string | Attached profile name (optional)
    travelAgentIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    billingContactIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership ID criteria. (optional)
    membershipLevels := []string{"Inner_example"} // []string |  (optional)
    membershipTypes := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    anyVIPStatus := true // bool | VIP status of the customer. (optional)
    vipCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. (optional)
    paymentMethod := "paymentMethod_example" // string | Fetches the reservation having method of payment supplied here. (optional)
    discountApplied := true // bool | Fetches the reservation for which discount is applied (optional) (default to false)
    user := []string{"Inner_example"} // []string |  (optional)
    createdBy := "createdBy_example" // string | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. (optional)
    cancelledByList := []string{"Inner_example"} // []string | Fetches reservations cancelled by list of users. (optional)
    cancelledOn := time.Now() // string | Fetches the reservations which are cancelled on a specific date. (optional)
    ratePlanCodes := []string{"Inner_example"} // []string |  (optional)
    sourceCodes := []string{"Inner_example"} // []string |  (optional)
    marketCodes := []string{"Inner_example"} // []string |  (optional)
    excludeBlockReservations := true // bool | If true the search result will exclude the blocks reservations. (optional)
    blockName := "blockName_example" // string | The Name of the block that is attached to the reservation. (optional)
    blockIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockCodes := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    customReference := "customReference_example" // string | Custom reference (optional)
    recordLocator := "recordLocator_example" // string | GDS Record Locator for reservation. (optional)
    orderBy := []string{"OrderBy_example"} // []string |  (optional)
    sortOrder := []string{"SortOrder_example"} // []string |  (optional) (default to ["Asc"])
    roomAssignedOnly := true // bool | Indicator to query reservations which have a room number assigned. (optional)
    roomUnassignedOnly := true // bool | Indicator to query reservations which does not have a room number assigned. (optional)
    roomId := "roomId_example" // string | Room number of the reservation to search by. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    roomFeatures := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    roomSmokingPreference := "roomSmokingPreference_example" // string | Preference value for display purposes. (optional)
    roomFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    housekeepingRoomStatuses := []string{"HousekeepingRoomStatuses_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    roomClasses := []string{"Inner_example"} // []string |  (optional)
    roomRangeFrom := "roomRangeFrom_example" // string |  (optional)
    roomRangeTo := "roomRangeTo_example" // string |  (optional)
    communication := "communication_example" // string | Filter by the last digits of a reservation's phone number. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    allowedReservationActions := []string{"AllowedReservationActions_example"} // []string | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. (optional)
    allowPreRegistration := true // bool | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the 'true' or 'false' values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. (optional)
    hasDepositBalance := true // bool | Indicates that only reservations with deposit balance should be expected from the result. (optional)
    hasOpenBalance := true // bool | Indicates that only reservations with open balance should be expected from the result. (optional)
    hasOpenFolio := true // bool | Indicates that only reservations with open folio should be expected from the result. (optional)
    includeScheduledCheckOut := true // bool | Criteria that indicates whether to scheduled checkouts or not. (optional)
    linkedOnly := true // bool | Indicates that only linked reservations should be expected from the result. (optional)
    unlinkedOnly := true // bool | Indicates that only unlinked reservations should be expected from the result. (optional)
    actualArrivals := true // bool | Indicates if reservations which have already arrived on the Search Date is required. (optional)
    actualDepartures := true // bool | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. (optional)
    complimentaryReservations := true // bool | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    dayOfArrivalCancels := true // bool | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. (optional)
    dayUse := true // bool | Indicates if reservations which are day use reservation on the Search Date, is required. (optional)
    earlyDepartures := true // bool | Indicates if reservations which checked out early on the Search Date, is required. (optional)
    expectedArrivals := true // bool | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. (optional)
    expectedDepartures := true // bool | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. (optional)
    extendedStays := true // bool | Indicates if reservations which have extended their stays on the Search Date, is required. (optional)
    houseUseReservations := true // bool | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. (optional)
    stayovers := true // bool | Indicates if reservations which are StayOvers on the Search Date, is required. (optional)
    stayDate := time.Now() // string | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. (optional)
    roomRoutingId := "roomRoutingId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludePseudoRoomReservations := true // bool | Indicates to exclude Pseudo room reservations. (optional)
    excludeReservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    excludeVIPStatusCodes := []string{"Inner_example"} // []string | VIP status of the customer. (optional)
    excludeSpecials := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeFloorPreferences := []string{"Inner_example"} // []string | Preference value for display purposes. (optional)
    excludeAdvanceCheckedIn := true // bool | Indicates to exclude Advance Checked In Reservations from search result. (optional)
    excludeRoomFeatures := []string{"Inner_example"} // []string | Exclude the reservation(s) with provided room features from the search result. (optional)
    playerId := "playerId_example" // string | Player ID associated to the reservation. (optional)
    gamingBalanceFrom := float32(8.14) // float32 | Balance from. (optional)
    gamingBalanceTo := float32(8.14) // float32 | Balance to. (optional)
    compAccountingBalanceFrom := float32(8.14) // float32 | Comp Balance From (optional)
    compAccountingBalanceTo := float32(8.14) // float32 | Comp Balance To (optional)
    searchTypes := []string{"SearchTypes_example"} // []string | Represents Reservation search type Player Snapshot. (optional)
    reservationStatuses := []string{"ReservationStatuses_example"} // []string | Reservation status type for reservations search. (optional)
    transportationCodes := []string{"Inner_example"} // []string | Codes to be searched. (optional)
    roomReadyStatuses := []string{"RoomReadyStatuses_example"} // []string | Enum to denote the Status of Readiness messages sent to Guest Devices. (optional)
    checkoutMessageReceived := true // bool | Fetches the reservations for which Checkout Message is received. (optional)
    optedForCommunication := true // bool | Fetches the reservations for which reservation communication has been opted. (optional)
    createdOn := time.Now() // string | Fetches reservations which were created on the given property business date. (optional)
    stayOn := time.Now() // string | Fetches all reservations that are scheduled to stay over the selected date. (optional)
    contactNames := []string{"Inner_example"} // []string | Name of Contact Profile associated with Reservation. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservations(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RecentlyAccessed(recentlyAccessed).Limit(limit).Offset(offset).SearchType(searchType).HotelIds(hotelIds).Text(text).ReservationIdList(reservationIdList).ConfirmationNumberList(confirmationNumberList).CancellationNumberList(cancellationNumberList).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).DepartureEndDate(departureEndDate).DepartureStartDate(departureStartDate).ExpectedArrivalStartTime(expectedArrivalStartTime).ExpectedArrivalEndTime(expectedArrivalEndTime).ExpectedReturnEndTime(expectedReturnEndTime).ExpectedReturnStartTime(expectedReturnStartTime).CompanyNames(companyNames).SourceNames(sourceNames).TravelAgentNames(travelAgentNames).GroupNames(groupNames).TravelAgentIds(travelAgentIds).CompanyIds(companyIds).SourceIds(sourceIds).ContactIds(contactIds).GroupIds(groupIds).BillingContactIds(billingContactIds).ProfileIds(profileIds).MembershipCardNumber(membershipCardNumber).MembershipLevels(membershipLevels).MembershipTypes(membershipTypes).Surname(surname).GivenName(givenName).AnyVIPStatus(anyVIPStatus).VipCodes(vipCodes).GuaranteeCode(guaranteeCode).PaymentMethod(paymentMethod).DiscountApplied(discountApplied).User(user).CreatedBy(createdBy).CancelledByList(cancelledByList).CancelledOn(cancelledOn).RatePlanCodes(ratePlanCodes).SourceCodes(sourceCodes).MarketCodes(marketCodes).ExcludeBlockReservations(excludeBlockReservations).BlockName(blockName).BlockIds(blockIds).BlockCodes(blockCodes).CustomReference(customReference).RecordLocator(recordLocator).OrderBy(orderBy).SortOrder(sortOrder).RoomAssignedOnly(roomAssignedOnly).RoomUnassignedOnly(roomUnassignedOnly).RoomId(roomId).RoomType(roomType).RoomFeatures(roomFeatures).RoomSpecials(roomSpecials).RoomSmokingPreference(roomSmokingPreference).RoomFloorPreferences(roomFloorPreferences).HousekeepingRoomStatuses(housekeepingRoomStatuses).RoomClasses(roomClasses).RoomRangeFrom(roomRangeFrom).RoomRangeTo(roomRangeTo).Communication(communication).FetchInstructions(fetchInstructions).AllowedReservationActions(allowedReservationActions).AllowPreRegistration(allowPreRegistration).HasDepositBalance(hasDepositBalance).HasOpenBalance(hasOpenBalance).HasOpenFolio(hasOpenFolio).IncludeScheduledCheckOut(includeScheduledCheckOut).LinkedOnly(linkedOnly).UnlinkedOnly(unlinkedOnly).ActualArrivals(actualArrivals).ActualDepartures(actualDepartures).ComplimentaryReservations(complimentaryReservations).DayOfArrivalCancels(dayOfArrivalCancels).DayUse(dayUse).EarlyDepartures(earlyDepartures).ExpectedArrivals(expectedArrivals).ExpectedDepartures(expectedDepartures).ExtendedStays(extendedStays).HouseUseReservations(houseUseReservations).Stayovers(stayovers).StayDate(stayDate).RoomRoutingId(roomRoutingId).ExcludePseudoRoomReservations(excludePseudoRoomReservations).ExcludeReservationIds(excludeReservationIds).ExcludeVIPStatusCodes(excludeVIPStatusCodes).ExcludeSpecials(excludeSpecials).ExcludeFloorPreferences(excludeFloorPreferences).ExcludeAdvanceCheckedIn(excludeAdvanceCheckedIn).ExcludeRoomFeatures(excludeRoomFeatures).PlayerId(playerId).GamingBalanceFrom(gamingBalanceFrom).GamingBalanceTo(gamingBalanceTo).CompAccountingBalanceFrom(compAccountingBalanceFrom).CompAccountingBalanceTo(compAccountingBalanceTo).SearchTypes(searchTypes).ReservationStatuses(reservationStatuses).TransportationCodes(transportationCodes).RoomReadyStatuses(roomReadyStatuses).CheckoutMessageReceived(checkoutMessageReceived).OptedForCommunication(optedForCommunication).CreatedOn(createdOn).StayOn(stayOn).ContactNames(contactNames).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservations`: ReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservations`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **recentlyAccessed** | **bool** | Mark this reservation as recently accessed. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | Represents Reservation search type Player Snapshot. | 
 **hotelIds** | **[]string** | List of Hotels to support searches with multiple resorts for which traces are to be fetched. | 
 **text** | **string** | Free form text field for searching all reservation fields | 
 **reservationIdList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **confirmationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **cancellationNumberList** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to [&quot;External&quot;]]
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **departureEndDate** | **string** | The ending value of the date range. | 
 **departureStartDate** | **string** | The starting value of the date range. | 
 **expectedArrivalStartTime** | **string** | The ending value of the time span. | 
 **expectedArrivalEndTime** | **string** | The starting value of the time span. | 
 **expectedReturnEndTime** | **string** | The ending value of the time span. | 
 **expectedReturnStartTime** | **string** | The starting value of the time span. | 
 **companyNames** | **[]string** | Attached profile name | 
 **sourceNames** | **[]string** | Attached profile name | 
 **travelAgentNames** | **[]string** | Attached profile name | 
 **groupNames** | **[]string** | Attached profile name | 
 **travelAgentIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **billingContactIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipCardNumber** | **string** | Membership ID criteria. | 
 **membershipLevels** | **[]string** |  | 
 **membershipTypes** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **anyVIPStatus** | **bool** | VIP status of the customer. | 
 **vipCodes** | **[]string** | VIP status of the customer. | 
 **guaranteeCode** | **string** | Fetches the reservation having Guarantee Code(Reservation Type) supplied here. | 
 **paymentMethod** | **string** | Fetches the reservation having method of payment supplied here. | 
 **discountApplied** | **bool** | Fetches the reservation for which discount is applied | [default to false]
 **user** | **[]string** |  | 
 **createdBy** | **string** | Fetches reservation created by specified user. If both CreatedByUsers and CreatedBy is specified, CreatedByUsers will take precedence. | 
 **cancelledByList** | **[]string** | Fetches reservations cancelled by list of users. | 
 **cancelledOn** | **string** | Fetches the reservations which are cancelled on a specific date. | 
 **ratePlanCodes** | **[]string** |  | 
 **sourceCodes** | **[]string** |  | 
 **marketCodes** | **[]string** |  | 
 **excludeBlockReservations** | **bool** | If true the search result will exclude the blocks reservations. | 
 **blockName** | **string** | The Name of the block that is attached to the reservation. | 
 **blockIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockCodes** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **customReference** | **string** | Custom reference | 
 **recordLocator** | **string** | GDS Record Locator for reservation. | 
 **orderBy** | **[]string** |  | 
 **sortOrder** | **[]string** |  | [default to [&quot;Asc&quot;]]
 **roomAssignedOnly** | **bool** | Indicator to query reservations which have a room number assigned. | 
 **roomUnassignedOnly** | **bool** | Indicator to query reservations which does not have a room number assigned. | 
 **roomId** | **string** | Room number of the reservation to search by. | 
 **roomType** | **[]string** | Room Type. | 
 **roomFeatures** | **[]string** | A code representing a room feature. | 
 **roomSpecials** | **[]string** | Preference value for display purposes. | 
 **roomSmokingPreference** | **string** | Preference value for display purposes. | 
 **roomFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **housekeepingRoomStatuses** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **roomClasses** | **[]string** |  | 
 **roomRangeFrom** | **string** |  | 
 **roomRangeTo** | **string** |  | 
 **communication** | **string** | Filter by the last digits of a reservation&#39;s phone number. | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **allowedReservationActions** | **[]string** | Flag indicating whether the Enrollment is in progress or not for the Profile associated with this Reservation. | 
 **allowPreRegistration** | **bool** | Flag containing true or false value for reservation to be eligible for prior check in by guest using mobile device. Pass the &#39;true&#39; or &#39;false&#39; values when creating / modifying reservation to indicate whether a reservation is eligible for mobile check in yes / no. Upon fetch, the current state of the flag will show true or false. | 
 **hasDepositBalance** | **bool** | Indicates that only reservations with deposit balance should be expected from the result. | 
 **hasOpenBalance** | **bool** | Indicates that only reservations with open balance should be expected from the result. | 
 **hasOpenFolio** | **bool** | Indicates that only reservations with open folio should be expected from the result. | 
 **includeScheduledCheckOut** | **bool** | Criteria that indicates whether to scheduled checkouts or not. | 
 **linkedOnly** | **bool** | Indicates that only linked reservations should be expected from the result. | 
 **unlinkedOnly** | **bool** | Indicates that only unlinked reservations should be expected from the result. | 
 **actualArrivals** | **bool** | Indicates if reservations which have already arrived on the Search Date is required. | 
 **actualDepartures** | **bool** | Indicates if reservations which were expected to depart on the Search Date and have already checked, is required. | 
 **complimentaryReservations** | **bool** | Indicates if reservations where rate codes are marked as Complimentary Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **dayOfArrivalCancels** | **bool** | Indicates if reservations which have cancelled on the Search Date which is also the day of arrival is required. | 
 **dayUse** | **bool** | Indicates if reservations which are day use reservation on the Search Date, is required. | 
 **earlyDepartures** | **bool** | Indicates if reservations which checked out early on the Search Date, is required. | 
 **expectedArrivals** | **bool** | Indicates if reservations which are expected arrivals for the Search Date and who have not yet arrived, is required. | 
 **expectedDepartures** | **bool** | Indicates if reservations which are expected departures for the Search Date and who have not yet departed, is required. | 
 **extendedStays** | **bool** | Indicates if reservations which have extended their stays on the Search Date, is required. | 
 **houseUseReservations** | **bool** | Indicates if reservations where rate codes are marked as House Use Rates , is required. This flag should be used in conjunction with the Arrivals, Departures or StayOvers criteria. | 
 **stayovers** | **bool** | Indicates if reservations which are StayOvers on the Search Date, is required. | 
 **stayDate** | **string** | Date for searching the reservations. This is the date for which the search types are applicable. If date is not available, the business date will be used by default. | 
 **roomRoutingId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludePseudoRoomReservations** | **bool** | Indicates to exclude Pseudo room reservations. | 
 **excludeReservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **excludeVIPStatusCodes** | **[]string** | VIP status of the customer. | 
 **excludeSpecials** | **[]string** | Preference value for display purposes. | 
 **excludeFloorPreferences** | **[]string** | Preference value for display purposes. | 
 **excludeAdvanceCheckedIn** | **bool** | Indicates to exclude Advance Checked In Reservations from search result. | 
 **excludeRoomFeatures** | **[]string** | Exclude the reservation(s) with provided room features from the search result. | 
 **playerId** | **string** | Player ID associated to the reservation. | 
 **gamingBalanceFrom** | **float32** | Balance from. | 
 **gamingBalanceTo** | **float32** | Balance to. | 
 **compAccountingBalanceFrom** | **float32** | Comp Balance From | 
 **compAccountingBalanceTo** | **float32** | Comp Balance To | 
 **searchTypes** | **[]string** | Represents Reservation search type Player Snapshot. | 
 **reservationStatuses** | **[]string** | Reservation status type for reservations search. | 
 **transportationCodes** | **[]string** | Codes to be searched. | 
 **roomReadyStatuses** | **[]string** | Enum to denote the Status of Readiness messages sent to Guest Devices. | 
 **checkoutMessageReceived** | **bool** | Fetches the reservations for which Checkout Message is received. | 
 **optedForCommunication** | **bool** | Fetches the reservations for which reservation communication has been opted. | 
 **createdOn** | **string** | Fetches reservations which were created on the given property business date. | 
 **stayOn** | **string** | Fetches all reservations that are scheduled to stay over the selected date. | 
 **contactNames** | **[]string** | Name of Contact Profile associated with Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsDetails**](ReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsSummary

> ReservationsSummary GetReservationsSummary(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvancedCheckedIn(advancedCheckedIn).Limit(limit).Offset(offset).PreRegistered(preRegistered).ArrivalDate(arrivalDate).DepartureDate(departureDate).CreateDateTime(createDateTime).CancelledOn(cancelledOn).FolioClosedOn(folioClosedOn).LastName(lastName).CompanyId(companyId).GuestNameId(guestNameId).ReservationStatus(reservationStatus).ConfirmationNumber(confirmationNumber).ExternalReferenceNumber(externalReferenceNumber).CancellationNumber(cancellationNumber).MembershipNumber(membershipNumber).RegisteredCardNumber(registeredCardNumber).Balance(balance).RoomId(roomId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get brief summary for Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservations is being searched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    advancedCheckedIn := true // bool | This filter indicates if the reservation(s) has performed an Advance Check-In or not. Data fetched is for 30 days ahead of business date. (optional)
    limit := int32(56) // int32 | This filter indicates number of records the API has to fetch. (optional) (default to 200)
    offset := int32(56) // int32 | This filter is for the index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    preRegistered := true // bool | This filter indicates whether the reservation is Pre-Registered for Internet Check-In or not. Data fetched is for 30 days ahead of business date. (optional)
    arrivalDate := time.Now() // string | This filter is for the date of arrival of reservation. (optional)
    departureDate := time.Now() // string | This filter is for the date of departure of reservation. (optional)
    createDateTime := time.Now() // string | This filter is for the business date when reservation(s) was created in the system. (optional)
    cancelledOn := time.Now() // string | This filter is for the date when reservation(s) was cancelled. (optional)
    folioClosedOn := time.Now() // string | This filter is for the date when reservation(s) folio was closed. (optional)
    lastName := "lastName_example" // string | This filter looks up reservations with this last Name. Data fetched is for +-2 business date only when passed alone. (optional)
    companyId := float32(8.14) // float32 | This filter is ID of the company used for the reservation. Data fetched is for +-2 business date only when passed alone. (optional)
    guestNameId := float32(8.14) // float32 | This filter is ID of the guest. (optional)
    reservationStatus := "reservationStatus_example" // string | This filter is computed reservation status of the reservation(s). (optional)
    confirmationNumber := "confirmationNumber_example" // string | This filter is ID of confirmation for the reservation. (optional)
    externalReferenceNumber := "externalReferenceNumber_example" // string | This filter is ID of external reference for the reservation. (optional)
    cancellationNumber := "cancellationNumber_example" // string | This filter is ID of cancellation for the reservation. (optional)
    membershipNumber := "membershipNumber_example" // string | This filter is used for looking up reservations with this membership number. Last Name is required along with membership number to filter the data. (optional)
    registeredCardNumber := "registeredCardNumber_example" // string | This filter is unique identifier of the registration card number. Last Name is required along with registration card number to filter the data. (optional)
    balance := float32(8.14) // float32 | This filter checks reservations with balance amount greater than or equal to this amount. Departure date is required along with balance to filter the data. (optional)
    roomId := "roomId_example" // string | This filter is for room number. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationsSummary(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvancedCheckedIn(advancedCheckedIn).Limit(limit).Offset(offset).PreRegistered(preRegistered).ArrivalDate(arrivalDate).DepartureDate(departureDate).CreateDateTime(createDateTime).CancelledOn(cancelledOn).FolioClosedOn(folioClosedOn).LastName(lastName).CompanyId(companyId).GuestNameId(guestNameId).ReservationStatus(reservationStatus).ConfirmationNumber(confirmationNumber).ExternalReferenceNumber(externalReferenceNumber).CancellationNumber(cancellationNumber).MembershipNumber(membershipNumber).RegisteredCardNumber(registeredCardNumber).Balance(balance).RoomId(roomId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationsSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsSummary`: ReservationsSummary
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationsSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservations is being searched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **advancedCheckedIn** | **bool** | This filter indicates if the reservation(s) has performed an Advance Check-In or not. Data fetched is for 30 days ahead of business date. | 
 **limit** | **int32** | This filter indicates number of records the API has to fetch. | [default to 200]
 **offset** | **int32** | This filter is for the index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **preRegistered** | **bool** | This filter indicates whether the reservation is Pre-Registered for Internet Check-In or not. Data fetched is for 30 days ahead of business date. | 
 **arrivalDate** | **string** | This filter is for the date of arrival of reservation. | 
 **departureDate** | **string** | This filter is for the date of departure of reservation. | 
 **createDateTime** | **string** | This filter is for the business date when reservation(s) was created in the system. | 
 **cancelledOn** | **string** | This filter is for the date when reservation(s) was cancelled. | 
 **folioClosedOn** | **string** | This filter is for the date when reservation(s) folio was closed. | 
 **lastName** | **string** | This filter looks up reservations with this last Name. Data fetched is for +-2 business date only when passed alone. | 
 **companyId** | **float32** | This filter is ID of the company used for the reservation. Data fetched is for +-2 business date only when passed alone. | 
 **guestNameId** | **float32** | This filter is ID of the guest. | 
 **reservationStatus** | **string** | This filter is computed reservation status of the reservation(s). | 
 **confirmationNumber** | **string** | This filter is ID of confirmation for the reservation. | 
 **externalReferenceNumber** | **string** | This filter is ID of external reference for the reservation. | 
 **cancellationNumber** | **string** | This filter is ID of cancellation for the reservation. | 
 **membershipNumber** | **string** | This filter is used for looking up reservations with this membership number. Last Name is required along with membership number to filter the data. | 
 **registeredCardNumber** | **string** | This filter is unique identifier of the registration card number. Last Name is required along with registration card number to filter the data. | 
 **balance** | **float32** | This filter checks reservations with balance amount greater than or equal to this amount. Departure date is required along with balance to filter the data. | 
 **roomId** | **string** | This filter is for room number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsSummary**](ReservationsSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsToShareByProfileId

> FetchReservations GetReservationsToShareByProfileId(ctx, profileIdtoShare, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).SuperSearch(superSearch).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).MembershipId(membershipId).MembershipLevel(membershipLevel).MembershipType(membershipType).Surname(surname).GivenName(givenName).RoomId(roomId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations to share 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    profileIdtoShare := "profileIdtoShare_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    superSearch := "superSearch_example" // string | Free form text field for searching all reservation fields (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipId := "membershipId_example" // string | Membership ID criteria. (optional)
    membershipLevel := []string{"Inner_example"} // []string |  (optional)
    membershipType := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    roomId := "roomId_example" // string | Room number (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationsToShareByProfileId(context.Background(), profileIdtoShare, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).SuperSearch(superSearch).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).MembershipId(membershipId).MembershipLevel(membershipLevel).MembershipType(membershipType).Surname(surname).GivenName(givenName).RoomId(roomId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationsToShareByProfileId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsToShareByProfileId`: FetchReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationsToShareByProfileId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileIdtoShare** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsToShareByProfileIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **superSearch** | **string** | Free form text field for searching all reservation fields | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipId** | **string** | Membership ID criteria. | 
 **membershipLevel** | **[]string** |  | 
 **membershipType** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **roomId** | **string** | Room number | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchReservations**](FetchReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationsToShareByReservationId

> FetchReservations GetReservationsToShareByReservationId(ctx, reservationIdtoShare, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).SuperSearch(superSearch).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).MembershipId(membershipId).MembershipLevel(membershipLevel).MembershipType(membershipType).Surname(surname).GivenName(givenName).RoomId(roomId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reservations to share by Reservation id



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationIdtoShare := "reservationIdtoShare_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    superSearch := "superSearch_example" // string | Free form text field for searching all reservation fields (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipId := "membershipId_example" // string | Membership ID criteria. (optional)
    membershipLevel := []string{"Inner_example"} // []string |  (optional)
    membershipType := []string{"Inner_example"} // []string |  (optional)
    surname := "surname_example" // string | Family name, last name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names (optional)
    roomId := "roomId_example" // string | Room number (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservationsToShareByReservationId(context.Background(), reservationIdtoShare, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).SuperSearch(superSearch).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).MembershipId(membershipId).MembershipLevel(membershipLevel).MembershipType(membershipType).Surname(surname).GivenName(givenName).RoomId(roomId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservationsToShareByReservationId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationsToShareByReservationId`: FetchReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservationsToShareByReservationId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationIdtoShare** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationsToShareByReservationIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **superSearch** | **string** | Free form text field for searching all reservation fields | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipId** | **string** | Membership ID criteria. | 
 **membershipLevel** | **[]string** |  | 
 **membershipType** | **[]string** |  | 
 **surname** | **string** | Family name, last name. | 
 **givenName** | **string** | Given name, first name or names | 
 **roomId** | **string** | Room number | 
 **fetchInstructions** | **[]string** | Instruction to fetch whether the room was assigned/upgraded by AI. This will also include Reservation instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchReservations**](FetchReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservedInventoryItems

> InventoryItems GetReservedInventoryItems(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Reserved Inventory Items 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetReservedInventoryItems(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetReservedInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservedInventoryItems`: InventoryItems
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetReservedInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservedInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**InventoryItems**](InventoryItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoomCalendar

> RoomCalendar GetRoomCalendar(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvanceCheckedIn(advanceCheckedIn).AssignedRooms(assignedRooms).ComponentRooms(componentRooms).ConnectingRoomsOnly(connectingRoomsOnly).DueOut(dueOut).EndDate(endDate).IsSortDescending(isSortDescending).PageIndex(pageIndex).PartiallyAssignedRooms(partiallyAssignedRooms).RecordsPerPage(recordsPerPage).RoomConditions(roomConditions).OwnerRoomsOnly(ownerRoomsOnly).OwnerExclusiveOnly(ownerExclusiveOnly).SortingBy(sortingBy).IncludeRoomMoveHistory(includeRoomMoveHistory).IncludeComponentRoomBlockOutDates(includeComponentRoomBlockOutDates).StartDate(startDate).UnassignedRooms(unassignedRooms).RoomId(roomId).RoomType(roomType).RoomClass(roomClass).Floor(floor).RoomFeature(roomFeature).RoomStatus(roomStatus).SmokingPreference(smokingPreference).BedType(bedType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get the room calendar



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    advanceCheckedIn := true // bool | If true, then filter room results to rooms with Advance Checked In Reservations. (optional)
    assignedRooms := "assignedRooms_example" // string | If 'Y', then filter room results to rooms that are assigned to guest. (optional)
    componentRooms := "componentRooms_example" // string | If 'Y', then filter room results to component rooms. (optional)
    connectingRoomsOnly := "connectingRoomsOnly_example" // string | If 'Y', then filter room results to only connecting rooms. (optional)
    dueOut := "dueOut_example" // string | If 'Y', then filter room results to rooms with Due Out Reservations. (optional)
    endDate := time.Now() // string | The ending value of the date range. (optional)
    isSortDescending := true // bool | If true, then fetch result will be sorted in descending order. (optional)
    pageIndex := int32(56) // int32 | Page index to be retrieved. (optional)
    partiallyAssignedRooms := "partiallyAssignedRooms_example" // string | If 'Y', then filter room results to component rooms that have at least one of its rooms assigned to guest. (optional)
    recordsPerPage := int32(56) // int32 | Number of records per page. (optional)
    roomConditions := "roomConditions_example" // string | If 'Y', then filter room results to rooms with Room Conditions. (optional)
    ownerRoomsOnly := "ownerRoomsOnly_example" // string | If 'Y', then filter room results to rooms with rotation rooms only. It is supported only if OPERA Control Room Rotation is active. (optional)
    ownerExclusiveOnly := "ownerExclusiveOnly_example" // string | If 'Y', then filter room results to rooms that are exclusive to the owner. It is supported only if OPERA Control Room Rotation is active. (optional)
    sortingBy := "sortingBy_example" // string | A collection of supported sorting for room calendar. (optional)
    includeRoomMoveHistory := true // bool | Include Room Move History in result. (optional)
    includeComponentRoomBlockOutDates := true // bool | Include information about Component Room Reservation dates when fetching a component suite. (optional)
    startDate := time.Now() // string | The starting value of the date range. (optional)
    unassignedRooms := "unassignedRooms_example" // string | If 'Y', then filter room results to rooms that are not yet assigned to guest. (optional)
    roomId := []string{"Inner_example"} // []string | Room search filter. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type search filter. (optional)
    roomClass := []string{"Inner_example"} // []string | Room Class search filter. (optional)
    floor := []string{"Inner_example"} // []string | Floor search filter. (optional)
    roomFeature := []string{"Inner_example"} // []string | A code representing a room feature. (optional)
    roomStatus := []string{"RoomStatus_example"} // []string | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. (optional)
    smokingPreference := []string{"Inner_example"} // []string | Smoking Preference filter. (optional)
    bedType := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetRoomCalendar(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AdvanceCheckedIn(advanceCheckedIn).AssignedRooms(assignedRooms).ComponentRooms(componentRooms).ConnectingRoomsOnly(connectingRoomsOnly).DueOut(dueOut).EndDate(endDate).IsSortDescending(isSortDescending).PageIndex(pageIndex).PartiallyAssignedRooms(partiallyAssignedRooms).RecordsPerPage(recordsPerPage).RoomConditions(roomConditions).OwnerRoomsOnly(ownerRoomsOnly).OwnerExclusiveOnly(ownerExclusiveOnly).SortingBy(sortingBy).IncludeRoomMoveHistory(includeRoomMoveHistory).IncludeComponentRoomBlockOutDates(includeComponentRoomBlockOutDates).StartDate(startDate).UnassignedRooms(unassignedRooms).RoomId(roomId).RoomType(roomType).RoomClass(roomClass).Floor(floor).RoomFeature(roomFeature).RoomStatus(roomStatus).SmokingPreference(smokingPreference).BedType(bedType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetRoomCalendar``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomCalendar`: RoomCalendar
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetRoomCalendar`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomCalendarRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **advanceCheckedIn** | **bool** | If true, then filter room results to rooms with Advance Checked In Reservations. | 
 **assignedRooms** | **string** | If &#39;Y&#39;, then filter room results to rooms that are assigned to guest. | 
 **componentRooms** | **string** | If &#39;Y&#39;, then filter room results to component rooms. | 
 **connectingRoomsOnly** | **string** | If &#39;Y&#39;, then filter room results to only connecting rooms. | 
 **dueOut** | **string** | If &#39;Y&#39;, then filter room results to rooms with Due Out Reservations. | 
 **endDate** | **string** | The ending value of the date range. | 
 **isSortDescending** | **bool** | If true, then fetch result will be sorted in descending order. | 
 **pageIndex** | **int32** | Page index to be retrieved. | 
 **partiallyAssignedRooms** | **string** | If &#39;Y&#39;, then filter room results to component rooms that have at least one of its rooms assigned to guest. | 
 **recordsPerPage** | **int32** | Number of records per page. | 
 **roomConditions** | **string** | If &#39;Y&#39;, then filter room results to rooms with Room Conditions. | 
 **ownerRoomsOnly** | **string** | If &#39;Y&#39;, then filter room results to rooms with rotation rooms only. It is supported only if OPERA Control Room Rotation is active. | 
 **ownerExclusiveOnly** | **string** | If &#39;Y&#39;, then filter room results to rooms that are exclusive to the owner. It is supported only if OPERA Control Room Rotation is active. | 
 **sortingBy** | **string** | A collection of supported sorting for room calendar. | 
 **includeRoomMoveHistory** | **bool** | Include Room Move History in result. | 
 **includeComponentRoomBlockOutDates** | **bool** | Include information about Component Room Reservation dates when fetching a component suite. | 
 **startDate** | **string** | The starting value of the date range. | 
 **unassignedRooms** | **string** | If &#39;Y&#39;, then filter room results to rooms that are not yet assigned to guest. | 
 **roomId** | **[]string** | Room search filter. | 
 **roomType** | **[]string** | Room Type search filter. | 
 **roomClass** | **[]string** | Room Class search filter. | 
 **floor** | **[]string** | Floor search filter. | 
 **roomFeature** | **[]string** | A code representing a room feature. | 
 **roomStatus** | **[]string** | Simple type for room status instructions to be used in requests for fetching housekeeping rooms. Valid status values are Clean, Dirty, Pickup, Inspected, OutOfOrder, OutOfService. | 
 **smokingPreference** | **[]string** | Smoking Preference filter. | 
 **bedType** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomCalendar**](RoomCalendar.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRoutingInstructions

> RoutingInstructions GetRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeWindowRouting(includeWindowRouting).IncludeRoomRouting(includeRoomRouting).IncludeCompRouting(includeCompRouting).IncludeCompRoutingRequests(includeCompRoutingRequests).EffectiveOn(effectiveOn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeWindowRouting := true // bool | Include the window routing instructions to the response. (optional)
    includeRoomRouting := true // bool | Include the room routing instructions in the response. (optional)
    includeCompRouting := true // bool | Include the comp routing instructions in the response. (optional)
    includeCompRoutingRequests := true // bool | Include the comp routing requests in the response. (optional)
    effectiveOn := time.Now() // string | If date is included then the search result should only be valid for dates which includes this date. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeWindowRouting(includeWindowRouting).IncludeRoomRouting(includeRoomRouting).IncludeCompRouting(includeCompRouting).IncludeCompRoutingRequests(includeCompRoutingRequests).EffectiveOn(effectiveOn).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoutingInstructions`: RoutingInstructions
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeWindowRouting** | **bool** | Include the window routing instructions to the response. | 
 **includeRoomRouting** | **bool** | Include the room routing instructions in the response. | 
 **includeCompRouting** | **bool** | Include the comp routing instructions in the response. | 
 **includeCompRoutingRequests** | **bool** | Include the comp routing requests in the response. | 
 **effectiveOn** | **string** | If date is included then the search result should only be valid for dates which includes this date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoutingInstructions**](RoutingInstructions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetScript

> Script GetScript(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LanguageCode(languageCode).ScriptType(scriptType).ReservationId(reservationId).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a script



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    languageCode := "languageCode_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    scriptType := "scriptType_example" // string | Used for Character Strings, length 0 to 40. (optional)
    reservationId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetScript(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LanguageCode(languageCode).ScriptType(scriptType).ReservationId(reservationId).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetScript``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetScript`: Script
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetScript`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetScriptRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **languageCode** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **scriptType** | **string** | Used for Character Strings, length 0 to 40. | 
 **reservationId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Script**](Script.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSellMessageConfig

> FetchSellMessageConfig GetSellMessageConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Message(message).RoomType(roomType).RatePlanCode(ratePlanCode).BlockId(blockId).BlockIdType(blockIdType).BlockCode(blockCode).LanguageCode(languageCode).CroCode(croCode).DisplayDate(displayDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get sell messages 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    message := "message_example" // string | Sell Message text. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    ratePlanCode := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    blockCode := "blockCode_example" // string | Block Code to query for. (optional)
    languageCode := "languageCode_example" // string | Language code for the sell message. (optional)
    croCode := "croCode_example" // string | CRO code to query for. (optional)
    displayDate := time.Now() // string | The date on which the fetched sell message should be active. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetSellMessageConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Message(message).RoomType(roomType).RatePlanCode(ratePlanCode).BlockId(blockId).BlockIdType(blockIdType).BlockCode(blockCode).LanguageCode(languageCode).CroCode(croCode).DisplayDate(displayDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetSellMessageConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSellMessageConfig`: FetchSellMessageConfig
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetSellMessageConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSellMessageConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **message** | **string** | Sell Message text. | 
 **roomType** | **[]string** | Room Type. | 
 **ratePlanCode** | **[]string** | Rate Plan code. | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **blockCode** | **string** | Block Code to query for. | 
 **languageCode** | **string** | Language code for the sell message. | 
 **croCode** | **string** | CRO code to query for. | 
 **displayDate** | **string** | The date on which the fetched sell message should be active. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchSellMessageConfig**](FetchSellMessageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSellMessageConfigByChain

> FetchSellMessageConfig GetSellMessageConfigByChain(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Message(message).RoomType(roomType).RatePlanCode(ratePlanCode).BlockId(blockId).BlockIdType(blockIdType).BlockCode(blockCode).LanguageCode(languageCode).HotelIds(hotelIds).ChainId(chainId).CroCode(croCode).DisplayDate(displayDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get sell messages by chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    message := "message_example" // string | Sell Message text. (optional)
    roomType := []string{"Inner_example"} // []string | Room Type. (optional)
    ratePlanCode := []string{"Inner_example"} // []string | Rate Plan code. (optional)
    blockId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    blockCode := "blockCode_example" // string | Block Code to query for. (optional)
    languageCode := "languageCode_example" // string | Language code for the sell message. (optional)
    hotelIds := []string{"Inner_example"} // []string | Hotel code. (optional)
    chainId := "chainId_example" // string | Chain code to query for. (optional)
    croCode := "croCode_example" // string | CRO code to query for. (optional)
    displayDate := time.Now() // string | The date on which the fetched sell message should be active. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetSellMessageConfigByChain(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Message(message).RoomType(roomType).RatePlanCode(ratePlanCode).BlockId(blockId).BlockIdType(blockIdType).BlockCode(blockCode).LanguageCode(languageCode).HotelIds(hotelIds).ChainId(chainId).CroCode(croCode).DisplayDate(displayDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetSellMessageConfigByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSellMessageConfigByChain`: FetchSellMessageConfig
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetSellMessageConfigByChain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSellMessageConfigByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **message** | **string** | Sell Message text. | 
 **roomType** | **[]string** | Room Type. | 
 **ratePlanCode** | **[]string** | Rate Plan code. | 
 **blockId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **blockCode** | **string** | Block Code to query for. | 
 **languageCode** | **string** | Language code for the sell message. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **chainId** | **string** | Chain code to query for. | 
 **croCode** | **string** | CRO code to query for. | 
 **displayDate** | **string** | The date on which the fetched sell message should be active. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchSellMessageConfig**](FetchSellMessageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSellMessages

> SellMessages GetSellMessages(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CroCode(croCode).HotelId(hotelId).CriteriaId(criteriaId).CriteriaIdType(criteriaIdType).Limit(limit).RatePlanCode(ratePlanCode).RoomType(roomType).StickyFlagYn(stickyFlagYn).CriteriaType(criteriaType).StartDate(startDate).EndDate(endDate).Duration(duration).FetchInstructions(fetchInstructions).UsedInModule(usedInModule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get sell messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    croCode := "croCode_example" // string | This is the Central Reservation office code. (optional)
    hotelId := "hotelId_example" // string | This is the hotel code or resort. (optional)
    criteriaId := "criteriaId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    criteriaIdType := "criteriaIdType_example" // string | This is the language code. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    ratePlanCode := "ratePlanCode_example" // string | This represents the rate plan code of the room type. (optional)
    roomType := "roomType_example" // string | This represents the room type code. (optional)
    stickyFlagYn := "stickyFlagYn_example" // string | Flag which tells if this message is Sticky (Y/N). (optional)
    criteriaType := "criteriaType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch all Room Type sell messages configured. (optional)
    usedInModule := "usedInModule_example" // string | This represents the moduleType of the SellMessages to be fetched. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetSellMessages(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CroCode(croCode).HotelId(hotelId).CriteriaId(criteriaId).CriteriaIdType(criteriaIdType).Limit(limit).RatePlanCode(ratePlanCode).RoomType(roomType).StickyFlagYn(stickyFlagYn).CriteriaType(criteriaType).StartDate(startDate).EndDate(endDate).Duration(duration).FetchInstructions(fetchInstructions).UsedInModule(usedInModule).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetSellMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSellMessages`: SellMessages
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetSellMessages`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSellMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **croCode** | **string** | This is the Central Reservation office code. | 
 **hotelId** | **string** | This is the hotel code or resort. | 
 **criteriaId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **criteriaIdType** | **string** | This is the language code. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **ratePlanCode** | **string** | This represents the rate plan code of the room type. | 
 **roomType** | **string** | This represents the room type code. | 
 **stickyFlagYn** | **string** | Flag which tells if this message is Sticky (Y/N). | 
 **criteriaType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **fetchInstructions** | **[]string** | Instruction to fetch all Room Type sell messages configured. | 
 **usedInModule** | **string** | This represents the moduleType of the SellMessages to be fetched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SellMessages**](SellMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetShareReservations

> ShareReservations GetShareReservations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetShareReservations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetShareReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetShareReservations`: ShareReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetShareReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetShareReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ShareReservations**](ShareReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetShareReservationsByExtId

> ShareReservations GetShareReservationsByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on external reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetShareReservationsByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetShareReservationsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetShareReservationsByExtId`: ShareReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetShareReservationsByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on external reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetShareReservationsByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ShareReservations**](ShareReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTickets

> Tickets GetTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageCode(packageCode).RetrieveIssuedOnly(retrieveIssuedOnly).RetrieveNotIssuedOnly(retrieveNotIssuedOnly).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    packageCode := "packageCode_example" // string | Property where the tickets messages belongs to. (optional)
    retrieveIssuedOnly := true // bool | Flag that specified if only issued tickets will be retrieved. (optional)
    retrieveNotIssuedOnly := true // bool | Flag that specified if only not issued tickets will be retrieved. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PackageCode(packageCode).RetrieveIssuedOnly(retrieveIssuedOnly).RetrieveNotIssuedOnly(retrieveNotIssuedOnly).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTickets`: Tickets
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **packageCode** | **string** | Property where the tickets messages belongs to. | 
 **retrieveIssuedOnly** | **bool** | Flag that specified if only issued tickets will be retrieved. | 
 **retrieveNotIssuedOnly** | **bool** | Flag that specified if only not issued tickets will be retrieved. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Tickets**](Tickets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTicketsInquiry

> Tickets GetTicketsInquiry(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketId(ticketId).TicketIdType(ticketIdType).PackageCode(packageCode).ReservationProductId(reservationProductId).ReservationProductIdType(reservationProductIdType).TicketNumberId(ticketNumberId).TicketNumberIdType(ticketNumberIdType).TicketIssueDate(ticketIssueDate).TicketConsumptionDate(ticketConsumptionDate).TicketRateCode(ticketRateCode).TicketStatus(ticketStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Inquiry for Reservation tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ticketId := "ticketId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ticketIdType := "ticketIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    packageCode := []string{"Inner_example"} // []string | Package Code. (optional)
    reservationProductId := "reservationProductId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationProductIdType := "reservationProductIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ticketNumberId := "ticketNumberId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    ticketNumberIdType := "ticketNumberIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ticketIssueDate := []string{time.Now()} // []string | Tickets issue date. (optional)
    ticketConsumptionDate := []string{time.Now()} // []string | Tickets comsumption date. (optional)
    ticketRateCode := []string{"Inner_example"} // []string | The Rate Code to which tickets belong to. (optional)
    ticketStatus := []string{"Inner_example"} // []string | The Status Code for outbound WS call. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetTicketsInquiry(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketId(ticketId).TicketIdType(ticketIdType).PackageCode(packageCode).ReservationProductId(reservationProductId).ReservationProductIdType(reservationProductIdType).TicketNumberId(ticketNumberId).TicketNumberIdType(ticketNumberIdType).TicketIssueDate(ticketIssueDate).TicketConsumptionDate(ticketConsumptionDate).TicketRateCode(ticketRateCode).TicketStatus(ticketStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetTicketsInquiry``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTicketsInquiry`: Tickets
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetTicketsInquiry`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTicketsInquiryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ticketId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ticketIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **packageCode** | **[]string** | Package Code. | 
 **reservationProductId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationProductIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ticketNumberId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **ticketNumberIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ticketIssueDate** | **[]string** | Tickets issue date. | 
 **ticketConsumptionDate** | **[]string** | Tickets comsumption date. | 
 **ticketRateCode** | **[]string** | The Rate Code to which tickets belong to. | 
 **ticketStatus** | **[]string** | The Status Code for outbound WS call. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Tickets**](Tickets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTracesByReservation

> Traces GetTracesByReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get traces for a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetTracesByReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetTracesByReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTracesByReservation`: Traces
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetTracesByReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTracesByReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Traces**](Traces.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTracesByRoom

> Traces GetTracesByRoom(ctx, roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get traces for a Room



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    roomId := "roomId_example" // string | Room Id
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetTracesByRoom(context.Background(), roomId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetTracesByRoom``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTracesByRoom`: Traces
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetTracesByRoom`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomId** | **string** | Room Id | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTracesByRoomRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Traces**](Traces.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTransactionDiversions

> TransactionDiversions GetTransactionDiversions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionCodes(transactionDiversionCodes).IncludeDailyDetails(includeDailyDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Transaction Diversions 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiversionCodes := []string{"Inner_example"} // []string |  (optional)
    includeDailyDetails := true // bool | Flag to check if the the daily details are required to be fetched for a particular transaciton. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetTransactionDiversions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionCodes(transactionDiversionCodes).IncludeDailyDetails(includeDailyDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetTransactionDiversions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransactionDiversions`: TransactionDiversions
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetTransactionDiversions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransactionDiversionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiversionCodes** | **[]string** |  | 
 **includeDailyDetails** | **bool** | Flag to check if the the daily details are required to be fetched for a particular transaciton. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionDiversions**](TransactionDiversions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUpgradeEligibilityReservations

> UpgradeEligibilityReservations GetUpgradeEligibilityReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).MembershipType(membershipType).ExternalReferenceType(externalReferenceType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Reservations Eligible for an Upgrade



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    arrivalEndDate := time.Now() // string | The ending value of the date range. (optional)
    arrivalStartDate := time.Now() // string | The starting value of the date range. (optional)
    membershipType := "membershipType_example" // string | Membership Type. (optional)
    externalReferenceType := "externalReferenceType_example" // string | Type of the desired reservation external confirmation number. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.GetUpgradeEligibilityReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ArrivalEndDate(arrivalEndDate).ArrivalStartDate(arrivalStartDate).MembershipType(membershipType).ExternalReferenceType(externalReferenceType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.GetUpgradeEligibilityReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUpgradeEligibilityReservations`: UpgradeEligibilityReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.GetUpgradeEligibilityReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUpgradeEligibilityReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **arrivalEndDate** | **string** | The ending value of the date range. | 
 **arrivalStartDate** | **string** | The starting value of the date range. | 
 **membershipType** | **string** | Membership Type. | 
 **externalReferenceType** | **string** | Type of the desired reservation external confirmation number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**UpgradeEligibilityReservations**](UpgradeEligibilityReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MergeReservations

> MergeReservationsStatus MergeReservations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationsToMerge(reservationsToMerge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Merge multiple Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationsToMerge := *openapiclient.NewReservationsToMerge() // ReservationsToMerge | Request method to Merge reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.MergeReservations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationsToMerge(reservationsToMerge).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.MergeReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MergeReservations`: MergeReservationsStatus
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.MergeReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiMergeReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationsToMerge** | [**ReservationsToMerge**](ReservationsToMerge.md) | Request method to Merge reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MergeReservationsStatus**](MergeReservationsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBreakReservationLock

> Status PostBreakReservationLock(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLock(reservationLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Break Reservation lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationLock := *openapiclient.NewReservationLock() // ReservationLock | Operation for forcefully breaking a reservation lock This operation is subject to user permissions.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostBreakReservationLock(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLock(reservationLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostBreakReservationLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBreakReservationLock`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostBreakReservationLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBreakReservationLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationLock** | [**ReservationLock**](ReservationLock.md) | Operation for forcefully breaking a reservation lock This operation is subject to user permissions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostBulkReservationAlerts

> Status PostBulkReservationAlerts(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationAlerts(reservationAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Bulk Reservation Alerts



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationAlerts := *openapiclient.NewReservationAlerts() // ReservationAlerts | Request object to create or update multiple alerts information for multiple reservations in bulk.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostBulkReservationAlerts(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationAlerts(reservationAlerts).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostBulkReservationAlerts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostBulkReservationAlerts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostBulkReservationAlerts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostBulkReservationAlertsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationAlerts** | [**ReservationAlerts**](ReservationAlerts.md) | Request object to create or update multiple alerts information for multiple reservations in bulk. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCall

> RegisterCall PostCall(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisterCall(registerCall).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Register calls



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    registerCall := *openapiclient.NewRegisterCall() // RegisterCall | Request to register call. Either creates a new call or updates an existing call.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCall(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisterCall(registerCall).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCall``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCall`: RegisterCall
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCall`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCallRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **registerCall** | [**RegisterCall**](RegisterCall.md) | Request to register call. Either creates a new call or updates an existing call. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RegisterCall**](RegisterCall.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancelReservation

> CancelReservationDetails PostCancelReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel Reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancelReservation := *openapiclient.NewPostCancelReservationRequest() // PostCancelReservationRequest | Request object for canceling reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCancelReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCancelReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelReservation`: CancelReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCancelReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancelReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancelReservation** | [**PostCancelReservationRequest**](PostCancelReservationRequest.md) | Request object for canceling reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancelReservationDetails**](CancelReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancelReservationByExtId

> CancelReservationDetails PostCancelReservationByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel Reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancelReservation := *openapiclient.NewCancelReservation() // CancelReservation | Request object for canceling reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCancelReservationByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCancelReservationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelReservationByExtId`: CancelReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCancelReservationByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancelReservationByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancelReservation** | [**CancelReservation**](CancelReservation.md) | Request object for canceling reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancelReservationDetails**](CancelReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancelReservations

> Status PostCancelReservations(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservations(cancelReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel Reservations 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancelReservations := *openapiclient.NewCancelReservations() // CancelReservations | Request to submit batch cancel reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCancelReservations(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservations(cancelReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCancelReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelReservations`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCancelReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancelReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancelReservations** | [**CancelReservations**](CancelReservations.md) | Request to submit batch cancel reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancelShareReservation

> CancelReservationDetails PostCancelShareReservation(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Cancel reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cancelReservation := *openapiclient.NewCancelReservation() // CancelReservation | Request object for canceling reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCancelShareReservation(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CancelReservation(cancelReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCancelShareReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancelShareReservation`: CancelReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCancelShareReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancelShareReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cancelReservation** | [**CancelReservation**](CancelReservation.md) | Request object for canceling reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CancelReservationDetails**](CancelReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCancellationPolicy

> Status PostCancellationPolicy(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationCancellationPolicyCriteria(reservationCancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Cancellation policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationCancellationPolicyCriteria := *openapiclient.NewReservationCancellationPolicyCriteria() // ReservationCancellationPolicyCriteria | Request object that holds the details of Cancellation Policy to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCancellationPolicy(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationCancellationPolicyCriteria(reservationCancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCancellationPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationCancellationPolicyCriteria** | [**ReservationCancellationPolicyCriteria**](ReservationCancellationPolicyCriteria.md) | Request object that holds the details of Cancellation Policy to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCombineShareReservations

> CombineShareReservationsDetails PostCombineShareReservations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Combine Share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    combineShareReservations := *openapiclient.NewCombineShareReservations() // CombineShareReservations | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCombineShareReservations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCombineShareReservations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCombineShareReservations`: CombineShareReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCombineShareReservations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCombineShareReservationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **combineShareReservations** | [**CombineShareReservations**](CombineShareReservations.md) | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CombineShareReservationsDetails**](CombineShareReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostCombineShareReservationsByExtId

> CombineShareReservationsDetails PostCombineShareReservationsByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Combine Share Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    combineShareReservations := *openapiclient.NewCombineShareReservations() // CombineShareReservations | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostCombineShareReservationsByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareReservations(combineShareReservations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostCombineShareReservationsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCombineShareReservationsByExtId`: CombineShareReservationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostCombineShareReservationsByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCombineShareReservationsByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **combineShareReservations** | [**CombineShareReservations**](CombineShareReservations.md) | Request to combine sharer reservations. This request requires a Reservation Name Id(Joining to) and a Joining Reservation Id | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CombineShareReservationsDetails**](CombineShareReservationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostConfirmationLetters

> ConfirmationLettersDetails PostConfirmationLetters(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfirmationLetters(confirmationLetters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create the confirmation letters



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    confirmationLetters := *openapiclient.NewConfirmationLetters() // ConfirmationLetters | Request object to create a confirmation letter.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostConfirmationLetters(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ConfirmationLetters(confirmationLetters).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostConfirmationLetters``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostConfirmationLetters`: ConfirmationLettersDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostConfirmationLetters`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostConfirmationLettersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **confirmationLetters** | [**ConfirmationLetters**](ConfirmationLetters.md) | Request object to create a confirmation letter. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ConfirmationLettersDetails**](ConfirmationLettersDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostDepositPolicy

> Status PostDepositPolicy(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDepositPolicyCriteria(reservationDepositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationDepositPolicyCriteria := *openapiclient.NewReservationDepositPolicyCriteria() // ReservationDepositPolicyCriteria | Request object that holds the details of hotel level Deposit Policy to be created.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostDepositPolicy(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDepositPolicyCriteria(reservationDepositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationDepositPolicyCriteria** | [**ReservationDepositPolicyCriteria**](ReservationDepositPolicyCriteria.md) | Request object that holds the details of hotel level Deposit Policy to be created. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostECoupons

> Status PostECoupons(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponsInfo(eCouponsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation ECoupon



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCouponsInfo := *openapiclient.NewECouponsInfo() // ECouponsInfo | Request object for creating new eCoupons.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostECoupons(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponsInfo(eCouponsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostECoupons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostECoupons`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostECoupons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostECouponsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCouponsInfo** | [**ECouponsInfo**](ECouponsInfo.md) | Request object for creating new eCoupons. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostGuestMessages

> GuestMessagesDetails PostGuestMessages(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateGuestMessages(createGuestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create guest messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createGuestMessages := *openapiclient.NewCreateGuestMessages() // CreateGuestMessages | Request object for creating a new guest message.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostGuestMessages(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateGuestMessages(createGuestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuestMessages`: GuestMessagesDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createGuestMessages** | [**CreateGuestMessages**](CreateGuestMessages.md) | Request object for creating a new guest message. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GuestMessagesDetails**](GuestMessagesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostIssueTickets

> Status PostIssueTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketsInfo(ticketsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Issue Reservation tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ticketsInfo := *openapiclient.NewTicketsInfo() // TicketsInfo | Common tickets request base type.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostIssueTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketsInfo(ticketsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostIssueTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostIssueTickets`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostIssueTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostIssueTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ticketsInfo** | [**TicketsInfo**](TicketsInfo.md) | Common tickets request base type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostMasterAccount

> Status PostMasterAccount(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MasterAccount(masterAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Master Account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    masterAccount := *openapiclient.NewMasterAccount() // MasterAccount | Request for CreateMasterAccount operation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostMasterAccount(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MasterAccount(masterAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostMasterAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMasterAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostMasterAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMasterAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **masterAccount** | [**MasterAccount**](MasterAccount.md) | Request for CreateMasterAccount operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPaymentMethods

> Status PostPaymentMethods(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPaymentMethods(reservationPaymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a payment method 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationPaymentMethods := *openapiclient.NewReservationPaymentMethods() // ReservationPaymentMethods | Request to create payment methods.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostPaymentMethods(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPaymentMethods(reservationPaymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPaymentMethods`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostPaymentMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationPaymentMethods** | [**ReservationPaymentMethods**](ReservationPaymentMethods.md) | Request to create payment methods. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostPreCheckInReservation

> Status PostPreCheckInReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInReservation(preCheckInReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Pre-Checkin a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    preCheckInReservation := *openapiclient.NewPostPreCheckInReservationRequest() // PostPreCheckInReservationRequest | Request to pre-register a reservation eligible for pre-registration and change arrival details.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostPreCheckInReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PreCheckInReservation(preCheckInReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostPreCheckInReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPreCheckInReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostPreCheckInReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPreCheckInReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preCheckInReservation** | [**PostPreCheckInReservationRequest**](PostPreCheckInReservationRequest.md) | Request to pre-register a reservation eligible for pre-registration and change arrival details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservation

> CreateReservationType PostReservation(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createReservation := *openapiclient.NewPostReservationRequest() // PostReservationRequest | Request object to create reservations. Includes instructions for information which needs to be returned.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservation(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservation`: CreateReservationType
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createReservation** | [**PostReservationRequest**](PostReservationRequest.md) | Request object to create reservations. Includes instructions for information which needs to be returned. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CreateReservationType**](CreateReservationType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationByBlock

> Status PostReservationByBlock(ctx, blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation for a Block



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    blockId := "blockId_example" // string | Unique OPERA internal ID for the block.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is created.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createReservation := *openapiclient.NewPostReservationByBlockRequest() // PostReservationByBlockRequest | Request object to create reservations. Includes instructions for information which needs to be returned.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationByBlock(context.Background(), blockId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateReservation(createReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationByBlock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationByBlock`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationByBlock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**blockId** | **string** | Unique OPERA internal ID for the block. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is created. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationByBlockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createReservation** | [**PostReservationByBlockRequest**](PostReservationByBlockRequest.md) | Request object to create reservations. Includes instructions for information which needs to be returned. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationCertificate

> Status PostReservationCertificate(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttachCertificate(attachCertificate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Attach Certificate



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    attachCertificate := *openapiclient.NewAttachCertificate() // AttachCertificate | Request to attach certificate to the Reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationCertificate(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AttachCertificate(attachCertificate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationCertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationCertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationCertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **attachCertificate** | [**AttachCertificate**](AttachCertificate.md) | Request to attach certificate to the Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationCopy

> Status PostReservationCopy(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyReservation(copyReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    copyReservation := *openapiclient.NewCopyReservation() // CopyReservation | Request for copying a reservation's information as a template for a new reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationCopy(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CopyReservation(copyReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationCopy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationCopy`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationCopy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationCopyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **copyReservation** | [**CopyReservation**](CopyReservation.md) | Request for copying a reservation&#39;s information as a template for a new reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationLinks

> Status PostReservationLinks(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Link Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkReservationsCriteria := *openapiclient.NewPostReservationLinksRequest() // PostReservationLinksRequest | Request to link a list of reservations with another existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationLinks(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationLinks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationLinks`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationLinks`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationLinksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkReservationsCriteria** | [**PostReservationLinksRequest**](PostReservationLinksRequest.md) | Request to link a list of reservations with another existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationLinksByChain

> Status PostReservationLinksByChain(ctx, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Link Reservations By Chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkReservationsCriteria := *openapiclient.NewLinkReservationsCriteria() // LinkReservationsCriteria | Request to link a list of reservations with another existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationLinksByChain(context.Background(), reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationLinksByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationLinksByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationLinksByChain`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationLinksByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkReservationsCriteria** | [**LinkReservationsCriteria**](LinkReservationsCriteria.md) | Request to link a list of reservations with another existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationLinksByExtId

> Status PostReservationLinksByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Link Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkReservationsCriteria := *openapiclient.NewLinkReservationsCriteria() // LinkReservationsCriteria | Request to link a list of reservations with another existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationLinksByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkReservationsCriteria(linkReservationsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationLinksByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationLinksByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationLinksByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationLinksByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkReservationsCriteria** | [**LinkReservationsCriteria**](LinkReservationsCriteria.md) | Request to link a list of reservations with another existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationLocators

> ReservationLocatorsDetails PostReservationLocators(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLocatorsDetailsInfo(reservationLocatorsDetailsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Reservation Guest Locator



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationLocatorsDetailsInfo := *openapiclient.NewReservationLocatorsDetailsInfo() // ReservationLocatorsDetailsInfo | Request object for creating new Notes for the hotels
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationLocators(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLocatorsDetailsInfo(reservationLocatorsDetailsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationLocators``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationLocators`: ReservationLocatorsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationLocators`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationLocatorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationLocatorsDetailsInfo** | [**ReservationLocatorsDetailsInfo**](ReservationLocatorsDetailsInfo.md) | Request object for creating new Notes for the hotels | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationLocatorsDetails**](ReservationLocatorsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationMembership

> Status PostReservationMembership(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMembership(reservationMembership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a Reservation membership



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationMembership := *openapiclient.NewReservationMembership() // ReservationMembership | Method to create a reservation membership on an existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationMembership(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationMembership(reservationMembership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationMembership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationMembership`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationMembership`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationMembership** | [**ReservationMembership**](ReservationMembership.md) | Method to create a reservation membership on an existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationPackage

> Status PostReservationPackage(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPackagesInfo(reservationPackagesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add a package to a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationPackagesInfo := *openapiclient.NewReservationPackagesInfo() // ReservationPackagesInfo | Request method to attach a package to an existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationPackage(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPackagesInfo(reservationPackagesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationPackage`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationPackagesInfo** | [**ReservationPackagesInfo**](ReservationPackagesInfo.md) | Request method to attach a package to an existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReservationPreference

> Status PostReservationPreference(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPreferenceInfo(reservationPreferenceInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add a preference to a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationPreferenceInfo := *openapiclient.NewReservationPreferenceInfo() // ReservationPreferenceInfo | Method to create a reservation preference on an existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReservationPreference(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPreferenceInfo(reservationPreferenceInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReservationPreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReservationPreference`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReservationPreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReservationPreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationPreferenceInfo** | [**ReservationPreferenceInfo**](ReservationPreferenceInfo.md) | Method to create a reservation preference on an existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReserveInventoryItems

> Status PostReserveInventoryItems(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReserveInventoryItems(reserveInventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reserve Reservation inventory items



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reserveInventoryItems := *openapiclient.NewReserveInventoryItems() // ReserveInventoryItems | Request object to reserve inventory Items for a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReserveInventoryItems(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReserveInventoryItems(reserveInventoryItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReserveInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReserveInventoryItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReserveInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReserveInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reserveInventoryItems** | [**ReserveInventoryItems**](ReserveInventoryItems.md) | Request object to reserve inventory Items for a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostReverseDepositPolicy

> Status PostReverseDepositPolicy(ctx, policyId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReverseDepositPolicy(reverseDepositPolicy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reverse a deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    policyId := "policyId_example" // string | Policy ID
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reverseDepositPolicy := *openapiclient.NewReverseDepositPolicy() // ReverseDepositPolicy | Request type to reverse deposit policy of a reservation.(This is applicable only when advance deposit handling is set to '17') ReverseDepositPolicy operation will reverse the policy by creating a new request with same opposite amount.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostReverseDepositPolicy(context.Background(), policyId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReverseDepositPolicy(reverseDepositPolicy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostReverseDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostReverseDepositPolicy`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostReverseDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**policyId** | **string** | Policy ID | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostReverseDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reverseDepositPolicy** | [**ReverseDepositPolicy**](ReverseDepositPolicy.md) | Request type to reverse deposit policy of a reservation.(This is applicable only when advance deposit handling is set to &#39;17&#39;) ReverseDepositPolicy operation will reverse the policy by creating a new request with same opposite amount. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoutingInstructions

> Status PostRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationRoutingCriteria(reservationRoutingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create routing instructions for a reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationRoutingCriteria := *openapiclient.NewReservationRoutingCriteria() // ReservationRoutingCriteria | Request to create a routing instruction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationRoutingCriteria(reservationRoutingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationRoutingCriteria** | [**ReservationRoutingCriteria**](ReservationRoutingCriteria.md) | Request to create a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoutingInstructionsByExtId

> Status PostRoutingInstructionsByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationRoutingCriteria(reservationRoutingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationRoutingCriteria := *openapiclient.NewReservationRoutingCriteria() // ReservationRoutingCriteria | Request to create a routing instruction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostRoutingInstructionsByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationRoutingCriteria(reservationRoutingCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostRoutingInstructionsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoutingInstructionsByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostRoutingInstructionsByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoutingInstructionsByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationRoutingCriteria** | [**ReservationRoutingCriteria**](ReservationRoutingCriteria.md) | Request to create a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSellMessageConfig

> Status PostSellMessageConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create sell message



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sellMessageConfig := *openapiclient.NewSellMessageConfig() // SellMessageConfig | This is the request message type for creating sell messages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostSellMessageConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostSellMessageConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSellMessageConfig`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostSellMessageConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSellMessageConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sellMessageConfig** | [**SellMessageConfig**](SellMessageConfig.md) | This is the request message type for creating sell messages. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSellMessageConfigByChain

> Status PostSellMessageConfigByChain(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create sell message by chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sellMessageConfig := *openapiclient.NewSellMessageConfig() // SellMessageConfig | This is the request message type for creating sell messages.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostSellMessageConfigByChain(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostSellMessageConfigByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSellMessageConfigByChain`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostSellMessageConfigByChain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostSellMessageConfigByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sellMessageConfig** | [**SellMessageConfig**](SellMessageConfig.md) | This is the request message type for creating sell messages. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTickets

> Status PostTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketsInfo(ticketsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ticketsInfo := *openapiclient.NewTicketsInfo() // TicketsInfo | Common tickets request base type.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketsInfo(ticketsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTickets`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ticketsInfo** | [**TicketsInfo**](TicketsInfo.md) | Common tickets request base type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTransactionDiversions

> Status PostTransactionDiversions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionsInfo(transactionDiversionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Transaction Diversions 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiversionsInfo := *openapiclient.NewTransactionDiversionsInfo() // TransactionDiversionsInfo | Request to create transaction diversion rules for a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostTransactionDiversions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionsInfo(transactionDiversionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostTransactionDiversions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTransactionDiversions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostTransactionDiversions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTransactionDiversionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiversionsInfo** | [**TransactionDiversionsInfo**](TransactionDiversionsInfo.md) | Request to create transaction diversion rules for a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostTurnawayReservation

> Status PostTurnawayReservation(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisterTurnaway(registerTurnaway).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Register Turnaway



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    registerTurnaway := *openapiclient.NewRegisterTurnaway() // RegisterTurnaway | Request to register turn away reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostTurnawayReservation(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisterTurnaway(registerTurnaway).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostTurnawayReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTurnawayReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostTurnawayReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTurnawayReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **registerTurnaway** | [**RegisterTurnaway**](RegisterTurnaway.md) | Request to register turn away reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostUpsellReservation

> Status PostUpsellReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellReservation(upsellReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Upsell a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    upsellReservation := *openapiclient.NewPostUpsellReservationRequest() // PostUpsellReservationRequest | Request to upsell a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PostUpsellReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).UpsellReservation(upsellReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PostUpsellReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostUpsellReservation`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PostUpsellReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostUpsellReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **upsellReservation** | [**PostUpsellReservationRequest**](PostUpsellReservationRequest.md) | Request to upsell a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAcquireReservationLock

> ReservationLockDetails PutAcquireReservationLock(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLock(reservationLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Acquire Reservation Lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationLock := *openapiclient.NewReservationLock() // ReservationLock | Operation for requesting a lock on a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutAcquireReservationLock(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationLock(reservationLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutAcquireReservationLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAcquireReservationLock`: ReservationLockDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutAcquireReservationLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAcquireReservationLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationLock** | [**ReservationLock**](ReservationLock.md) | Operation for requesting a lock on a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationLockDetails**](ReservationLockDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutBreakShareValidations

> BreakShareValidationsDetails PutBreakShareValidations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BreakShareValidations(breakShareValidations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate before breaking a share Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    breakShareValidations := *openapiclient.NewBreakShareValidations() // BreakShareValidations | Request for Break Share operation validations. This request should be done prior to the actual Break Share operation request. Based on the validations returned from this request the appropriate parameters can be returned in the actual break share request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutBreakShareValidations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).BreakShareValidations(breakShareValidations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutBreakShareValidations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutBreakShareValidations`: BreakShareValidationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutBreakShareValidations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutBreakShareValidationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **breakShareValidations** | [**BreakShareValidations**](BreakShareValidations.md) | Request for Break Share operation validations. This request should be done prior to the actual Break Share operation request. Based on the validations returned from this request the appropriate parameters can be returned in the actual break share request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**BreakShareValidationsDetails**](BreakShareValidationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCancellationPolicy

> ReservationCancellationPolicyCriteria PutCancellationPolicy(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationCancellationPolicyCriteria(reservationCancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Cancellation policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationCancellationPolicyCriteria := *openapiclient.NewReservationCancellationPolicyCriteria() // ReservationCancellationPolicyCriteria | Request object that holds the details of Cancellation Policy to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutCancellationPolicy(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationCancellationPolicyCriteria(reservationCancellationPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutCancellationPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCancellationPolicy`: ReservationCancellationPolicyCriteria
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutCancellationPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCancellationPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationCancellationPolicyCriteria** | [**ReservationCancellationPolicyCriteria**](ReservationCancellationPolicyCriteria.md) | Request object that holds the details of Cancellation Policy to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationCancellationPolicyCriteria**](ReservationCancellationPolicyCriteria.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutCombineShareValidations

> CombineShareValidationsDetails PutCombineShareValidations(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareValidations(combineShareValidations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Combine Share Validations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    combineShareValidations := *openapiclient.NewCombineShareValidations() // CombineShareValidations | Request to validate a combine share operation. This would be done prior to the actual Combine Share operation. Based on the validations returned from this request, the appropriate values can be returned to the Combine Share operation request.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutCombineShareValidations(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CombineShareValidations(combineShareValidations).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutCombineShareValidations``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCombineShareValidations`: CombineShareValidationsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutCombineShareValidations`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCombineShareValidationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **combineShareValidations** | [**CombineShareValidations**](CombineShareValidations.md) | Request to validate a combine share operation. This would be done prior to the actual Combine Share operation. Based on the validations returned from this request, the appropriate values can be returned to the Combine Share operation request. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CombineShareValidationsDetails**](CombineShareValidationsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutComputeCancellationPolicies

> ComputeCancellationPoliciesDetails PutComputeCancellationPolicies(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ComputeCancellationPolicies(computeCancellationPolicies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Compute the cancellation policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    computeCancellationPolicies := *openapiclient.NewComputeCancellationPolicies() // ComputeCancellationPolicies | Operation to fetch the details for cancellation rules, applicable to a reservation. Based on the criteria the rule information can be retrieved for all cancellation rules or for a particular rule.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutComputeCancellationPolicies(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ComputeCancellationPolicies(computeCancellationPolicies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutComputeCancellationPolicies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutComputeCancellationPolicies`: ComputeCancellationPoliciesDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutComputeCancellationPolicies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutComputeCancellationPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **computeCancellationPolicies** | [**ComputeCancellationPolicies**](ComputeCancellationPolicies.md) | Operation to fetch the details for cancellation rules, applicable to a reservation. Based on the criteria the rule information can be retrieved for all cancellation rules or for a particular rule. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ComputeCancellationPoliciesDetails**](ComputeCancellationPoliciesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutComputeDepositPolicies

> ComputeDepositPoliciesDetails PutComputeDepositPolicies(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ComputeDepositPolicies(computeDepositPolicies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Computes the deposit policies



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    computeDepositPolicies := *openapiclient.NewComputeDepositPolicies() // ComputeDepositPolicies | Operation to fetch the details for deposit rules, applicable to a reservation. Based on the criteria the rule information can be retrieved for all deposit rules or for a particular rule.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutComputeDepositPolicies(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ComputeDepositPolicies(computeDepositPolicies).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutComputeDepositPolicies``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutComputeDepositPolicies`: ComputeDepositPoliciesDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutComputeDepositPolicies`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutComputeDepositPoliciesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **computeDepositPolicies** | [**ComputeDepositPolicies**](ComputeDepositPolicies.md) | Operation to fetch the details for deposit rules, applicable to a reservation. Based on the criteria the rule information can be retrieved for all deposit rules or for a particular rule. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ComputeDepositPoliciesDetails**](ComputeDepositPoliciesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutDepositPolicy

> ChangeDepositPolicyDetails PutDepositPolicy(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDepositPolicyCriteria(reservationDepositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change deposit policy



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationDepositPolicyCriteria := *openapiclient.NewReservationDepositPolicyCriteria() // ReservationDepositPolicyCriteria | Request object that holds the details of hotel level Deposit Policy to be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutDepositPolicy(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDepositPolicyCriteria(reservationDepositPolicyCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutDepositPolicy``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutDepositPolicy`: ChangeDepositPolicyDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutDepositPolicy`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutDepositPolicyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationDepositPolicyCriteria** | [**ReservationDepositPolicyCriteria**](ReservationDepositPolicyCriteria.md) | Request object that holds the details of hotel level Deposit Policy to be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeDepositPolicyDetails**](ChangeDepositPolicyDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutECoupons

> ECoupons PutECoupons(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponsInfo(eCouponsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Reservation Ecoupon



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCouponsInfo := *openapiclient.NewECouponsInfo() // ECouponsInfo | Request object for changing the existing eCoupons attached to Reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutECoupons(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECouponsInfo(eCouponsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutECoupons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutECoupons`: ECoupons
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutECoupons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutECouponsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCouponsInfo** | [**ECouponsInfo**](ECouponsInfo.md) | Request object for changing the existing eCoupons attached to Reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ECoupons**](ECoupons.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutGuestMessages

> ChangeGuestMessages PutGuestMessages(ctx, guestMessageId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeGuestMessages(changeGuestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change guest Message  



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    guestMessageId := "guestMessageId_example" // string | Guest Message Id
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeGuestMessages := *openapiclient.NewChangeGuestMessages() // ChangeGuestMessages | Request object for modifying an existing guest message.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutGuestMessages(context.Background(), guestMessageId, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeGuestMessages(changeGuestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutGuestMessages`: ChangeGuestMessages
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestMessageId** | **string** | Guest Message Id | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeGuestMessages** | [**ChangeGuestMessages**](ChangeGuestMessages.md) | Request object for modifying an existing guest message. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeGuestMessages**](ChangeGuestMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutMasterAccount

> MasterAccountSummary PutMasterAccount(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MasterAccount(masterAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Master Account



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    masterAccount := *openapiclient.NewMasterAccount() // MasterAccount | Request for ChangeMasterAccount operation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutMasterAccount(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MasterAccount(masterAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutMasterAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutMasterAccount`: MasterAccountSummary
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutMasterAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutMasterAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **masterAccount** | [**MasterAccount**](MasterAccount.md) | Request for ChangeMasterAccount operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MasterAccountSummary**](MasterAccountSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutPaymentMethods

> ReservationPaymentMethods PutPaymentMethods(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPaymentMethods(reservationPaymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a payment method 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationPaymentMethods := *openapiclient.NewReservationPaymentMethods() // ReservationPaymentMethods | Method to update a reservation's payment methods.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutPaymentMethods(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPaymentMethods(reservationPaymentMethods).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutPaymentMethods``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutPaymentMethods`: ReservationPaymentMethods
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutPaymentMethods`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutPaymentMethodsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationPaymentMethods** | [**ReservationPaymentMethods**](ReservationPaymentMethods.md) | Method to update a reservation&#39;s payment methods. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPaymentMethods**](ReservationPaymentMethods.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReinstateReservation

> ReinstateReservationDetails PutReinstateReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateReservation(reinstateReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reinstate a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reinstateReservation := *openapiclient.NewReinstateReservation() // ReinstateReservation | Overriding the validation check will log the supposed errors in the warnings log if they would fail.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReinstateReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateReservation(reinstateReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReinstateReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReinstateReservation`: ReinstateReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReinstateReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReinstateReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reinstateReservation** | [**ReinstateReservation**](ReinstateReservation.md) | Overriding the validation check will log the supposed errors in the warnings log if they would fail. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReinstateReservationDetails**](ReinstateReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReinstateReservationByExtId

> ReinstateReservationDetails PutReinstateReservationByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateReservation(reinstateReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Reinstate a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reinstateReservation := *openapiclient.NewReinstateReservation() // ReinstateReservation | Overriding the validation check will log the supposed errors in the warnings log if they would fail.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReinstateReservationByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReinstateReservation(reinstateReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReinstateReservationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReinstateReservationByExtId`: ReinstateReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReinstateReservationByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReinstateReservationByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reinstateReservation** | [**ReinstateReservation**](ReinstateReservation.md) | Overriding the validation check will log the supposed errors in the warnings log if they would fail. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReinstateReservationDetails**](ReinstateReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservation

> ChangeReservationDetails PutReservation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeReservation(changeReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeReservation := *openapiclient.NewPutReservationRequest() // PutReservationRequest | Request method to change a reservations information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeReservation(changeReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservation`: ChangeReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeReservation** | [**PutReservationRequest**](PutReservationRequest.md) | Request method to change a reservations information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeReservationDetails**](ChangeReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationByExtId

> ChangeReservationDetails PutReservationByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeReservation(changeReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Reservation by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeReservation := *openapiclient.NewChangeReservation() // ChangeReservation | Request method to change a reservations information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeReservation(changeReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationByExtId`: ChangeReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeReservation** | [**ChangeReservation**](ChangeReservation.md) | Request method to change a reservations information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeReservationDetails**](ChangeReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationDailyRateDetailValidation

> ReservationDailyRateDetailDetails PutReservationDailyRateDetailValidation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDailyRateDetail(reservationDailyRateDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate daily rate details change



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationDailyRateDetail := *openapiclient.NewReservationDailyRateDetail() // ReservationDailyRateDetail | Request for validating Daily Rate Details modifications.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationDailyRateDetailValidation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDailyRateDetail(reservationDailyRateDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationDailyRateDetailValidation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationDailyRateDetailValidation`: ReservationDailyRateDetailDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationDailyRateDetailValidation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationDailyRateDetailValidationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationDailyRateDetail** | [**ReservationDailyRateDetail**](ReservationDailyRateDetail.md) | Request for validating Daily Rate Details modifications. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationDailyRateDetailDetails**](ReservationDailyRateDetailDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationHeaderValidation

> ReservationDailyRateDetailDetails PutReservationHeaderValidation(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDailyRateDetail(reservationDailyRateDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Reservation header change



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationDailyRateDetail := *openapiclient.NewReservationDailyRateDetail() // ReservationDailyRateDetail | Request for validating Reservation Header modifications.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationHeaderValidation(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationDailyRateDetail(reservationDailyRateDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationHeaderValidation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationHeaderValidation`: ReservationDailyRateDetailDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationHeaderValidation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationHeaderValidationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationDailyRateDetail** | [**ReservationDailyRateDetail**](ReservationDailyRateDetail.md) | Request for validating Reservation Header modifications. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationDailyRateDetailDetails**](ReservationDailyRateDetailDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationHotelMove

> MoveReservationHotelDetails PutReservationHotelMove(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MoveReservationHotel(moveReservationHotel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Move the Reservation 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    moveReservationHotel := *openapiclient.NewMoveReservationHotel() // MoveReservationHotel | Request for moving a reservation and its valid sharers to a different hotel.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationHotelMove(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MoveReservationHotel(moveReservationHotel).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationHotelMove``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationHotelMove`: MoveReservationHotelDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationHotelMove`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationHotelMoveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **moveReservationHotel** | [**MoveReservationHotel**](MoveReservationHotel.md) | Request for moving a reservation and its valid sharers to a different hotel. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MoveReservationHotelDetails**](MoveReservationHotelDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationLock

> ExtendReservationLockDetails PutReservationLock(ctx, lockHandle, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExtendReservationLock(extendReservationLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Extend Reservation Lock



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    lockHandle := "lockHandle_example" // string | Lock handle of the lock to be extended.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    extendReservationLock := *openapiclient.NewExtendReservationLock() // ExtendReservationLock | Operation for extending the lifetime of a lock on a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationLock(context.Background(), lockHandle, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExtendReservationLock(extendReservationLock).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationLock``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationLock`: ExtendReservationLockDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationLock`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**lockHandle** | **string** | Lock handle of the lock to be extended. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationLockRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **extendReservationLock** | [**ExtendReservationLock**](ExtendReservationLock.md) | Operation for extending the lifetime of a lock on a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExtendReservationLockDetails**](ExtendReservationLockDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationPackage

> ReservationPackagesInfo PutReservationPackage(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPackagesInfo(reservationPackagesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a package on a Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationPackagesInfo := *openapiclient.NewReservationPackagesInfo() // ReservationPackagesInfo | Method to change/modify a reservation package on an existing reservation. The main information required are the Package Code, Resort, RateCode(if applicable), Original Begin Date(if applicable) and Original End Date(if applicable). These are the criteria by which the package will be identified in order to be modified/changed. The elements that can be changed are the Quantity, Excluded Quantity, Unit Price and Unit Allowance if existing. For RateCode packages, the begin date and end date cannot be changed. For non-RateCode packages, the begin date or end date can be changed.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationPackage(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPackagesInfo(reservationPackagesInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationPackage``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationPackage`: ReservationPackagesInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationPackage`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationPackageRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationPackagesInfo** | [**ReservationPackagesInfo**](ReservationPackagesInfo.md) | Method to change/modify a reservation package on an existing reservation. The main information required are the Package Code, Resort, RateCode(if applicable), Original Begin Date(if applicable) and Original End Date(if applicable). These are the criteria by which the package will be identified in order to be modified/changed. The elements that can be changed are the Quantity, Excluded Quantity, Unit Price and Unit Allowance if existing. For RateCode packages, the begin date and end date cannot be changed. For non-RateCode packages, the begin date or end date can be changed. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPackagesInfo**](ReservationPackagesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationPreference

> ReservationPreferenceDetails PutReservationPreference(ctx, preferenceCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPreferenceInfo(reservationPreferenceInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a Reservation Preference



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    preferenceCode := "preferenceCode_example" // string | Preference Code
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationPreferenceInfo := *openapiclient.NewReservationPreferenceInfo() // ReservationPreferenceInfo | Method to change a reservation preference on an existing reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationPreference(context.Background(), preferenceCode, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationPreferenceInfo(reservationPreferenceInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationPreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationPreference`: ReservationPreferenceDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationPreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**preferenceCode** | **string** | Preference Code | 
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationPreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationPreferenceInfo** | [**ReservationPreferenceInfo**](ReservationPreferenceInfo.md) | Method to change a reservation preference on an existing reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationPreferenceDetails**](ReservationPreferenceDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservationsUpgradeEligibility

> ReservationsUpgradeEligibilityDetails PutReservationsUpgradeEligibility(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationsUpgradeEligibility(reservationsUpgradeEligibility).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set Upgrade Eligibility for Reservations



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationsUpgradeEligibility := *openapiclient.NewReservationsUpgradeEligibility() // ReservationsUpgradeEligibility | Request object containing a list of reservation name ids, hotel code and eligibility flag.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservationsUpgradeEligibility(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationsUpgradeEligibility(reservationsUpgradeEligibility).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservationsUpgradeEligibility``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservationsUpgradeEligibility`: ReservationsUpgradeEligibilityDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservationsUpgradeEligibility`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservationsUpgradeEligibilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationsUpgradeEligibility** | [**ReservationsUpgradeEligibility**](ReservationsUpgradeEligibility.md) | Request object containing a list of reservation name ids, hotel code and eligibility flag. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationsUpgradeEligibilityDetails**](ReservationsUpgradeEligibilityDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutReservedInventoryItems

> ReservedInventoryItemsInfo PutReservedInventoryItems(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservedInventoryItemsInfo(reservedInventoryItemsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change reserved Inventory Items 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservedInventoryItemsInfo := *openapiclient.NewReservedInventoryItemsInfo() // ReservedInventoryItemsInfo | Request object to change the reserved inventory Items for a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutReservedInventoryItems(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservedInventoryItemsInfo(reservedInventoryItemsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutReservedInventoryItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutReservedInventoryItems`: ReservedInventoryItemsInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutReservedInventoryItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutReservedInventoryItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservedInventoryItemsInfo** | [**ReservedInventoryItemsInfo**](ReservedInventoryItemsInfo.md) | Request object to change the reserved inventory Items for a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservedInventoryItemsInfo**](ReservedInventoryItemsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutResvGuestMessages

> ChangeResvGuestMessages PutResvGuestMessages(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeResvGuestMessages(changeResvGuestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Reservation Guest Messages



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeResvGuestMessages := *openapiclient.NewChangeResvGuestMessages() // ChangeResvGuestMessages | Request object for updating the Guest Messages for a Reservation Workspace.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutResvGuestMessages(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeResvGuestMessages(changeResvGuestMessages).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutResvGuestMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutResvGuestMessages`: ChangeResvGuestMessages
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutResvGuestMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutResvGuestMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeResvGuestMessages** | [**ChangeResvGuestMessages**](ChangeResvGuestMessages.md) | Request object for updating the Guest Messages for a Reservation Workspace. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeResvGuestMessages**](ChangeResvGuestMessages.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoutingInstructions

> Status PutRoutingInstructions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsInfo(routingInstructionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructionsInfo := *openapiclient.NewRoutingInstructionsInfo() // RoutingInstructionsInfo | Request when changing a routing instruction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutRoutingInstructions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsInfo(routingInstructionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutRoutingInstructions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoutingInstructions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutRoutingInstructions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoutingInstructionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructionsInfo** | [**RoutingInstructionsInfo**](RoutingInstructionsInfo.md) | Request when changing a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutRoutingInstructionsByExtId

> Status PutRoutingInstructionsByExtId(ctx, reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsInfo(routingInstructionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change routing instructions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationExternalId := "reservationExternalId_example" // string | External reservation ID.
    externalSystemCode := "externalSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    routingInstructionsInfo := *openapiclient.NewRoutingInstructionsInfo() // RoutingInstructionsInfo | Request when changing a routing instruction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutRoutingInstructionsByExtId(context.Background(), reservationExternalId, externalSystemCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoutingInstructionsInfo(routingInstructionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutRoutingInstructionsByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutRoutingInstructionsByExtId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutRoutingInstructionsByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationExternalId** | **string** | External reservation ID. | 
**externalSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutRoutingInstructionsByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **routingInstructionsInfo** | [**RoutingInstructionsInfo**](RoutingInstructionsInfo.md) | Request when changing a routing instruction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutSellMessageConfig

> SellMessageConfig PutSellMessageConfig(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change sell message



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sellMessageConfig := *openapiclient.NewSellMessageConfig() // SellMessageConfig | This is the request message type for sell message update operation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutSellMessageConfig(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutSellMessageConfig``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSellMessageConfig`: SellMessageConfig
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutSellMessageConfig`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSellMessageConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sellMessageConfig** | [**SellMessageConfig**](SellMessageConfig.md) | This is the request message type for sell message update operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SellMessageConfig**](SellMessageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutSellMessageConfigByChain

> SellMessageConfig PutSellMessageConfigByChain(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change sell message by chain



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    sellMessageConfig := *openapiclient.NewSellMessageConfig() // SellMessageConfig | This is the request message type for sell message update operation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutSellMessageConfigByChain(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SellMessageConfig(sellMessageConfig).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutSellMessageConfigByChain``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSellMessageConfigByChain`: SellMessageConfig
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutSellMessageConfigByChain`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutSellMessageConfigByChainRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **sellMessageConfig** | [**SellMessageConfig**](SellMessageConfig.md) | This is the request message type for sell message update operation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SellMessageConfig**](SellMessageConfig.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutShareRateAmount

> ShareReservations PutShareRateAmount(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeShareRateAmount(changeShareRateAmount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Share Rate Amount



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeShareRateAmount := *openapiclient.NewChangeShareRateAmount() // ChangeShareRateAmount | Request to change the share amount for a sharer reservation. The amount change type can be Full, Entire or Split
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutShareRateAmount(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeShareRateAmount(changeShareRateAmount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutShareRateAmount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutShareRateAmount`: ShareReservations
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutShareRateAmount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutShareRateAmountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeShareRateAmount** | [**ChangeShareRateAmount**](ChangeShareRateAmount.md) | Request to change the share amount for a sharer reservation. The amount change type can be Full, Entire or Split | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ShareReservations**](ShareReservations.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutSharingGuests

> ChangeSharingGuests PutSharingGuests(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeSharingGuests(changeSharingGuests).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Sharing Guests



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeSharingGuests := *openapiclient.NewChangeSharingGuests() // ChangeSharingGuests | Request to change Sharing Reservations Guest Counts(adults or children) information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutSharingGuests(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeSharingGuests(changeSharingGuests).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutSharingGuests``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSharingGuests`: ChangeSharingGuests
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutSharingGuests`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSharingGuestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeSharingGuests** | [**ChangeSharingGuests**](ChangeSharingGuests.md) | Request to change Sharing Reservations Guest Counts(adults or children) information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeSharingGuests**](ChangeSharingGuests.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutSplitMultiRoomReservation

> SplitMultiRoomReservationDetails PutSplitMultiRoomReservation(ctx, reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SplitMultiRoomReservation(splitMultiRoomReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Split multi room Reservation



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    splitMultiRoomReservation := *openapiclient.NewSplitMultiRoomReservation() // SplitMultiRoomReservation | Request to split multi-room reservation into separate reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutSplitMultiRoomReservation(context.Background(), reservationId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).SplitMultiRoomReservation(splitMultiRoomReservation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutSplitMultiRoomReservation``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSplitMultiRoomReservation`: SplitMultiRoomReservationDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutSplitMultiRoomReservation`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSplitMultiRoomReservationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **splitMultiRoomReservation** | [**SplitMultiRoomReservation**](SplitMultiRoomReservation.md) | Request to split multi-room reservation into separate reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SplitMultiRoomReservationDetails**](SplitMultiRoomReservationDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTickets

> Tickets PutTickets(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketsInfo(ticketsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change tickets



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ticketsInfo := *openapiclient.NewTicketsInfo() // TicketsInfo | Common tickets request base type.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutTickets(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketsInfo(ticketsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutTickets``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTickets`: Tickets
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutTickets`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTicketsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ticketsInfo** | [**TicketsInfo**](TicketsInfo.md) | Common tickets request base type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Tickets**](Tickets.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTransactionDiversions

> TransactionDiversionsDetails PutTransactionDiversions(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionsInfo(transactionDiversionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Transaction Diversions 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    transactionDiversionsInfo := *openapiclient.NewTransactionDiversionsInfo() // TransactionDiversionsInfo | Request to modify transaction diversion rules attached to a reservation.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutTransactionDiversions(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TransactionDiversionsInfo(transactionDiversionsInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutTransactionDiversions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTransactionDiversions`: TransactionDiversionsDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutTransactionDiversions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTransactionDiversionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **transactionDiversionsInfo** | [**TransactionDiversionsInfo**](TransactionDiversionsInfo.md) | Request to modify transaction diversion rules attached to a reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TransactionDiversionsDetails**](TransactionDiversionsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutValidateOverlappingStay

> OverlappingStayDetails PutValidateOverlappingStay(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverlappingStay(overlappingStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check overlapping stay



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    reservationId := "reservationId_example" // string | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overlappingStay := *openapiclient.NewOverlappingStay() // OverlappingStay | Request to check for overlapping stays of reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutValidateOverlappingStay(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverlappingStay(overlappingStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutValidateOverlappingStay``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutValidateOverlappingStay`: OverlappingStayDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutValidateOverlappingStay`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA reservation ID which is used to find reservation from OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutValidateOverlappingStayRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overlappingStay** | [**OverlappingStay**](OverlappingStay.md) | Request to check for overlapping stays of reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OverlappingStayDetails**](OverlappingStayDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutValidateOverlappingStays

> OverlappingStayDetails PutValidateOverlappingStays(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverlappingStay(overlappingStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check overlapping stay



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    overlappingStay := *openapiclient.NewOverlappingStay() // OverlappingStay | Request to check for overlapping stays of reservations.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutValidateOverlappingStays(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OverlappingStay(overlappingStay).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutValidateOverlappingStays``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutValidateOverlappingStays`: OverlappingStayDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutValidateOverlappingStays`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutValidateOverlappingStaysRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **overlappingStay** | [**OverlappingStay**](OverlappingStay.md) | Request to check for overlapping stays of reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OverlappingStayDetails**](OverlappingStayDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutValidateReservationChanges

> ValidateReservationChangesDetails PutValidateReservationChanges(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateReservationChanges(validateReservationChanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate Reservation Change



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    validateReservationChanges := *openapiclient.NewPutValidateReservationChangesRequest() // PutValidateReservationChangesRequest | Request to validate reservation changes.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.PutValidateReservationChanges(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateReservationChanges(validateReservationChanges).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.PutValidateReservationChanges``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutValidateReservationChanges`: ValidateReservationChangesDetails
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.PutValidateReservationChanges`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutValidateReservationChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **validateReservationChanges** | [**PutValidateReservationChangesRequest**](PutValidateReservationChangesRequest.md) | Request to validate reservation changes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidateReservationChangesDetails**](ValidateReservationChangesDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateRateInfo

> RateInfo ValidateRateInfo(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateRateInfo(validateRateInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate rate information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/rsv"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where reservation is searched based on reservation ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    validateRateInfo := *openapiclient.NewValidateRateInfo() // ValidateRateInfo | Retrieve either the reservation's rate information or make a quotation for a rate information. SummaryInfo attribute specifies if the item being requested is of detail or summary type.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ReservationAPI.ValidateRateInfo(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidateRateInfo(validateRateInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ReservationAPI.ValidateRateInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateRateInfo`: RateInfo
    fmt.Fprintf(os.Stdout, "Response from `ReservationAPI.ValidateRateInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where reservation is searched based on reservation ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateRateInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **validateRateInfo** | [**ValidateRateInfo**](ValidateRateInfo.md) | Retrieve either the reservation&#39;s rate information or make a quotation for a rate information. SummaryInfo attribute specifies if the item being requested is of detail or summary type. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RateInfo**](RateInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

